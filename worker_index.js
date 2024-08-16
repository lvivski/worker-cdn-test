setTimeout(() => {
    importScripts('worker_import.js')
}, 100)

setTimeout(() => {
    Promise.reject('Error from worker_import.js')
}, 500)