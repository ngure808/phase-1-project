document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("section");
    const localURL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const reload = document.getElementById("reload");

    reload.addEventListener("click", () => {
        window.location.reload();
    });

    function mainSpace() {
        fetch(localURL)
            .then(res => res.json())
            .then(values => {
                values.forEach(item => {
                    preUI(item);
                });
            })
            .catch(e => console.log(e.message));
    }
    mainSpace();

    // updates the dom depending on the button that has been clicked
    function preUI(value, productType) {
        if (value.product_type === productType) {
            const title = document.createElement("h3");
            title.setAttribute("id", "card");
            title.innerText = value.name;
            div.appendChild(title);

            const image = document.createElement("img");
            image.src = value.image_link;
            div.appendChild(image);

            const para = document.createElement("p");
            para.setAttribute('id', "summary");
            para.innerText = value.description;
            div.appendChild(para);

            const price = document.createElement("h5");
            price.innerText = `Price = ${value.price} $`;
            para.appendChild(price);

            const btn = document.createElement("button");
            btn.innerText = "Order";
            para.appendChild(btn);

            btn.addEventListener("click", () => {
                const amount = prompt("Enter amount you wish to buy:");
                if (parseInt(amount) > 0) {
                    alert("Thanks for shopping");
                }else {
                    alert("Invalid input")
                }
            });

             image.addEventListener("mouseenter", () => {
                // Change border color, increase size, etc.
                image.style.border = "5px solid rgb(78,5,100)";
                image.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.5)"
            });

            image.addEventListener("mouseleave", () => {
                // Revert back to original styling
                image.style.border = "none";
                image.style.boxShadow = "none";
            });
        }
    }

    // Event listeners for different makeup products
    const makeupProducts = ["bronzer", "blush", "lip_liner", "foundation", "eyeshadow", "eyeliner", "nail_polish", "lipstick", "mascara"];

    makeupProducts.forEach(productType => {
        const element = document.getElementById(productType);
        if (element) {
            element.addEventListener("click", () => {
                
                div.innerHTML = ""; // Clear previous content
                fetch(localURL)
                    .then(res => res.json())
                    .then(values => {
                        values.forEach(item => {
                            preUI(item, productType);
                        });
                    })
                    .catch(e => console.log(e.message));
            });
        }
    });
});