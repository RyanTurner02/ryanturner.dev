import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center mb-10">
        <article className="sm:w-2/3 w-5/6">
          <h1 className="text-3xl font-bold text-center">Welcome</h1>
          <section>
            <h2 className="text-xl font-bold text-center">Introduction</h2>
            <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend mi. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fermentum dui faucibus in ornare quam viverra. Nullam vehicula ipsum a arcu. Urna molestie at elementum eu facilisis sed odio morbi quis. Eget arcu dictum varius duis at. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Orci porta non pulvinar neque laoreet suspendisse. Nibh tortor id aliquet lectus proin. Magna etiam tempor orci eu. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Ultrices vitae auctor eu augue ut lectus arcu. Sit amet consectetur adipiscing elit duis tristique. Lorem ipsum dolor sit amet consectetur. Quisque id diam vel quam elementum pulvinar etiam non.</p>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend mi. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fermentum dui faucibus in ornare quam viverra. Nullam vehicula ipsum a arcu. Urna molestie at elementum eu facilisis sed odio morbi quis. Eget arcu dictum varius duis at. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Orci porta non pulvinar neque laoreet suspendisse. Nibh tortor id aliquet lectus proin. Magna etiam tempor orci eu. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Ultrices vitae auctor eu augue ut lectus arcu. Sit amet consectetur adipiscing elit duis tristique. Lorem ipsum dolor sit amet consectetur. Quisque id diam vel quam elementum pulvinar etiam non.</p>
            <p className="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend mi. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fermentum dui faucibus in ornare quam viverra. Nullam vehicula ipsum a arcu. Urna molestie at elementum eu facilisis sed odio morbi quis. Eget arcu dictum varius duis at. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Orci porta non pulvinar neque laoreet suspendisse. Nibh tortor id aliquet lectus proin. Magna etiam tempor orci eu. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Ultrices vitae auctor eu augue ut lectus arcu. Sit amet consectetur adipiscing elit duis tristique. Lorem ipsum dolor sit amet consectetur. Quisque id diam vel quam elementum pulvinar etiam non.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
