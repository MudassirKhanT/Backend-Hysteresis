const fs = require("fs");
const http = require("http");
fs.writeFileSync("hello.txt", "Welocome to Node Js");
function reqListener(req, res) {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  //   console.log(res);
}
const server = http.createServer(reqListener);

server.listen(3000, () => {
  console.log("Server Running On Port  3000");
});
