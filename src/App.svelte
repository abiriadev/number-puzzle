<script lang="ts">
    import Number from './Number.svelte'
    import Grid from './Grid.svelte'

    export let name: string
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>
        Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
        how to build Svelte apps.
    </p>

    <Grid>
        <Number number="0" />
        <Number number="1" />
        <Number number="2" />
        <Number number="3" />
        <Number number="4" />
        <Number number="5" />
    </Grid>
</main>

<style lang="scss">
    @import './assets/scss/vars.scss';

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
