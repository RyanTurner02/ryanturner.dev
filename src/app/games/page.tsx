import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import GameList from "@/app/components/cards/gamelist";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center mb-10">
        <article className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl font-bold text-center mb-4">Games</h1>
          <GameList />
        </article>
      </main>
      <Footer />
    </div>
  );
}