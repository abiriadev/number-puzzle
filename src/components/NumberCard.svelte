<script lang="ts">
    import NumberCard from '@/class/NumberCard'

    export let numberCard: NumberCard

    let shake = false

    if (shake) {
        alert('aaaaaaaaaaaa')
    }

    let x: number
    let y: number

    const whenShakeChnages = () => {
        setTimeout(() => {
            shake = false
        }, 300)
    }
</script>

<div
    class="
        number
        {shake ? 'shake' : ''}    
    "
    style="
        --x: {x};
        --y: {y};
    "
    on:mousedown={e => {
        shake = true

        whenShakeChnages()
    }}
>
    {numberCard.number}
</div>

<style lang="scss">
    @import '../assets/scss/vars.scss';
    @import '../assets/scss/scaffolding.scss';
    @import '../assets/scss/utils.scss';

    .number {
        width: 1.9em;
        height: 1.9em;

        border-radius: 20%;

        background-color: $primary-color;

        grid-row-start: var(--x);
        grid-column-start: var(--y);

        color: white;

        font-size: 4em;

        @include bo(bright($primary-color), 4px);

        @include center;

        // opacity: 0.1;
    }

    .shake {
        color: aquamarine;
    }
</style>
