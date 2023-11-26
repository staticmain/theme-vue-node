<script setup lang="ts">
import HelloWorld from './components/less_change_theme.vue'
import VueUseTheme from "./components/vue_use_theme.vue";
</script>

<template>
	<div>
		<HelloWorld msg="Vite + Vue" />
	</div>
	<div>
		<VueUseTheme />
	</div>
</template>

<style scoped>
div {
	margin: 24px 0;
}
.logo {
	padding: 1.5em;
	height: 6em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
