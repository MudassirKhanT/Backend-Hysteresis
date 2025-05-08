const fs = require("fs");
const http = require("http");
fs.writeFileSync("hello.txt", "Welocome to Node Js");
function reqListener(req, res) {
  console.log(req);
  //   console.log(res);
}
const server = http.createServer(reqListener);

server.listen(3000, () => {
  console.log("Server Running On Port  3000");
});
