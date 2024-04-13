<template>
    <div class="container container-fluid py-5 text-center">
        <h2>Местоположение</h2>
        <div>
            <br /><span>Свадебное торжество </span>г. Бердск, <br />ул. Зелёная
            Роща,
            <span
                >2а<br />
                Ресторан "Времена года"</span
            >
        </div>

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
