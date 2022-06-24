let info = [];


fetch('/Dev.f/buscador/js/app.json')
	.then(response => response.json())
	.then(data => {
		info = data;
		console.log(info)

		render(info);
	});

/*const buttonFavoritos = document.querySelector("#button-favoritos");

let favoritos = [];
if (localStorage.getItem("favoritosStorage")) {
	favoritos = JSON.parse(localStorage.getItem("favoritosStorage"));
function listFavs() {
	render(favoritos);
}*/


/*const formSearch = document.querySelector("#search-id");
const result = document.querySelector("#resultado");
const input = document.querySelector("#id");
const tipos = document.querySelector("#status");*/

/*const buttonAsc = document.querySelector("#button-asc");
const buttonDesc = document.querySelector("#button-desc");

formSearch.addEventListener("submit", search);
input.addEventListener("#search-id", search);
fetch('/Dev.f/buscador/js/app.json')
	.then(response => response.json())
	.then(data => {
		info = data;/

		render(info);
	});
buttonAsc.addEventListener("click", orderAsc)
buttonDesc.addEventListener("click", orderDesc)
buttonFavoritos.addEventListener("click", listFavs)


}*/
/*
function searchByType(e){
		let t = e.target.value;
		let filter(function(pokemon){
				return .type.includes(t);
		});
		render(pokemonesFiltrados);
}*/


//const resetList = document.querySelector("#reset");


function render(info) {
	document.querySelector("#resultado").innerHTML = "";

	for (var i = 0; i < info.results.length; i++) {
		console.log(info.results[i])
		let card =

			//<div class="container">
			//	<div class="row  m-3 row-cols-1 row-cols-md-3 g-4">
			`<div class="col-md-4 px4 gx-4 g-3 col-sm-3" >
				  <div class="card">
					 <img src="${info.results[i].image}"
					 class="card-img-top">
					  <div class="card-body">
						 <span style="font-family: 'Nosifer', cursive;"    class="card-title">${info.results[i].name
			       }</span>
						 <button type="button" class="btn rounded-circle btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
						 <i class="fa-solid fa-info"></i>
						 </button>
						 </div>
						  </div>
		 			</div>



<div class="modal fade" id="exampleModal${i}" tabindex="-1"    aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 style="font-family: 'Nosifer', cursive;"   class="text-success modal-title" id="exampleModalLabel">${info.results[i].name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal"   aria-label="Close"></button>
      </div>
        <div class="modal-body">
				 <img src="${info.results[i].image}"class="card-img-top">
			   	<ul>
					 <li><h3 class="card-text">${info.results[i].id}</h3></li>
					 <li><h3 class="card-text">${info.results[i].status}</h3></li>
				   <li><h3 class="card-text">${info.results[i].species}</h3></li>
			     <li><h3 class="card-text">${info.results[i].gender}</h3></li>
		    	</ul>
				</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info btn-primary"><i class="fa-solid fa-heart"></button>
      </div>
    </div>
  </div>
	
</div>`;


		/* let genero = info.results[i].gender;

		for (var j = 0; j < tipos.length; j++) {
			card +=
		}
		//</div>	card +=
		//</div>
	*/
		document.querySelector("#resultado").innerHTML += card;


	}
}



/*function search(p) {
	let results = info.filter(function (id) {
		return id.name === id
	});
	render(results);
}

resetList.addEventListener("search", function (e) {
	e.preventDefault();
	render(info.results);
	return false;
});

formSearch.addEventListener("sumbit", function (e) {
	e.preventDefault();
	search(e.target.id.value);
	return false;
});



/*var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

 function alert(message, type) {
var wrapper = document.createElement('div')
wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

	alertPlaceholder.append(wrapper)
 }

if (alertTrigger) {
	alertTrigger.addEventListener('click', function () {
		alert('Nice, you triggered this alert message!', 'success')
	})}*/