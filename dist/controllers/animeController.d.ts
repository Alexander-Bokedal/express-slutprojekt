import { Request, Response } from "express";
export declare const getAllAnimes: (req: Request, res: Response) => Promise<void>;
export declare const getAnimeById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAnimeByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createAnime: (req: Request, res: Response) => Promise<void>;
export declare const getMetadata: (req: Request, res: Response) => Promise<void>;
