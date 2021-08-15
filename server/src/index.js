const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const app = express();

app.use(cors());
app.use(morgan('tiny'))

app.use('/login', (req, res) => {
  res.send({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));