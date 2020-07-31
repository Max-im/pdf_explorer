import { Router } from 'express';
import { getSlidesDataByLang } from '../controllers/slides';

const router = Router();

router.get('/:langId', getSlidesDataByLang);

module.exports = router;
