import dotenv from "dotenv";
import app from "./app";
import createUser from "./endpoints/createUser";
import { getAddressInfo } from "./services/getAdressInfo";
import { mailTransporter } from "./services/mailTransporter";
// import passRecovery from './endpoints/passRecovery'
// import { getAddressInfo } from './services/getAddressInfo'

dotenv.config();

app.post("/users/signup", createUser);

// getAddressInfo("05424150").then(console.log);

mailTransporter
  .sendMail({
    from: "<carlos.dev.teste@gmail.com>",
    to: "carlos.dev.teste@gmail.com",
    subject: "Mensagem de exemplo",
    text: "Este é um texto de exemplo :)",
    html: "<p>Exemplo em HTML</p>",
  })
  .then(console.log);
