<template>
    <div @change="onChange" class="d-flex flex-column">
        <div v-for="option in selectors" :key="option.title" class="form-check">
            <label class="form-check-label">
                <input
                    v-model="option.value"
                    class="form-check-input"
                    type="checkbox"
                    :disabled
                />
                {{ $i18n(option.title) }}
            </label>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["modelValue", "options", "disabled"]);
    const model = defineModel();

    const selectors = ref(
        props.options.map((option) => ({
            value: model.value.includes(option),
            title: option,
        }))
    );

    function onChange() {
        if (!props.disabled) {
            model.value = selectors.value
                .filter((option) => option.value)
                .map((option) => option.title);
        }
    }
</script>
