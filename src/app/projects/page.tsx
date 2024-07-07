import Header from "@/app/components/header/header";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center mb-10">
        <article className="sm:w-2/3 w-5/6">
          <h1 className="text-3xl font-bold text-center">Projects</h1>
        </article>
      </main>
    </div>
  );
}