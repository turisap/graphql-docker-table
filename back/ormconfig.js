module.exports = {
  type: process.env.DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME,
  entities: ["dist/**/*.model.js"],
  migrations: ["dist/src/database/migrations/*.js"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};
