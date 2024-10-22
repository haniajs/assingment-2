import Footer from "./components/footer/page";
import Header from "./components/header/Header"
import Hero from "./components/Hero/Hero";


export default function Home () {
  return (
    <div>
      <Header></Header>
      <h1>This is a home page</h1>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}