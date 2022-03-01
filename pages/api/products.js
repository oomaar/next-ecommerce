import products from "../../data/products.json";

export default function getProducts(req, res) {
  res.status(200).json(products);
}
