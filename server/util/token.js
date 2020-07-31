import jwt from 'jsonwebtoken';

export const createToken = (user) => {
  const options = { expiresIn: 3600 };
  const token = jwt.sign({ sub: user.id, payload: user }, process.env.SECRET_OR_KEY, options);
  return token;
};
