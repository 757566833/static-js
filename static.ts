const path = require('path');
const Koa = require('koa');
const send = require('koa-send');
const Router = require('koa-router');
const cors = require('koa2-cors');
const app = new Koa();
const router = new Router();
app.use(cors({
  origin: "*",
  exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
  // maxAge: 50000,
  credentials: true,
  allowMethods: ["GET", "PUT", "POST", "PATCH", "DELETE", "HEAD", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization", "Accept"],
}));
// router.get()
router.get(['/', '/**'], async (ctx:any) => {
  if(ctx.path.endsWith("json")){
    await send(ctx, ctx.path, {
      root: path.join(__dirname, 'static'),
      maxAge: 0
    });
  }else{
    await send(ctx, ctx.path, {
      root: path.join(__dirname, 'static'),
      maxAge: 365 * 24 * 60 * 60 * 1000
    });
  }
 
})


app.use(router.routes()).use(router.allowedMethods())

app.listen(7000);
