import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import Link from "next/link";
import "@/app/styles/links.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center mb-10">
        <article className="sm:w-2/3 w-5/6">
          <h1 className="text-3xl font-bold text-center mb-4">Welcome</h1>
          <section className="text-left sm:text-center">
            <p>I am an aspiring Software Engineer and a Computer Science student at the University of Central Florida.</p>
            <p>You can find my <Link className="text-link" href="/projects">projects</Link> and <Link className="text-link" href="/games">games</Link> on my website.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
