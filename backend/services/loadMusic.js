const path = require('path')

async function loadMusic (fastify, options) {
  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'mp3'),
  })
    fastify.get('/mp3', async (request, reply) => {
      return reply.sendFile('love-tonight.mp3')
    })
  }
  
  module.exports = loadMusic