import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Server misconfigured: missing API key' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { name, email, clientType, interest } = body

  if (!name || !email || !interest) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const clientLabel = clientType === 'company' ? 'Firma' : 'Fizička osoba'

  const interestLabels: Record<string, string> = {
    products: 'Proizvodi',
    solutions: 'Rješenja',
    partnership: 'Partnerstvo',
    other: 'Ostalo',
  }

  const html = `
    <h2>Nova upita s web stranice zorpro.hr</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="font-weight:bold;width:140px">Ime:</td><td>${name}</td></tr>
      <tr><td style="font-weight:bold">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="font-weight:bold">Tip klijenta:</td><td>${clientLabel}</td></tr>
      <tr><td style="font-weight:bold">Interes:</td><td>${interestLabels[interest] ?? interest}</td></tr>
    </table>
  `

  const { data, error } = await resend.emails.send({
    from: 'ZOR Web <onboarding@resend.dev>',
    to: 'zorprofessional@gmail.com',
    replyTo: email,
    subject: `[ZOR upita] ${interestLabels[interest] ?? interest} — ${name}`,
    html,
  })

  if (error) {
    console.error('Resend error:', JSON.stringify(error))
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  console.log('Email sent successfully:', data)
  return NextResponse.json({ ok: true })
}
