<template>
	<div class="donation">
		<h1>Que tal me pagar um café?</h1>
		<div class="pix">
			<h2>Pix:</h2>
			<img
				style="height: 10%; width: 10%"
				alt="QR code"
				src="../assets/qrcode.jpg"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Donations",
	};
</script>

<style>
	.donation {
		height: 100%;
		width: 100%;
	}
	.pix {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-block: 30px;
	}
	h2 {
		margin-right: 30px;
	}
</style>
