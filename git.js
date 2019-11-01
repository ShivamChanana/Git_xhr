document.getElementById("button").addEventListener("click", onClick)

//function

function onClick(){

    const inputVal = document.getElementById("myValue").value
    const xhr = new XMLHttpRequest()

    xhr.open("GET", `https://api.github.com/users/${inputVal}` , true)
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.response)
            const details = JSON.parse(this.responseText)
            const output = `
            <ul>
            <li>Avatar: <img src = "${details.avatar_url}"></li>
            <li>url: ${details.url}</li>
            </ul>

            `
            document.getElementById("output").innerHTML = output
        }
    }
    xhr.send();
}