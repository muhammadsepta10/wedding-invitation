import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const rsvps = await prisma.rsvp.findMany({
      include: {
        guest: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(rsvps);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch RSVPs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, attendance, guestCount } = body;

    // Find or create guest
    let guest = await prisma.guest.findFirst({
      where: {
        name: name,
      },
    });

    if (!guest) {
      guest = await prisma.guest.create({
        data: {
          name,
          phone,
          email,
        },
      });
    }

    // Create or update RSVP
    const existingRsvp = await prisma.rsvp.findFirst({
      where: {
        guestId: guest.id,
      },
    });

    let rsvp;
    if (existingRsvp) {
      rsvp = await prisma.rsvp.update({
        where: {
          id: existingRsvp.id,
        },
        data: {
          attendance,
          guestCount: parseInt(guestCount) || 1,
        },
      });
    } else {
      rsvp = await prisma.rsvp.create({
        data: {
          guestId: guest.id,
          attendance,
          guestCount: parseInt(guestCount) || 1,
        },
      });
    }

    return NextResponse.json({ success: true, rsvp });
  } catch (error) {
    console.error("Error creating RSVP:", error);
    return NextResponse.json(
      { error: "Failed to create RSVP" },
      { status: 500 }
    );
  }
}
