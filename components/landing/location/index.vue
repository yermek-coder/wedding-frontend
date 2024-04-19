<template>
    <div class="landing-location container container-fluid text-center mb-n5">
        <h2
            v-motion="{ animation: 'fade-in' }"
            class="landing-title ff-handwrite lh-sm"
        >
            Локация
        </h2>
        <p v-motion="{ animation: 'fade-in-bottom' }">
            Место проведения - ресторан <br /><b>"Времена года"</b>, город
            Бердск, <br />ул. Зелёная Роща 2а
        </p>

        <div class="d-flex mb-3">
            <iframe :srcdoc frameborder="0" class="w-100" />
        </div>

        <img
            src="/location.jpeg"
            alt="Location"
            loading="lazy"
            class="img-fluid"
        />

        <div class="row justify-content-center">
            <div class="col-5">
                <img src="/heart2.png" alt="Heart" class="img-fluid ms-n5" />
            </div>
            <div class="col-2 align-self-center landing-title text-center">
                ~
            </div>
            <div class="col-5">
                <img src="/star.png" alt="Star" class="img-fluid me-n5 h-66" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const srcdoc = ref("");

    onMounted(async () => {
        const glob = import.meta.glob("./map.html", {
            eager: false,
            query: "?raw",
            import: "default",
        })["./map.html"];
        srcdoc.value = await glob();
    });
</script>

<style scoped>
    iframe {
        height: 60vh;
    }
</style>
