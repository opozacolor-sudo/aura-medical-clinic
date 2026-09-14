"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";
import { treatments } from "@/data/treatments";

export default function TreatmentShowcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  const count = treatments.length;
  const current = treatments[index];
  const prev = treatments[(index - 1 + count) % count];
  const next = treatments[(index + 1) % count];

  const goTo = useCallback(
    (nextIndex: number, dir: "next" | "prev") => {
      setDirection(dir);
      setIndex((nextIndex + count) % count);
      setAnimKey((value) => value + 1);
    },
    [count],
  );

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") goTo(index + 1, "next");
      if (event.key === "ArrowLeft") goTo(index - 1, "prev");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index]);

  return (
    <>
      <section className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-[28px] bg-white shadow-[0_40px_80px_-28px_rgba(80,40,70,0.28)] lg:grid lg:min-h-[680px] lg:grid-cols-2">
        <div className="relative flex min-h-[520px] flex-col bg-[#f6efe8] px-5 py-6 sm:px-8 lg:min-h-full">
          <header className="relative z-20 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-stone-500">
            <span>Aura</span>
            <div className="flex items-center gap-5">
              <span className="hidden sm:inline">Clinică</span>
              <span className="hidden sm:inline">Tratamente</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-stone-300/80 bg-white/50">
                ♡
              </span>
            </div>
          </header>

          <div className="relative z-10 mt-6 flex flex-1 items-center justify-center">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#efe4d8]"
              aria-hidden
            />

            <button
              type="button"
              onClick={() => goTo(index - 1, "prev")}
              className="absolute left-0 z-20 h-28 w-16 overflow-hidden rounded-[999px] border border-white/70 bg-white/50 shadow-sm backdrop-blur-md transition hover:bg-white/80 sm:h-36 sm:w-20"
              aria-label={`Tratament anterior: ${prev.title}`}
            >
              <Image
                src={prev.image}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>

            <div
              key={animKey}
              className={`relative z-10 aspect-square w-[76%] max-w-[430px] overflow-hidden rounded-full shadow-[0_18px_40px_-20px_rgba(60,30,20,0.45)] ${
                direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left"
              }`}
            >
              <Image
                src={current.image}
                alt={current.imageAlt}
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1, "next")}
              className="absolute right-0 z-20 h-28 w-16 overflow-hidden rounded-[999px] border border-white/70 bg-white/50 shadow-sm backdrop-blur-md transition hover:bg-white/80 sm:h-36 sm:w-20"
              aria-label={`Tratament următor: ${next.title}`}
            >
              <Image
                src={next.image}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          </div>

          <p className="relative z-10 mt-6 font-serif text-3xl text-stone-800">
            Catalog
            <span className="ml-2 text-stone-400">:</span>
          </p>
        </div>

        <div className="flex flex-col bg-white px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-stone-900 text-[10px] font-medium tracking-[0.18em] text-white">
                AMC
              </div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">
                Shop · Estetică · {current.catalog}
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">
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
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-stone-400">
              {current.subtitle}
            </p>
            <p className="mt-8 max-w-md text-sm leading-7 text-stone-500">
              {current.description}
            </p>

            <ul className="mt-8 space-y-2">
              {current.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-stone-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-900" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-stone-100 pt-6">
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
                className="mt-6 flex w-full items-center justify-between rounded-full bg-stone-900 px-6 py-3.5 text-sm text-white transition hover:bg-stone-800"
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
