import { io } from "../index.mjs";
import { sendMessage } from "../controlleurs/processMessage.mjs";

io.on("connection", (socket) => {
	console.log("New Socket.IO connection:", socket.id);

	socket.on("sendmessage", async (data) => {
		const { IdTeam, text } = data;

		try {
			const result = await sendMessage(IdTeam, text);

			io.emit("message", { IdTeam, text, success: result.success });
		} catch (error) {
			console.error("Error processing message:", error);
		}
	});

	socket.on("disconnect", () => {
		console.log("Socket.IO disconnected:", socket.id);
	});
});
