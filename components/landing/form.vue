<template>
    <div class="container mb-5 pt-4">
        <h1
            v-motion="{ animation: 'fade-in-bottom' }"
            class="landing-title ff-handwrite lh-sm text-center mb-3"
        >
            Присутствие на торжестве
        </h1>

        <div class="text-center">
            <p v-motion="{ animation: 'fade-in-bottom' }" class="mb-4">
                Мы очень старались сделать праздник незабываемым, поэтому будем
                рады, если Вы подтвердите свое присутствие до 13 июня 2024 г.
            </p>

            <button
                v-motion="{ animation: 'fade-in-right' }"
                @click="showDialog"
                class="btn btn-outline-primary btn-lg pulse"
            >
                Подтвердить
            </button>
        </div>
    </div>
</template>

<script setup>
    import surveyService from "~/services/survey";

    const route = useRoute();
    const { $flash, $modal } = useNuxtApp();

    const model = reactive({
        presense: "",
        second_day_presense: "",
        greeting: route.query.greeting || "",
        guests: "",
        drinks: [],
        need_transfer: false,
        allergy: false,
        song: "",
    });

    async function showDialog() {
        try {
            const result = await $modal({
                component: "landing-form-dialog",
                props: { data: model },
            });
            if (result) {
                await surveyService.addSurveyResult(result);
                $flash({ message: "Спасибо за уделенное время!" });
            }
        } catch (err) {
            $flash({
                message: err.message,
                type: "warning",
            });
        }
    }
</script>
