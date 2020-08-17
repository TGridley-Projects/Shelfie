module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db');
    db.get_inventory().then((inventory) => res.status(200).send(inventory));
  },
  addProduct: (req, res) => {
    const db = req.app.get('db');
    const { image_url, item_name, price } = req.body;
    db.create_product([ image_url, item_name, price ]).then(() => {
      res.sendStatus(200);
    });
  },
};
