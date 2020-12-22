import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUrlService from "../services/CreateUrlService";

export default class UrlsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { original_url, slug } = request.body;

        const createUrl = container.resolve(CreateUrlService);

        const url = await createUrl.execute({ original_url, slug });

        return response.json(url);
    }
}