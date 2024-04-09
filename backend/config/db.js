const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const conn = async () => {
    try {
        
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.tfoxgud.mongodb.net/`)

        console.log("Conectou ao banco!");

        return dbConn
    } catch (error) {
        console.log("Erro ao se conectar ao banco de dados...", error)
    }
}

conn()

module.exports = conn