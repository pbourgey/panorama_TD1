$( document ).ready(function() {
    var nbItem=0;
    var currentQuantity;
    $( "#add" ).click(function( event ) {
        var bla = $('#item').val();
        if (bla !== '') {
            currentQuantity=getRandomInt(11);
            $("#shopping_list").append('<li>'+bla+'<button id="delete-btn">Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;<label id="nb-quantity">1</label>&nbsp;&nbsp;&nbsp;&nbsp;<select name="pets" id="pet-select">');
            for (let i = 0; i < currentQuantity; i++) {
                $("#pet-select").append('<option value="'+i+'">'+i+'</option>');
            }
            $("#shopping_list").append("</select><button id='ok-quantity'>OK</button></li>");
            $('#error_msg').html("");
            nbItem++;
            $("#nbItem").html(nbItem);
            $("#item").focus()
        }else{
            $('#error_msg').html("Le champs est vide.<button id='ok'>OK</button>");
        }
        
        $('#item').val("");
        
    });


    $("#shopping_list").on("click", "#delete-btn", function () {
        if(confirm("You will delete an item.")){
            $(this).parent().remove();
            nbItem--;
            $("#nbItem").html(nbItem);
        }
    });
 

    document.getElementById("item").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        document.getElementById("add").click();
      }
    });

    $("#error_msg").on("click", "#ok", function () {
        $('#error_msg').html("");
    });
    


    
    $("#shopping_list").on("click", "#ok-quantity", function () {
        $('#nb-quantity').html($("#pet-select").val());
    });


});