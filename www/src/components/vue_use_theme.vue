<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { ThemeType, themeAttribute } from '../hooks/use_theme';

const isDark = useDark({
    valueDark: ThemeType.Dark,
    valueLight: ThemeType.Light,
    attribute: themeAttribute
})
const toggleDark = useToggle(isDark)

const handleChangeDarkTheme = () => {
    const isSuccess = toggleDark(!isDark.value);
    console.info(isSuccess, isDark.value);
}

</script>

<template>
  <div class="card">
    <button type="button" @click="handleChangeDarkTheme">{{ isDark }}</button>
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