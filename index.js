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
    let div = document.getElementById("section")
    let localURL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    // let button = document.getElementsByTagName("button")

    function mainSpace(){
        fetch(localURL)
        .then(res => res.json())
        .then(values => {
            for(item of values){
            preUI(item)
            }
            console.log(values)
        })
        .catch(e => console.log(e.message))
    }
    mainSpace()
    
    function preUI(value){
       bronzer.addEventListener("click" , () => {
        bronzers(value)
       })
       blush.addEventListener("click", () => {
        blushes(value)
       })
       lipliner.addEventListener("click", () => {
        lipline(value)
       })
       foundation.addEventListener("click", () => {
        found(value)
       })
       eyeshadow.addEventListener("click", () => {
        shadow(value)
       })
       eyeliner.addEventListener("click", () => {
        liner(value)
       })
       nailpolish.addEventListener("click", () => {
        cutex(value)
       })
       lipstick.addEventListener("click", () => {
        lips(value)
       })
       mascara.addEventListener("click", () => {
        masc(value)
       })
    }
    function bronzers(value){
        let title = document.createElement("h3")
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

    function blushes(value){
        let title = document.createElement("h3")
        title.setAttribute("id", "card")
        let image = document.createElement("img")
        let para = document.createElement("p")
        para.setAttribute('id', "summary")
        let price = document.createElement("h5")
        let btn = document.createElement("button")

        if(value.product_type === "blush"){
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
    function lipline(value){
        let title = document.createElement("h3")
        title.setAttribute("id", "card")
        let image = document.createElement("img")
        let para = document.createElement("p")
        para.setAttribute('id', "summary")
        let price = document.createElement("h5")
        let btn = document.createElement("button")

        if(value.product_type === "lip_liner"){
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

    function found(value){
        let title = document.createElement("h3")
        title.setAttribute("id", "card")
        let image = document.createElement("img")
        let para = document.createElement("p")
        para.setAttribute('id', "summary")
        let price = document.createElement("h5")
        let btn = document.createElement("button")

        if(value.product_type === "foundation"){
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

    function shadow(value){
        let title = document.createElement("h3")
        title.setAttribute("id", "card")
        let image = document.createElement("img")
        let para = document.createElement("p")
        para.setAttribute('id', "summary")
        let price = document.createElement("h5")
        let btn = document.createElement("button")

        if(value.product_type === "eyeshadow"){
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

    function liner(value){
        let title = document.createElement("h3")
        title.setAttribute("id", "card")
        let image = document.createElement("img")
        let para = document.createElement("p")
        para.setAttribute('id', "summary")
        let price = document.createElement("h5")
        let btn = document.createElement("button")

        if(value.product_type === "eyeliner"){
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

    function cutex(value){
        let title = document.createElement("h3")
        title.setAttribute("id", "card")
        let image = document.createElement("img")
        let para = document.createElement("p")
        para.setAttribute('id', "summary")
        let price = document.createElement("h5")
        let btn = document.createElement("button")

        if(value.product_type === "nail_polish"){
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

    function lips(value){
        let title = document.createElement("h3")
        title.setAttribute("id", "card")
        let image = document.createElement("img")
        let para = document.createElement("p")
        para.setAttribute('id', "summary")
        let price = document.createElement("h5")
        let btn = document.createElement("button")

        if(value.product_type === "lipstick"){
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

    function masc(value){
        let title = document.createElement("h3")
        title.setAttribute("id", "card")
        let image = document.createElement("img")
        let para = document.createElement("p")
        para.setAttribute('id', "summary")
        let price = document.createElement("h5")
        let btn = document.createElement("button")

        if(value.product_type === "mascara"){
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
