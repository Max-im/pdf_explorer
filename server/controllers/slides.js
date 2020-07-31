const path = require('path');
const db = require('../db');
const pdf = require('../services/pdf');

export const getSlidesDataByLang = (req, res, next) => {
  db.query(`SELECT * FROM slides WHERE lang = $1`, [req.params.langId])
    .then(({ rows }) => res.json(rows[0]))
    .catch(next);
};

export const createPDF = async (req, res, next) => {
  const pdfFile = await pdf(req.body);
  res.sendFile(path.join(__dirname, '..', 'out', pdfFile));
};
