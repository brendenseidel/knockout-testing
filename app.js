$(function(){

  const appViewModel = {
    personName: ko.observable('')
  };
  
  const applyHere = document.getElementById('apply-here');

  ko.applyBindings(appViewModel, applyHere);

})();