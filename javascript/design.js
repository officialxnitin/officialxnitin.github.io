const change_bg = () => {
    document.getElementById('mod').style.backgroundColor = "#FF0000"
}
const change_font_size = () => {
    document.getElementById('modtxt').style.fontSize = "80px"
}
const change_font_color = () => {
    document.querySelectorAll("modtxt").style.color = "#b5e853");
}
const change_align_center = () => {
    document.getElementById('modtxt').style.textAlign = "center"
}
const remove_underline = () => {
    document.querySelector('a').style.setProperty('border-bottom', 'none', 'important');
}