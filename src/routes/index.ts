import { Router } from 'express';

const router = Router();

router.get('', (request, response) => {
    return response.json({ working: true });
});

export default router;