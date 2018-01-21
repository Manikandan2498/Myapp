var movies=require('./moviedata');
var dbService=require('../services/DBService');
exports.getAllMovies=function(req,res,next)
{
var db=dbService.database;
var moviesCollection=db.collection("movies");
moviesCollection.find().toArray().then(function (result) {
  console.log(result);
  var outputJSON={
    "isSuccess":true,
    "data":result
  }
  return res.json(outputJSON);
});
  //console.log("dbservices",dbService);
  //return res.json(movies);
}
exports.addNewMovie=function(req,res,next)
{
  var db=dbService.database;
      movies=req.body;
      moviesCollection=db.collection("movies");

      moviesCollection.insert(movies).then(function (save_data)
    {
      return res.json({
        "isSuccess":true
      });
    });
}
