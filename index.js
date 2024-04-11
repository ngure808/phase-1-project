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
                if (amount !== null) {
                    alert("Thanks for shopping");
                }
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