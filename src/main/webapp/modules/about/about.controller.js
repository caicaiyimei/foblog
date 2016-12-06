/**
 * Created by Pan on 2016/9/11.
 */

app.controller("AboutController", function (AboutService, $scope) {
	//console.log("AboutController")
    var getInfo = function(){
        AboutService.get().then(function(data){
            console.log(data);
            if(data.resultData!=null){
                if(data.resultData.profile!=null && data.resultData.profile!=""){
                    data.resultData.profile = marked(data.resultData.profile);
                }
                $scope.info = data.resultData;
            }
        })
    }
    getInfo();
});