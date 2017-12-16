$(document).ready(function(){




let topics = ["Rugrats","Hey Arnold", "Rocket Power","Aaahh!!! Real Monsters","Angry Beavers","Rocko's Modern Life", "The Wild Thornberrys", "Ren and Stimpy"];

$("#add_button_box button").click(addButton);

$("#search_box").keyup(function(e){
	if(e.keyCode===13){
		addButton();
	}
});

 getButtons();
function getButtons(){


	let html_gif="";
	for(let i=0; i<topics.length; i++) {
		html_gif+= "<button>" + topics[i] + "</button>";


	}

	$("#button_box").html(html_gif);
	$("#button_box button").click(function() { 
		getGIFS($(this).text());
	});
};

function addButton(){
	let searchstr=$("#add_button_box input").val();
	$("#add_button_box input").val("");
	$("#add_button_box input").focus();
	if(!searchstr || searchstr=== "") {
		$("#add_button_box h3").text("Please add text!");
		return;
	}
	$("#add_button_box h3").text("Add a show!");
	topics.push(searchstr);
	getButtons();
	getGIFS(searchstr);
}


function getGIFS(searchfor){

	var xhr = $.get("http://api.giphy.com/v1/gifs/search?limit=10&rating=g&q="+searchfor+"&api_key=ykq9N5w7JwsevYTd3IjKuJBHJrD3ONRD");
	xhr.done(displayGIFS) ;

};

function displayGIFS(data) {
	console.log(data);
	var html = "";
	
	for(let i = 0; i < data.data.length;i++) {
		html+="<figure><figcaption>rating: "+ data.data[i].rating + "</figcaption>";
		html += "<img src='" + data.data[i].images.fixed_height_still.url + "' data-src='" + data.data[i].images.fixed_height.url + "'> ";
		html+= "</figure>";

	}

	// document.body.innerHTML= html;
	$("#gif_box").html(html);
	$("img").click(function(){
		var oldsrc = $(this).attr("src");
		var newsrc = $(this).attr("data-src");
		$(this).attr("src",newsrc);
		$(this).attr("data-src",oldsrc);
	});
};



});
