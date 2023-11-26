<script setup lang="ts">
// import { ref } from 'vue'
import { useTheme, ThemeType } from "../hooks/use_theme.js";

defineProps<{ msg: string }>()

const { theme, changeDark, changeLight } = useTheme();
const handleChangeTheme = () => {
  if (theme.value === ThemeType.Dark) {
    changeLight();
  } else {
    changeDark();
  }
}
</script>

<template>
  <div class="card">
    <button type="button" @click="handleChangeTheme">{{ theme }}</button>
  </div>
</template>

<style lang="less">
.card {
	background-color: @bg-color;
	& button {
		padding: 10px 20px;
		border: 1px solid @primary;
		border-radius: 5px;
		outline: none;
		background-color: @primary;
		cursor: pointer;
		font-weight: 600;
		font-size: 16px;
		color: @text-color;
	}
}
</style>
