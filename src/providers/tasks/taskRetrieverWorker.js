function retrieveTasks() {
    postMessage('timer elapsed, retrieving messages');
}

const interval = setInterval(retrieveTasks, 5000);

// eslint-disable-next-line no-restricted-globals
addEventListener("message", event => {
    console.log('Beginning clean-up');
    clearInterval(interval);
})
