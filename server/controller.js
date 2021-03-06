module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db');
    db.get_inventory().then((inventory) => res.status(200).send(inventory));
  },
  addProduct: (req, res) => {
    const db = req.app.get('db');
    const { image_url, item_name, price } = req.body;
    db.create_product([image_url, item_name, price]).then(() => {
      res.sendStatus(200);
    });
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const product_id = req.params.id;
    db.delete_product([product_id]).then(() => {
      res.sendStatus(200);
    });
  },
  editProduct: (req, res) => {
    const db = req.app.get('db');
    const{ product_id, image_url, item_name, price} = req.body;
    db.update_product([product_id, image_url, item_name, price]).then(() => {
       res.sendStatus(200);
    });
  }
};
