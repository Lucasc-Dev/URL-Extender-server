import { container } from 'tsyringe';

import IUrlsRepository from './models/IUrlsRepository';
import UrlsRepository from './implementations/UrlsRepository';

container.registerSingleton<IUrlsRepository>(
    'UrlsRepository',
    UrlsRepository,
)