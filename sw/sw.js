// Check if service worker is supported
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw/sw.js', {scope: '/sw-test/'})
    .then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }