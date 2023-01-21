import Router from 'koa-router'
import announcement from './Announcement'
import user_result from './Result'

const apiRouter = new Router()

apiRouter.use('/api/announcement', announcement.routes())
apiRouter.use('/api/userResult', user_result.routes())

export default apiRouter