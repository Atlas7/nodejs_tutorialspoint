var buf = new Buffer('aabbcc ddeeff');
var json = buf.toJSON(buf);

console.log(json);