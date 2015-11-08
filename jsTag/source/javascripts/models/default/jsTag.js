var jsTag = angular.module('jsTag');

// Tag Model
jsTag.factory('JSTag', function() {
  function JSTag(value, id, tagClass) {
    this.value = value;
    this.id = id;
    this.tagClass = tagClass;
  }
  
  return JSTag;
});