<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
    import useAuth from "~/composables/useAuth";

    const { logout } = useAuth();

    async function onUnauthorized() {
        await logout();
        navigateTo("/login");
    }

    onMounted(() => {
        document.addEventListener("api/unauthorized", onUnauthorized);
    });
    onBeforeUnmount(() => {
        document.removeEventListener("api/unauthorized", onUnauthorized);
    });
</script>
