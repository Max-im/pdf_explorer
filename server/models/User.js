const db = require('../db');

class User {
  constructor(userObj) {
    this.gId = userObj.gId;
    this.name = userObj.name;
    this.email = userObj.email;
    this.avatar = userObj.avatar;
    this.isactive = 'isactive' in userObj ? userObj.isactive : true;
  }

  save() {
    const { gId, name, email, avatar, isactive } = this;
    db.query(
      `INSERT INTO 
        users(gid, name, email, avatar, isactive) 
        VALUES ($1, $2, $3, $4, $5)`,
      [gId, name, email, avatar, isactive]
    );
  }

  static getByGoogleId(gId) {
    return db.query(`SELECT * FROM users WHERE gid=$1`, [gId]).then(({ rows }) => rows[0]);
  }
}

module.exports = User;
