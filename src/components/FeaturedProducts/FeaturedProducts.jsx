import dbConnect, { collectionsObj } from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react'

export default async function FeaturedProducts() {
  const productsCollection = dbConnect(collectionsObj.productsCollection)
  const data = await productsCollection.find().limit(3).toArray();
  return (
    <section className="mt-40">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Featured Products
        </h2>
        <p className="mt-2 text-lg text-slate-600">
          Handpicked items you'll love
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((card) => (
          <div
            key={card._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="relative">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${card.image}")`,
                }}
              ></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                {card.title}
              </h3>
              <p className="text-slate-600 mb-4">{card.description}</p>
              <Link href={`/products/${card._id}`} className='btn'>View detail</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
