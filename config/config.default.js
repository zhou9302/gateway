/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    middleware: [ 'compress' ],
    compress: {
      threshold: 2048,
    },
    // 设置redis
    // redis: {
    //   client: {
    //     port: 6379, // Redis port
    //     host: '127.0.0.1', // Redis host
    //     password: 'auth',
    //     db: 0,
    //   },
    // },
    // mysql配置
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'ZYzy2017',
        // 数据库名
        database: 'rongshan',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1567569577276_8102';

  // add your middleware config here
  // config.middleware = [ 'compress' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 文件上传的设置
  exports.multipart = {
    mode: 'file',
    // whitelist: [ '.pdf' ], // 白名单
  };

  // 关闭安全威胁csrf的防范
  exports.security = {
    csrf: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
