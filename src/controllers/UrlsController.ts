import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUrlService from "../services/CreateUrlService";
import DeleteUrlService from "../services/DeleteUrlService";
import FindUrlService from "../services/FindUrlService";

export default class UrlsController {
    public async show(request: Request, response: Response): Promise<Response> {
        const { slug } = request.params;

        const findUrl = container.resolve(FindUrlService);

        const url = await findUrl.execute({ slug });

        response.redirect(url);

        return response.status(200);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { original_url, slug } = request.body;

        const createUrl = container.resolve(CreateUrlService);

        const url = await createUrl.execute({ original_url, slug });

        return response.json(url);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { slug } = request.params;

        const deleteUrl = container.resolve(DeleteUrlService);

        await deleteUrl.execute({ slug });

        return response.status(204).send();
    }
}