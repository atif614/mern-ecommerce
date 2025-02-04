import mongoose from "mongoose";

export function ConnectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(data => console.log(`Connected to database ${data.connection.host}`))
        // .catch(error => console.log(error))
}