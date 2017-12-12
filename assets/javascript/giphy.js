function getGIFS(searchfor){

	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+searchfor+"&api_key=ykq9N5w7JwsevYTd3IjKuJBHJrD3ONRD");
	xhr.done(displayGIFS) ;

};

function displayGIFS(data) {
	console.log(data);
	var html = "";
	
	for(let i = 0; i < data.data.length;i++) {
		html += "<img src='" + data.data[i].images.fixed_height_still.url + "' data-src='" + data.data[i].images.fixed_height.url + "'> ";
	}

	document.body.innerHTML= html;
	$("img").click(function(){
		var oldsrc = $(this).attr("src");
		var newsrc = $(this).attr("data-src");
		$(this).attr("src",newsrc);
		$(this).attr("data-src",oldsrc);
	});
};



getGIFS("federer");