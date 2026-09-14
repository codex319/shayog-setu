const app=require("./app.js");
require("dotenv").config();
const connectToDb=require("./src/config/database.js");
const challengeRoute=require("./src/routes/challenge.routes.js");
const cors = require("cors");
const governmentRoute = require("./src/routes/government.routes.js");


connectToDb();

app.use(cors());

app.use("/api", challengeRoute);
app.use("/api/government", governmentRoute);






app.listen(3000,()=>{
    console.log("Server is running on port number: 3000")
})

