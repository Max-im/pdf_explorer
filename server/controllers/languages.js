const db = require('../db');

export const getLanguages = (req, res, next) => {
  db.query(`SELECT * FROM languages ORDER BY shortname`)
    .then(({ rows }) => res.json(rows))
    .catch(next);
};
