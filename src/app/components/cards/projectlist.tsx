'use client'

import Card from "@/app/components/cards/card";
import Link from "next/link";

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card
        title="ryanturner.dev"
        links={{ githubURL: "https://github.com/RyanTurner02/ryanturner.dev" }}
        description="My personal website."
        technologies="HTML, CSS, TypeScript, React, Next.js, TailwindCSS"
      />
      <Card
        title="Pocketwatch"
        links={{ githubURL: "https://github.com/constellationz/pocketwatch" }}
        description="A MERN stack web application for tracking time spent on tasks."
        technologies="HTML, CSS, JavaScript, React, Bootstrap"
      />
      <Card
        title="Contact Manager"
        links={{ githubURL: "https://github.com/RyanTurner02/contact-manager" }}
        description="A LAMP stack web application for managing a list of contact information."
        technologies="HTML, CSS, JavaScript, PHP, SQL, MySQL, Bootstrap"
      />
      <Card
        title="KHInsider Downloader"
        links={{ githubURL: "https://github.com/RyanTurner02/khinsider-downloader" }}
        description={
          <>
            A Java web scraper for downloading video game albums from <Link className="text-link" href="https://downloads.khinsider.com/">KHInsider</Link>.
          </>
        }
        technologies="Java, JSoup, Apache Commons CLI, Apache Commons IO"
      />
      <Card
        title="Inventory Manager"
        links={{ githubURL: "https://github.com/RyanTurner02/inventory-manager" }}
        description="A JavaFX desktop application for creating, modifying, searching, and deleting a list of inventory items."
        technologies="Java, JavaFX, JUnit, Gson, JSoup"
      />
      <Card
        title="1440"
        links={{ githubURL: "https://github.com/RyanTurner02/1440" }}
        description="A countdown timer for the remaining minutes of the day."
        technologies="HTML, CSS, TypeScript, React, TailwindCSS"
      />
      <Card
        title="Startpage"
        links={{ githubURL: "https://github.com/RyanTurner02/startpage" }}
        description="A custom webpage for the browser on its startup."
        technologies="HTML, CSS, JavaScript, Bootstrap"
      />
      <Card
        title="Pomodoro Timer"
        links={{ githubURL: "https://github.com/RyanTurner02/pomodoro-timer" }}
        description="A simple and easy-to-use pomodoro timer."
        technologies="HTML, CSS, JavaScript"
      />
      <Card
        title="Wikipedia Philosophy"
        links={{ githubURL: "https://github.com/RyanTurner02/wikipedia-philosophy" }}
        description="A web crawler for getting to the Philosophy article on Wikipedia."
        technologies="Java, JSoup"
      />
      <Card
        title="text2mc"
        description="The first web application that creates Minecraft builds with Generative AI."
        technologies="Python, Java"
      />
    </div>
  );
}