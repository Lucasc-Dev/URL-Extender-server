import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import UrlsController from '../controllers/UrlsController';

const router = Router();

const urlsController = new UrlsController();

router.get('/:slug', urlsController.show);
router.delete('/urls/:slug', urlsController.delete);
router.post(
    '/urls',
    celebrate({
        [Segments.BODY]: {
            slug: Joi.string().required(),
            original_url: Joi.string().required(),
        }
    }),
    urlsController.create,
);

export default router;