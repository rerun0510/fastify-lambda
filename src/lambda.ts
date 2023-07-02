import awsLambdaFastify from '@fastify/aws-lambda'
import generateServer from './server'

const proxy = awsLambdaFastify(
  generateServer({
    logger: true,
  })
)

export { proxy as handler }
