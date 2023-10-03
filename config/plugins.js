module.exports = ({ env }) => ({
    // ...
    "io": {
      "enabled": true,
      "config": {
        "IOServerOptions" :{
          "cors": { "origin": ["http://localhost:5500"], "methods": ["GET"] },
        },
        "contentTypes": {
          "mensagem": "*",
          "comentario":"*"
        },
        "events":[
          {
            "name": "connection",
            "handler": ({ strapi }, socket) => {
              strapi.log.info(`[io] new connection with id ${socket.id}`);
            },
          },
        ]
      },
    },
    // ...
  });