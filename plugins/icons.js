import { filename } from "pathe/utils";

export default defineNuxtPlugin(() => {
    const glob = import.meta.glob("@/assets/icons/*.svg", {
        eager: false,
        query: "?raw",
        import: "default",
    });
    const icons = Object.fromEntries(
        Object.entries(glob).map(([key, value]) => [filename(key), value])
    );

    return {
        provide: { icons },
    };
});
