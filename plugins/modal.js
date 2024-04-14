import modalService from "~/services/modal";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            modal: function (options) {
                return modalService.open(options);
            },
        },
    };
});
