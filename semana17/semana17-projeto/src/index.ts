import app from "./app";
import getAllUsers from "./endpoints/getAllUsers";
import createUser from "./endpoints/createUser";
import getAllProducts from "./endpoints/getAllProducts";
import createProduct from "./endpoints/createProduct";
import getAllPurchases from "./endpoints/getAllPurchases";
import createPurchase from "./endpoints/createPurchase";

//Users
app.get("/users", getAllUsers);
app.post("/users", createUser);

//Products
app.get("/products", getAllProducts);
app.post("/products", createProduct);

//Purchases
app.get("/purchases", getAllPurchases);
app.post("/purchases", createPurchase);
