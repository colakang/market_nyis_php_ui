/**
 * Created by shaochenlu on 9/16/16.
 */

'use strict';

angular.module('profileEdit', []).
controller('profileCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.genders = [{
    name: '男',
    value: 'male'
  },{
    name: '女',
    value: 'female'
  }];
  $scope.basicInfo = {
    nickname: "",
    phoneNum: "",
    gender: {},
    address: "",
    mailAddress: "",
    email: "",
    edit: false,
    collapse: false,
    enableEdit: function () {
      if(!this.collapse && !this.edit) {
        this.edit = true;
      }
    },
    toggleCollapse: function () {
      this.collapse = !this.collapse;
    },
    save: function() {
      var self = this;
      var data = {
        oper: 'profile',
        nickname: self.nickname,
        basicInfo: {
          phoneNum: self.phoneNum,
          gender: self.gender,
          address: self.address,
          mailAddress: self.mailAddress
        }
      };
      $http.post('/update', data).
      then(function (res) {
        console.log(res);
        self.nickname = res.data.nickname;
        for(var attr in res.data.basicInfo) {
          self[attr] = res.data.basicInfo[attr];
        }
        self.edit = false;
      }, function (err) {
        console.log(err);
      });
    },
    genderInit: function (gender) {
      if(gender == "male")
        this.gender = $scope.genders[0];
      else
        this.gender = $scope.genders[1];
    }
  };
  $scope.idInfo = {
    dob: "",
    nationality: {},
    passportNum: "",
    passportIssueCountry: "",
    SSN: "",
    edit: false,
    collapse: false,
    enableEdit: function () {
      if(!this.collapse && !this.edit) {
        this.edit = true;
        console.log(this);
      }
    },
    toggleCollapse: function () {
      this.collapse = !this.collapse;
    },
    save: function() {
      var self = this;
      var data = {
        oper: 'profile',
        idInfo: {
          dob: self.dob,
          nationality: self.nationality
        }
      };
      $http.post('/update', data).
      then(function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);
      });
      this.edit = false;
    }
  }
}]);