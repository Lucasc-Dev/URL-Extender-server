import { inject, injectable } from "tsyringe";

import Url from "../models/Url";

import IUrlsRepository from "../repositories/models/IUrlsRepository";

interface Request {
    original_url: string;
    slug: string;
}

@injectable()
export default class CreateUrlService {
    constructor(
        @inject('UrlsRepository')
        private urlsRepository: IUrlsRepository,
    ) {}

    public async execute({ original_url, slug }: Request): Promise<Url> {
        const findUrl = await this.urlsRepository.findBySlug(slug);

        if (findUrl) {
            throw new Error('URL already exists.');
        }

        const url = await this.urlsRepository.create({ original_url, slug });

        return url;
    }   
}