import express from "express";
import controller from "../controllers/todo.js";

const router = express.Router();

router.get("/", controller.getAllTodos);
router.post("/", controller.addTodo);
router.get("/:id", controller.getSingleTodo);
router.put("/:id", controller.updateTodo);
router.delete("/:id", controller.deleteTodo);

export default router;
