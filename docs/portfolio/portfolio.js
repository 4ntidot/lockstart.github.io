function loadPortfolio() {
	fetch("portfolio.json")
		.then(res => res.json())
		.then(data => {
			var i = 0;
			for (i == 0; i < data.length, i++) {
				const section = document.getElementById("portfolio").innerHTML;
				const addition = `
				<div class="card">
					<img src="${data[i].url}" class="thumbnail">
					<div>
						<h2>${data[i].title}</h2><br>
						<p>${data[i].description}</p>
					</div>
				</div>`
				const section += addition;
				var i += 1;
			}
		})
}
