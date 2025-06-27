import Header from "./HomeHeader";
import Body from "./HomeBody";
import Footer from "./HomeFooter";

function Home() {
  return (
    <section id="Home" className="md:h-[100svh] flex flex-col mb-8 pb-12">
      <Header />
      <Body />
    </section>
  );
}

export default Home;
