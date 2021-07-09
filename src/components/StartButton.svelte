<script lang="ts">
    // export let iss: boolean

    import { isStart } from '../store/store'
</script>

<button
    class="start-btn {isStart ? 'st' : ''}"
    on:click={e => {
        // alert('f')

        $isStart = true
    }}
>
    START
</button>

<style lang="scss">
    @import '../assets/scss/vars';

    button.start-btn {
        background-color: $primary-color;

        padding: 0.3em 2em;
        color: white;

        font-size: 2em;

        border-radius: 10px;

        &:active {
            opacity: 0.5;
        }
    }

    .st {
        // opacity: 0.5;

        // transition: 1s;
    }
</style>
