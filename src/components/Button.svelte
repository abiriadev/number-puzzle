<script>
</script>

<button>
    <slot />
</button>

<style lang="scss">
    @import '../assets/scss/utils.scss';

    /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

    button {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        --b: #6472ee;
        --b2: #5656fa;

        padding: 0 1em;

        height: 2em;
        line-height: 2em;

        font-size: 1.2em;
        font-weight: 500;
        color: #fff;

        outline: none;
        border: none;
        border-radius: 4px;

        background-color: var(--b2);

        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        opacity: 0.98;

        -webkit-transition: background-color 0.1s, opacity 0.23;

        -o-transition: background-color 0.1s, opacity 0.23;

        transition: background-color 0.1s, opacity 0.23;

        overflow: visible;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        font-family: Arial, Helvetica, sans-serif;

        text-align: center;

        &:hover {
            cursor: pointer;

            background-color: var(--b);
            opacity: 1;
        }

        &:active {
            -webkit-transform: translate(0, 1px);
            -ms-transform: translate(0, 1px);
            transform: translate(0, 1px);

            background-color: var(--b2);
        }
    }
</style>
