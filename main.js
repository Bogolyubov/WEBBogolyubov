$(document).ready(function(){
	loadContent();
	$('#more_news').click(
		function (){
			var count = document.getElementById('main__items').getElementsByClassName('news_place').length;
			$.post("php/get_more_news.php", {kol: 5, tek: count}, successMorenews);
		});
});

function loadContent(){
	$.post("php/get_content.php",{}, successLoad);
}

function successLoad(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let news =
			`	<div class="news_place">
					<div class="news_cart">
							<div class="picture">
								<img src="${data[i].img}" alt="${data[i].title}">
							</div>
							<div class="news_cont">
								<div class="news_title">
									${data[i].title}
								</div>

								<div class="news_text">
									<p>
										${data[i].text}
									</p>
								</div>
							</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', news);
		}}


function successMorenews(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let news =
			`	<div class="news_place">
					<div class="news_cart">
							<div class="picture">
								<img src="${data[i].img}" alt="${data[i].title}">
							</div>
							<div class="news_cont">
								<div class="news_title">
									${data[i].title}
								</div>

								<div class="news_text">
									<p>
										${data[i].text}
									</p>
								</div>
							</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', news);
}}
