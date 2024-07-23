'use client'

import Card from "@/app/components/cards/card";

export default function GameList() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card
        title="Space Havoc"
        links={{ githubURL: "https://github.com/RyanTurner02/space-havoc" }}
        releaseDate="December 4, 2023"
        description="A 3D Space Shooter inspired by old arcade and Atari games."
        technologies="C++, raylib, raygui"
      />
      <Card
        title="Volcanic Bird: Bird Quest"
        links={{ githubURL: "https://github.com/PKTidus/volcanic-bird-rpg", itchURL: "https://rockmandude.itch.io/vbbq" }}
        releaseDate="December 1, 2023"
        description="An interactive text-based creature-collecting dungeon crawler."
        technologies="Godot Engine, GDScript"
      />
    </div>
  );
}