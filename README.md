## Estructura del proyecto

ROUTES → CONTROLLER → MANAGER → MODEL (MongoDB)
-El manager habla con la base.
-El controller habla con el cliente.

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
│ │ ├── cart.controller.js ✅
│ │ ├── product.controller.js ✅
│ │ ├── user.controller.js
│ │
│ ├── managers/
│ │ ├── cart.manager.js
│ │ ├── product.manager.js
│ │ ├── user.manager.js
│ │
│ ├── middleware/
│ │ ├── auth.middleware.js
│ │ ├── logger.middleware.js
│ │ ├── policies.middleware.js
│ │
│ ├── models/
│ │ ├── cart.model.js  
│ │ ├── product.model.js  
│ │ ├── user.model.js
│ │ └── student.model.js
│ │
│ ├── routes/
│ │ ├── cart.routes.js  
│ │ ├── product.routes.js  
│ │ ├── user.routes.js  
│ │ └── index.js  
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
