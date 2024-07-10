import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center mb-10">
        <article className="sm:w-2/3 w-5/6">
          <h1 className="text-3xl font-bold text-center mb-4">Contact</h1>
          <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus nisl tincidunt eget nullam non nisi est. Nulla facilisi nullam vehicula ipsum a arcu. Aliquam eleifend mi in nulla posuere. Interdum velit laoreet id donec. Quam vulputate dignissim suspendisse in est. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Ultricies tristique nulla aliquet enim tortor. Dolor magna eget est lorem ipsum dolor sit amet.
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}