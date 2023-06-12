import { Connection } from "../databases/db.mjs";

export const receiveMessage = async (req, res) => {
	const { IdTeam } = req.params;

	try {
		if (!IdTeam) {
			return res
				.status(400)
				.json({ message: "Impossible de trouver ce personne" });
		}
		const ListMessage = () => {
			return new Promise((resolve, reject) => {
				Connection.query(
					"SELECT * FROM CLI_MESSAGE WHERE IdTeam = ? ORDER BY date DESC",
					[IdTeam],
					function (err, res) {
						if (err) {
							console.log(err);
							reject(err);
						} else {
							resolve(res);
						}
					}
				);
			});
		};

		const result = await ListMessage();

		if (result.length === 0) {
			return res.status(409).json({ message: "pas de Message" });
		}

		return res.status(201).json(result);
	} catch (error) {
		return res
			.status(500)
			.json({ message: "une erreur s'est produit lors du getMessage." + err });
	}
};

export const sendMessage = async (req, res, IdTeam, text) => {
	try {
		if (!IdTeam) {
			return res
				.status(400)
				.json({ message: "Impossible d'envoyer le message" });
		}

		const ListMessage = () => {
			return new Promise((resolve, reject) => {
				Connection.query(
					"SELECT * FROM CLI_TEAM WHERE id = ? ",
					[IdTeam],
					function (err, res) {
						if (err) {
							console.log(err);
							reject(err);
						} else {
							resolve(res);
						}
					}
				);
			});
		};

		const result = await ListMessage();

		if (result.length === 0) {
			return res
				.status(409)
				.json({ message: "Impossible d'envoyer ce message" });
		}

		await Connection.query(
			"INSERT INTO CLI_MESSAGE (IdTeam, text) VALUES (?, ?)",
			[IdTeam, text]
		);
		return res.status(201).json({ message: "message envoyer" });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "une erreur s'est produit lors du sendMessage." + err });
	}
};
