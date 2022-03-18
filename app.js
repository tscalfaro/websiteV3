const app = require("express")()
const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send(require('./index.html'))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})