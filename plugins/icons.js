import { filename } from "pathe/utils";

export default defineNuxtPlugin(() => {
    const glob = import.meta.glob("@/assets/icons/*.svg", { eager: true });
    const icons = Object.fromEntries(
        Object.entries(glob).map(([key, value]) => [
            filename(key),
            value.default,
        ])
    );

    return {
        provide: { icons },
    };
});
