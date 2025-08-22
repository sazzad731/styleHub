"use server"

import dbConnect, { collectionsObj } from "@/lib/dbConnect"

export const signUpUser = async (payload)=>{
  const usersCollection = dbConnect(collectionsObj.usersCollection);

  try {
    // need to check if unique email was given
  
    const result = await usersCollection.insertOne(payload);
    return result
  } catch (error) {
    console.log(error)
    return null
  }

}