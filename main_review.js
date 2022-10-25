$(document).ready(function(){
	loadReview();
	$(".btn_submit").click(
		function(){
				var name = document.getElementById('name').value;

				var email = document.getElementById('email').value;

				var text = document.getElementById('text').value;

				sendForm(name, email, text);
			return false;
		});
});


function sendForm(name, email, text){
	$.post("php/add_review.php", {name: name, email: email, text: text} ,  successAdd);
}

function successAdd(data){
	alert('Отзыв добавлен!');
	document.review__form.reset();
	commentClear();
	loadReview();
}
function commentClear(){
    document.getElementById('place_review').innerHTML = '';
}
function loadReview(){
	$.ajax ({
				url: "php/get_review.php",
				type: "POST",
				data: ({}),
				dataType: "html",
				success: successLoadReview
			});
}

function successLoadReview(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let review =
			`<div class="review_place">
				<div class="review_block">
					<div class="review_name">
						${data[i].name}
					</div>
					<div class="review_email">
						${data[i].email}
					</div>
					<div class="review_text">
						${data[i].text}
					</div>
				</div>
			</div>`;
			document.getElementById("place_review").insertAdjacentHTML('afterbegin', review);
		}}
