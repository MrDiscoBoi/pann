import Router from 'koa-router'
import announcement from './Announcement'
import user_result from './Result'

const apiRouter = new Router()

apiRouter.use('/api/announce', announcement.routes())
apiRouter.use('/api/score', user_result.routes())

export default apiRouter