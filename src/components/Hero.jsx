import React from "react";

export default function Hero() {
  return (
    <section className="relative mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYvHa_YH-gzdZS98-FnbbCNBIw1-aS-RqQkRJ4j3ioiqwyKR7Ydr3IyAZFPx4GlPlKXfqcfCY_RCEnaWhV-KuCNjgZIVUCclN5BEagBbJXlwoFHczkdSZ8-4By9n69tuRljogt4cRgOZLvzwHPzgzUQtjohNfmhGMQZnuhQ97ppj4dc23UV2L4UWnwGp1y5XA2XBrfUhivyWUckooKY71sFR2Qa_lhSYcCTkJvsx4W86JgZaVTwS02nuC6wrLWDk162-rTOyvW6Hk")`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-6 py-32 md:py-48 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
          Elevate Your Living Space
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 mb-8">
          Discover curated collections of furniture and decor to transform your
          home into a sanctuary of style and comfort.
        </p>
        <button className="btn btn-primary">
          Shop Now
        </button>
      </div>
    </section>
  );
}
