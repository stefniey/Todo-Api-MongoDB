# Mongo CRUD Todo App API

This project is a **Todo App API** built using **Node.js**, **Express**, and **MongoDB**. It is part of the **Zuri Week 7 Task** and demonstrates the implementation of basic CRUD (Create, Read, Update, Delete) operations in a RESTful API.

## Features
- **Add a Todo Task**: Allows the user to add a new task to the Todo collection.
- **Update a Todo Task**: Enables updating a specific Todo task by its unique identifier.
- **Delete a Todo Task**: Provides functionality to delete a specific Todo task.
- **Retrieve All Todo Tasks**: Fetches all tasks from the database with optional pagination.

## Technical Details
- **Framework**: Built with **Node.js** and **Express** for scalable and efficient server-side development.
- **Database**: Uses **MongoDB** for storing and managing Todo tasks.
- **Middleware**: Includes necessary middleware for request parsing and error handling.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [API Endpoints](#api-endpoints)
4. [Technology Stack](#technology-stack)
5. [Contributing](#contributing)
6. [License](#license)

## Project Structure
Here's an overview of the project's folder structure:

```
Mongo-CRUD-Todo-App/
├── src/
│   ├── controllers/
│   │   └── todo.js
│   ├── database/
│   │   └── db.js
│   ├── models/
│   │   └── todo.js
│   ├── routes/
│   │   └── todo.js
│   ├── app.js
│   └── server.js
```

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14+ recommended)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance, e.g., MongoDB Atlas)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/mongo-crud-todo-app.git
   cd mongo-crud-todo-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the server**:
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Access the API**:
   The API will be running at [http://localhost:3000](http://localhost:3000).

## API Endpoints

| Method | Endpoint          | Description                 |
|--------|-------------------|-----------------------------|
| POST   | `/api/todos`      | Add a new Todo task         |
| GET    | `/api/todos`      | Retrieve all Todo tasks     |
| GET    | `/api/todos/:id`  | Retrieve a specific Todo    |
| PUT    | `/api/todos/:id`  | Update a specific Todo task |
| DELETE | `/api/todos/:id`  | Delete a specific Todo task |

### Sample Request and Response

- **POST /api/todos**
  - **Request Body**:
    ```json
    {
      "title": "Complete Zuri task",
      "description": "Submit Week 7 task",
      "completed": false
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "data": {
        "_id": "60c72b2f9af1e1b1c8d6e9e8",
        "title": "Complete Zuri task",
        "description": "Submit Week 7 task",
        "completed": false,
        "createdAt": "2024-11-27T08:00:00.000Z",
        "updatedAt": "2024-11-27T08:00:00.000Z"
      }
    }
    ```

## Technology Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose ODM)
- **Environment Variables**: dotenv
- **Request Handling**: Body-parser, Express middleware

## Contributing

1. **Fork the repository**.
2. **Create a new branch** for your feature (`feature-name`).
3. **Commit your changes**.
4. **Push to your branch**.
5. **Open a pull request**.

## License
This project is licensed under the MIT License.

