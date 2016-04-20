
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("addfriend", function(request, response) {  
    var targetuserId = request.params.targetuserId,  
        currentuserId = request.params.currentuserId;  
  
    var query = new Parse.Query("_User");
    query.equalTo("_id", targetuserId);
    query.find({
      success: function(results) {

        var userfollowerId = results[0].get("followerIDs");
        var targetuser = result[0];
        if(!userfollowerId){
          var arr = [];
          arr.push(currentuserId);
          targetuser.set("followerIDs", arr);
        }else{
          userfollowerId.push(currentuserId);
          targetuser.set("followerIDs", userfollowerId);
          //targetuser.push()
        }
        response.success("add successfully");
      },
      error: function() {
        response.error("movie lookup failed");
      }
  });
}); 
