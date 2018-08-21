function gitJoke() {
	fetch("https://raw.githubusercontent.com/EugeneKay/git-jokes/lulz/Jokes.txt", {
		method: "GET",
		mode: "cors",
		cache: "no-cache",
		credentials: "omit",
	}).then(function (response) {
		response.text().then(function (t) {
			var jokes = t.split('\n').filter(s => s.length > 0);
			var randomJoke = jokes[Math.floor(Math.random()*jokes.length)];
			document.getElementById("git-joke").innerHTML = randomJoke;
		});
	});
}