import { Umzug, SequelizeStorage } from 'umzug';

import database from './database.js';

const umzug = new Umzug({
    migrations: {glob: 'migrations/*.js'},
    context: database.getQueryInterface(),
    storage: new SequelizeStorage({
        sequelize: database,
        modelName: 'migrations'
    }),
})

export default umzug;