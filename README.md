## Estructura del proyecto

ROUTES → CONTROLLER → MANAGER → MODEL (MongoDB)
-El manager habla con la base.
-El controller habla con el cliente.

ROUTES
↓
CONTROLLER (maneja HTTP)
↓
MANAGER (habla con Mongo)
↓
MODEL (schema Mongoose)

Autenticación:
LOGIN → CONTROLLER → MANAGER → bcrypt → jwt → respuesta

Validación:
/current → passport jwt strategy → controller

POST /api/carts/:cid/product/:pid
↓ routes/cart.routes.js
↓ cart.controller.js
↓ cart.manager.js
↓ cart.model.js
↓ MongoDB

EntregaN1/
│
├── node_modules/
│
├── src/
│ │
│ ├── config/
│ │ ├── db/
│ │ │ └── connect.config.js
│ │ ├── auth/
│ │ │ └── passport.config.js
│ │ └── env.config.js
│ │
│ ├── controllers/
│ │ ├── cart.controller.js
│ │ ├── product.controller.js
│ │ ├── user.controller.js
│ │ └── session.controller.js
│ │
│ ├── managers/
│ │ ├── cart.manager.js
│ │ ├── product.manager.js
│ │ ├── user.manager.js
│ │ └── session.manager.js
│ │
│ ├── middleware/
│ │ ├── auth.middleware.js
│ │ ├── jwt.middleware.js
│ │ ├── role.middleware.js
│ │
│ ├── models/
│ │ ├── cart.model.js  
│ │ ├── product.model.js  
│ │ └── user.model.js
│ │
│ ├── router/
│ │ ├── cart.routes.js  
│ │ ├── product.routes.js  
│ │ ├── user.routes.js  
│ │ ├── session.routes.js
│ │ └── routes.js  
│ │
│ ├── server/
│ │ └── server.app.js
│ │
│ └── app.js
│
├── .env
├── .gitignore
├── package.json
└── package-lock.json
