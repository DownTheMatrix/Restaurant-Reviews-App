// Check if service worker is supported in the browser
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw/sw.js')
        .then(registration => {
            console.log(`Registration successful, scope is ${registration.scope}`);
        }).catch(error => {
            console.log(`Service worker registration failed, error: ${error}`);
        });
}

// Register service worker
navigator.serviceWorker.getRegistrations().then(registrations => {
    for (let registration of registrations) {
        registration.unregister()
    }
})