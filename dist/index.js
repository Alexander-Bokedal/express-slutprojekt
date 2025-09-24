import mongoose from "mongoose";
import { Anime } from "./models/schemas";
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/animes");
    const animes = await Anime.find({});
    console.log("These are you animes", JSON.stringify(animes, null, 2));
}
