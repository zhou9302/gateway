'use strict';

const Controller = require('./base_controller');
class UsersController extends Controller {
  // 查看用户列表
  async index() {
    const { service, ctx } = this;
    ctx.logger.info('headers', ctx.request.headers);
    const res = await service.user.userList();
    this.success(res);
  }
  // 新增用户
  async create() {
    const { ctx, service } = this;
    ctx.logger.info('body', ctx.request.body);
    const createRule = {
      name: { type: 'string' },
      mobile: { type: 'string' },
      high: { type: 'string' },
    };
    ctx.validate(createRule);
    const result = await service.user.createUesr(ctx.request.body);
    this.success(result);
  }
  // 查看用户详情
  async show() {
    const { app, ctx, service } = this;
    if (await app.redis.get(`user${ctx.params.id}`)) {
      ctx.logger.info('redis', await app.redis.get(`user${ctx.params.id}`));
      this.success(JSON.parse(await app.redis.get(`user${ctx.params.id}`)));
      return;
    }
    const result = await service.user.userDetail({ id: ctx.params.id });
    ctx.logger.info('body', result);
    await app.redis.set(`user${ctx.params.id}`, JSON.stringify(result));
    this.success(result);
  }
  // 更新用户信息
  async update() {
    const { ctx, service } = this;
    ctx.logger.info('body', ctx.params.id);
    ctx.logger.info('body', ctx.request.body);
    const result = await service.user.updateUser({ name: ctx.request.body.name });
    this.success(result);
  }

  async destroy() {
    const { ctx, service } = this;
    const result = await service.user.deleteUser({ id: ctx.params.id });
    this.success(result);
  }
}
module.exports = UsersController;
