//******PURPOSE: this is used to control the application data
//*******CREATED BY: Murali M
//*******CREATED DATE: 12/19/2017

//defining the'controller' to control the application data
app.controller('appCtrl',function($scope){
    $scope.Name = ''
    $scope.mailId = ''
    $scope.MobNo = undefined
    $scope.button_name = 'Add'
    $scope.Gender 
    //creating list to store objects
    $scope.list = []
    //defining a variable
    //will be used to check the uniqueness of given 'Name'
     var check = undefined
     //defining the function 'add' to add content to the table
     $scope.add = function () {
    //creating an object to be stored in the list
         var obj = {        
             Name : $scope.Name,
             DOB : $scope.DOB,
             Gender : $scope.Gender,
             mailId : $scope.mailId,
             MobNo : $scope.MobNo
         }
    //checking for the operation 'Add' or 'Update'
         if($scope.button_name=='Update'){
                 $scope.list[check].index = check
                 $scope.list[check].Name = obj.Name
                 $scope.list[check].DOB = obj.DOB
                 $scope.list[check].Gender = obj.Gender
                 $scope.list[check].mailId =obj.mailId
                 $scope.list[check].MobNo = obj.MobNo
      //changing the button 'update' to 'Add'
                 $scope.button_name = 'Add'        
         }
         else{    
   //checking for uniqueness of 'Name'
             var valid = $scope.list.filter(x => x.Name == obj.Name).length==0  
             if (valid) {
   //pushing object contents to list
                 $scope.list.push(obj);
             }
         }
     };
    //defining the function 'edit' to edit the stored content
    $scope.edit = function(obj){
        $scope.Name = obj.Name
        $scope.DOB = obj.DOB
        $scope.Gender = obj.Gender
        $scope.mailId = obj.mailId
        $scope.MobNo = obj.MobNo
        //on clicking Edit button replace'Add'by'Update'
        $scope.button_name = 'Update'
        for(var i=0;i<$scope.list.length;i++){
    //checking for any occurence of the given Name in list
            if($scope.list[i].Name == obj.Name)
   //holding the index of content in table to be operated on
    //where given Name is found
    //will be carried to Update the content
                check=i
        }
    };
    //defining the function 'delete' to delete the stored table's content
    $scope.delete = function(obj){
        for(var i=0;i<$scope.list.length;i++)
    //checking for the c=occurence of the given Name in list
            if($scope.list[i].Name == obj.Name){
    //holding the index of content where given Name is matched
    //carried to delete the content
                check = i
    //deleting the content of table of the index 'check'
                $scope.list.splice(check,1);
    //break the loop when given name is found and element is deleted
                break
            }
    //changing button 'Update' to 'Add'
        $scope.button_name = 'Add'
    };
});