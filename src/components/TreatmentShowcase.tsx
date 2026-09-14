"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";
import { treatments } from "@/data/treatments";

export default function TreatmentShowcase() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  const count = treatments.length;
  const current = treatments[index];
  const prev = treatments[(index - 1 + count) % count];
  const next = treatments[(index + 1) % count];

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + count) % count);
      setAnimKey((value) => value + 1);
    },
    [count],
  );

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") goTo(index + 1);
      if (event.key === "ArrowLeft") goTo(index - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index]);

  return (
    <>
      <section className="luxe-card mx-auto w-full max-w-[1120px] lg:grid lg:min-h-[640px] lg:grid-cols-2">
        <div className="relative min-h-[520px] bg-[#f4f1ee] lg:min-h-full">
          {treatments.map((treatment, treatmentIndex) => (
            <div
              key={treatment.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                treatmentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={treatment.image}
                alt={treatment.imageAlt}
                fill
                priority={treatmentIndex === 0}
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          ))}

          <header className="relative z-20 flex items-center justify-between px-6 py-6 text-[10px] uppercase tracking-[0.28em] text-white/90">
            <span>Aura</span>
            <div className="flex items-center gap-5">
              <span className="hidden sm:inline">Clinică</span>
              <span className="hidden sm:inline">Tratamente</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/40">
                ♡
              </span>
            </div>
          </header>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute left-0 top-1/2 z-20 h-36 w-[4.25rem] -translate-y-1/2 overflow-hidden rounded-r-full border border-white/50 bg-white/35 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-[6px] transition hover:bg-white/50 sm:h-44 sm:w-20"
            aria-label={`Tratament anterior: ${prev.title}`}
          >
            <Image
              src={prev.image}
              alt=""
              fill
              className="object-cover opacity-80"
              sizes="80px"
            />
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute right-0 top-1/2 z-20 h-36 w-[4.25rem] -translate-y-1/2 overflow-hidden rounded-l-full border border-white/50 bg-white/35 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-[6px] transition hover:bg-white/50 sm:h-44 sm:w-20"
            aria-label={`Tratament următor: ${next.title}`}
          >
            <Image
              src={next.image}
              alt=""
              fill
              className="object-cover opacity-80"
              sizes="80px"
            />
          </button>
        </div>

        <div className="flex flex-col bg-white px-8 py-8 sm:px-12 lg:px-14 lg:py-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-8 flex h-9 w-9 items-center justify-center bg-black text-[9px] font-medium tracking-[0.2em] text-white">
                AMC
              </div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                Estetică · {current.catalog}
              </p>
            </div>
            <p className="pt-1 text-[10px] uppercase tracking-[0.22em] text-neutral-400">
              consultație
            </p>
          </div>

          <div
            key={`copy-${animKey}`}
            className="mt-8 flex flex-1 flex-col animate-fade-up"
          >
            <h1 className="font-serif text-[2.6rem] font-medium leading-[1.08] tracking-tight text-neutral-900 sm:text-[3.15rem]">
              {current.title}
            </h1>
            <p className="mt-3 text-[10px] uppercase tracking-[0.34em] text-neutral-400">
              {current.subtitle}
            </p>
            <p className="mt-8 max-w-[26rem] text-[13.5px] leading-7 text-neutral-500">
              {current.description}
            </p>

            <ul className="mt-8 space-y-2.5">
              {current.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-[13px] text-neutral-600"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-400">
                    {current.duration}
                  </p>
                  <p className="mt-1 font-serif text-[1.65rem] text-neutral-900">
                    {current.price}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="rounded-full bg-[#f3e4ea] px-7 py-3 text-[13px] text-neutral-800 transition hover:bg-[#ead6de]"
                >
                  Programează o Consultație
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        open={bookingOpen}
        treatmentTitle={`${current.title} · ${current.subtitle}`}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
