<template>
    <div class="container container-fluid py-5 text-center">
        <h1 class="text-uppercase mb-3">
            мы ждем вас, {{ name + " " + surname }}
        </h1>
        <h2 class="mb-3">
            {{
                weddindDate.toLocaleString("ru", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                })
            }}
        </h2>
        <div class="mb-3">через,</div>
        <div class="d-flex justify-content-center mb-3">
            <div class="btn-flex">
                <template v-for="(value, index) in timerValues" :key="value">
                    <div>
                        <div>{{ value }}</div>
                        <div class="text-muted small">
                            {{ timerTitles[index] }}
                        </div>
                    </div>
                    <div v-if="index < timerValues.length - 1" class="vr"></div>
                </template>
            </div>
        </div>
        <p>
            <br />Мы будем рады разделить<br />с вами радость неповторимого<br />для
            нас дня – дня нашей свадьбы!<br /><br />Приглашаем присоединиться к
            нашему<br />празднику и украсить его своим присутствием!
        </p>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const route = useRoute();
    const weddindDate = new Date("07.13.2024");
    const timerTitles = ["Дней", "Часов", "Минут", "Секунд"];
    const timerValues = ref([]);
    const timer = ref();

    const { name, surname } = route.query;

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
