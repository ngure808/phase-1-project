document.addEventListener("DOMContentLoaded", () => {
        // let div = document.getElementById("card")
        let ul = document.getElementById("content")
        let localURL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
        
    function mainSpace(){
        fetch(localURL)
        .then(res => res.json())
        .then(values => {
            console.log(values)
            values.map(value => preUI(value))
        })
        .catch(e => console.log(e.message))
        }
        mainSpace()
    
        function preUI(value){
            let title = document.createElement("h4")
            title.setAttribute("id", "card")
            title.innerText = value.name
            ul.appendChild(title)

            let image = document.createElement("img")
            // image.setAttribute("id", "card")
            image.src = value.image_link
            ul.appendChild(image)

            let para = document.createElement("p")
            para.innerText = value.description
            ul.appendChild(para)
        }
    })
