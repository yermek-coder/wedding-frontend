<template>
    <div>
        <div class="modal-header">
            <modal-close-button />
        </div>
        <div class="modal-body">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label class="form-label"
                        >Текст обращения к гостю(ям)</label
                    >
                    <textarea
                        v-model="model.greeting"
                        type="text"
                        class="form-control"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label"
                        >Как будет выглядеть обращение</label
                    >
                    <p class="text-center">
                        С большой радостью приглашаем вас{{
                            model.greeting ? "," : ""
                        }}
                        <span class="fw-bold">{{
                            (model.greeting && model.greeting + ",") || ""
                        }}</span>
                        на семейный праздник — нашу свадьбу! Мы будем рады, если
                        вы проведете этот счастливый день с нами.
                    </p>
                </div>
                <button
                    v-if="model.greeting"
                    @click="copy"
                    class="btn btn-outline-secondary btn-lg"
                >
                    <icon icon="copy" />
                </button>
                <button
                    v-if="canShare && model.greeting"
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

    const model = reactive({ greeting: "" });
    const url = computed(
        () =>
            `https://vitaliy-sofya-2024.ru/?greeting=${encodeURIComponent(
                model.greeting
            )}`
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
