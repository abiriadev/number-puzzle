import App from './App.svelte'
import './assets/scss/vars.scss'
import './assets/scss/reset.scss'
import '@/assets/scss/scaffolding.scss'

const app = new App({
    target: document.body,
    props: {
        name: 'world',
    },
})

export default app
