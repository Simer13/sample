const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/emergency', require('./routes/emergency'));

app.listen(5000, () => console.log("Server running on port 5000"));
