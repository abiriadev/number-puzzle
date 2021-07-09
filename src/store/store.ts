import { writable, readable } from 'svelte/store'

const isStart = writable(false)

export { isStart }
