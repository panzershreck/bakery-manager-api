const SOURCE_PATH = process.env.NODE_ENV === 'production' ? 'dist' : 'src';

const config = {
  host: 'localhost',
  type: 'mysql',
  port: 3306,
  username: process.env.SQL_USER || 'invoice-manager',
  password: process.env.SQL_PASSWORD || '',
  database: process.env.SQL_DATABASE || 'invoice_manager',
  synchronize: true,
  entities: [process.env.NODE_ENV === 'production' ? `${SOURCE_PATH}/**/**.entity.js` : `${SOURCE_PATH}/**/**.entity.ts`],
};

module.exports = config;