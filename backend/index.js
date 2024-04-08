const express =require('express')

const app = express()
const port_number = 4000

app.use(express.json());

const prisonerRoute = require('./routes/prisonerRoute')
app.use('/prisoner', prisonerRoute)

const guardRoute = require('./routes/guardRoute')
app.use('/guard', guardRoute)


app.listen(port_number, () => {
    console.log(`server is running on http://localhost:${port_number}`)
})



//to run the back end server  use `node index.js`