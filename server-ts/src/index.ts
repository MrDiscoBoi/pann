import Koa from 'koa'
import { koaBody } from 'koa-body'
import cors from '@koa/cors'

import loadFixtures from './fixtures'
import apiRouter from './api'
import appConfig from './config'

const app = new Koa()

app.use(cors());
app.use(koaBody());

app.use(apiRouter.routes());

(async () => {
  await loadFixtures(appConfig.clearDataBeforeLoad)
  //await initSsoCert()
  app.listen(3000)
})();
