let nbTour=0
let i=0;
let j=0;
let oldI=0;
let oldJ=0;

function tri() {
	
	nbTour++;
	/*console.log(" i : "+i+", j: "+j+", nbTour : "+nbTour);*/
	let tmp;
	let taille = 9;

	let elt = document.getElementsByClassName("num");	
	let comptI = document.getElementById("valI");
	let comptJ = document.getElementById("valJ");
	let rcI = document.getElementsByClassName("labelI");
	let rcJ = document.getElementsByClassName("labelJ");

	comptI.innerHTML = i;
	comptJ.innerHTML = j;

	rcI[i].style.visibility = "visible";
	rcJ[j].style.visibility = "visible";

	if(i!=oldI) {
		rcI[oldI].style.visibility = "hidden";
	}

	if(j!=oldJ) {
		rcJ[oldJ].style.visibility = "hidden";
	}

	if(elt[i].textContent>elt[j].textContent) {
		tmp = elt[i].textContent;
		elt[i].innerHTML = elt[j].textContent;
		elt[j].innerHTML = tmp;
	}

	if(j<taille-1) {
		oldJ=j;
		j++;
	} 
	else if(i<taille-1) {
		oldI=i;
		i++;
		oldJ=j;		
		j=i;
	}
	 	
}