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

function setredis1(name, key) {
  console.log('setredis1============>>>>>>>>this',this)
  const config = this.config;//这时候调用this是undefined
  
  const appid = config.appid;
  const appname = config.appname;
  try {
    return appid + appname;
  } catch (err) {
    return false;
  }
}
function test1(name, key) {
  console.log('test1============>>>>>>>>this.config',this.config.appid) //外部调用
  return setredis1(name, key);
}
module.exports = {
  test,
  test1,
};
