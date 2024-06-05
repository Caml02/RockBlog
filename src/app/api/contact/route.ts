import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactTemplate from "@/components/Contact/ContactTemplate";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  const { name, subject, phone, email } = data;

  // Utiliza los datos para crear `ContactTemplate`
  const template = ContactTemplate({  name, subject, phone, email });
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'informacionpsique@gmail.com',
      subject: "Contact Form",
      react: template,
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
