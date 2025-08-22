import dbConnect, { collectionsObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function ProductDetails({params}) {
  const { id } = await params
  const productsCollection = dbConnect(collectionsObj.productsCollection)
  const data = await productsCollection.findOne({ _id: new ObjectId(id) });
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
        Product Details
      </h1>
      <div className="overflow-hidden bg-white shadow-sm ring-1 ring-gray-200 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-w-1 aspect-h-1">
            <img
              alt="Classic Leather Jacket"
              className="h-full w-full object-cover object-center"
              src={data?.image}
            />
          </div>
          <div className="p-6 lg:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {data.title}
            </h2>
            <div className="mt-4">
              <p className="text-3xl tracking-tight text-gray-900">${data.price}</p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">
                {data.description}
              </p>
            </div>
            <div className="mt-8">
              <button className="btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
