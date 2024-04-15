<template>
    <div class="container container-fluid">
        <div class="mb-3 text-center lh-lg landing-title-2">
            {{
                weddindDate.toLocaleString("ru", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                })
            }}
        </div>
        <img src="/couple.webp" alt="Couple" class="img-fluid mb-3" />
        <h2 class="text-center ff-handwrite landing-title">Программа дня</h2>
        <div class="container">
            <div v-for="step in timing" :key="step.time" class="row mb-3">
                <div class="col-4">
                    <img :src="step.icon" alt="Icon" class="img-fluid" />
                </div>
                <div class="col-8">
                    <div class="landing-title-2">{{ step.time }}</div>
                    <h5>{{ step.title }}</h5>
                    <div class="text-muted">{{ step.desc }}</div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-5">
                <img src="/clouds.png" alt="Cloud" class="img-fluid ms-n5" />
            </div>
            <div class="col-2 align-self-center landing-title text-center">
                ~
            </div>
            <div class="col-5">&nbsp;</div>
        </div>
    </div>
</template>

<script setup>
    const weddindDate = new Date("07.13.2024");
    const timing = [
        {
            time: "12:00",
            title: "Сбор гостей",
            desc: "Просим взять с собой хорошее настроение и свои улыбки",
            icon: "/wedding-location.png",
        },
        {
            time: "12:30",
            title: "Свадебная церемония",
            desc: "На всякий случай приготовьте носовые платочки для трогательного момента",
            icon: "/wedding-couple.png",
        },
        {
            time: "14:00",
            title: "Праздничный банкет",
            desc: "Время вкусной еды, танцев и развлечений",
            icon: "/dish.png",
        },
        {
            time: "23:00",
            title: "Окончание мероприятия",
            desc: "К сожалению, даже такой прекрасный вечер может закончиться",
            icon: "/just-married.png",
        },
    ];
</script>
