import flashService from "~/services/flash";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            flash: function (options) {
                return flashService.show(options);
            },
        },
    };
});
