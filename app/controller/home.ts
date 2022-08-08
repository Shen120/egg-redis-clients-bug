import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, app } = this;
    app.redis.get("def").set("test", 11111)
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
