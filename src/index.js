//import fastify & mongoose
const fastify = require('fastify');
const mongoose = require('mongoose');

//initialized Fastify App
const app = fastify();

//connected fastify to mongoose
mongoose.connect(
  'mongodb+srv://fastifyuser:fastifyuser@learningfastify.d9yvv.mongodb.net/fastifyDatabase?retryWrites=true&w=majority',
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

//handle root route
app.get('/', async (request, reply) => {
  try {
    reply.send('Hello world!');
  } catch (e) {
    console.error(e);
  }
});

//set application listening on port 5000 of localhost
app.listen(5000, async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
