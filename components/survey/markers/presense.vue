<template>
    <div>
        <icon
            :icon="iconMap[item.presense]?.icon"
            :class="iconMap[item.presense]?.style"
        />
    </div>
</template>

<script setup>
    defineProps(["item"]);

    const iconMap = {
        confirm: { icon: "check-circle", style: "text-success" },
        idk: { icon: "question-circle", style: "text-warning" },
        denied: { icon: "x-circle", style: "text-danger" },
    };
</script>
