import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero"; 
// import { Pricing } from "@/sections/Services";
import { ProductShowcase } from "@/sections/ProductShowcase";
import Service from "@/sections/Service";
import Shop from "@/sections/Shop";

export default function Home() {
  return (
  <>
    <Header></Header>
    <section id="home">     <Hero ></Hero>   </section>
    {/* <section id="services">   <Pricing></Pricing>   </section> */}
    {/* <ProductShowcase></ProductShowcase>     */}
    <Service></Service>
    <Shop></Shop>
    <CallToAction></CallToAction>
    <section id="Footer"><Footer></Footer></section>
  </>);

}
