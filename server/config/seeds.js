import { Umzug, SequelizeStorage } from 'umzug';

import database from './database.js';

const umzug = new Umzug({
    migrations: {glob: 'seeds/*.js'},
    context: database.getQueryInterface(),
    storage: new SequelizeStorage({
        sequelize: database,
        modelName: 'seeds'
    }),
})

export default umzug;