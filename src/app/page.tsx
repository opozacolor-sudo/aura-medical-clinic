import TreatmentShowcase from "@/components/TreatmentShowcase";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_20%,rgba(255,214,232,0.85),transparent_55%),radial-gradient(900px_circle_at_90%_80%,rgba(196,181,253,0.55),transparent_50%),linear-gradient(180deg,#f7e9f1_0%,#e8d7f0_100%)]"
        aria-hidden
      />
      <main className="relative z-10 flex flex-1 items-center px-4 py-8 sm:px-8 lg:px-10">
        <TreatmentShowcase />
      </main>
    </div>
  );
}
