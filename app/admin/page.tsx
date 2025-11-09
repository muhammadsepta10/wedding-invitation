'use client';

import { useState, useEffect } from 'react';
import { FaUsers, FaEnvelope, FaCheckCircle, FaTimesCircle, FaQuestionCircle } from 'react-icons/fa';

interface Rsvp {
  id: string;
  attendance: string;
  guestCount: number;
  createdAt: string;
  guest: {
    name: string;
    phone: string | null;
    email: string | null;
  };
}

interface Message {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [rsvps, setRsvps] = useState<Rsvp[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'rsvp' | 'messages'>('rsvp');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [rsvpResponse, messagesResponse] = await Promise.all([
        fetch('/api/rsvp'),
        fetch('/api/messages'),
      ]);

      const rsvpData = await rsvpResponse.json();
      const messagesData = await messagesResponse.json();

      setRsvps(rsvpData);
      setMessages(messagesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getAttendanceStats = () => {
    const hadir = rsvps.filter((r) => r.attendance === 'hadir').length;
    const tidakHadir = rsvps.filter((r) => r.attendance === 'tidak_hadir').length;
    const belumPasti = rsvps.filter((r) => r.attendance === 'belum_pasti').length;
    const totalGuests = rsvps
      .filter((r) => r.attendance === 'hadir')
      .reduce((sum, r) => sum + r.guestCount, 0);

    return { hadir, tidakHadir, belumPasti, totalGuests };
  };

  const stats = getAttendanceStats();

  const getAttendanceIcon = (attendance: string) => {
    switch (attendance) {
      case 'hadir':
        return <FaCheckCircle className="text-green-500" />;
      case 'tidak_hadir':
        return <FaTimesCircle className="text-red-500" />;
      case 'belum_pasti':
        return <FaQuestionCircle className="text-yellow-500" />;
      default:
        return null;
    }
  };

  const getAttendanceLabel = (attendance: string) => {
    switch (attendance) {
      case 'hadir':
        return 'Hadir';
      case 'tidak_hadir':
        return 'Tidak Hadir';
      case 'belum_pasti':
        return 'Belum Pasti';
      default:
        return attendance;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Kelola undangan pernikahan Chay & Rafif</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Total RSVP</h3>
              <FaUsers className="text-primary text-2xl" />
            </div>
            <div className="text-3xl font-bold text-gray-800">{rsvps.length}</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Hadir</h3>
              <FaCheckCircle className="text-green-500 text-2xl" />
            </div>
            <div className="text-3xl font-bold text-green-600">{stats.hadir}</div>
            <div className="text-sm text-gray-500 mt-1">
              {stats.totalGuests} tamu
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Tidak Hadir</h3>
              <FaTimesCircle className="text-red-500 text-2xl" />
            </div>
            <div className="text-3xl font-bold text-red-600">{stats.tidakHadir}</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 text-sm font-medium">Total Ucapan</h3>
              <FaEnvelope className="text-primary text-2xl" />
            </div>
            <div className="text-3xl font-bold text-gray-800">{messages.length}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-4">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('rsvp')}
              className={`flex-1 px-6 py-4 font-semibold ${
                activeTab === 'rsvp'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Daftar RSVP ({rsvps.length})
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`flex-1 px-6 py-4 font-semibold ${
                activeTab === 'messages'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Ucapan ({messages.length})
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {activeTab === 'rsvp' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kontak
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jumlah Tamu
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rsvps.map((rsvp) => (
                    <tr key={rsvp.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {rsvp.guest.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {rsvp.guest.phone && <div>{rsvp.guest.phone}</div>}
                          {rsvp.guest.email && <div>{rsvp.guest.email}</div>}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {getAttendanceIcon(rsvp.attendance)}
                          <span className="text-sm">
                            {getAttendanceLabel(rsvp.attendance)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {rsvp.guestCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(rsvp.createdAt).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {rsvps.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  Belum ada RSVP
                </div>
              )}
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-primary">
                        {message.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(message.createdAt).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                    <div className="text-gray-700">{message.message}</div>
                  </div>
                ))}
              </div>
              {messages.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  Belum ada ucapan
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

