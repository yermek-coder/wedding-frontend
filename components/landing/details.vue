<template>
    <div class="container container text-center landing-details mb-5">
        <h1
            v-motion="{ animation: 'fade-in-left' }"
            class="landing-title ff-handwrite"
        >
            Дресс-код
        </h1>
        <p v-motion="{ animation: 'fade-in-bottom' }" class="mb-5">
            Мы очень старались сделать праздник красивым и будем рады, если в
            своих нарядах Вы поддержите цветовую гамму нашей свадьбы.
        </p>
        <div
            class="btn-flex justify-content-center landing-details-colors px-3 mb-5"
        >
            <div
                v-motion="{ animation: 'fade-in-bottom', delay: index * 0.03 }"
                v-for="(backgroundColor, index) in [
                    '#FFDDD4',
                    '#FEBC5B',
                    '#FD7A2A',
                    '#D7168B',
                    '#E77877',
                    '#CFB898',
                    '#627059',
                    '#000',
                ]"
                :style="{ backgroundColor }"
                class="h-100 flex-grow-1"
            ></div>
        </div>

        <h1
            v-motion="{ animation: 'fade-in-left' }"
            class="landing-title ff-handwrite"
        >
            Важные детали
        </h1>

        <div class="landing-details-list text-start d-flex flex-column gap-5">
            <div
                v-for="(point, index) in points"
                :key="point"
                class="d-flex gap-3 landing-details-list-item"
            >
                <div
                    v-motion="{ animation: 'fade-in' }"
                    class="landing-details-list-item-image me-n5 mt-n3"
                >
                    <img
                        :src="`/paint_drop_${index + 1}.webp`"
                        alt="Paint drop"
                        class="img-fluid"
                    />
                </div>
                <div
                    v-motion="{ animation: 'fade-in-bottom' }"
                    class="z-1 position-relative"
                    v-html="point"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    const points = [
        "Если вы желаете подарить цветы, то нам будет приятно получить их в коробках или корзинах, так они смогут порадовать нас дольше",
        "Просим не обременять себя выбором подарка, ваши пожелания в конвертах помогут осуществить нашу мечту",
        "Обратите внимание, что и формат мероприятия не предполагают детской площадки и аниматоров. Пожалуйста, позаботьтесь о том, чтобы провести этот вечер без детей",
        'Если вы подготовили для нас сюрприз или в случае возникновения вопросов, Вы всегда можете обратиться за помощью и согласованием к нашему свадебному организатору Александре: <a href="tel:/+79132096264">+7 (913) 209-62-64</a>',
    ];
</script>
