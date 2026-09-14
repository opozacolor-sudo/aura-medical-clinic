"use client";

import { FormEvent, useEffect, useState } from "react";

type ConsultationModalProps = {
  open: boolean;
  treatmentTitle: string;
  onClose: () => void;
};

export default function ConsultationModal({
  open,
  treatmentTitle,
  onClose,
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);

  if (!open) return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-stone-950/35 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-md rounded-[28px] bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consult-title"
      >
        {submitted ? (
          <div className="space-y-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">
              Aura Medical Clinic
            </p>
            <h2
              id="consult-title"
              className="font-serif text-3xl text-stone-900"
            >
              Mulțumim
            </h2>
            <p className="text-sm leading-relaxed text-stone-500">
              Cererea ta pentru {treatmentTitle} a fost înregistrată. Te
              contactăm în curând pentru confirmarea consultației.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 w-full rounded-full bg-stone-900 py-3 text-sm tracking-wide text-white"
            >
              Închide
            </button>
          </div>
        ) : (
          <>
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400">
              Consultație
            </p>
            <h2
              id="consult-title"
              className="mt-2 font-serif text-3xl text-stone-900"
            >
              Programează
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Tratament selectat:{" "}
              <span className="text-stone-800">{treatmentTitle}</span>
            </p>
            <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
              <input
                required
                name="name"
                placeholder="Nume complet"
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none ring-stone-300 placeholder:text-stone-400 focus:ring-2"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Telefon"
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none ring-stone-300 placeholder:text-stone-400 focus:ring-2"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none ring-stone-300 placeholder:text-stone-400 focus:ring-2"
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-full border border-stone-200 py-3 text-sm text-stone-600"
                >
                  Anulează
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-stone-900 py-3 text-sm text-white"
                >
                  Trimite
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
