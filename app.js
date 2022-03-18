const app = require("express")()
const PORT = process.env.PORT || 3000;
const index = require('./index.html')

app.get("", (req, res) => {
    res.sendFile(index)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})