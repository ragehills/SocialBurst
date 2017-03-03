angular.module("social-burst")
  .controller("myController", 
    function(){
      var formCtrl = this;
      formCtrl.loginHide = false;
      formCtrl.registerHide = true;
      formCtrl.login = function(){
        formCtrl.registerHide = true;
        formCtrl.loginHide = false;
      };
      formCtrl.register = function(){
        formCtrl.registerHide = false;
        formCtrl.loginHide = true;
      };
    });