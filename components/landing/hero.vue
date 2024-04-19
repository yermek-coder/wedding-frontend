<template>
    <div class="landing-hero">
        <div class="container container-fluid landing-hero-poster pt-5 mb-5">
            <div class="row pe-4 justify-content-end mb-n5">
                <div
                    class="col-8 landing-hero-card landing-hero-card-top p-3 shadow bg-body"
                >
                    <img
                        src="/kid1.webp"
                        alt="Kid's photo"
                        loading="lazy"
                        class="img-fluid"
                    />
                </div>
            </div>
            <div class="row ps-3 justify-content-start">
                <div
                    class="col-8 landing-hero-card landing-hero-card-bottom p-3 shadow bg-body position-relative"
                >
                    <img
                        src="/kid2.webp"
                        alt="Kid's photo"
                        loading="lazy"
                        class="img-fluid"
                    />
                    <img
                        src="/hand-drawn-heart.webp"
                        alt="Heart"
                        class="position-absolute ms-2 start-100 top-50 translate-middle-y"
                    />
                    <img
                        src="/arrow.svg"
                        alt="Arrow"
                        class="landing-hero-card-arrow position-absolute ms-2 start-100 top-100"
                    />
                </div>
            </div>
        </div>

        <div class="container container-fluid text-center">
            <h1 class="ff-handwrite landing-title mt-4">Узнаете этих деток?</h1>
            <p>
                Это мы — Виталя и Соня! Да, да, нам тоже сложно поверить, что
                время пролетело так быстро. И сейчас, став уже взрослыми, мы
                решили, что пора жениться.
            </p>
            <p>
                С большой радостью приглашаем вас{{ greeting ? "," : "" }}
                <span class="fw-bold">{{ greeting }}</span>
                на семейный праздник — нашу свадьбу! Мы будем рады, если вы
                проведете этот счастливый день с нами.
            </p>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute();
    const greeting = (route.query.greeting && route.query.greeting + ",") || "";
</script>
