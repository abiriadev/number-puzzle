<script lang="ts">
    import { onMount } from 'svelte'
    import { rando } from '@nastyox/rando.js'
    import StartButton from './StartButton.svelte'
    import Button from './Button.svelte'

    import Number from './NumberCard.svelte'
    import Grid_comp from './Grid.svelte'

    import Grid_cls from '../class/Grid'

    export let name: string

    name

    import { isStart } from '../store/store'
    import NumberCard from '@/class/NumberCard'

    const width = 5
    const height = 4

    const grid = new Grid_cls(width, height, [])

    grid.numberCardList = [
        new NumberCard(1),
        new NumberCard(2),
        new NumberCard(3),
    ]
</script>

<main>
    <p style="color: white">{isStart ? 'start' : 'stop'}</p>
    <StartButton />
    {#if $isStart}
        <Grid_comp {width} {height}>
            {#each grid.numberCardList as num}
                <Number numberCard={num} />
            {/each}
        </Grid_comp>
    {/if}

    <!-- <Button>Apple pie</Button> -->
</main>

<style lang="scss">
    @import '../assets/scss/vars.scss';

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: $primary-color;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
