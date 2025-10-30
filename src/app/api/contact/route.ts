import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { NextResponse } from "next/server";

const prisma = new PrismaClient().$extends(withAccelerate());

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    const contact = await prisma.contact.create({
      data: {
        name: name as string,
        email: email as string,
        service: service as string,
        message: message as string,
      },
    });

    return NextResponse.json(
      {
        message: "Message send successfully",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
