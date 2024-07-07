import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <p>Hello</p>
        <p>World!</p>
      </main>
      <Footer />
    </div>
  );
}
