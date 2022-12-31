import Router from 'koa-router'

const router = new Router()

router.get('/', async(ctx , next) =>{
    ctx.body = {
        type: 'ผลคะแนน',
        data: 'ได้คะแนน  79/100'
    }
} )

export default router