import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

const port = 8080||process.env.PORT
app.set("port",port)

app.get("/",(req,res)=>{
    return res.send({
        data:"Redis DB API"
    })
});

app.listen(app.get("port"),()=>{
    console.log('Rocking at '+app.get("port"))
})
