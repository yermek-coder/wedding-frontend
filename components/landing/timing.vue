<template>
    <div
        class="container container-fluid overflow-hidden text-center landing-timing"
    >
        <div
            v-motion="{ animation: 'fade-in-left' }"
            class="mb-3 lh-lg landing-title-2 fw-bold"
        >
            {{
                weddindDate.toLocaleString("ru", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                })
            }}
        </div>

        <div
            v-motion="{ animation: 'fade-in-bottom' }"
            class="d-flex justify-content-center mb-3 landing-timing-timer"
        >
            <div class="btn-flex">
                <div v-for="(value, index) in timerValues" :key="index">
                    <div class="fs-3">{{ value }}</div>
                    <div class="text-muted small">
                        {{ timerTitles[index] }}
                    </div>
                </div>
            </div>
        </div>
        <div v-motion="{ animation: 'fade-in-bottom' }" class="mb-3">
            до нашей свадьбы
        </div>

        <div class="position-relative">
            <img
                src="/couple.webp"
                alt="Couple"
                loading="lazy"
                class="img-fluid mb-4"
            />
            <img
                src="/curve.webp"
                alt="Curve"
                class="position-absolute bottom-0 end-0 mb-n1 me-n4 landing-location-img-curve"
            />
        </div>
        <h2
            v-motion="{ animation: 'fade-in-bottom' }"
            class="ff-handwrite landing-title"
        >
            Программа дня
        </h2>
        <div
            class="container text-start landing-timing-steps position-relative"
        >
            <template v-for="(step, index) in timing" :key="step.time">
                <div class="row">
                    <div class="col-4">
                        <div
                            v-motion="{ animation: 'fade-in' }"
                            class="rounded-pill border bg-body p-2"
                        >
                            <img
                                :src="step.icon"
                                alt="Icon"
                                class="img-fluid"
                            />
                        </div>
                    </div>
                    <div class="col"></div>
                </div>
                <div class="row">
                    <div
                        v-motion="{ animation: 'fade-in' }"
                        class="col-4 position-relative"
                    >
                        <template v-if="index !== timing.length - 1">
                            <div
                                class="border position-absolute start-50 translate-middle-x top-0 h-100 vr"
                            />
                            <img
                                src="/star2.png"
                                alt="Star"
                                class="landing-timing-steps-star img-fluid position-absolute start-50 translate-middle top-50"
                            />
                        </template>
                    </div>
                    <div
                        v-motion="{
                            animation: 'fade-in-bottom',
                        }"
                        class="col ms-n5 mt-2 mb-5"
                    >
                        <div>{{ step.time + " " + step.title }}</div>
                        <div class="text-muted small">{{ step.desc }}</div>
                    </div>
                </div>
            </template>
        </div>

        <div class="row justify-content-center">
            <div class="col-5">
                <img src="/clouds.png" alt="Cloud" class="img-fluid ms-n5" />
            </div>
            <div class="col-2 align-self-center landing-title">~</div>
            <div class="col-5">&nbsp;</div>
        </div>
    </div>
</template>

<script setup>
    const weddindDate = new Date("2024-07-13T12:00:00.000Z");
    const timing = [
        {
            time: "16:00",
            title: "Сбор гостей",
            desc: "встречаемся, знакомимся, обнимаемся, настраиваемся на веселую свадьбу.",
            icon: "/wedding-location.png",
        },
        {
            time: "16:30",
            title: "Выездная церемония",
            desc: "немного радостных веселых формальностей - то ради чего собрались.",
            icon: "/wedding-couple.png",
        },
        {
            time: "17:00",
            title: "Свадебный ужин",
            desc: "от души посмеёмся и сделаем этот вечер незабываемым вместе.",
            icon: "/dish.png",
        },
    ];

    const timerTitles = ["Дней", "Часов", "Минут", "Секунд"];
    const timerValues = ref([0, 0, 0, 0]);
    const timer = ref();

    onMounted(() => {
        timer.value = setInterval(function () {
            const now = new Date().getTime();
            const distance = weddindDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerValues.value = [days, hours, minutes, seconds];
        }, 1000);
    });

    onBeforeUnmount(() => {
        clearInterval(timer.value);
    });
</script>
