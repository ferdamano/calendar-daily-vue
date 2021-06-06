const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.get('/events', (req, res) => {
    res.send(
        [{
            datetime: "2021-06-06T04:20:10+00:00",
            title: "Cupcake marzipan topping",
            description: "Cotton candy dessert marshmallow donut cake bear claw. Caramels pie jujubes. Gingerbread gummies tootsie roll icing chupa chups chupa chups. Candy canes lemon drops liquorice ice cream bonbon. Brownie chocolate bar macaroon lollipop. Halvah chocolate cake jelly-o oat cake gummi bears cookie."
        }]
    )
})

console.log("Server started");
app.listen(process.env.PORT || 8081)