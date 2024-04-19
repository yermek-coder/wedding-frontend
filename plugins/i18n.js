import { filename } from "pathe/utils";

export default defineNuxtPlugin(() => {
    const labels = {
        confirm: "Да, с удовольствием!",
        denied: "К сожалению, не смогу",
        vodka: "Водка",
        cognac: "Коньяк",
        whiskey: "Виски",
        champagne: "Шампанское",
        white_whine: "Белое вино",
        red_whine: "Красное вино",
    };

    return {
        provide: {
            i18n: function (key) {
                return labels[key];
            },
        },
    };
});
