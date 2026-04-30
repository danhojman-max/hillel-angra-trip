"use client";

import { useMemo, useState } from "react";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

function normalizePhone(v: string) {
  return v.replace(/[^\d+]/g, "").trim();
}

function buildFormData(payload: {
  fullName: string;
  phone: string;
  birthDate: string;
  source: string;
  dietary: string;
}) {
  const params = new URLSearchParams();
  params.set("entry.1427952434", payload.fullName);
  params.set("entry.65404348", payload.phone);
  params.set("entry.1348090389", payload.birthDate);
  params.set("entry.393920710", payload.source);
  params.set("entry.1853147822", payload.dietary);
  return params;
}

export function TripForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [source, setSource] = useState("");
  const [dietary, setDietary] = useState("");
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  const phoneNormalized = useMemo(() => normalizePhone(phone), [phone]);

  const canSubmit =
    fullName.trim().length > 0 &&
    phoneNormalized.length >= 8 &&
    birthDate.trim().length > 0 &&
    source.trim().length > 0 &&
    dietary.trim().length > 0 &&
    state.status !== "submitting";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState({ status: "submitting" });

    const params = buildFormData({
      fullName: fullName.trim(),
      phone: phoneNormalized,
      birthDate,
      source: source.trim(),
      dietary: dietary.trim()
    });

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString()
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || `Error al enviar (${res.status})`);
      }

      setState({ status: "success" });
    } catch (err) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Error inesperado"
      });
    }
  }

  return (
    <div className="card p-6">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">Preinscripción</h3>
        <p className="mt-1 text-sm text-slate-300">
          Completá tus datos. Te llega a vos por Google Forms (mismo Form).
        </p>
      </div>

      {state.status === "success" ? (
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-50">
          <div className="font-semibold">¡Listo! Recibimos tu preinscripción.</div>
          <div className="mt-1 text-sm text-emerald-100/90">
            En breve el equipo se contacta con vos por WhatsApp.
          </div>
          <button
            className="btn-secondary mt-4 w-full"
            type="button"
            onClick={() => {
              setFullName("");
              setPhone("");
              setBirthDate("");
              setSource("");
              setDietary("");
              setState({ status: "idle" });
            }}
          >
            Cargar otra respuesta
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-1.5">
            <label className="label" htmlFor="fullName">
              Nombre y apellido *
            </label>
            <input
              id="fullName"
              className="input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Tu nombre completo"
              required
              autoComplete="name"
            />
          </div>

          <div className="space-y-1.5">
            <label className="label" htmlFor="phone">
              Celular *
            </label>
            <input
              id="phone"
              className="input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+54 11 1234 5678"
              required
              autoComplete="tel"
              inputMode="tel"
            />
            <div className="text-xs text-slate-400">
              Tip: incluí código de país si podés. Usamos WhatsApp para contactarte.
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="label" htmlFor="birthDate">
              Fecha de nacimiento *
            </label>
            <input
              id="birthDate"
              className="input"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="label" htmlFor="source">
              ¿Cómo llegaste a esta actividad? *
            </label>
            <input
              id="source"
              className="input"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Instagram, un amigo/a, Hillel..."
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="label" htmlFor="dietary">
              ¿Tenés alguna alergía / restricción alimentaria? *
            </label>
            <textarea
              id="dietary"
              className="input min-h-[96px] resize-y"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
              placeholder="El menú va a ser “Kosher Style”. Contanos si necesitás algo."
              required
            />
          </div>

          {state.status === "error" ? (
            <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-50">
              {state.message}
            </div>
          ) : null}

          <button className="btn-primary w-full" type="submit" disabled={!canSubmit}>
            {state.status === "submitting" ? "Enviando..." : "Enviar preinscripción"}
          </button>

          <div className="text-center text-xs text-slate-400">
            Cupos limitados. Este formulario es solo preinscripción.
          </div>
        </form>
      )}
    </div>
  );
}

