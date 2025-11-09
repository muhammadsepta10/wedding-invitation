import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      include: {
        guest: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

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
        },
      });
    }

    // Create message
    const newMessage = await prisma.message.create({
      data: {
        guestId: guest.id,
        name,
        message,
      },
      include: {
        guest: true,
      },
    });

    return NextResponse.json({ success: true, message: newMessage });
  } catch (error) {
    console.error("Error creating message:", error);
    return NextResponse.json(
      { error: "Failed to create message" },
      { status: 500 }
    );
  }
}
