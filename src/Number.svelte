<script>
    export let number

</script>

<div class="number">
    {number}
</div>

<style lang="scss">
    @import "./assets/scss/vars.scss";

    .number {
        width: 50px;
        height: 50px;

        border-radius: 20%;

        background-color: $primary-color;

        color: white;
    }
</style>