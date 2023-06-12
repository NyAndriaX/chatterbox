import { Connection } from "../databases/db.mjs";

export const CustomerRequest = async (req, res) => {
	const { IdSource, IdDestinataire } = req.body;
	try {
		if (!IdSource || !IdDestinataire) {
			return res
				.status(400)
				.json({ message: "Impossible d'envoyer ce demande" });
		}
		await Connection.query(
			"INSERT INTO CLI_ASK (IdSource, IdDestinataire) VALUES (?, ?)",
			[IdSource, IdDestinataire]
		);
		return res.status(201).json({ message: "Demande envoyer" });
	} catch (err) {
		return res.status(500).json({
			message: "Une erreur s'est produite lors de l'enregistrement." + err,
		});
	}
};

export const getCustomerRequest = async (req, res) => {
	const { IdDestinataire } = req.params;

	try {
		if (!IdDestinataire) {
			return res.status(400).json({ message: "Pas de connecter" });
		}

		const List = async () => {
			return new Promise((resolve, reject) => {
				Connection.query(
					"SELECT * FROM CLI_ASK WHERE IdDestinataire = ?",
					[IdDestinataire],
					function (err, res) {
						if (err) {
							reject(err);
							console.log("error sur la partie du requete du base");
						} else {
							resolve(res);
						}
					}
				);
			});
		};

		const result = await List();

		if (result.lenght === 0) {
			return res.status(409).json({ message: "pas de demande" });
		}

		return res.status(201).json(result);
	} catch (error) {
		return res.status(500).json({
			message: "Une erreur s'est produite lors de requete." + err,
		});
	}
};

export const deleteCustomerRequest = async (req, res) => {
	const { IdAsk } = req.params;
	try {
		if (!IdAsk) {
			return res
				.status(400)
				.json({ message: "Impossible d'envoyer ce demande" });
		}

		await Connection.query("DELETE FROM CLI_ASK WHERE id = ?", [IdAsk]);

		return res.status(201).json({ message: "success delete" });
	} catch (err) {
		return res
			.status(500)
			.json({ message: "une erreur s'est produit lors du delete." + err });
	}
};

//Friends
export const getTeamMembersWithMessages = async (req, res) => {
	const { Uid } = req.params;
	try {
		const getAllusers = () => {
			return new Promise((resolve, reject) => {
				Connection.query(
					`
				SELECT DISTINCT u.name, u.username, u.id, u.email, m.text
				FROM users u
				JOIN CLI_MESSAGE m ON m.author = u.id
				JOIN CLI_TEAM t1 ON t1.IdSource = u.id OR t1.IdDestinataire = u.id
				JOIN CLI_TEAM t2 ON t2.IdSource = u.id OR t2.IdDestinataire = u.id
				WHERE u.id <> ?
				AND (t1.IdDestinataire = ? OR t2.IdSource = ?)


  `,
					[Uid, Uid, Uid],
					(error, results) => {
						if (error) {
							reject(error);
						} else {
							resolve(results);
						}
					}
				);
			});
		};

		const result = await getAllusers();

		if (result.length === 0) {
			return res.status(400).json({ message: "Pas de team pour l'instant" });
		}

		res.status(201).json(result);
	} catch (error) {
		return res.status(500).json({
			message: "Une erreur s'est produite lors de la validation.",
		});
	}
};

export const validationCustomerRequest = async (req, res) => {
	const { IdAsk } = req.params;
	try {
		if (!IdAsk) {
			return res
				.status(400)
				.json({ message: "Impossible d'accepter ce demande" });
		}

		const Team = () => {
			return new Promise((resolve, reject) => {
				Connection.query(
					"SELECT * FROM CLI_ASK WHERE id = ?",
					[IdAsk],
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

		const result = await Team();
		const { IdSource, IdDestinataire } = result[0];

		await Connection.query(
			"INSERT INTO CLI_TEAM (IdSource, IdDestinataire) VALUES (?, ?)",
			[IdSource, IdDestinataire]
		);

		await Connection.query("DELETE FROM CLI_ASK WHERE id = ?", [IdAsk]);

		return res.status(201).json({ message: "Acceptation reussi" });
	} catch (error) {
		return res.status(500).json({
			message: "Une erreur s'est produite lors de la validation.",
		});
	}
};

//donc dans ce section je prend tout les personne qui ne sont pas mon amis
//Id source tout les utilisateur qui envoye des domande a un persone
//Id destinataire tout les utilisateur qui a recu l'invitation a un person
export const getUsersNotFriends = async (req, res) => {
	const { IdSource } = req.params;
	const id = parseFloat(IdSource);

	try {
		if (!IdSource) {
			return res.status(400).json({ message: "Vous n'etes pas connecter" });
		}

		const ListUserNotFriends = () => {
			return new Promise((resolve, reject) => {
				Connection.query(
					"SELECT * FROM users WHERE users.id <> ? AND users.id NOT IN (SELECT IdSource FROM CLI_ASK WHERE IdDestinataire = ?) AND users.id NOT IN (SELECT IdDestinataire FROM CLI_ASK WHERE IdSource = ?) AND users.id NOT IN (SELECT IdSource FROM CLI_TEAM WHERE IdDestinataire = ?) AND users.id NOT IN (SELECT IdDestinataire FROM CLI_TEAM WHERE IdSource = ?)",
					[id, id, id, id, id],
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

		const result = await ListUserNotFriends();
		if (result.length === 0) {
			return res
				.status(400)
				.json({ message: "Pas d'utilisateur pour l'instant" });
		}

		return res.status(201).json(result);
	} catch (error) {
		return res.status(500).json({
			message: "Une erreur s'est produite lors de la requete.",
		});
	}
};
