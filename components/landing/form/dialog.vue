<template>
    <div>
        <div class="modal-header">
            <modal-close-button />
        </div>
        <div class="modal-body overflow-auto">
            <form @submit.prevent="submit">
                <h4 class="mb-4">
                    Ответьте на пару вопросов, чтобы облегчить нам выбор
                </h4>

                <div class="mb-3">
                    <div class="mb-3">Планируете ли вы приехать?</div>
                    <div
                        class="form-check"
                        v-for="presense in presenseTypes"
                        :key="presense"
                    >
                        <label class="form-check-label">
                            <input
                                v-model="model.presense"
                                class="form-check-input"
                                type="radio"
                                name="presense"
                                :value="presense"
                                required
                            />
                            {{ $i18n(presense) }}
                        </label>
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label"
                        >В каком составе вы планируете приехать?</label
                    >
                    <textarea
                        v-model="model.guests"
                        placeholder="Иван Иванов, Мария Иванова"
                        class="form-control"
                        required
                    />
                </div>

                <div class="mb-3">
                    <div class="mb-3">Будете ли на втором дне?</div>
                    <div
                        class="form-check"
                        v-for="presense in presenseTypes"
                        :key="presense"
                    >
                        <label class="form-check-label">
                            <input
                                v-model="model.second_day_presense"
                                class="form-check-input"
                                type="radio"
                                :value="presense"
                                name="second_day_presense"
                                required
                            />
                            {{ $i18n(presense) }}
                        </label>
                    </div>
                </div>

                <div class="mb-3">
                    <div class="mb-3">Какие напитки вы предпочитаете?</div>
                    <common-multi-selector
                        v-model="model.drinks"
                        :options="drinks"
                    />
                </div>

                <div class="form-check form-switch mb-3">
                    <label class="form-check-label"
                        ><input
                            v-model="model.need_transfer"
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                        />
                        Для вашего комфорта мы организовали трансфер после
                        праздника обратно до города в 23:30. Нужен ли он
                        вам?</label
                    >
                </div>

                <div class="form-check form-switch mb-3">
                    <label class="form-check-label"
                        ><input
                            v-model="model.allergy"
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                        />
                        Есть ли у вас аллергия на какие либо продукты?</label
                    >
                </div>

                <div class="mb-4">
                    <label class="form-label">Ваша любимая песня</label>
                    <input
                        v-model="model.song"
                        type="text"
                        placeholder="Весёлые ребята - Розовые Розы"
                        class="form-control"
                    />
                </div>

                <button class="btn btn-primary">Отправить</button>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { clone } from "~/util";
    import { presenseTypes, drinks } from "~/services/form";

    const props = defineProps(["data"]);
    const emit = defineEmits(["close", "dismiss"]);

    const model = reactive(clone(props.data));

    function submit() {
        emit("close", model);
    }
</script>

<style scoped>
    .modal-body {
        max-height: 80vh;
    }
</style>
