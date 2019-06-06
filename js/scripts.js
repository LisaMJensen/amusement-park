$(document).ready(function() {
  $("#userHeightForm").submit(function(event) {

    var userHeight = parseFloat($("#userHeight").val());
    var ride1Height = parseFloat($("#ride1").val());
    var ride2Height = parseFloat($("#ride2").val());
    var ride3Height = parseFloat($("#ride3").val());
    var ride4Height = parseFloat($("#ride4").val());

    if (userHeight >= 4) {

      $("#ride1").show();
      $("#ride2").show();
      $("#ride3").show();
      $("#ride4").show();

    } else if (2.9999999999 < userHeight && userHeight < 4) {

      $("#ride1").hide();
      $("#ride2").show();
      $("#ride3").show();
      $("#ride4").hide();

    } else if (2.49999999999 < userHeight && userHeight < 3) {

      $("#ride1").hide();
      $("#ride2").hide();
      $("#ride3").show();
      $("#ride4").hide();
    } else {

      $("#ride1").hide();
      $("#ride2").hide();
      $("#ride3").hide();
      $("#ride4").hide();
    }


    



    event.preventDefault();
  });
});
