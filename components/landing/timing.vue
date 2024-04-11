<template>
    <div class="container container-fluid py-5">
        <h2 class="text-center">Тайминг дня</h2>
        <p class="mb-5 text-center">
            {{
                weddindDate.toLocaleString("ru", {
                    weekday: "long",
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                })
            }}
        </p>
        <div class="d-flex justify-content-center">
            <div class="d-flex flex-column gap-3">
                <div
                    v-for="step in timing"
                    :key="step.time"
                    class="row justify-content-center"
                >
                    <div class="col-4 text-end">{{ step.time }}</div>
                    <div class="col-1"><icon :icon="step.icon" /></div>
                    <div class="col-4">{{ step.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const weddindDate = new Date("07.07.2024");
    const timing = [
        { time: "16-30", title: "Церемония", icon: "ceremony" },
        { time: "18-00", title: "Сбор гостей", icon: "ceremony" },
        {
            time: "00-00",
            title: "Окончание банкета",
            icon: "ceremony",
        },
    ];
</script>
