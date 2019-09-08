'use strict';

const product = '/product';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.homeController.index);
  router.get(`${product}/detail`, controller.homeController.list);
  // 根据restful风格快速在一个路径上生成 CRUD 路由结构。
  router.resources('users', '/api/users', controller.usersController);

  router.post('upload', '/upload', controller.upload.uploadController.upload);
};
