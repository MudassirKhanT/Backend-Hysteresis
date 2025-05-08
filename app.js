// const fs = require("fs");
const http = require("http");
// fs.writeFileSync("hello.txt", "Welocome to Node Js");
function reqListener(req, res) {
  //   console.log(req.url);
  //   console.log(req.method);
  //   console.log(req.headers);
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>NodeJs</title></head>");
  res.write("<body><h1>NodeJs response From Mudassir Khan</h1></body>");
  res.write("</html>");
  res.end();
  //   console.log(res);
}
const server = http.createServer(reqListener);

server.listen(3000, () => {
  console.log("Server Running On Port  3000");
});
