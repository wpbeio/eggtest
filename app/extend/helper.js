'use strict';
async function setredis(name, key) {
  const config = this.ctx.app.config;
  const appid = config.appid;
  const appname = config.appname;
  try {
    await this.app.redis.set(name + appid + appname, key);
    return true;
  } catch (err) {
    return false;
  }
}

async function test(name, key) {
  return await setredis(name, key);
}

module.exports = {
  setredis,
  test,
};
