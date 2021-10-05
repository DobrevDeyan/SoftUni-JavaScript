function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).
    forEach(b => b.addEventListener('click', onToggle));

    function onToggle(event) {
        const profile = event.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            const infoDif = Array
                .from(event.target.parentElement.querySelectorAll('div'))
                .find(d => d.id.includes('HiddenFields'));

            if (event.target.textContent === 'Show more') {
                infoDif.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                infoDif.style.display = '';
                event.target.textContent = 'Show more';
            }
        }
    }
}







