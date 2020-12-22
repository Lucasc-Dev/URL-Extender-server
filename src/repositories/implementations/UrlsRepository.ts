import { getRepository, Repository } from "typeorm";

import Url from "../../models/Url";

import ICreateUrlDTO from "../../dtos/ICreateUrlDTO";
import IUrlsRepository from "../models/IUrlsRepository";

export default class UrlsRepository implements IUrlsRepository {
    private ormRepository: Repository<Url>;

    constructor() {
        this.ormRepository = getRepository(Url);
    }

    public async findBySlug(slug: string): Promise<Url | undefined> {
        const url = await this.ormRepository.findOne({ where: { slug } });

        return url;
    }

    public async create(data: ICreateUrlDTO): Promise<Url> {
        const url = this.ormRepository.create(data);

        await this.ormRepository.save(url);

        return url;
    }

    public async save(url: Url): Promise<void> {
        await this.ormRepository.save(url);

        return;
    }
    
    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }
}