import nodemailer from "nodemailer"

export type EmailData = {
  from: string
  subject: string
  message: string
}

const {
  GMAIL_OAUTH_USER,
  GMAIL_OAUTH_CLIENT_ID,
  GMAIL_OAUTH_CLIENT_SECRET,
  GMAIL_OAUTH_REFRESH_TOKEN,
} = process.env

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.google.com",
  port: 587,
  secure: true,
  auth: {
    type: "OAuth2",
    user: GMAIL_OAUTH_USER,
    clientId: GMAIL_OAUTH_CLIENT_ID,
    clientSecret: GMAIL_OAUTH_CLIENT_SECRET,
    refreshToken: GMAIL_OAUTH_REFRESH_TOKEN,
  },
})

export async function sendEmail({ from, subject, message }: EmailData) {
  const mailData = {
    to: process.env.GMAIL_OAUTH_USER,
    subject: `[Dougie's BLOG] ${subject}`,
    from: from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    </br>
    <p>보낸사람 : ${from}</p>
    `,
  }

  return transporter.sendMail(mailData)
}
