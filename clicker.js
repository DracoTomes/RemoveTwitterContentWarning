//CSS selector for the "hide" button
var css_warning_button = '.css-18t94o4.css-1dbjc4n.r-173mn98.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1s2bzr4.r-15ysp7h.r-4wgw6l.r-1ny4l3l.r-ymttw5.r-o7ynqc.r-6416eg.r-lrvibr';
var css_messages = '.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-184en5c'

function clearPage() {
	console.log("clearPage")
	//clears all the warnings that in the document right now and have not been caught by arrive
	var click_elem_buttons = document.querySelectorAll(css_warning_button)
	var del_elem_messages = document.querySelector(css_messages)
	click_elem_buttons.forEach((button, i) => {
		button.click()
	});
	if (document.contains(del_elem_messages)) {
		var option =  browser.storage.sync.get('remove_messages')
		option.then((res) => {
			if (res.remove_messages) {
				del_elem_messages.remove()
				console.log('del_elem_messages removed')
			}
		}) 
	}
}

function main() {
	//wait for a second to give the page time to load
	setTimeout(function() {
		console.log('RemoveTwitterWarnings initialized');
		clearPage()
		//attach arrive to every new tweet
		document.arrive('article', function() {
			if (this.contains(document.querySelector(css_warning_button))) {
				this.querySelector(css_warning_button).click();
				console.log("Content Warning clicked")
			}
		});
	}, 1000);
};

main();
