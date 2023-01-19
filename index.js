const express = require("express");

const app = express();

app.use(express.json());

require("./PartOne")(app);
require("./PartTwo")(app);
require("./PartThree")(app);



app.listen(3000, () => {
    console.log("Server is up and running on port number " + 3000);
});