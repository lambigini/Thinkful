const { PORT = 5000 } = process.env;

const app = require("./app");

const listener = () => console.log(`listening on port { PORT}`);

app.listen(PORT, listener);
