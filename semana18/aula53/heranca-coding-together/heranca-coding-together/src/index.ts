import app from "./app"
import { BaseDatabase } from "./data/BaseDatabase"
import { CharacterDatabase } from "./data/CharacterDatabase"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"
import { Animal, Dog, Owl } from "./types"

// endpoint para teste
app.get("/", (req, res) => {
  res.send("Hello from Express")
})

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

// console.log(new Date());

// exemplo de polimorfismo
export function testDatabase(database: BaseDatabase) {
  console.log(database.getHost())
}

const cdb = new CharacterDatabase()

testDatabase(cdb)




const pluto: Dog = new Dog("Pluto", 30)
const scooby: Dog = new Dog("Scooby Doo", 31)

const hedwig: Owl = new Owl("Hedwig", 17, 20)

// console.log(Dog.nomeCientifico)

// Dog.nomeCientifico = "Canis Familiaris"

// console.log(Dog.nomeCientifico)

// const canil: Dog[] = [pluto, scooby, new Dog("Mudley", 44), hedwig]  // gera erro

const zoo: Animal[] = [pluto, hedwig, scooby, new Animal("animal", 1)]