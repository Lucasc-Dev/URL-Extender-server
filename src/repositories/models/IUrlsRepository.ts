import Url from "../../models/Url";

import ICreateUrlDTO from "../../dtos/ICreateUrlDTO";

export default interface IUrlsRepository {
    findBySlug(slug: string): Promise<Url | undefined>;
    create(data: ICreateUrlDTO): Promise<Url>;
    delete(id: string): Promise<void>;
    save(url: Url): Promise<void>;
}