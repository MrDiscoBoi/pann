import Router from "koa-router"
import db from '../db'

const router = new Router()

router
    .get('/', async (ctx, next) => {
        let query = db('user_result').select('*')
        if (ctx.request.query['keyword']) {
            const keyword = String(ctx.request.query['keyword'])
            query = query.where((it) => {it.where('result','like', `%${keyword}`).orWhere('remark','like',`%${keyword}`)})
        }
        ctx.body = await query.orderBy('remark','desc')

    })


export default router
