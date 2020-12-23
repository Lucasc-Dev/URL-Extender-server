import { inject, injectable } from "tsyringe";
import urlConfig from "../configs/url";

import IUrlsRepository from "../repositories/models/IUrlsRepository";

interface Request {
    slug: string;
}

@injectable()
export default class FindUrlService {
    constructor(
        @inject('UrlsRepository')
        private urlsRepository: IUrlsRepository,
    ) {}
    
    public async execute({ slug }: Request): Promise<string> {
        const url = await this.urlsRepository.findBySlug(slug);

        if (!url) {
            return urlConfig.page_url;
        }

        return url.original_url;
    }
}