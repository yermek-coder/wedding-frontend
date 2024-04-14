import { filename } from "pathe/utils";

export default defineNuxtPlugin(() => {
    const labels = {
        confirm: "Подтверждаю",
        idk: "Затрудняюсь ответить",
        denied: "Не смогу прийти",
    };

    return {
        provide: {
            i18n: function (key) {
                return labels[key];
            },
        },
    };
});
