'use strict';
const Controller = require('./base_controller');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, ee';
  }
  async list() {
    const { service } = this;
    const res = await service.product.productList();
    this.success(res);
  }
}

module.exports = HomeController;
