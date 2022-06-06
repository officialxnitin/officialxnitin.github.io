const change_bg = () => {
    document.getElementById('main').style.backgroundColor = "#2d2d2d"
}
const change_font_size = () => {
    document.getElementById('main').style.fontSize = "30px"
}
const change_font_color = () => {
    document.querySelectorAll("button").forEach(button => button.style.color = "#b5e853");
}
const change_align_center = () => {
    document.getElementById('main').style.textAlign = "center"
}
const remove_underline = () => {
    document.querySelector('a').style.setProperty('border-bottom', 'none', 'important');
}