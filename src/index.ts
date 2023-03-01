import express from 'express'
import defaultRoutes from './routes/diaries'

const app = express()
app.use(express.json())
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('test ticles now!! ' + new Date().toLocaleDateString());

    res.send('pong ' + new Date().toLocaleDateString())
})
app.use('/api/diaries', defaultRoutes)
app.listen(PORT, () => {
    console.log(`server at port ${PORT}`)
})