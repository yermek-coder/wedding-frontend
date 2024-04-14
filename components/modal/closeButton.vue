<template>
    <button @click="dismiss" class="btn ms-auto">
        <icon icon="x" />
    </button>
</template>

<script>
    export default {
        methods: {
            dismiss() {
                this.$parent.$emit("dismiss");
            },
        },
    };
</script>
