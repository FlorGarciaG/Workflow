import app from "./app.js";

async function main() {
  app.listen(app.get("port"));
  console.log(`http://localhost:${app.get("port")}/api`);
  app.get("/api", (req, res) => res.send({ message: `Server is running...` }));
}

main();
