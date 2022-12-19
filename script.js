// Add your answer here
$(function(){
$(".lesson").hover(function(){
    $(this).find(".text-contents").fadeIn()
},
    function(){
        $(this).find(".text-contents").fadeOut()
    }
)
})