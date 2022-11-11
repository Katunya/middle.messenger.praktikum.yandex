export function clickAuth () {
    const buttonAuth = document.getElementById('auth');
    if(buttonAuth) {
        buttonAuth.addEventListener('click', () => {
            window.location.href = 'pages/chat.html'
        })
    }
}

export function clickSave () {
    const buttonAuth = document.getElementById('save');
    if(buttonAuth) {
        buttonAuth.addEventListener('click', () => {
            window.location.href = 'profile.html'
        })
    }
}
