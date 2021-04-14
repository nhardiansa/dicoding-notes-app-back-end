const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '54.169.216.115',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Something magic happen in ${server.info.uri}`);
};

init();
