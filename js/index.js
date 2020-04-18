// GET THE REFERENCES
const container = document.querySelector('.container');
const links = './partials/';
//let url = 'partials-1.html';

function loadData(url){
	
	function handlePackage(response) {
		return response.text();
	}
	function handleData(Data) {
		container.innerHTML = Data;
	}
	fetch(links+url).then(handlePackage).then(handleData);
}

