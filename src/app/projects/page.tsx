import Header from "@/app/components/header/header";
import Card from "@/app/components/cards/card";
import Link from "next/link";
import "@/app/styles/links.css";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center mb-10">
        <article className="w-11/12 sm:w-4/5 md:2/3">
          <h1 className="text-3xl font-bold text-center mb-4">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              title="Pocketwatch"
              description="A MERN stack web application for tracking time spent on tasks."
              technologies="HTML, CSS, JavaScript, React, Bootstrap"
            />
            <Card
              title="Contact Manager"
              description="A LAMP stack web application for managing a list of contact information."
              technologies="HTML, CSS, JavaScript, PHP, MySQL, Bootstrap"
            />
            <Card
              title="KHInsider Downloader"
              description={
                <>
                  A Java web scraper for downloading video game albums from <Link className="text-link" href="https://downloads.khinsider.com/">KHInsider Downloader</Link>.
                </>
              }
              technologies="Java, JSoup, Apache Commons CLI, Apache Commons IO"
            />
            <Card
              title="Inventory Manager"
              description="A JavaFX desktop application for creating, modifying, searching, and deleting a list of inventory items."
              technologies="Java, JavaFX, JUnit, Gson, JSoup"
            />
            <Card
              title="ryanturner.dev"
              description="My personal website."
              technologies="HTML, CSS, TypeScript, React, Next.js, TailwindCSS"
            />
            <Card
              title="1440"
              description="A countdown timer for the remaining minutes of the day."
              technologies="HTML, CSS, TypeScript, React, TailwindCSS"
            />
            <Card
              title="Startpage"
              description="A custom webpage for the browser on its startup."
              technologies="HTML, CSS, JavaScript, Bootstrap"
            />
            <Card
              title="Pomodoro Timer"
              description="A simple and easy-to-use pomodoro timer."
              technologies="HTML, CSS, JavaScript"
            />
          </div>
        </article>
      </main>
    </div>
  );
}