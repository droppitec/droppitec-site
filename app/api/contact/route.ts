import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validar que todos los campos estén presentes
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Verificar que la API key esté configurada
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY no está configurada')
      return NextResponse.json(
        { error: 'Error de configuración del servidor. Por favor, contacta al administrador.' },
        { status: 500 }
      )
    }

    // Inicializar Resend con la API key
    const resend = new Resend(apiKey)

    // Enviar el email
    const { data, error } = await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>', // Cambia esto por tu dominio verificado en Resend
      to: 'info@droppitec.com',
      subject: 'Consulta por web',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4B66F7;">Nueva consulta desde el sitio web</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
          </div>
        </div>
      `,
      text: `
Nueva consulta desde el sitio web

Nombre: ${name}
Email: ${email}

Mensaje:
${message}
      `,
    })

    if (error) {
      console.error('Error al enviar email:', error)
      return NextResponse.json(
        { error: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en el servidor:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
