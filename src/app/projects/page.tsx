import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import ProjectList from "@/app/components/cards/projectlist";
import "@/app/styles/links.css";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center mb-10">
        <article className="w-11/12 sm:w-4/5 md:2/3">
          <h1 className="text-3xl font-bold text-center mb-4">Projects</h1>
          <ProjectList />
        </article>
      </main>
      <Footer />
    </div>
  );
}