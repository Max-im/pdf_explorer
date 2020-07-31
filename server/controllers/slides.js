const db = require('../db');

export const getSlidesDataByLang = (req, res, next) => {
  db.query(`SELECT data FROM slides WHERE lang = $1`, [req.params.langId])
    .then(({ rows }) => res.json(rows[0]))
    .catch(next);
};
