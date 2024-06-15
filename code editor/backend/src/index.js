const express = require('express');
const bodyParser = require('body-parser');
const executeRouter = require('./routes/execute');

const app = express();
app.use(bodyParser.json());

app.use('/execute', executeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
