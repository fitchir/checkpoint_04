const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(firstname, lastname, email, hashedPassword) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword) values (?, ?, ?, ?)`,
      [firstname, lastname, email, hashedPassword]
    );
  }

  update(firstname, lastname, email, hashedPassword, id) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, hashedPassword = ? WHERE user_id = ?`,
      [firstname, lastname, email, hashedPassword, id]
    );
  }

  searchByEmail(email) {
    return this.database.query(`SELECT * FROM user WHERE email = ?`, [email]);
  }
}

module.exports = UserManager;
