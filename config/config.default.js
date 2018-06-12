'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528793413947_3689';
  config.appid = '123';
  config.appname = '123';
  // add your config here
  config.middleware = [];

  return config;
};
