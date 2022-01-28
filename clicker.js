//CSS selector for the "hide" button
var search = '.css-18t94o4.css-1dbjc4n.r-173mn98.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1s2bzr4.r-15ysp7h.r-4wgw6l.r-1ny4l3l.r-ymttw5.r-o7ynqc.r-6416eg.r-lrvibr';

function clearPage() {
	//clears all the warnings that in the document right now and have not been caught by arrive
	var buttons = document.querySelectorAll(search)
	buttons.forEach((button, i) => {
		button.click()
	});
}

function main() {
	//wait for a second to give the page time to load
	setTimeout(function() {
		console.log('RemoveTwitterWarnings initialized');
		clearPage()
		//attach arrive to every new tweet
		document.arrive('article', function() {
			if (this.contains(document.querySelector(search))) {
				this.querySelector(search).click();
				console.log("Content Warning removed")
			}
		});
	}, 1000);
};

main();
