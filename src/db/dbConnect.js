import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI 


export default async function connDB (){
  if (!MONGODB_URI) {
    console.log('URL no encontrada');
  }

  try {
    await mongoose.connect(MONGODB_URI)
    console.log('successful connection to database');
  } catch (e) {
    console.log(e);
  }
}

connDB()