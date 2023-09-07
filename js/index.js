const toggle_switch_tl = document.querySelector('.toggle-switch .toggle-label');
const toggle_switch = document.querySelector('.toggle-switch');

let DLMode = false;

toggle_switch_tl.addEventListener('click', function() {
    if(DLMode === false) {
        DLMode = true;
        document.documentElement.classList.add('DarkMode');
        localStorage.setItem('DarkMode', true);
        toggle_switch.classList.remove('light');
        toggle_switch.classList.add('Dark');
    } else {
        DLMode = false;
        document.documentElement.classList.remove('DarkMode');
        localStorage.removeItem('DarkMode');
        toggle_switch.classList.add('light');
    }
});

const DarkMode = localStorage.getItem('DarkMode');

if(DarkMode === 'true') {
    toggle_switch.classList.add('DarkLocal');
    document.documentElement.classList.add('DarkMode');
    DLMode = true;
}