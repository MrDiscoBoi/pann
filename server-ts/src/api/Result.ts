import Router from "koa-router"
import db from '../db'
import { AuthData } from "../auth"

const router = new Router()


router.get('/', async (ctx, next) => {            
    const authData = ctx.state.authData as AuthData
    let query = db('user_result').select('*').where({ 'user_result.userCode': authData.username })
    if (ctx.request.query['keyword']) {
      const keyword = String(ctx.request.query['keyword'])
      query = query.where((it) => {it.where('result', 'like', `%${keyword}%`).orWhere('remark', 'like', `%${keyword}%`)})
    }
    ctx.body = await query.orderBy('id', 'desc')
  })


export default router

