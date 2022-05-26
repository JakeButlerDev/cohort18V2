const xhr = new XMLHttpRequest()
const url = 'http://api.github.com/users'

xhr.open("GET", url)

xhr.send()

xhr.onload = () => {
    jsonData = JSON.parse(xhr.responseText)
    console.log(jsonData);
    counter = 0

    for (i=0; i<jsonData.length; i++) {
        login = jsonData[i].login
        admin = jsonData[i].site_admin
        type = jsonData[i].type
        document.getElementById("main").innerHTML += `Login: ${login}, server admin: ${admin}, user type: ${type} <br>`
        counter++
    }
    document.getElementById("footer").innerText = `user count: ${counter}`
    
}