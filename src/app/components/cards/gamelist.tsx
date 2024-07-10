'use client'

import Card from "@/app/components/cards/card";

export default function GameList() {
  return (
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
  );
}