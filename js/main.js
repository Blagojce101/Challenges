$(function() {
	// write your code here

	const allAtag = $('a')

	allAtag.hover(
		function(){
		$(this).addClass("bg-color")
		}, function(){
		$(this).removeClass("bg-color")
		}
	);

});

const bikesContainer = document.querySelector("#bikesContainer");
const showAll = document.querySelector("#showAll");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
const leGrandBikes = document.querySelector("#leGrandBikes");
const kross = document.querySelector("#kross");
const explorer = document.querySelector("#explorer");
const visitor = document.querySelector("#visitor");
const pony = document.querySelector("#pony");
const force = document.querySelector("#force");
const eBikes = document.querySelector("#eBikes");
const ideal = document.querySelector("#ideal");


function toggleClass () {
	const allElements = document.querySelectorAll("#filterElements a");

	allElements.forEach((element) => {
		element.addEventListener("click", () => {
			document.querySelector(".click-hover")?.classList.remove("click-hover");
			element.classList.add("click-hover");
		});

	});
};


function createCard (bike) {
	return `
	<div class="card"  style="width: 31.2%; margin: 5px; height: 320px">
		<img src="./img/${bike.image}.png" style="height: 200px" class="card-img-top" alt="...">
		<div class="card-body custom-card-body">
			<h5 class="card-title">${bike.name}</h5>
			<p class="card-text">${bike.price}$</p>
		</div>
	</div>
	`;
};

function filter (filter) {
	document.querySelector(`#${localStorage.getItem("selected")}`);
	localStorage.setItem("selected", filter);

};

function renderFilterNumber (data) {
	
	const showAllBadge = document.querySelector("#showAllBadge");
	const maleBadge = document.querySelector("#maleBadge");
	const femaleBadge = document.querySelector("#femaleBadge");
	const leGrandBikesBadge = document.querySelector("#leGrandBikesBadge");
	const krossBadge = document.querySelector("#krossBadge");
	const explorerBadge = document.querySelector("#explorerBadge");
	const visitorBadge = document.querySelector("#visitorBadge");
	const ponyBadge = document.querySelector("#ponyBadge");
	const forceBadge = document.querySelector("#forceBadge");
	const eBikesBadge = document.querySelector("#eBikesBadge");
	const idealBadge = document.querySelector("#idealBadge");

	const showAllFilter = data.products.length;
	const showAllNumber = showAllFilter;
	showAllBadge.innerHTML = showAllNumber;

	const maleBikes = data.products.filter((bike) => {
		return bike.gender === "MALE";
	});
	const maleBikesNumber = maleBikes.length;
	maleBadge.innerHTML = maleBikesNumber;

	const femaleBikes = data.products.filter((bike) => {
		return bike.gender === "FEMALE";
	});
	const femaleBikesNumber = femaleBikes.length;
	femaleBadge.innerHTML = femaleBikesNumber;


	const leGrandBikes = data.products.filter((bike) => {
		return bike.brand === "LE GRAND BIKES";
	});
	const leGrandBikesNumber = leGrandBikes.length;
	leGrandBikesBadge.innerHTML = leGrandBikesNumber;


	const krossBikes = data.products.filter((bike) => {
		return bike.brand === "KROSS";
	});
	const krossBikesNumber = krossBikes.length;
	krossBadge.innerHTML = krossBikesNumber;


	const explorerBikes = data.products.filter((bike) => {
		return bike.brand === "EXPLORER";
	});
	const explorerBikesNumber = explorerBikes.length;
	explorerBadge.innerHTML = explorerBikesNumber;


	const visitorBikes = data.products.filter((bike) => {
		return bike.brand === "VISITOR";
	});
	const visitorBikesNumber = visitorBikes.length;
	visitorBadge.innerHTML = visitorBikesNumber;


	const ponyBikes = data.products.filter((bike) => {
		return bike.brand === "PONY";
	});
	const ponyBikesNumber = ponyBikes.length;
	ponyBadge.innerHTML = ponyBikesNumber;


	const forceBikes = data.products.filter((bike) => {
		return bike.brand === "FORCE";
	});
	const forceBikesNumber = forceBikes.length;
	forceBadge.innerHTML = forceBikesNumber;


	const eBikesArr = data.products.filter((bike) => {
		return bike.brand === "E-BIKES";
	});
	const eBikesNumber = eBikesArr.length;
	eBikesBadge.innerHTML = eBikesNumber;


	const idealBikes = data.products.filter((bike) => {
		return bike.brand === "IDEAL";
	});
	const idealBikesNumber = idealBikes.length;
	idealBadge.innerHTML = idealBikesNumber;

}

function fetchData(filterBy, filterValue) {
	fetch("https://challenges.brainster.tech/ajax_data/data.json")
	.then(res => res.json())
	.then((data) => {

		toggleClass();
		renderFilterNumber(data);

		
		if(filterBy === "showAll"){
			data.products.forEach((bike) => {
				bikesContainer.innerHTML += createCard(bike);
			});
			showAll.classList.add("click-hover");
		} else {
			switch (filterBy) {
			case "gender":
				bikesContainer.innerHTML = "";
				data.products
				.filter((product) => product.gender.toLowerCase() === filterValue.toLowerCase())
				.forEach((product) => {
					bikesContainer.innerHTML += createCard(product);
				});
				break;
			case "brand":
				bikesContainer.innerHTML = "";
				data.products
				.filter((product) => product.brand.toLowerCase() === filterValue.toLowerCase())
				.forEach((product) => {
					bikesContainer.innerHTML += createCard(product);
				});
				break;
			default:
				"";
			};
		};
	});
};

showAll.addEventListener("click", () => {
	fetchData("showAll");
	filter("showAll");
});

male.addEventListener("click", () => {
	fetchData("gender", "male");
	filter("male");
});

female.addEventListener("click", () => {
	fetchData("gender", "female");
	filter("female");
});

leGrandBikes.addEventListener("click", () => {
	fetchData("brand", "LE GRAND BIKES");
	filter("leGrandBikes");
});

kross.addEventListener("click", () => {
	fetchData("brand", "KROSS");
	filter("kross");
});

explorer.addEventListener("click", () => {
	fetchData("brand", "EXPLORER");
	filter("explorer");
});

visitor.addEventListener("click", () => {
	fetchData("brand", "VISITOR");
	filter("visitor");
});

pony.addEventListener("click", () => {
	fetchData("brand", "PONY");
	filter("pony");
});

force.addEventListener("click", () => {
	fetchData("brand", "FORCE");
	filter("force");
});

eBikes.addEventListener("click", () => {
	fetchData("brand", "E-BIKES");
	filter("eBikes");
});

ideal.addEventListener("click", () => {
	fetchData("brand", "IDEAL");
	filter("ideal");
});


fetchData("showAll");
filter("showAll");