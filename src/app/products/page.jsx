import dbConnect, { collectionsObj } from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react'

export default async function AllProducts() {
  const productsCollection = dbConnect(collectionsObj.productsCollection)
  const data = await productsCollection.find().toArray();
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((prod) => (
          <div key={prod._id} className="border border-neutral-200 rounded-2xl">
            <div className="relative">
              <div
                className="w-full h-56 bg-center bg-no-repeat bg-cover rounded-t-2xl"
                style={{
                  backgroundImage: `url(${prod?.image})`,
                }}
              ></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{prod.title}</h3>
              <p className="text-sm mt-1 truncate">{prod.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold">${prod.price}</span>
                <Link href={`/products/${prod._id}`} className="btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
