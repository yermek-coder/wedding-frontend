<template>
    <div class="container container-fluid py-5">
        <h2 class="text-center">Тайминг дня</h2>
        <p class="mb-5 text-center">
            {{
                weddindDate.toLocaleString("ru", {
                    weekday: "long",
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                })
            }}
        </p>
        <div class="d-flex justify-content-center">
            <table>
                <tbody>
                    <tr v-for="(step, index) in timing" :key="step.time">
                        <td>{{ step.time }}</td>
                        <td class="position-relative py-3">
                            <icon :icon="step.icon" class="icon-big mx-3" />
                            <div
                                :class="{
                                    'bottom-0 h-50': !index,
                                    'top-0 h-100':
                                        index && index < timing.length - 1,
                                    'top-0 h-50': index >= timing.length - 1,
                                }"
                                class="vr position-absolute start-50 translate-middle-x"
                            ></div>
                        </td>
                        <td v-html="step.title"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    const weddindDate = new Date("07.07.2024");
    const timing = [
        { time: "16:30", title: "Церемония", icon: "ceremony" },
        {
            time: "18:00",
            title: "Сбор <br>гостей",
            icon: "champagne",
        },
        {
            time: "00:00",
            title: "Окончание <br>банкета",
            icon: "fireworks",
        },
    ];
</script>
