import fastify, { FastifyServerOptions } from 'fastify'

const generateServer = (opts?: FastifyServerOptions) => {
  const server = fastify(opts)

  // health check endpoint
  server.get('/api/healthCheck', () => {
    return { status: 'ok' }
  })

  return server
}

export default generateServer
