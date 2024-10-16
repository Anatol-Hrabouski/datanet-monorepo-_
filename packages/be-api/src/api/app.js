const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { graphRouter } = require('./routers/graph-mongo.router')
const { statusRouter } = require('./routers/status.router')
const { uploadRouter } = require('./routers/upload.router')
const {
  requestLoggerMiddleware,
  responseLoggerMiddleware,
} = require('./middleware/logger.middleware')
const { errorHandlerMiddleware } = require('./middleware/error-handler.middleware')
const { authMiddlewareRouter, authRouter } = require('./routers/auth.router')

const app = express()
app.use(responseLoggerMiddleware)
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(requestLoggerMiddleware)
app.use(authMiddlewareRouter)

app.use('/auth', authRouter)
// app.use('/status', statusRouter)
app.use('/graph', graphRouter)
// app.use('/graphFile', require('./routers/graph-file.router').graphRouter)
app.use('/attachment', uploadRouter)

app.use(errorHandlerMiddleware)

exports.app = app
