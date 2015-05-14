//= require jquery.tokeninput

$(document).ready(function(){

  function enableTokenizer() {
    $('input.token-input').tokenInput(function($input){
      var modelName = $input.data("model-name");
      return "/admin/autocomplete/"+modelName;
    }, {
      minChars: 3,
      propertyToSearch: "value",
      theme: "facebook",
      tokenLimit: 1,
      preventDuplicates: true
    });
  }

  function enablePagination() {
    $('.resource-table-footer a').on('ajax:success', function(e, data, status, xhr) {
     $('.relationship-table').replaceWith(data);
     enablePagination();
     enableTokenizer();
    });
  }


  enablePagination();
  enableTokenizer();
});
