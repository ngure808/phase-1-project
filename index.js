document.addEventListener("DOMContentLoaded", () => {
    let bronzer = document.getElementById("bronzer")
    let  blush = document.getElementById("blush")
    let lipliner = document.getElementById("lipliner")
    let foundation = document.getElementById("foundation")
    let eyeshadow= document.getElementById("eyeshadow")
    let eyeliner = document.getElementById("eyeliner")
    let nailpolish = document.getElementById("nailpolish")
    let lipstick = document.getElementById("lipstick")
    let mascara = document.getElementById("mascara")
    let header = document.getElementById("card")
    let div = document.getElementById("section")
    let localURL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    let button = document.getElementsByTagName("button")


    function mainSpace(){
        fetch(localURL)
        .then(res => res.json())
        .then(values => {
            for(item of values){
            preUI(item)
            }
        })
        .catch(e => console.log(e.message))
    }
    mainSpace()
    
    function preUI(value){
       bronzer.addEventListener("click" , () => {
        buttons(value)
       })
    }
    function buttons(value){
        let title = document.createElement("h4")
        title.setAttribute("id", "card")
        let image = document.createElement("img")
        let para = document.createElement("p")
        para.setAttribute('id', "summary")
        let price = document.createElement("h5")
        let btn = document.createElement("button")

        if(value.product_type === "bronzer"){
            title.innerText = value.name
            div.appendChild(title)

            image.src = value.image_link
            div.appendChild(image)

            para.innerText = value.description
            div.appendChild(para)

            price.innerText = `Price = ${value.price} $`
            para.appendChild(price)
            btn.innerText = "Order"
            para.appendChild(btn)   
        }
    }


})
