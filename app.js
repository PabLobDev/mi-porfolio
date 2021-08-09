const express = require('express');
const app = express();
const port = 3030;
const mainRouter = require("./routes/main")

app.use('/', mainRouter);
app.use('/about', mainRouter);
app.use(express.static('public'));

app.listen(port, console.log(`Servidor funcionando en http://localhost:${port}`));
    