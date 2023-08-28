document.addEventListener('DOMContentLoaded', () => {
    initialTheme();
    darkModeInput.addEventListener('change', toggleDarkMode )
});

const darkModeInput = document.querySelector('#switch');
const htmlTag = document.querySelector('html');

const initialTheme = () => {
    const themeModeStoraged = localStorage.getItem('darkMode');
    const preferedThemeUser = window.matchMedia('(prefers-color-scheme: dark)');

    if ( !themeModeStoraged && preferedThemeUser.matches ){
        darkModeInput.checked = true;
    }
    if ( themeModeStoraged === 'dark' ){
        darkModeInput.checked = true;
    }

    if ( darkModeInput.checked ){
        htmlTag.dataset.theme = 'dark';
    } else {
        htmlTag.dataset.theme = 'light';
    }
}

const toggleDarkMode = () => {
    if ( darkModeInput.checked ){
        htmlTag.dataset.theme = 'dark';
        localStorage.setItem('darkMode', 'dark' );
    } else {
        htmlTag.dataset.theme = 'light';
        localStorage.setItem('darkMode', 'light');
    }
}
