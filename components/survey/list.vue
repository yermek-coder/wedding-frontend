<template>
    <div class="list-group overflow-auto">
        <div
            @click="editResult(item, index)"
            v-for="(item, index) in results"
            :key="item._id"
            class="list-group-item list-group-item-action"
        >
            <div class="btn-flex justify-content-between">
                <div class="text-start">
                    {{ item?.guests || item?.greeting }}
                </div>
                <div class="btn-flex">
                    <SurveyMarkersTransfer :item />
                    <SurveyMarkersPresense :item />
                    <div>
                        {{
                            new Date(item.created).toLocaleString("ru", {
                                day: "2-digit",
                                month: "2-digit",
                            })
                        }}
                    </div>
                </div>
            </div>
        </div>
        <common-nothing-found v-if="!results.length" />
    </div>
</template>

<script setup>
    import surveyService from "~/services/survey";

    const { $modal, $flash } = useNuxtApp();
    const results = ref([]);

    async function editResult(item, index) {
        const result = await $modal({
            component: "survey-item-dialog",
            props: { data: item },
        });

        if (result) {
            const { model, method } = result;

            try {
                if (method === "edit") {
                    await surveyService.editSurveyResult(model);
                    $flash({ message: "Успешно обновлено" });
                    results.value[index] = model;
                } else {
                    await surveyService.removeSurveyResult(model);
                    $flash({ message: "Успешно удалено" });
                    results.value.splice(index, 1);
                }
            } catch (error) {
                $flash({ message: error.message });
            }
        }
    }

    surveyService.getSurveyResults().then((data) => (results.value = data));
</script>
