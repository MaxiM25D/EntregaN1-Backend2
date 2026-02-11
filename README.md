## Estructura del proyecto

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
