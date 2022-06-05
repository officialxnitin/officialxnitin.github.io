const upper = () => {
    let utxt = document.getElementById("utext")
    utxt.value = utxt.value.toUpperCase()
}
const lower = () => {
    let utxt = document.getElementById("utext")
    utxt.value = utxt.value.toLowerCase()
}
const clear_txt = () => {
    document.getElementById("utext").value = ""
}