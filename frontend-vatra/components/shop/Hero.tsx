import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80";

export function Hero() {
  return (
    <section className="relative grid min-h-[420px] overflow-hidden md:min-h-[520px] md:grid-cols-2">
      <div className="relative min-h-[280px] md:min-h-full">
        <Image
          src={HERO_IMAGE}
          alt="Produse naturale pe raft"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-ink/20 md:hidden" aria-hidden />
      </div>
      <div className="flex flex-col justify-center bg-surface px-6 py-12 md:px-12 lg:px-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">
          Magazin de prezentare
        </p>
        <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          Îngrijire și menaj ultra natural
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">
          Șampon, pastă de dinți, săpunuri, detergenți de rufe și de vase — formule curate,
          ingrediente transparente, fără chimie inutilă.
        </p>
        <Link
          href="/collections/all"
          className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-surface transition hover:bg-ink/90"
        >
          Explorează colecția
        </Link>
      </div>
    </section>
  );
}
