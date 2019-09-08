'use strict';
const Controller = require('../base_controller');
// const fs = require('mz/fs');
class HomeController extends Controller {
  async upload() {
    const { ctx } = this;
    ctx.logger.info('file', ctx);
    const file = ctx.request.files;
    ctx.logger.info('file', file);
    ctx.body = 'hi, ee';
  }
}

module.exports = HomeController;
