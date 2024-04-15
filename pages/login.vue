<template>
    <div class="container container text-center">
        <form @submit.prevent="submit">
            <h4 class="text-center mb-5 fw-semibold">Авторизация</h4>

            <div class="mb-3">
                <input
                    v-model="model.username"
                    class="form-control"
                    placeholder="Логин"
                    required
                />
            </div>
            <div class="mb-3">
                <input
                    v-model="model.password"
                    type="password"
                    class="form-control"
                    placeholder="Пароль"
                    required
                />
            </div>
            <button class="btn btn-primary">Войти</button>
        </form>
    </div>
</template>

<script setup>
    import useAuth from "~/composables/useAuth";

    const model = reactive({});
    const { login } = useAuth();
    const { $flash } = useNuxtApp();

    async function submit() {
        try {
            await login(model);
        } catch (error) {
            $flash({ message: error.message, type: "warning" });
        }
    }
</script>
