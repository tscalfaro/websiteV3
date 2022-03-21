const app = require("express")()
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", './index.html'))
})

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "./index.html"));
  });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})