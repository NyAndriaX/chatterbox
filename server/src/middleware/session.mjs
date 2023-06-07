import session from "express-session";
import MySQLStore from "express-mysql-session";
import mysql from "mysql";
import crypto from "crypto";

const oneDay = 1000 * 60 * 60 * 24;

const dbConfig = {
	host: "localhost",
	user: "root",
	password: "",
	database: "chatterbox",
};
const generateKeySecret = (length = 32) => {
	return crypto.randomBytes(length).toString("hex");
};

const MySQLStoreSession = MySQLStore(session);
const pool = mysql.createConnection(dbConfig);
const sessionStore = new MySQLStoreSession({ expiration: oneDay }, pool);
const sessionMiddleware = session({
	secret: generateKeySecret(),
	saveUninitialized: true,
	cookie: { maxAge: oneDay },
	resave: false,
	store: sessionStore,
});

export default sessionMiddleware;
