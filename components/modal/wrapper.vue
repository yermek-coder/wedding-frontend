<template>
    <div class="position-fixed" :style="backdropStyle">
        <div v-if="modals.length > 0" class="modal-backdrop fade show"></div>
        <modal
            v-for="(modal, index) in modals"
            :key="modal.id"
            :modal="modal"
            :style="modalStyle(index)"
        ></modal>
    </div>
</template>

<script>
    import modalService from "~/services/modal";

    export default {
        data() {
            return modalService.state;
        },
        computed: {
            backdropStyle() {
                return {
                    "z-index": 2045 + 10 * (this.modals.length - 1),
                };
            },
        },
        methods: {
            modalStyle(index) {
                return {
                    "z-index": 2050 + 10 * index,
                };
            },
        },
        watch: {
            modals() {
                if (this.modals.length === 0) {
                    document.body.classList.remove("modal-open");
                } else {
                    document.body.classList.add("modal-open");
                }
            },
        },
    };
</script>
