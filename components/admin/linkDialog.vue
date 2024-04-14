<template>
    <div>
        <div class="modal-header">
            <modal-close-button />
        </div>
        <div class="modal-body">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label class="form-label">Имя</label>
                    <input
                        v-model="model.name"
                        type="text"
                        class="form-control"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Фамилия</label>
                    <input
                        v-model="model.surname"
                        type="text"
                        class="form-control"
                    />
                </div>
                <button
                    v-if="model.name"
                    @click="copy"
                    class="btn btn-outline-secondary btn-lg"
                >
                    <icon icon="copy" />
                </button>
                <button
                    v-if="canShare && model.name"
                    @click="share"
                    class="btn btn-outline-secondary btn-lg"
                >
                    <icon icon="share" />
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(["dismiss", "close"]);
    const { $flash } = useNuxtApp();

    const model = reactive({ name: "", surname: "" });
    const url = computed(
        () =>
            `https://vitaliy-sofya-2024.ru/?name=${encodeURIComponent(
                model.name
            )}&surname=${encodeURIComponent(model.surname)}`
    );
    const canShare = computed(() => navigator?.share);

    function copy() {
        navigator.clipboard.writeText(url.value);
        $flash({ message: "Скопировано" });
    }

    function share() {
        navigator.share({ url: url.value });
    }
</script>
