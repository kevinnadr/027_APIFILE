const express = require('express');
const connectDatabase = require('./config/db');
const apiRouter = require('./routers/api');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', apiRouter);

async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();