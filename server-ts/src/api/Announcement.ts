import Router from "koa-router"
const router = new Router()
router
    .get('/', async(ctx,next) => {
        ctx.body = [
            {topic: 'ทุนเรียนดีประจำปี 2566', 
            description: 'test', 
            remarkIfPositive: 'ขอแสดงความยินดีกับผุ้ได้รับทุนเรียนดี', 
            }
        ]
    })

export default router
