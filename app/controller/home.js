'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body =this.ctx.helper.test1("1","2");
  }
}

module.exports = HomeController;
