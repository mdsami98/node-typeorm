import 'reflect-metadata';
import { DataSource } from 'typeorm';

const config: DataSource = new DataSource({
    type: 'postgres',
    // name: 'default',
    host: 'node-type-orm-db',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'node_type_orm_db',
    synchronize: true,
    logging: false,
    entities: ['src/orm/entities/**/*.ts'],
    migrations: ['src/orm/migrations/**/*.ts'],
    subscribers: [],
    migrationsTableName: 'custom_migration_table'
});
module.exports = config;
