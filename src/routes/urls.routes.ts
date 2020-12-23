import { Router } from 'express';

import UrlsController from '../controllers/UrlsController';

const router = Router();

const urlsController = new UrlsController();

router.get('/:slug', urlsController.show);
router.post('/urls', urlsController.create);
router.delete('/urls/:slug', urlsController.delete);

export default router;