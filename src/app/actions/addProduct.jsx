'use server'
import dbConnect, { collectionsObj } from "@/lib/dbConnect"

export const addProduct = async(payload)=>{
  const productsCollection = dbConnect(collectionsObj.productsCollection);
  const result = await productsCollection.insertOne(payload);
  return result;
}