import { Controller } from 'egg';
import "egg-redis/index";

export default class HomeController extends Controller {
  public async index() {
    const { ctx, app } = this;
    await app.redis.get("def").set("test", 11111)
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
