'use strict';

const Service = require('egg').Service;

class ProductService extends Service {
  async productList() {
    const { ctx } = this;
    const result = await ctx.curl('https://www.fenghuangbao.com:13443/ckyl/app/api/financing/getProduct', {
      method: 'post',
      contentType: 'json',
      data: ctx.query.channel,
      dataType: 'json',
    });
    ctx.logger.info('result', result.data);
    return result.data;
  }
}
module.exports = ProductService;
