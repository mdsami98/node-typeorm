// import { ConnectionOptions } from 'typeorm';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { createConnection } from 'typeorm';

const config: any = {
    type: 'postgres',
    name: 'default',
    host: 'node-type-orm-db',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'node_type_orm_db',
    synchronize: false,
    logging: false,
    entities: ['src/orm/entities/**/*.ts'],
    migrations: ['src/orm/migrations/**/*.ts'],
    subscribers: ['src/orm/subscriber/**/*.ts'],
    cli: {
        entitiesDir: 'src/orm/entities',
        migrationsDir: 'src/orm/migrations',
        subscribersDir: 'src/orm/subscriber'
    }
    // namingStrategy: new SnakeNamingStrategy()
};

export default createConnection(config);
