import { inject, injectable } from "tsyringe";
import AppError from "../errors/AppError";

import IUrlsRepository from "../repositories/models/IUrlsRepository";

interface Request {
    slug: string;
}

@injectable()
export default class DeleteUrlService {
    constructor(
        @inject('UrlsRepository')
        private urlsRepository: IUrlsRepository,
    ) {}

    public async execute({ slug }: Request): Promise<void> {
        const url = await this.urlsRepository.findBySlug(slug);

        if (!url) {
            throw new AppError('URL not found');
        }

        await this.urlsRepository.delete(url.id);

        return;
    }
}