import { Router } from 'express';
import User from '../models/User';
import { createToken } from '../util/token';

const router = Router();

router.post('/user-valid', (req, res, next) => {
  User.getByGoogleId(req.body.gId)
    .then((user) => {
      if (!(user && user.isactive)) {
        const newUser = new User({ ...req.body, isactive: false });
        newUser.save();
        return res.json();
      }

      const access_token = createToken(user);

      res.json({ access_token });
    })
    .catch(next);
});

module.exports = router;
