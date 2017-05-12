//business logic
// function for clearing document
function showDiv() {
 document.getElementById('hidden').style.display = "block";
}

//user interface logic
$(document).ready(function(){
  $("form#pizzaChoice").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=size]:checked").each(function(){
      var size = $(this).val();
      $('.pizza-size').append("<h3>Thank you for your order.</h3>" + "<h2>Your pizza:</h2>"
+ "<p>Size: " + size +"</p>");
      });
    $("input:checkbox[name=style]:checked").each(function(){
      var style = $(this).val();
      $('.pizza-style').append("<p>Style: " + style +"</p>");
      });
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      $('.pizza-toppings').append("<p>Style: " + toppings + " " + "</p>");
    });

    $("#pizzaChoice").click(function() {
      $("#confirmation").show();
    });
  });

  $("form#delivery").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedAddress = $("input#address").val();
    var inputtedPhone = $("input#phone").val();
    $(".addressto").append("<p>We are delivering to: " + inputtedName + " " + inputtedAddress + " " + inputtedPhone);

    $("#delivery-form").click(function() {
      $("#deliveryConfirm").show();
    });

    $("input#name").val("");
    $("input#address").val("");
    $("input#phone").val("");
  });
});
