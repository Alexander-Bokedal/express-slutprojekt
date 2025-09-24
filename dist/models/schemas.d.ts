import mongoose from "mongoose";
export declare const powerLevelSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null | undefined;
    value?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null | undefined;
    value?: number | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name?: string | null | undefined;
    value?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const characterSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null | undefined;
    powerLevel?: {
        name?: string | null | undefined;
        value?: number | null | undefined;
    } | null | undefined;
    description?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null | undefined;
    powerLevel?: {
        name?: string | null | undefined;
        value?: number | null | undefined;
    } | null | undefined;
    description?: string | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name?: string | null | undefined;
    powerLevel?: {
        name?: string | null | undefined;
        value?: number | null | undefined;
    } | null | undefined;
    description?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const animeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    characters: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }>;
    title?: string | null | undefined;
    genre?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    characters: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }>;
    title?: string | null | undefined;
    genre?: string | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    characters: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }>;
    title?: string | null | undefined;
    genre?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Characters: mongoose.Model<{
    name?: string | null | undefined;
    powerLevel?: {
        name?: string | null | undefined;
        value?: number | null | undefined;
    } | null | undefined;
    description?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string | null | undefined;
    powerLevel?: {
        name?: string | null | undefined;
        value?: number | null | undefined;
    } | null | undefined;
    description?: string | null | undefined;
}, {}, mongoose.DefaultSchemaOptions> & {
    name?: string | null | undefined;
    powerLevel?: {
        name?: string | null | undefined;
        value?: number | null | undefined;
    } | null | undefined;
    description?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null | undefined;
    powerLevel?: {
        name?: string | null | undefined;
        value?: number | null | undefined;
    } | null | undefined;
    description?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null | undefined;
    powerLevel?: {
        name?: string | null | undefined;
        value?: number | null | undefined;
    } | null | undefined;
    description?: string | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name?: string | null | undefined;
    powerLevel?: {
        name?: string | null | undefined;
        value?: number | null | undefined;
    } | null | undefined;
    description?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const PowerLevels: mongoose.Model<{
    name?: string | null | undefined;
    value?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string | null | undefined;
    value?: number | null | undefined;
}, {}, mongoose.DefaultSchemaOptions> & {
    name?: string | null | undefined;
    value?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null | undefined;
    value?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null | undefined;
    value?: number | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name?: string | null | undefined;
    value?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const Anime: mongoose.Model<{
    characters: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }>;
    title?: string | null | undefined;
    genre?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    characters: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }>;
    title?: string | null | undefined;
    genre?: string | null | undefined;
}, {}, mongoose.DefaultSchemaOptions> & {
    characters: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }>;
    title?: string | null | undefined;
    genre?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    characters: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }>;
    title?: string | null | undefined;
    genre?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    characters: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }>;
    title?: string | null | undefined;
    genre?: string | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    characters: mongoose.Types.DocumentArray<{
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }> & {
        name?: string | null | undefined;
        powerLevel?: {
            name?: string | null | undefined;
            value?: number | null | undefined;
        } | null | undefined;
        description?: string | null | undefined;
    }>;
    title?: string | null | undefined;
    genre?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
