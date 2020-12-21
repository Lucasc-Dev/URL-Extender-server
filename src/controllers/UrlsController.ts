import { Request, Response } from "express";

export default class UrlsController {
    public async create(request: Request, response: Response): Promise<Response> {
        return response.json();
    }
}