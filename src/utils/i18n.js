import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
    zhCN: {
        translation: {
            aynciotb: "这个页面正在开发中",
        },
    },
    zhTW: {
        translation: {
            aynciotb: "這個頁面正在開發中",
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "zhCN",
        fallbackLng: "zhCN",
        interpolation: {
            escapeValue: false,
        },
    }).then(() => console.log("Initialize react i18n success"));

export default i18n;