const fastify = require('fastify');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');

const app = fastify();
const port = process.env.PORT || 5000;

const mongoUri = '';

mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err, res) => {
    if (err) throw err;
    console.log('BD online');
  }
);

noteRoutes(app);

//set application listening on port 5000 of localhost
app.listen(port, async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
