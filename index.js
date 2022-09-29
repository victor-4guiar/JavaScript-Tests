function main(){
	let projetos = {
		nomes: ["Eixos"],
		caminhos: ["projects/000_xy/index.html"]
	}
	
	for(c=0;c<projetos.nomes.length;c++){
		let prodiv = document.getElementById('projetos');
		let caminho = document.createElement('a');
		caminho.setAttribute('id', 'caminho');
		caminho.setAttribute('href', `${projetos.caminhos[c]}`);
		caminho.setAttribute('target', '_blank');
		caminho.innerHTML = `${projetos.nomes[c]}`;
		caminho.classList.add('proj-caminho');
		prodiv.appendChild(caminho);
	}
}