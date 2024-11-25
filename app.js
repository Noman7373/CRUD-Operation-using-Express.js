import express from "express";
import { join } from "path";
import dataBaseConnection from "./db/dbConnect.js";
import homeRoute from "./routes/web.js";

const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

// Static files
app.use("/student", express.static(join(process.cwd(), "public")));
app.use("/student/edit", express.static(join(process.cwd(), "public")));

const dataBase_URL = process.env.dataBase_URL || "mongodb://localhost:27017";

app.use("/student", homeRoute);

dataBaseConnection(dataBase_URL)
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Connection Failed", error);
    }
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
