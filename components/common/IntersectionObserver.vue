<template>
    <div class="intersection-observer"></div>
</template>

<script>
export default {
    mounted() {
        this.observer = new IntersectionObserver(entries => {
            this.visible = !!entries.find(entry => entry.isIntersecting);
            this.$emit(this.visible ? "visible" : "hidden");
        });

        this.observer.observe(this.$el);

        // Ival
        this.ival = setInterval(() => {
            if (this.visible) {
                this.$emit("visible");
            }
        }, 500);
    },
    beforeUnmount() {
        clearInterval(this.ival);
        this.observer.disconnect();
    }
};
</script>

<style>
.intersection-observer {
    height: 2rem;
    min-height: 2rem;
}
</style>
