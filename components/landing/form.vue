<template>
    <div class="container mb-5">
        <h1 class="landing-title ff-handwrite lh-sm text-center mb-3">
            Присутствие на торжестве
        </h1>

        <div class="text-center">
            <p>
                Мы очень старались сделать праздник незабываемым, поэтому будем
                рады, если Вы подтвердите свое присутствие до 13 июля 2022 г.
            </p>
            <p class="text-muted small mb-5">
                Обратите внимание, что если вы идёте парой или семьёй, то нужно
                заполнить форму на каждого взрослого
            </p>
            <button @click="showDialog" class="btn btn-primary btn-lg">
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
        need_transfer: false,
        name: route.query.name || "",
        surname: route.query.surname || "",
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
