<template>
    <div class="container container-fluid py-5 text-center">
        <h2>Местоположение</h2>
        <div>
            <br /><span>Торжественная церемония </span><br /><span
                >Дворец бракосочетания №4,</span
            ><br /><span>по адресу: ул. Бутырская, 17</span><br /><span>﻿</span
            ><br /><span>Свадебное торжество </span><br /><a
                href="https://msk.avtobanket.ru/banquets/loft-hall-contrabanda"
                rel="noopener noreferrer"
                >LOFT HALL</a
            >
            <a
                href="https://msk.avtobanket.ru/banquets/loft-hall-contrabanda"
                rel="noopener noreferrer"
                >Contrabanda</a
            ><br /><span>по адресу: ул. Ленинская Слобода, 26 строение 23</span>
        </div>

        <iframe :srcdoc frameborder="0"> </iframe>
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
