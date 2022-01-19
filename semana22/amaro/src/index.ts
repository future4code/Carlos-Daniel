import { app } from "./controller/app";
import { userRouter } from "./controller/routes/userRouter";
import { productRouter } from "./controller/routes/productRouter";

app.use("/user", userRouter);
app.use("/product", productRouter);
