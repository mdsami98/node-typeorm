const config = {
    type: 'postgres',
    host: 'localhost',
    port: 4099,
    username: 'root',
    password: 'root',
    database: 'node_type_orm_db',
    synchronize: true,
    logging: false,
    entities: ['src/orm/entities/**/*.ts'],
    migrations: ['src/orm/migrations/**/*.ts'],
    subscribers: [],
    migrationsTableName: 'custom_migration_table'
};

export default config;
