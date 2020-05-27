module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get("db");
    const {name, description, price, image_url} = req.body

    dbInstance
      .create_product([name, description, price, image_url])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res
          .status(500)
          .send({
            errorMessage:
              "Uh oh, that didn't go as plaaned! We'll try and fix that ASAP!",
          });
        console.log(err);
      });
  },

  getOne: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_product(req.params.id)
      .then((product) => res.status(200).send(product))
      .catch((err) => {
        res
          .status(500)
          .send({
            errorMessage:
              "Uh oh, that didn't go as plaaned! We'll try and fix that ASAP!",
          });
        console.log(err);
      });
  },

  getAll: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then((products) => res.status(200).send(products))
      .catch((err) => {
        res
          .status(500)
          .send({
            errorMessage:
              "Uh oh, that didn't go as planned! We'll try and that fixed ASAP!",
          });
        console.log(err);
      });
  },

  update: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .update_product([req.params.id, req.query.desc])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res
          .status(500)
          .send({
            errorMessage:
              "Uh oh, that didn't go as planned! We'll try and fix that ASAP!",
          });
        console.log(err);
      });
  },

  delete: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .delete_product(req.params.id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res
          .status(500)
          .send({
            errorMessage:
              "Uh oh, that didn't go as planned! We'll try and fix taht ASAP!",
          });
        console.log(err);
      });
  },
};
