import { Request, Response } from "express";
export declare const getCharactersByAnime: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getCharacterById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
