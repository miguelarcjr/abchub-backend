module.exports = ({ env }) => ({
    // ...
    "io": {
      "enabled": true,
      "config": {
        "IOServerOptions" :{
          "cors": { "origin": ["http://localhost:4200", "https://abchub.com.br"], "methods": ["GET"] },
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