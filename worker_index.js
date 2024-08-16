setTimeout(() => {
    importScripts('https://cdn.jsdelivr.net/gh/lvivski/worker-cdn-test/worker_import.js')
}, 100)

setTimeout(() => {
    Promise.reject('Error from worker_import.js')
}, 500)