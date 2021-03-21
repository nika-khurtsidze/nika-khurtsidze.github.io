function sendMail() {
    var grade = document.getElementById("grade").value; 
    if(grade<3){
	alert("Come on! It cannot be this bad, try again!");
	return;
    }
    var name = document.getElementById("fname").value;
    var best = document.querySelector('input[name="page"]:checked').value;
    var comments = document.getElementById("additionalComments").value;

    var body = "Congratulations! ";
    body += "You have successfully completed the final assignment.";
    body += "Here is a feedback from " + name;
    body += ": Your final grade is (on the scale from 1 to 5): " + grade;
    body += "! I found the page ``" + best + "'' most attractive.";
    if(comments != null && comments != '' && comments.length>1) {
	body += "Additional comments: " + comments;
    }
    //alert(body);
    window.location.href = 'mailto:nika.khurtsidze@fakehost.com?subject=Feedback from ' + name + '&body=' + body;
}

$(document).ready(function(){
    $('.thumb').click(function(e) {
	var imgsrc = $(e.target).attr('src');
	$('.image').attr('src', imgsrc).show();
    });
});

