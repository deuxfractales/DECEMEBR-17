async function buyTickets (fastify, options) {
  fastify.get('/buyTickets', async (request, reply) => {
    return { route: 'buyTickets' }
  })
}

module.exports = buyTickets