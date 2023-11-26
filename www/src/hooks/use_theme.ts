import { ref } from "vue";
import { useStorage } from "@vueuse/core";

export enum ThemeType {
    Dark = 'Dark',
    Light = 'Light',
}

export const toggleDom = 'html';

export const localTheme = 'localTheme'

export const themeAttribute = 'data-theme';

/** 
 * 使用主题
 */
export function useTheme() {
    const theme = ref(ThemeType.Light);

    // 设置主题
    function changeTheme(themeType: ThemeType) {
        const html = document.querySelector(toggleDom);
        if (!html) {
            return;
        }
        html.setAttribute(themeAttribute, themeType);
        theme.value = themeType;
        useStorage(localTheme, theme.value);
    }

    function getNowTheme() {

        // 找到html标签上面的theme属性
        const html = document.querySelector(toggleDom);
        if (!html) {
            return null;
        }
        return html.getAttribute(themeAttribute);
    }

    function changeLight() {
        const themeData = getNowTheme();
        if (themeData === ThemeType.Light) {
            theme.value = ThemeType.Light;
            return;
        }
        changeTheme(ThemeType.Light);
    }

    function changeDark() {
        const themeData = getNowTheme();
        if (themeData === ThemeType.Dark) {
            theme.value = ThemeType.Dark;
            return;
        }
        changeTheme(ThemeType.Dark);
    }

    return {
        theme,
        changeTheme,
        changeLight,
        changeDark
    }
}