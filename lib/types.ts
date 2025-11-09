// Type definitions for the application

export interface Guest {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Rsvp {
  id: string;
  guestId: string;
  attendance: "hadir" | "tidak_hadir" | "belum_pasti";
  guestCount: number;
  createdAt: Date;
  updatedAt: Date;
  guest: Guest;
}

export interface Message {
  id: string;
  guestId: string;
  name: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  guest: Guest;
}

export interface Config {
  id: string;
  key: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}
