import cors from "cors";
import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { transactions } from "./database/transactions";
import { users } from "./database/users";
import { Transaction } from "./types/transaction";
import { User } from "./types/user";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Hello World!",
  });
});

app.post("/user/create", (req: Request, res: Response) => {
  // Need data to be sent to the server
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  if (!email.includes("@") || !email.includes(".com")) {
    return res.status(400).json({
      message: "Email is invalid",
    });
  }

  if (!password) {
    return res.status(400).json({
      message: "Password is required",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters",
    });
  }

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const user: User = {
    id: uuidv4(),
    email,
    password,
  };

  users.push(user);

  return res.json({
    success: "Ok",
    user,
  });
});

app.post("/user/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  if (!email.includes("@") || !email.includes(".com")) {
    return res.status(400).json({
      message: "Email is invalid",
    });
  }

  if (!password) {
    return res.status(400).json({
      message: "Password is required",
    });
  }

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  if (user.password !== password) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  return res.json({
    success: "Ok",
    status: "user logged succesfully",
    user: user.email,
  });
});

app.get("/users", (req: Request, res: Response) => {
  const params = req.query;

  if (!params.email) {
    return res.status(200).json({
      users,
    });
  }

  const usersFiltered = users.filter((user) => {
    return user.email.includes(params.email as string);
  });

  return res.status(200).json({
    usersFiltered,
  });
});

/////////////// Transactions ///////////////

app.post(
  "/user/:userEmail/transactions/create",
  (req: Request, res: Response) => {
    const { userEmail } = req.params;

    const user = users.some((user) => user.email === userEmail);

    if (!user) {
      return res.status(404).json({
        message: `User ${userEmail} not found`,
      });
    }

    const { description, type, value } = req.body;

    if (!description || description.length < 6) {
      return res.status(400).json({
        error: "Description is required.",
      });
    }

    if (!type || (type !== "income" && type !== "outcome")) {
      return res.status(400).json({
        error: "Type is required and need of value 'income' or 'outcome'.",
      });
    }

    if (!value || typeof value !== "number") {
      return res.status(400).json({
        error: "Value is required and need of value of type Number.",
      });
    }

    const transaction: Transaction = {
      id: uuidv4(),
      description,
      type,
      value,
      createdAt: new Date().toLocaleDateString("pt-BR"),
      createdBy: userEmail,
    };

    transactions.push(transaction);

    return res.json({
      status: "ok",
      transaction,
    });
  }
);

app.get("/user/:userEmail/transactions", (req: Request, res: Response) => {
  const { userEmail } = req.params;

  const user = users.some((user) => user.email === userEmail);

  if (!user) {
    return res.status(404).json({
      message: `User ${userEmail} not found`,
    });
  }

  const listFiltered = transactions.filter(
    (user) => user.createdBy === userEmail
  );

  return res.status(200).json({
    status: "OK",
    transactions: listFiltered,
  });
});

app.put("/user/:userEmail/transactions/update/:id", (req: Request, res: Response) => {
  const { userEmail, id } = req.params;
  const { type, description, value } = req.body;

  const user = users.some((user) => user.email === userEmail);

  if (!user) {
    return res.status(404).json({
      message: `User ${userEmail} not found`,
    });
  }

  const idIndexFound = transactions.findIndex((transaction) => {
    return transaction.id === id;
  })

  if (idIndexFound < 0) {
    return res.status(400).json({
      error: `Not found transaction with ID ${id}`
    })
  }
 
  if (type && type !== "income" && type !== "outcome") {
    return res.status(400).json({
      error: "Type is required and need of value 'income' or 'outcome'.",
    });
  }

  if (description && !description?.length) {
    return res.status(400).json({
      error: "Description must be more than one character.",
    });
  }

  if (value === "" && typeof value !== "number") {
    return res.status(400).json({
      error: "Value is required and need of value of type Number.",
    });
  }

  if (idIndexFound < 0) {
    return res.status(404).json({
      message: "Not found task with this ID."
    })
  }

  transactions[idIndexFound] = {
    ...transactions[idIndexFound],
    value: value || transactions[idIndexFound].value,
    description: description || transactions[idIndexFound].description,
    type: type || transactions[idIndexFound].type
  }

  return res.status(200).json({
    status: "transaction updated successfully",
    transaction: transactions[idIndexFound]
  })
});

app.delete("/user/:userEmail/transactions/delete/:id", (req: Request, res: Response) => {
  const { userEmail, id } = req.params;

  const user = users.some((user) => user.email === userEmail);
  
  if (!user) {
    return res.status(404).json({
      message: `User ${userEmail} not found`,
    });
  }

  const idIndexFound = transactions.findIndex((transaction) => transaction.id === id)

  if (idIndexFound < 0) {
    return res.status(400).json({
      error: `Not found transaction with ID ${id}`
    }) 
  }

  const deletedItem = transactions.splice(idIndexFound, 1);
  
  return res.status(200).json({
    status: "transaction deleted successfully",
    transaction: deletedItem 
  })
})


app.listen(3000, () => {
  console.log("Listening app on port 3000");
})

