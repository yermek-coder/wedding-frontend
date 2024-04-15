<template>
    <div class="container container-fluid text-center mt-n4">
        <h2 class="landing-title ff-handwrite">Локация</h2>
        <p>Нашу свадьбу мы решили отметить в Ресторан "Времена года"</p>
        <p>Он находится по адресу:<br />город Бердск, ул. Зелёная Роща 2а</p>

        <img src="/location.jpeg" alt="Location" class="img-fluid mb-3" />

        <h2 class="landing-title ff-handwrite">Как добраться?</h2>
        <p class="mb-3">
            Мы подготовили для вас карту, чтобы вы точно добрались и порадовали
            нас своим присутствием
        </p>

        <div class="d-flex">
            <iframe
                :srcdoc
                frameborder="0"
                class="w-100"
                style="height: 60vh"
            />
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
