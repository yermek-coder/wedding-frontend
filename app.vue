<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
    import useAuth from "~/composables/useAuth";

    const { logout } = useAuth();

    onMounted(() => {
        document.addEventListener("api/unauthorized", logout);
    });
</script>
