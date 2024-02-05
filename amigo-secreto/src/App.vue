<template>
	<div id="app">
        <Topbar />
        <router-view></router-view>
        <Footer />
	</div>
</template>

<script>
    import Topbar from "@/components/Topbar.vue";
    import Footer from "@/components/Footer.vue";

	export default {
		name: "App",
		components: { 
            Topbar,
            Footer
        },
	};
</script>

<style>
	#app {
        height:3000px;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
