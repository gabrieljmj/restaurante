import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

export default new Echo({
    broadcaster: 'pusher',
    key: 'ac7584a0877ca62a196c',
    cluster: 'us2',
    forceTLS: true
});
