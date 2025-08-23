"use client";
import { addProduct } from '@/app/actions/addProduct';
import React from 'react'

export default function page() {
  const handleSubmit = async (event)=>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const payload = { title, price, image, description };

    const result = await addProduct(payload);
    form.reset();
  }

  return (
    <section className="mt-20 flex flex-col items-center">
      <div>
        <h1 className="text-3xl font-bold text-center sm:text-4xl">
          Add a New Product
        </h1>
        <p className="mt-2 text-center text-sm text-neutral-500">
          Fill in the details below to add a new product to your store.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6 bg-white p-8 shadow-lg rounded-lg border border-neutral-200 md:w-1/2 w-full"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium" htmlFor="product-name">
              Product Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                placeholder="Type here"
                className="input w-full"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="product-name">
              Price
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="price"
                placeholder="Type here"
                className="input w-full"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="product-name">
              Image URL
            </label>
            <div className="mt-2">
              <input
                type="url"
                name="image"
                placeholder="Type here"
                className="input w-full"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium" htmlFor="description">
              Description
            </label>
            <div className="mt-2">
              <textarea
                className="textarea w-full"
                name="description"
                placeholder="Type here"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <button className="btn btn-primary">Add product</button>
        </div>
      </form>
    </section>
  );
}
