<template>
	<div class="how">
        <h2>Modo de uso</h2>
        <p>
            Insira o nome do participante na primeira caixa de texto e seu respectivo e-mail na segunda caixa.
            Verifique se os dados estão corretos e clique em "Adicionar participante". Ele irá aparecer na tabela logo ao lado.
            Repita o processo para todos os participantes seguintes, colocando seus respecivo nomes e e-mails nas caixas de texto e clicando no botão de adicionar, um de cada vez.
            Após a inserção de todos os participantes, clique em confirmar e pronto!

        </p>
        <h2>Como o sorteador funciona</h2>
        <p>
            Duas listas são criadas para orientar o sorteio: uma de doadores e outra de receptores.
            Um participante aleatório é selecionado e adicionado às duas listas.
            Em seguida, um outro participante aleatório é selecionado e adicionado no final da lista de doadores e uma posição acima do primeiro sorteado na lista de receptores.
            O posicionamento em cada lista representa o amigo secreto de cada participante.
            Ou seja, o primeiro da lista de doadores dará o presente para o primeiro da lista de receptores, o segundo doador para o segundo receptor e assim por diante.

        </p>
        <h2>Recebendo os convites</h2>
        <p>
            Após o sorteio, cada participante receberá um e-mail contendo o nome de seu amigo secreto, de acordo com o que foi inserido nas caixas de texto.
        </p>
    </div>
</template>

<script>
	export default {
		name: "How",
	};
</script>

<style>
    .how {
        margin: 30px 60px;
    }
    h2 {
        margin: 30px;
    }
    p {
        text-align: start;
    }
</style>