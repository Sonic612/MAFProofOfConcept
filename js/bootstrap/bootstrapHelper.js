/*This is to allow the focus funtion on the images as well as the inputs*/

$(document).ready(function() {
	//when control is focused, add class to image.
	$(".form-control").focusin(function(){
		//intlTelInput has to use this in order to work properly.
		if($(this).hasClass("phone") || $(this).hasClass("imgpick")){
			$(this).parent().siblings(".img-thumbnail").addClass("img-thumbnail-focus");
		}else {
			$(this).siblings(".img-thumbnail").addClass("img-thumbnail-focus");
		}
	});
	//when control is unfocused, delete class from image.
	$(".form-control").focusout(function(){
		//intlTelInput has to use this in order to work properly.
		if($(this).hasClass("phone") || $(this).hasClass("imgpick")){
			$(this).parent().siblings(".img-thumbnail").removeClass("img-thumbnail-focus");
		}else {
			$(this).siblings(".img-thumbnail").removeClass("img-thumbnail-focus");
		}
	});
});
