<template>
    <div>
        <div class="modal-header">
            <modal-close-button />
        </div>
        <div class="modal-body">
            <form @submit.prevent>
                <div class="mb-3">
                    <label class="form-label">Имя</label>
                    <input
                        v-model="model.name"
                        type="text"
                        :disabled="disabled"
                        class="form-control"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Фамилия</label>
                    <input
                        v-model="model.surname"
                        type="text"
                        :disabled="disabled"
                        class="form-control"
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Присутствие</label>
                    <select v-model="model.presense" class="form-select">
                        <option
                            v-for="type in presenseTypes"
                            :key="type"
                            :disabled="disabled"
                            :value="type"
                        >
                            {{ $i18n(type) }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Присутствие на втором дне</label>
                    <select
                        v-model="model.second_day_presense"
                        class="form-select"
                    >
                        <option
                            v-for="type in presenseTypes"
                            :key="type"
                            :disabled="disabled"
                            :value="type"
                        >
                            {{ $i18n(type) }}
                        </option>
                    </select>
                </div>
                <div class="form-check form-switch mb-3">
                    <label class="form-check-label"> Нужен трансфер</label>
                    <input
                        v-model="model.need_transfer"
                        class="form-check-input"
                        :disabled="disabled"
                        type="checkbox"
                        role="switch"
                    />
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button v-if="disabled" @click="remove" class="btn btn-danger">
                Удалить
            </button>
            <button
                v-if="disabled"
                @click="disabled = false"
                class="btn btn-outline-primary"
            >
                Редактировать
            </button>
            <button
                v-if="!disabled"
                @click="disabled = true"
                class="btn btn-outline-secondary"
            >
                Отменить
            </button>
            <button v-if="!disabled" @click="submit" class="btn btn-primary">
                Сохранить
            </button>
        </div>
    </div>
</template>

<script setup>
    import { clone } from "~/util";

    const emit = defineEmits(["dismiss", "close"]);
    const props = defineProps(["data"]);

    const model = reactive(clone(props.data));
    const disabled = ref(true);
    const presenseTypes = ["confirm", "idk", "denied"];

    function submit() {
        emit("close", { method: "edit", model });
    }

    function remove() {
        if (window.confirm("Удалить?")) {
            emit("close", { method: "delete", model });
        }
    }
</script>
