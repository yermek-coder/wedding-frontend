<template>
    <div class="landing-hero">
        <div class="container container-fluid landing-hero-poster pt-5 mb-3">
            <div class="row pe-4 justify-content-end mb-n5">
                <div
                    class="col-8 landing-hero-card landing-hero-card-top p-3 shadow bg-body"
                >
                    <img src="/kid1.webp" alt="Kid's photo" class="img-fluid" />
                </div>
            </div>
            <div class="row ps-3 justify-content-start">
                <div
                    class="col-8 landing-hero-card landing-hero-card-bottom p-3 shadow bg-body position-relative"
                >
                    <img src="/kid2.webp" alt="Kid's photo" class="img-fluid" />
                    <img
                        src="/hand-drawn-heart.webp"
                        alt="Heart"
                        class="position-absolute ms-2 start-100 top-50 translate-middle-y"
                    />
                </div>
            </div>
        </div>

        <div class="container container-fluid text-center">
            <h1 class="ff-handwrite landing-title mt-4">Узнаете этих деток?</h1>
            <p>
                Это мы — Виталий и Софья! Да, да, нам тоже сложно поверить, что
                время пролетело так быстро. И сейчас, став уже взрослыми, мы
                решили, что пора жениться.
            </p>
            <p>
                С большой радостью приглашаем вас,
                <span class="fw-bold"
                    >{{ route.query.name || "" }}
                    {{ route.query.surname || "" }}</span
                >
                на наш первый семейный праздник — нашу свадьбу! Мы будем рады,
                если вы проведете этот счастливый день с нами.
            </p>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute();
</script>
