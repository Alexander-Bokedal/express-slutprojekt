```js
  // repo
  async create(animeId: string, characterData: Omit<Character, "id">): Promise<Character> {
    const anime = await AnimeModel.findById(animeId)
    if (!anime) {
      throw new Error("Anime not found")
    }

    const mongoCharacter = AnimeMapper.characterToMongo(characterData)
    anime.characters.push(mongoCharacter)
    await anime.save()

    const newCharacter = anime.characters[anime.characters.length - 1]
    return AnimeMapper.characterToDomain(newCharacter)
  }
  
  // mapper 
  static characterToDomain(mongoChar: any): Character {
    return {
      id: mongoChar._id?.toString(),
      name: mongoChar.name,
      description: mongoChar.description,
      powerLevel: mongoChar.powerLevel
        ? {
            name: mongoChar.powerLevel.name,
            value: mongoChar.powerLevel.value,
          }
        : { name: "", value: 0 },
    };
  }

  static characterToMongo(domainChar: Omit<Character, "id">): any {
    return {
      name: domainChar.name,
      description: domainChar.description,
      powerLevel: domainChar.powerLevel,
    };
  }
}

// service
    async createCharacter(animeId: string, characterData: Omit<Character, "id">): Promise<Character> {
    // validera data
    // regler, tex opassande data
    // logging
      return await repo.create(animeId, characterData)
    },

// controller
export const addCharacter = async (req: Request, res: Response) => {
  try {
    const character = await characterService.createCharacter(
      req.params.animeId,
      {
        name: req.body.name,
        powerLevel: req.body.powerLevel,
        description: req.body.description,
      },
    );
    if (!character) {
      return res.status(404).json({ error: "No character to add" });
    }
    res.json(character);
  } catch (error) {
    if (error instanceof Error && error.message === "Anime not found") {
      return res.status(404).json({ error: "Anime not found" });
    }
    res.status(400).json({ error: "Failed to create character" });
  }
};

```
