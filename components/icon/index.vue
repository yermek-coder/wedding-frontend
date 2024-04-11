<template>
    <span v-html="raw" class="d-flex" />
</template>

<script setup>
    const props = defineProps(["icon"]);
    const { $icons } = useNuxtApp();

    const raw = ref("");

    watchEffect(async () => {
        try {
            raw.value = await $icons?.[props.icon]?.();
        } catch {
            console.error(
                `Icon '${props.icon}' doesn't exist in 'assets/icons'`
            );
        }
    });
</script>
