import mysql from "mysql";
import { config } from "dotenv";

config();

const dbConfig = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
};

export let Connection;

export async function initDbConnection() {
	try {
		Connection = await mysql.createConnection(dbConfig);
		console.log("Connexion à la base de données réussie.");
		return Connection;
	} catch (error) {
		console.error(
			"Erreur lors de la connexion à la base de données:",
			error.message
		);
		throw error;
	}
}

initDbConnection();
