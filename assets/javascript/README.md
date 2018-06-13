
ABOUT 1990s Nickelodeon TV Shows!:

1990s Nickelodeon TV Shows! Is an APIs & AJAX assignment. Instructions were as follows:

1.Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

	-We chose animals for our theme, but you can make a list to your own liking.


2.Your app should take the topics in this array and create buttons in your HTML.


	-Try using a loop that appends a button for each string in the array.


3.When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

4.When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5.Under every gif, display its rating (PG, G, so on).


	-This data is provided by the GIPHY API.
	-Only once you get images displaying with button presses should you move on to the next step.


6.Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

7. Deploy your assignment to Github Pages.

TECH USED: HTML, CSS, JavaScript, JQuery, APIs, AJAX

HIGHLIGHT CODE:

function displayGIFS(data) {
	console.log(data);
	var html = "";
	
	for(let i = 0; i < data.data.length;i++) {
		html+="<figure><figcaption>rating: "+ data.data[i].rating + "</figcaption>";
		html += "<img src='" + data.data[i].images.fixed_height_still.url + "' data-src='" + 					data.data[i].images.fixed_height.url + "'> ";
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


CONCLUSION: 
	In completing this assignment, I got an introduction into how to use an API. It was interesting to see how to work with an API route in javascript.

GRADE: A

INSTRUCTOR COMMENT:

from Dylan Acup 
January 10th, 8:28 pm

Nice job with the Giphy API! It looks like all of the functionality is working well and the UI looks clean. I also really like the 90's theme! The only small thing I noticed was that the user can make duplicate buttons which can be fixed by checking the array to see if the button already exists before adding the new one. Keep up the good work!
