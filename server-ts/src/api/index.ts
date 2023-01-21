import Router from 'koa-router'
import announcement from './Announcement'
import user_result from './Result'
import { authMiddleware } from "../auth";

const apiRouter = new Router()

apiRouter.use('/api/announcement',authMiddleware, announcement.routes())
apiRouter.use('/api/userResult',authMiddleware, user_result.routes())

export default apiRouter