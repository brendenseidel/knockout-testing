$(function(){

  const appViewModel = {
    personName: ko.observable('Brenden')
  };
  
  const applyHere = document.getElementById('apply-here');

  ko.applyBindings(appViewModel, applyHere);

})();

