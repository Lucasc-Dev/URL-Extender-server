import { Router } from 'express';

import urlsRouter from './urls.routes';

const router = Router();

router.use('/urls', urlsRouter);

export default router;