const express = require("express")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")


const PORT = process.env.PORT || 3000

const app = express()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride("_method"));

// Set Handlebars.
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller.js")

app.use(routes)

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT)
})