module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db');
    db.get_inventory().then((inventory) => res.status(200).send(inventory));
  },
  addProduct: (req, res) => {
    const db = req.app.get('db');
    const { item_name, price, image_url } = req.body;
    db.add_product([item_name, price, image_url]).then((inventory) => {
      res.status(200).send(inventory);
    });
  },
};
