function submitForm() {
  alert("Formuläret har skickats!");
  window.location.href = "index.html"; // tillbaka till startsidan
}


  $(document).ready(function(){

    $("#togglebutton").click(function(){

        $("#hiddentext").toggle(); // Visar eller döljer elementet

    });

});

$(document).ready(function(){

  $("#togglebutton1").click(function(){

      $("#hiddentext1").toggle(); // Visar eller döljer elementet

  });

});

$(document).ready(function(){

  $("#togglebutton2").click(function(){

      $("#hiddentext2").toggle(); // Visar eller döljer elementet

  });

});

$(document).ready(function(){

  $("#togglebutton3").click(function(){

      $("#hiddentext3").toggle(); // Visar eller döljer elementet

  });

});


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var form = event.target;
  var messageDiv = document.getElementById("message");

  if (form.checkValidity()) {
      // Visa meddelande "Tack för ditt bidrag"
      messageDiv.innerText = "Tack för ditt bidrag!";
      messageDiv.style.display = "block";

      // Omdirigera till startsidan efter 3 sekunder
      setTimeout(function() {
          window.location.href = "index.html";
      }, 3000);
  } 
});




