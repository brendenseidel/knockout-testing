$(function(){

  const self = this;

  const appViewModel = {
    personName: ko.observable(''),
    cities: ko.observableArray(["Boston", "New York", "London"])
  };
  
  ko.applyBindings(appViewModel);

});