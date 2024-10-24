const toggleSwitch = document.querySelector('#checkbox');
const themeLabel = document.querySelector('#theme-label');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        themeLabel.textContent = 'Light Mode'; // Update button text for dark mode
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeLabel.textContent = 'Light Mode'; // Change to "Light Mode" in dark mode
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeLabel.textContent = 'Dark Mode'; // Change to "Dark Mode" in light mode
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
