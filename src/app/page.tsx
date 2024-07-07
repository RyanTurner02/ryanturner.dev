import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center min-h-12">
        <p>Home</p>
      </main>
      <Footer />
    </>
  );
}
