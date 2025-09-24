import mongoose from "mongoose";
import { animeData } from "../data/anime-data";
import { Anime } from "../models/schemas";

const initalDataInsert = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/animes");

    await Anime.deleteMany({});

    await Anime.insertMany(animeData);
  } catch (error) {
    console.log("Failed to insert data", error);
    process.exit(1);
  }
};

initalDataInsert();
