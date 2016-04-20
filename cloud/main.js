
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('addfriend', function(request, response) {  
    Parse.Cloud.useMasterKey();
    var targetuserId = request.params.targetuserId,  
        currentuserId = request.params.currentuserId;  
    
    response.success(targetuserId + " " + currentuserId);
    
    // var query = new Parse.Query('Event');
    // query.equalTo("_id", targetuserId);
    // query.find({
    //   success: function(results) {

    //     var userfollowerId = results[0].get('followerIDs');
    //     var targetuser = result[0];
    //     if(!userfollowerId){
    //       var arr = [];
    //       arr.push(currentuserId);
    //       targetuser.set("followerIDs", arr);
    //     }else{
    //       userfollowerId.push(currentuserId);
    //       targetuser.set("followerIDs", userfollowerId);
    //       //targetuser.push()
    //     }
        
    //     targetuser.save().then(function(user) {  
    //       response.success(user);  
    //     }, function(error) {  
    //       response.error('error2')  
    //     });  
    //     response.success("add successfully");
    //   },
    //   error: function() {
    //     response.error("look up failed");
    //   }
  // });
}); 
