$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });

  event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
  var task = $(this).val();
  if (event.which === 13){
    if (task.length != 0){
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + task + "</li>");
      $(this).val("");
    }
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle(500);
});
