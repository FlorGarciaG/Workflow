import server from './app.js';

async function main() {
  server.listen(server.get('port'));
  console.log(`http:localhost:5000/${sever.get('port')}/api`);
  server.get("/api",(req, res) => res.send({message: `Server is running...`}));
}

main();