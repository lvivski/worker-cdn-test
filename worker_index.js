setTimeout(() => {
    importScripts('https://cdn.jsdelivr.net/gh/lvivski/worker-cdn-test@latest/worker_import.js')
}, 100)

setTimeout(() => {
    Promise.reject('Error from worker_index.js')
}, 500)