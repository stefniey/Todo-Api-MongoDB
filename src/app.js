import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";
import todoRoute from "./routes/todo.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
connection()

app.get("/", (req, res) => {
	return res.status(200).json({message: "Todo Application is Running"});
});

app.use("/api/todo", todoRoute);

app.listen(port, () => {
	console.log(`Todo App is listening on http://localhost:${port}`);
})
