import {
  Gift,
  ArrowLeft
} from "lucide-react";

export default function GiftSection() {
  return (
    <section
      id="gifts"
      className="section"
      style={{
        background: "var(--olive)",
        color: "var(--ivory)"
      }}
    >
      <div className="container grid md:grid-cols-2 gap-10 items-center">

        <div>

          <Gift
            className="gold mb-5"
            size={34}
          />

          <p className="gold font-bold text-sm">
            لأن بعض المناسبات تستحق وهجًا خاصًا
          </p>

          <h2 className="serif text-4xl sm:text-5xl font-semibold mt-3 leading-tight">
            المجموعات والهدايا
          </h2>

          <p className="opacity-80 leading-8 mt-5 max-w-lg">
            مجموعات منسقة بعناية لتقديم هدية أنيقة،
            من أول لحظة حتى آخر أثر للعطر.
          </p>

          <a
            href="/gifts"
            className="btn btn-gold mt-7"
          >
            استكشف المجموعات

            <ArrowLeft size={18} />
          </a>

        </div>

        <div
          className="rounded-[32px] min-h-72 flex items-center justify-center pattern"
          style={{
            background: "var(--olive-light)"
          }}
        >
          <span className="serif text-6xl gold">
            وهج
          </span>
        </div>

      </div>
    </section>
  );
}
