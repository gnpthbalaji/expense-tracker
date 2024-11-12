const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync, read} = require('fs');
const app = express();

require ('dotenv').config();

var PORT = process.env.PORT

app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').forEach((route) => {
    const routePath = `./routes/${route}`;
    app.use('/api/v1', require(routePath));
});
const authRoutes = require('./routes/authRoutes');
app.use('/api/v1/auth', authRoutes);



app.get('/', (req, res) => {
    res.send('Hi JS World')
})
const server = () => {
    db()
    const appServer = app.listen(PORT, () => {
        console.log('Server is running on port:', PORT)
    });
    appServer.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${PORT} is in use, trying a different port...`);
            PORT++;
            appServer.listen(PORT);
        } else {
            console.error('Server error:', err);
            process.exit(1);
        }
    });

    const shutdown = () => {
        appServer.close(() => {
            console.log('Server closed gracefully');
            process.exit(0);
        });
        setTimeout(() => process.exit(0), 500);
    };
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
    process.on('SIGUSR2', shutdown);
}

server();
