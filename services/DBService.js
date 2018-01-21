var MongoClient=require("mongodb").MongoClient;
exports.CreateConnection=function()
{
  MongoClient.connect("mongodb://mani:2406@ds111478.mlab.com:11478/projector").then(function(client){
    console.log("Connected To MongoDb");
    exports.database=client.db("projector");
  });
}
