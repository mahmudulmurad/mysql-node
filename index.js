const express = require('express')
const app = express()
require('./db/connection')
const userRoute = require('./routers/user')

app.use(express.json())
app.use(userRoute)

app.listen(3010, () => {
    console.log('Express server is running');
})