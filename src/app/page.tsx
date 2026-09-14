import TreatmentShowcase from "@/components/TreatmentShowcase";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="glass-stage pointer-events-none absolute inset-0" aria-hidden />
      <main className="relative z-10 flex flex-1 items-center px-4 py-8 sm:px-8 lg:px-10">
        <TreatmentShowcase />
      </main>
    </div>
  );
}
