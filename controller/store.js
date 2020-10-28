let Store = require("../models/store.js");

/*===================================================================================== */
/*                               Action GET ONE PRODUCT                                 */
/*===================================================================================== */

exports.getAllProduct = function (req, res, next) {
  Store.find({}, null, { sort: { _id: 1 } }, (error, results) => {
    if (error) return next(error);
    res.json(results);
  });
};

/*===================================================================================== */
/*                               Action GET ALL PRODUCT                                 */
/*===================================================================================== */

exports.getOneProduct = function (req, res, next) {
  const query = {};
  query.product = req.query.product;
  Store.find(query, (error, results) => {
    if (error) return next(error);
    results.map((result) => {
      res.render("resultGetOneProduct", { products: result });
    });
  });
};

/*===================================================================================== */
/*                               Action POST NEW PRODUCT                                */
/*===================================================================================== */

exports.addNewProduct = function (req, res, next) {
  if (!req.body.product || !req.body.price || !req.body.id)
    res.send(`กรุณาป้อนข้อมูลให้ถูกต้อง`);
  const newStore = new Store(req.body);
  newStore.save((error, result) => {
    if (error) return next(error);
    res.render("resultNewProduct", { products: newStore });
  });
};

/*===================================================================================== */
/*                               Action UPDATE PRODUCT                                  */
/*===================================================================================== */

exports.updateProduct = async function (req, res, next) {
  try {
    await Store.findOne({ id: req.params.id }, (error, results) => {
      if (error) return next(error);
      if (req.body.id) {
        results.id = req.body.id;
      }
      if (req.body.product) {
        results.product = req.body.product;
      }
      if (req.body.price) {
        results.price = req.body.price;
      }
      results.save((error, result) => {
        if (error) return next(error);
        res.render("resultupdateProduct", { products: result });
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
};

/*===================================================================================== */
/*                               Action DELETE PRODUCT                                  */
/*===================================================================================== */

exports.deleteProduct = async function (req, res, next) {
  try {
    await Store.findOne({ id: req.params.id }, (error, results) => {
      results.delete((error, result) => {
        if (error) return next(error);
        res.render("resultdeleteProduct", { products: result });
      });
    });
  } catch (error) {
    res.json({ message: error });
  }
};
