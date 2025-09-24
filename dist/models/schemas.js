import mongoose from "mongoose";
const { Schema } = mongoose;
export const powerLevelSchema = new Schema({
    name: String,
    value: Number,
});
export const characterSchema = new Schema({
    name: String,
    powerLevel: powerLevelSchema,
    description: String,
});
export const animeSchema = new Schema({
    title: String,
    genre: String,
    characters: [characterSchema],
});
export const Characters = mongoose.model("Characters", characterSchema);
export const PowerLevels = mongoose.model("Powerlevels", powerLevelSchema);
export const Anime = mongoose.model("Anime", animeSchema);
