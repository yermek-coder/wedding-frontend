<template>
    <button
        type="button"
        class="btn"
        :class="[`btn-${button.style ?? 'light'} btn-${button.size ?? 'md'}`]"
    >
        <span v-if="button.label">{{ button.label }}</span>
        <icon v-if="button.icon" :icon="button.icon"></icon>
    </button>
</template>

<script>
    export default {
        props: ["button"],
    };
</script>
