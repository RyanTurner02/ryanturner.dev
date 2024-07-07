import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import Card from "@/app/components/cards/card";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center mb-10">
        <article className="w-11/12 sm:w-4/5 md:2/3">
          <h1 className="text-3xl font-bold text-center mb-4">Games</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              title="Space Havoc"
              releaseDate="December 4, 2023"
              description="A 3D Space Shooter inspired by old arcade and Atari games."
              technologies="C++, raylib, raygui"
            />
            <Card
              title="Volcanic Bird: Bird Quest"
              releaseDate="December 1, 2023"
              description="An interactive text-based creature-collecting dungeon crawler."
              technologies="Godot Engine, GDScript"
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}