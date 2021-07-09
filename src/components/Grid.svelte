<script lang="ts">
    export let width: number
    export let height: number
</script>

<div
    class="numberbox-grid"
    style="
        --width: {width};
        --height: {height};
    "
>
    <slot />
</div>

<style lang="scss">
    @import '../assets/scss/scaffolding.scss';
    @import '../assets/scss/vars.scss';

    .numberbox-grid {
        display: grid;

        grid-template-columns: repeat(var(--width), 1fr);
        grid-template-rows: repeat(var(--height), 1fr);

        gap: 4%;

        @include bo($primary-color, 4px);

        padding: 4%;

        color: turquoise;
    }
</style>
