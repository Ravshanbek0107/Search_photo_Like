window.addEventListener('load', () => {
	let 
		input = document.getElementById('search'),
		btn = document.getElementById('btn'),
		resultsd = document.getElementsByClassName('results')[0],
		loader = document.querySelector('.loader'),
		heartI;
	btn.addEventListener('click', () => {
		resultsd.innerHTML = ''
		loader.style.display = 'flex'

		let url = 'https://api.unsplash.com/search/photos?client_id=M4tosJ0ZVtdOsBKPnaDIMQ3ik-IZf1OlhOWMIGfwSJw&query='+input.value;
		let fet = fetch(url);
		let then = fet.then((x) => {
			let hr = x.json(); 

			hr.then((data) => {
				for (var i = 0; i <= data.results.length - 1; i++) {

					let itemDiv = document.createElement('div');
					itemDiv.className = 'item';

					itemDiv.innerHTML = `<img src="${data.results[i].urls.full}" class="ok" alt="Url" style="width:400px;height:300px;"> <div class="hover"><i class="far fa-heart likee"></i></div>`;
					heartI=document.getElementsByClassName('fa-heart');
					resultsd.appendChild(itemDiv);


					if (i == 9) {
						loader.style.display = 'none';
					}

				}
					clicked()
			})
		})
	})
	function clicked() {
			for (var i = heartI.length - 1; i >= 0; i--) {
				heartI[i].style.color = 'white'
				heartI[i].addEventListener('click', function() {
					this.style.color = this.style.color == 'white' ? 'red' : 'red';
					
					console.log(this.style)
				})
			}
	}
})
