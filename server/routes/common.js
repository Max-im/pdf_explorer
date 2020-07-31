import { Router } from 'express';
import { getLanguages } from '../controllers/languages';

const router = Router();

router.get('/get-languages', getLanguages);

module.exports = router;
