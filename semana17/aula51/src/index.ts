import dotenv from "dotenv";
import app from "./app";
import createUser from "./endpoints/createUser";
import { getAddressInfo } from "./services/getAdressInfo";
// import passRecovery from './endpoints/passRecovery'
// import { getAddressInfo } from './services/getAddressInfo'
// import { mailTransporter } from './services/mailTransporter'

dotenv.config();

app.post("/users/signup", createUser);

getAddressInfo("05424150").then(console.log);
