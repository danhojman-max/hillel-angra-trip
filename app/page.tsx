import { Gallery } from "@/app/components/Gallery";
import { TripForm } from "@/app/components/TripForm";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <main>
      <div className="border-b border-white/10">
        <div className="container-page py-10 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2">
                <Pill>Exclusivo · Cupos limitados</Pill>
                <Pill>Jóvenes Hillel</Pill>
                <Pill>All inclusive</Pill>
              </div>

              <div className="mt-5">
                <img
                  src="/logo/logo.png"
                  alt="Hillel Latam Trip - Club Med Angra"
                  className="h-auto w-full max-w-[520px] object-contain md:max-w-[680px]"
                />
              </div>

              <p className="mt-4 text-base text-slate-200/90 md:text-lg">
                4 días en un resort todo incluido con vista al mar. Playita, fútbol tenis,
                deportes acuáticos, y comida y bebida all inclusive.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-200/90">
                <span className="card px-3 py-2">
                  <span className="text-slate-400">Fechas:</span> Jue 28/5 → Dom 31/5
                </span>
                <span className="card px-3 py-2">
                  <span className="text-slate-400">Grupo:</span> 80 jóvenes (Brasil · Uruguay ·
                  Argentina)
                </span>
                <span className="card px-3 py-2">
                  <span className="text-slate-400">Tu parte:</span> Llegar +{" "}
                  <span className="font-semibold text-sky-200">USD 200</span>
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn-primary" href="#preinscripcion">
                  Preinscribirme
                </a>
                <a className="btn-secondary" href="#info">
                  Ver info
                </a>
              </div>
            </div>

            <div className="card w-full p-4 md:max-w-sm">
              <div className="text-sm text-slate-300">
                Vos solo te ocupás de llegar y pagar <span className="font-semibold">USD 200</span>.
                Nosotros nos ocupamos del resto.
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="card px-3 py-3">
                  <div className="text-slate-200">Hospedaje</div>
                  <div className="text-xs text-slate-400">Resort all inclusive</div>
                </div>
                <div className="card px-3 py-3">
                  <div className="text-slate-200">Comidas</div>
                  <div className="text-xs text-slate-400">Kosher style</div>
                </div>
                <div className="card px-3 py-3">
                  <div className="text-slate-200">Actividades</div>
                  <div className="text-xs text-slate-400">Mar + deportes</div>
                </div>
                <div className="card px-3 py-3">
                  <div className="text-slate-200">Comunidad</div>
                  <div className="text-xs text-slate-400">Latam Hillel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="info" className="container-page py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="card p-6">
            <h2 className="text-xl font-semibold">¿Cómo es el lugar?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Club Med Angra está en la Costa Verde, entre mar y naturaleza. Ideal para desconectar
              y vivir unos días intensos de playa, deportes y comunidad.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold">Lo que vas a vivir</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Vista al mar y días enteros de resort.</li>
              <li>• Actividades grupales: playita, deportes, deportes acuáticos.</li>
              <li>• Comida y bebida all inclusive.</li>
              <li>• Comunidad: 80 jóvenes de Brasil, Uruguay y Argentina.</li>
            </ul>
            <div className="mt-5">
              <a className="btn-secondary w-full" href="#preinscripcion">
                Ir al formulario
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-12 md:pb-16">
        <div className="card p-6">
          <div className="mt-5">
            <Gallery />
          </div>
        </div>
      </section>

      <section id="preinscripcion" className="container-page pb-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="card p-6">
            <h2 className="text-xl font-semibold">Antes de llenar</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-300">
              <p>
                Esto es una <span className="font-semibold text-slate-100">preinscripción</span>.
                Los cupos son limitados.
              </p>
              <p>
                El menú va a ser <span className="font-semibold">“Kosher Style”</span>. Si tenés
                alergias o restricciones, contalo en el formulario.
              </p>
            </div>
          </div>

          <TripForm />
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="container-page text-sm text-slate-400">
          Hillel Latam Trip - Club Med Angra · Jue 28/5 → Dom 31/5
        </div>
      </footer>
    </main>
  );
}

