import { sendEmail } from "@/utils/email"

export async function POST(req: Request) {
  const body: {
    email: string
    title: string
    message: string
  } = await req.json()

  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = emailRegex.test(body.email)

    if (!isValidEmail) {
      return Response.json(null, {
        status: 400,
        statusText: "This is not valid Email.",
      })
    }

    const mail = await sendEmail({
      from: body.email,
      subject: body.title,
      message: body.message,
    })

    return Response.json({ message: "✅ Email Send Send" })
  } catch (error) {
    Response.json(null, {
      status: 500,
      statusText: "❌ Email Send Fail",
    })
  }
}
