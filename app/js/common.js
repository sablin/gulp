$(function() {
	$(".food-carousel").owlCarousel({
		items: 4,
		nav: true,
		loop: true,
		navText : ["",""]
	});

	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		navText : ["",""]
	});


	// специально делаю без jquery

	let stockTabs = document.querySelectorAll('.promo__tab'),
		stockLink = document.querySelectorAll('.stock-link');

		for(let i=0; i<stockLink.length;i++){
			stockLink[i].addEventListener('click', funTabs);
		}
		

		function funTabs(e){
			e.preventDefault();
			for(let i =0; i<stockLink.length;i++){
				stockLink[i].classList.remove('active-link');
			}
			this.classList.add('active-link');
			let dataTab = e.target.getAttribute('data-tab');
			console.log(dataTab);
			for(let i=0; i < stockTabs.length; i++){
				if(dataTab == i){
					stockTabs[i].classList.remove('hide');
				}else{
					stockTabs[i].classList.add('hide');
				}
			}

		
		}

		let plus = document.querySelectorAll('.plus')
			mines = document.querySelectorAll('.mines');


		for(let i =0; i < plus.length; i++){
			plus[i].addEventListener('click', changeNum(1))
		};

		for(let i =0; i < mines.length; i++){
			mines[i].addEventListener('click',  changeNum(-1))
		}

		function changeNum(d){
			return function(e){
				e.preventDefault();
				let num = parseInt(this.parentElement.querySelector('.num').innerHTML);
				console.log(num)
				num += d;
				if(num<=0){
					num = 1;
				}
				this.parentElement.querySelector('.num').innerHTML = num;
				
			}
		
		}

		let callback = document.querySelector('.callback');

		callback.addEventListener('click', function(){
			alert('Должно появиться красивое всплывающее окно. Но доделать его не успел. По этому вот пока снеговик: СНЕГОВИК');
		})
		
		
		
		let nav = document.querySelector('header nav'),
		block = document.querySelector('.nav-clone');
		let box = nav.getBoundingClientRect();
		let top = box.top + pageYOffset;
			
		document.addEventListener('scroll', function(){
			if(window.pageYOffset > top){
				nav.classList.add('fixed');
				block.style.display = 'block';
			}else{
				nav.classList.remove('fixed');
				block.style.display = 'none';
			}

		})



});