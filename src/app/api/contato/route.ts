import { Resend } from "resend";

export async function POST(req: Request) {
  console.log(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();

    const { nome, email, setor, mensagem } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: "site@qwasolucoes.com.br",
      to: "contato@qwasolucoes.com.br",
      subject: `Novo contato de ${nome}`,
      html: `
        <h2>Novo contato pelo site</h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Setor:</strong> ${setor}</p>

        <hr />

        <p>${mensagem}</p>
      `,
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
