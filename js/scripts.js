//business logic
// function for clearing document
function showDiv() {
 document.getElementById('hidden').style.display = "block";
}

//user interface logic
$(document).ready(function(){
  $("form.size").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=size]:checked").each(function(){
      var size = $(this).val();
      $('.pizza-size').append(size);
    });
  });
  $("form.style").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=style]:checked").each(function(){
      var style = $(this).val();
      $('.pizza-style').append(style);
    });
  });

  $("form.toppings").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      $('.pizza-toppings').append(" " + toppings + " ");
    });
        // $('#pizza').show;
  });

  $("form#delivery").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedAddress = $("input#address").val();
    var inputtedPhone = $("input#phone").val();

    $(".addressto").append(" " + inputtedName + " " + inputtedAddress + " " + inputtedPhone);

    $("#delivery-form").click(function() {
      $("#deliveryConfirm").show();
    });

    $("input#name").val("");
    $("input#address").val("");
    $("input#phone").val("");
  });

});
