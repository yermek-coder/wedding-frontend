<template>
    <img :src="$icons[icon]" alt="Icon" />
</template>

<script setup>
    defineProps(["icon"]);
</script>
