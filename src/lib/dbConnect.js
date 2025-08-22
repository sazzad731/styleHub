import { MongoClient, ServerApiVersion } from "mongodb";



export const collectionsObj = {
  productsCollection: "products",
  usersCollection: "users"
};


export default function dbConnect(collectionName) {
  const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db("styleHub").collection(collectionName);
}