const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
  const tokenStr = req.get('Authorization');
  if (!tokenStr) return next(401);

  let decoded;
  try {
    const token = JSON.parse(tokenStr);
    decoded = jwt.verify(token, process.env.SECRET_OR_KEY);
  } catch (err) {
    return next(401);
  }

  req.userToken = decoded;
  return next();
};

module.exports = isLoggedIn;
