import Koa from 'koa'
import { koaBody } from 'koa-body'
import cors from '@koa/cors'
import apiRouter from './api'
import appConfig from './config'
import loadFixtures from './fixtures'
import json from 'koa-json'

const app = new Koa()

app.use(cors());    
app.use(koaBody());
app.use(json())
app.use(apiRouter.routes());

(async () => {
    await loadFixtures(appConfig.clearDataBeforeLodingFixture)
    //await initSsoCert()
    app.listen(3000)
  })();