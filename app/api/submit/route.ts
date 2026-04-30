export const runtime = "nodejs";

const FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdvAjmajPPdOayHQLeLTPGOEhu12Ze2Pw4GpA_BvtW1io7R_w/formResponse";

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/x-www-form-urlencoded")) {
    return Response.json({ error: "Content-Type inválido" }, { status: 400 });
  }

  const body = await req.text();

  try {
    const upstream = await fetch(FORM_RESPONSE_URL, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body,
      redirect: "manual"
    });

    if (upstream.ok || upstream.status === 302) {
      return Response.json({ ok: true });
    }

    return Response.json(
      { error: `Google Forms respondió ${upstream.status}` },
      { status: 502 }
    );
  } catch {
    return Response.json({ error: "No se pudo enviar al Google Form" }, { status: 502 });
  }
}

