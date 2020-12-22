import { Router } from 'express';

import UrlsController from '../controllers/UrlsController';

const router = Router();

const urlsController = new UrlsController();

router.post('/', urlsController.create);
router.delete('/:slug', urlsController.delete);

export default router;