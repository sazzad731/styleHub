'use server'
import dbConnect, { collectionsObj } from "@/lib/dbConnect"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addProduct = async(payload)=>{
  const productsCollection = dbConnect(collectionsObj.productsCollection);
  const result = await productsCollection.insertOne(payload);
  revalidatePath("/products")
  redirect('/products')
  return result;
}