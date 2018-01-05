$(function(){

  const appViewModel = {
    personName: 'Brenden'
  };
  
  const applyHere = document.getElementById('apply-here');

  ko.applyBindings(appViewModel, applyHere);

})();

