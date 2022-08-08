import { createConnection } from 'typeorm'

import '../../ormconfig.json'

const dbConn = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "secret",
  "database": "apivendas",
  "migrations": [
    "./src/shared/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/typeorm/migrations/"
  }
}


createConnection(dbConn)