'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async userList() {
    const res = await this.app.mysql.select('user');
    return res;
  }
  async createUesr(info) {
    const res = await this.app.mysql.insert('user', info);
    return res.affectedRows === 1;
  }
  async userDetail(info) {
    const { ctx, app } = this;
    const res = await this.app.mysql.get('user', info);
    // set
    await app.redis.set(info.id, res);
    // get
    ctx.body = await app.redis.get(info.id);
    return res;
  }
  async updateUser(info) {
    const options = {
      where: {
        high: 160,
      },
    };
    const res = await this.app.mysql.update('user', info, options);
    return res.affectedRows === 1;
  }
  async deleteUser(info) {
    const res = await this.app.mysql.delete('user', info);
    return res.affectedRows === 1;
  }
}

module.exports = UserService;
