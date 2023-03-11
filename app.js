// require('dotenv').config({ path: '.env' })
const express = require('express');
const path = require('path')


const router = express.Router();
const app = express();
const cors = require('cors');
app.use(express.json({ limit: '50mb' }));
app.use(cors({
    origin: ['*', 'http://localhost:5000']
}));

app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '/dist/trishika-birthday')));

app.use('/**', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/trishika-birthday/index.html'))
});

app.get('/test-app', (req, res) => {
    res.status(200).json({ data: 'server working fine ', success: true }).end();
})
app.listen(5000, () => {
    console.log(`server started on port:-3000`)
});
