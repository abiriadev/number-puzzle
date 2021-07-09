import App from './components/App.svelte'
import './assets/scss/vars.scss'
import './assets/scss/reset.scss'
import '@/assets/scss/scaffolding.scss'

import {rando} from "@nastyox/rando.js"

const app = new App({
    target: document.body,
    props: {
        name: 'world',
    },
})

export default app
