<template>
    <div>
        <header class="py-3 mb-3 border-bottom">
            <div class="container-fluid justify-content-end btn-flex">
                <button @click="showLinkModal" class="btn btn-primary">
                    Создать ссылку
                </button>
                <button @click="logout" class="btn btn-secondary">Выход</button>
            </div>
        </header>
        <div class="container container-fluid text-center">
            <SurveyList />
        </div>
    </div>
</template>

<script setup>
    import useAuth from "~/composables/useAuth";

    const { logout } = useAuth();
    const { $modal } = useNuxtApp();

    function showLinkModal() {
        $modal({ component: "admin-link-dialog" });
    }
</script>
