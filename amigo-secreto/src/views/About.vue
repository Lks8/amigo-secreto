<template>
	<div class="about">
		<h1>Sobre o criador</h1>
		<div class="content">
			<img src="../assets/eu.png" />
			<div>
				<p>
					Meu nome é Lucas Martins Coelho, sou formado em Engenharia
					da computação pela Mauá e apaixonado por computadores!
				</p>
				<p>
					Trabalhei como Engenheiro de Software no UOL pelo produto
					UOL Ads e aprendi muito sobre desenvolvimento e manutenção
					de software nos quase 2 anos e meio que estive por lá.
				</p>
				<p>
					A prática de amigo secreto é uma tradição antiga de minha
					família, todo ano nos reunimos na época de natal e
					aproveitamos pra fazer a brincadeira. A família da minha mãe
					é grande, o que deixa tudo ainda mais divertido. Contando os
					7 filhos de minha vó, seus cônjuges, cada um com pelo menos
					um neto dela, os agregados de cada neto e até mesmo bisnetos
					dela, com tudo isso podemos chegar em até 42 participantes!
				</p>
				<p>
					Dois meses antes de sair da empresa comecei este projeto e
					consegui testá-lo pela primeira vez em um amigo secreto que
					fizemos em família na páscoa. Tendo montado apenas a lógica
					do sorteio e as caixas de texto, tudo funcionou como o
					esperado e seguimos com a brincadeira no ano seguinte.
					Enquanto buscava uma nova oportunidade, segui trabalhando
					neste projeto pra não enferrujar e, com isso, o ele chegou
					no que temos hoje e ainda crescerá mais.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "About",
	};
</script>

<style>
	.content {
        display: flex;
        padding-inline: 180px;
        align-items: center;
	}
    img {
        height: 500px;
        margin-right: 50px;
    }
    h1 {
        margin-top: 50px;
        margin-bottom: 0;
    }
</style>
