function search() {
    let {value} = document.getElementById("searchInput")
    
    const baseUrl = "https://google.com/search?q="
    if(!value) value = "M.Taufan Hidayat"
    location.replace(baseUrl + value)
}
