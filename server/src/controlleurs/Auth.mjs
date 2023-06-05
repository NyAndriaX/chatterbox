import bcrypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { Connection } from "../databases/db.mjs";

config();
const saltRounds = 10;

export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Veuillez remplir tous les champs obligatoires." });
		}
		const captures = async () => {
			return new Promise((resolve, reject) => {
				Connection.query(
					"SELECT * FROM users WHERE email= ?",
					[email],
					function (err, res) {
						if (err) {
							reject(err);
						} else {
							resolve(res);
						}
					}
				);
			});
		};
		const user = await captures();
		if (user.length === 0) {
			return res.status(401).json({ message: "Email de passe incorrect." });
		}
		const passwordMatch = await bcrypt.compare(password, user[0]?.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Mot de passe incorrect." });
		}

		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});
		const userConnect = user[0];
		return res.json({ token, userConnect });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "Une erreur s'est produite lors de la connexion." });
	}
};

export const signup = async (req, res) => {
	try {
		const { name, username, sexe, email, password } = req.body;

		if (!name || !username || !sexe || !email || !password) {
			return res
				.status(400)
				.json({ message: "Veuillez remplir tous les champs obligatoires." });
		}

		const existingUser = () => {
			return new Promise((resolve, reject) => {
				Connection.query(
					"SELECT * FROM users WHERE email = ?",
					[email],
					function (err, res) {
						if (err) {
							console.error("Erreur lors de l'exécution de la requête:", err);
							reject(err);
						} else {
							resolve(res);
						}
					}
				);
			});
		};

		const result = await existingUser();
		if (result.length !== 0) {
			return res
				.status(409)
				.json({ message: "Un utilisateur avec cet email existe déjà." });
		}

		const hashedPassword = await bcrypt.hash(password, saltRounds);
		await Connection.query(
			"INSERT INTO users (name,username,sexe, email, password) VALUES (?, ?, ?,?,?)",
			[name, username, sexe, email, hashedPassword]
		);

		return res
			.status(201)
			.json({ message: "Utilisateur enregistré avec succès." });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "Une erreur s'est produite lors de l'inscription." });
	}
};
