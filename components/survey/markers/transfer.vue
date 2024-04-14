<template>
    <div v-if="item.need_transfer">
        <icon icon="taxi-front" />
    </div>
</template>

<script setup>
    defineProps(["item"]);
</script>
