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
              cardTitle="Pocketwatch"
              cardDescription="A MERN stack web application for tracking time spent on tasks."
              cardTechnologies="HTML, CSS, JavaScript, React, Bootstrap"
            />
            <Card
              cardTitle="Contact Manager"
              cardDescription="A LAMP stack web application for managing a list of contact information."
              cardTechnologies="HTML, CSS, JavaScript, PHP, MySQL, Bootstrap"
            />
            <Card
              cardTitle="KHInsider Downloader"
              cardDescription={
                <>
                  A Java web scraper for downloading video game albums from <Link className="text-link" href="https://downloads.khinsider.com/">KHInsider Downloader</Link>.
                </>
              }
              cardTechnologies="Java, JSoup, Apache Commons CLI, Apache Commons IO"
            />
            <Card
              cardTitle="Inventory Manager"
              cardDescription="A JavaFX desktop application for creating, modifying, searching, and deleting a list of inventory items."
              cardTechnologies="Java, JavaFX, JUnit, Gson, JSoup"
            />
            <Card
              cardTitle="ryanturner.dev"
              cardDescription="My personal website."
              cardTechnologies="HTML, CSS, TypeScript, React, Next.js, TailwindCSS"
            />
            <Card
              cardTitle="1440"
              cardDescription="A countdown timer for the remaining minutes of the day."
              cardTechnologies="HTML, CSS, TypeScript, React, TailwindCSS"
            />
            <Card
              cardTitle="Startpage"
              cardDescription="A custom webpage for the browser on its startup."
              cardTechnologies="HTML, CSS, JavaScript, Bootstrap"
            />
            <Card
              cardTitle="Pomodoro Timer"
              cardDescription="A simple and easy-to-use pomodoro timer."
              cardTechnologies="HTML, CSS, JavaScript"
            />
          </div>
        </article>
      </main>
    </div>
  );
}