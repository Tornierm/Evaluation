import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

const url = `${process.env.DATABASE_URL}?options=project%3D${process.env.PROJECT_NAME}`;
const db = drizzle(postgres(url, { ssl: 'require', max: 1 }));

const main = async () => {
	await migrate(db, { migrationsFolder: './app/drizzle/migrations' });
	process.exit(0);
};
main();