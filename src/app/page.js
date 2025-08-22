import Image from "next/image";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </>
  );
}
