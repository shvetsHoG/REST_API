import * as process from 'process';

export default () => ({
    port: process.env.APP_PORT,
    db_port: process.env.POSTGRES_PORT,
    db_host: process.env.POSTGRES_HOST,
    db_user: process.env.POSTGRES_USER,
    db_password: process.env.POSTGRES_PASSWORD,
    db_name: process.env.POSTGRES_DATABASE,
    redis_port: process.env.REDIS_PORT,
    private_key: process.env.PRIVATE_KEY,
});
