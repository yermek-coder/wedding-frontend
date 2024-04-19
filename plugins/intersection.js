const defaultThresholdValue = 0.5;
const defaultDelay = 0;

const motion = {
    mounted: (el, binding) => {
        const { animation, delay } = binding.value;
        const mountedClass = `${animation}-mounted`;

        el.classList.add(mountedClass);

        el.style.animationDelay = `${delay || defaultDelay}s`;

        const observer = new IntersectionObserver(
            (entries, observer) => {
                const { isIntersecting } = entries[0];
                if (isIntersecting) {
                    el.classList.remove(mountedClass);
                    el.classList.add(animation);
                    observer.disconnect();
                }
            },
            {
                threshold: binding.value?.threshold || defaultThresholdValue,
            }
        );

        observer.observe(el);
    },
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("motion", motion);
});
