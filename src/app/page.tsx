import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-137px)] sm:min-h-[calc(100vh-153px)]">
        <p className="flex justify-center mb-10">Hello</p>
        <p className="flex justify-center mb-10">World!</p>
      </main>
      <Footer />
    </>
  );
}
