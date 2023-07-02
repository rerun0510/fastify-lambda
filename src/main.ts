import generateServer from './server'

const start = async (): Promise<void> => {
  const server = generateServer({
    logger: true,
  })
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start().catch((err) => {
  console.log(err)
  process.exit(1)
})
