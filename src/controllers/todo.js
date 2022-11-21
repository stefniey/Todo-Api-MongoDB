import Todo from "../models/todo.js";

const getAllTodos = async (req, res) => {
	try {
		const todos = await Todo.find();
		return res.status(200).json(todos);
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ message: "Please Contact the administrator" });
	}
};

const addTodo = async (req, res) => {
	try {
		const todo = new Todo({
			title: req.body.title,
			description: req.body.description,
			done: false,
		});
		await todo.save();
		return res.status(200).json({message: "Todo Created Successfully",todo});
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ message: "Please Contact the administrator" });
	}
};

const getSingleTodo = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id);
		if (!todo) {
			return res.status(404).json({ message: "No Todo found" });
		}
		return res.status(200).json(todo);
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ message: "Please Contact the administrator" });
	}
};

const updateTodo = async (req, res) => {
	try {
		const todo = await Todo.findOneAndUpdate(
			{ _id: req.params.id },
			{ title: req.body.title, description: req.body.description },
			{ new: true }
		);
		if (!todo) {
			return res.status(404).json({ message: "No Todo found" });
		}
		return res.status(200).json({message: "Todo Updated Successfully",todo});
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ message: "Please Contact the administrator" });
	}
};

const deleteTodo = async (req, res) => {
	try {
		const todo = await Todo.findOneAndDelete({ _id: req.params.id });
		if (!todo) {
			return res.status(404).json({ message: "No Todo found" });
		}
		return res.status(200).json({ message: "Todo deleted Successfully" });
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ message: "Please Contact the administrator" });
	}
};

export default {
	getAllTodos,
	addTodo,
	getSingleTodo,
	updateTodo,
	deleteTodo,
};
