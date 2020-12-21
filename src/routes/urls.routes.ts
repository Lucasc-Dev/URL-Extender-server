import { Router } from 'express';

import UrlsController from '../controllers/UrlsController';

const router = Router();

const urlsController = new UrlsController();

router.post('/', urlsController.create);

export default router;