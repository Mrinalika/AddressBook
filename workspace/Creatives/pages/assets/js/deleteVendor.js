// Check the specific vendor by selecting it
// var delvendor = document.getElementById("vendor-details");
$(document).on("click", "tbody", function(){
	$(this).toggleClass("deletevendor");
});

// Click on X to delete
// var delicon = document.getElementById("delete-box");
// $("tbody").on("click", delicon, function(){
// 	$(this).parent().fadeOut(500,function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// });

$(document).on("click","tr.rows td", function(e){
    alert(e.target.innerHTML);
});