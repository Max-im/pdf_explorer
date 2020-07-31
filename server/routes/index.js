import { Router } from 'express';
import auth from './auth';
import common from './common';
import slides from './slides';

const router = Router();

router.use('/auth', auth);
router.use('/common', common);
router.use('/slides', slides);

module.exports = router;
