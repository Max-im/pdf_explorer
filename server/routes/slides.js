import { Router } from 'express';
import isLoggedIn from '../verify/isLoggedIn';
import { getSlidesDataByLang, createPDF } from '../controllers/slides';

const router = Router();

router.get('/:langId', isLoggedIn, getSlidesDataByLang);
router.post('/create-pdf', isLoggedIn, createPDF);

module.exports = router;
