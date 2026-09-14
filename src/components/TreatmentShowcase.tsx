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
      <section className="glass-window mx-auto w-full max-w-[1180px] rounded-[32px] lg:grid lg:min-h-[680px] lg:grid-cols-2">
        <div className="relative min-h-[520px] lg:min-h-full">
          {treatments.map((treatment, treatmentIndex) => (
            <div
              key={treatment.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                treatmentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={treatment.image}
                alt={treatment.imageAlt}
                fill
                priority={treatmentIndex === 0}
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 100vw, 590px"
              />
            </div>
          ))}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/30 via-transparent to-white/10"
            aria-hidden
          />

          <header className="relative z-20 flex items-center justify-between px-5 py-6 text-[11px] uppercase tracking-[0.22em] text-white sm:px-8">
            <span>Aura</span>
            <div className="flex items-center gap-5">
              <span className="hidden sm:inline">Clinică</span>
              <span className="hidden sm:inline">Tratamente</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-white/20 backdrop-blur-md">
                ♡
              </span>
            </div>
          </header>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="group absolute left-4 top-1/2 z-20 h-36 w-14 -translate-y-1/2 overflow-hidden rounded-[999px] border border-white/80 bg-white/20 shadow-[0_14px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md transition hover:scale-[1.05] sm:left-5 sm:h-44 sm:w-16"
            aria-label={`Tratament anterior: ${prev.title}`}
          >
            <Image
              src={prev.image}
              alt=""
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
              sizes="80px"
            />
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="group absolute right-4 top-1/2 z-20 h-36 w-14 -translate-y-1/2 overflow-hidden rounded-[999px] border border-white/80 bg-white/20 shadow-[0_14px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md transition hover:scale-[1.05] sm:right-5 sm:h-44 sm:w-16"
            aria-label={`Tratament următor: ${next.title}`}
          >
            <Image
              src={next.image}
              alt=""
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
              sizes="80px"
            />
          </button>
        </div>

        <div className="glass-panel relative z-10 flex flex-col px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md border border-white/50 bg-stone-900/90 text-[10px] font-medium tracking-[0.18em] text-white shadow-lg">
                AMC
              </div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
                Shop · Estetică · {current.catalog}
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
              consultație
            </p>
          </div>

          <div
            key={`copy-${animKey}`}
            className="mt-10 flex flex-1 flex-col animate-fade-up"
          >
            <h1 className="font-serif text-[2.35rem] leading-[1.05] tracking-tight text-stone-900 sm:text-5xl">
              {current.title}
            </h1>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-rose-400">
              {current.subtitle}
            </p>
            <p className="mt-8 max-w-md text-sm leading-7 text-stone-600">
              {current.description}
            </p>

            <ul className="mt-8 space-y-2">
              {current.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-stone-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/50 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-stone-400">
                    Durată
                  </p>
                  <p className="mt-1 text-sm text-stone-800">{current.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-stone-400">
                    Preț orientativ
                  </p>
                  <p className="mt-1 font-serif text-2xl text-stone-900">
                    {current.price}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="mt-6 flex w-full items-center justify-between rounded-full bg-stone-900 px-6 py-3.5 text-sm text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition hover:bg-stone-800"
              >
                <span>Programează o Consultație</span>
                <span aria-hidden>+</span>
              </button>
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
