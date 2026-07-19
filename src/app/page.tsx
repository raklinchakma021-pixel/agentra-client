import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
      <Features/>
      <Categories/>
      <Services/>
      <Testimonials/>
      <FAQ/>
      <Highlights/>
    </div>
  );
}
