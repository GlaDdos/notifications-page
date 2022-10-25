const button = document.getElementById('read-notif');

button.onclick = function() {
    const unreadnotifications = document.getElementsByClassName('notification-unread');
    let counter = document.getElementById('counter-value');

    [...unreadnotifications].forEach(element => {
        element.classList.remove('notification-unread');
    });

    counter.innerText = 0;
}