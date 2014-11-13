'use strict';
/*global angular*/

// http://stackoverflow.com/a/18096071/693110
angular.module('ngTruncate', [])
  .filter('truncate', function () {

    function sub(str,n){
      var r=/[^\x00-\xff]/g;
      if(str.replace(r,'mm').length<=n){return str;}
      var m=Math.floor(n/2);
      for(var i=m;i<str.length;i++) {
        if(str.substr(0,i).replace(r,'mm').length >= n) {
          return str.substr(0,i);
        }
      }
      return str;
    }

    return function (value, max, tail) {
      if (!value) {
        return '';
      }

      max = parseInt(max, 10);
      if (!max || value.length <= max) {
        return value;
      }

      value = sub(value, max);

      var wordWise = true;
      if (wordWise) {
        var lastSpace = value.lastIndexOf(' ');
        if (lastSpace !== -1) {
          value = value.substr(0, lastSpace);
        }
      }

      return value + (tail || ' …');
    };
  });
