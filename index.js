require("dotenv").config();
const express = require("express");
const massive = require("massive");
const pCtrl = require("./products_controller");
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    console.log("database connected");
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.post("/api/products", pCtrl.create);
app.get("/api/products", pCtrl.getAll);
app.get("/api/products/:id", pCtrl.getOne);
app.put("/api/products/:id", pCtrl.update);
app.delete("/api/products/:id", pCtrl.delete);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
