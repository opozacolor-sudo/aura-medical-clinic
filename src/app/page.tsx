import TreatmentShowcase from "@/components/TreatmentShowcase";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="luxe-stage pointer-events-none absolute inset-0" aria-hidden />
      <main className="relative z-10 flex flex-1 items-center px-4 py-10 sm:px-10 lg:px-14">
        <TreatmentShowcase />
      </main>
    </div>
  );
}
