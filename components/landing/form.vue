<template>
    <div class="container container py-5">
        <div class="text-center">
            <p>
                Мы очень старались сделать праздник незабываемым, поэтому будем
                рады, если Вы подтвердите свое присутствие до 13 июля 2022 г.
            </p>
            <p class="text-muted small">
                Обратите внимание, что если вы идёте парой или семьёй, то нужно
                заполнить форму на каждого взрослого
            </p>
            <button @click="show = true" class="btn btn-primary btn-lg">
                Подтвердить
            </button>
        </div>

        <!-- Modal -->
        <div v-if="show">
            <div class="modal-backdrop fade show"></div>
            <div class="modal modal-fullscreen d-block">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button @click="show = false" class="btn ms-auto">
                                <icon icon="x" />
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="submit">
                                <h4 class="mb-3">
                                    Ответьте на пару вопросов, чтобы облегчить
                                    нам выбор
                                </h4>
                                <div class="mb-3">
                                    <div class="mb-3">
                                        Подтвердите своё присутствие
                                    </div>
                                    <div
                                        class="form-check"
                                        v-for="presense in presenseTypes"
                                        :key="presense.value"
                                    >
                                        <label class="form-check-label">
                                            <input
                                                v-model="model.presense"
                                                class="form-check-input"
                                                type="radio"
                                                :value="presense.value"
                                            />
                                            {{ presense.title }}
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="mb-3">
                                        Будете ли на втором дне?
                                    </div>
                                    <div
                                        class="form-check"
                                        v-for="presense in presenseTypes"
                                        :key="presense.value"
                                    >
                                        <label class="form-check-label">
                                            <input
                                                v-model="
                                                    model.second_day_presense
                                                "
                                                class="form-check-input"
                                                type="radio"
                                                :value="presense.value"
                                            />
                                            {{ presense.title }}
                                        </label>
                                    </div>
                                </div>
                                <div class="form-check form-switch mb-3">
                                    <label class="form-check-label"
                                        ><input
                                            v-model="model.need_transfer"
                                            class="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                        />
                                        Нужен трансфер</label
                                    >
                                </div>
                                <button class="btn btn-primary">
                                    Отправить
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute();
    const { $flash } = useNuxtApp();

    const show = ref(false);
    const model = reactive({
        presense: "",
        second_day_presense: "",
        need_transfer: false,
        name: route.query.name || "",
        surname: route.query.surname || "",
    });

    const presenseTypes = [
        { title: "Подтверждаю", value: "confirm" },
        { title: "Затрудняюсь ответить", value: "idk" },
        { title: "Не смогу прийти ", value: "denied" },
    ];

    function submit() {
        console.log("submit");
        show.value = false;
        $flash({ message: "Спасибо за уделенное время!" });
        // $flash({ message: 'Спасибо за уделенное время!', type: "warning", close: { icon: "x-lg" } });
    }
</script>
