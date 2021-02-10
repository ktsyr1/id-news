
exports.button_action = (Selector, color, background) => {
    let element = document.querySelector(Selector)
    element.style.color = color
    element.style.backgroundColor = background

}

exports.admin = () => {
    if (typeof window !== 'undefined') {
        let admin = localStorage.getItem('admin')
        if (admin) return admin
        else false

    }
}
exports.token = () => {
    if (typeof window !== 'undefined') {
        let token = localStorage.getItem('token')
        if (token) return token
        else false
    }
}
exports.editor = () => {
    if (typeof window !== 'undefined') {
        let admin = localStorage.getItem('admin')
        if (admin === null || undefined) return false
        else if (admin === "editor" || "administrator") return true
        else return false
    }

}
if (typeof window !== 'undefined') {
    window.addEventListener('beforeinstallprompt', (event) => {
        console.log('👍', 'beforeinstallprompt', event);
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;
        // Remove the 'hidden' class from the install button container
        divInstall.classList.toggle('hidden', false);
    });
    window.addEventListener('click', () => {
        console.log('👍', 'butInstall-clicked');
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
            // The deferred prompt isn't available.
            return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        promptEvent.userChoice.then((result) => {
            console.log('👍', 'userChoice', result);
            // Reset the deferred prompt variable, since
            // prompt() can only be called once.
            window.deferredPrompt = null;
            // Hide the install button.
            divInstall.classList.toggle('hidden', true);
        });
    });
    window.addEventListener('appinstalled', (event) => {
        console.log('👍', 'appinstalled', event);
    })
}