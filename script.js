document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    }
});

// Product data
const product1 = [
    {
        img: "img/products/f1.jpg",
        alt: "Pickled Wild Cucumbers",
        brand: "BM MECHAALANY",
        name: "Pickled Wild Cucumbers",
        stars: 5,
        price: 28
    },
    {
        img: "img/products/f2.jpg",
        alt: "Extra-Virgin Olive Oil",
        brand: "EL KOURA",
        name: "Extra-Virgin Olive Oil",
        stars: 5,
        price: 70
    },
    {
        img: "img/products/f3.jpg",
        alt: "Fava Beans",
        brand: "CORTAS",
        name: "Fava Beans",
        stars: 5,
        price: 40
    },
    {
        img: "img/products/f4.jpg",
        alt: "Grape Leaves",
        brand: "ORLANDO",
        name: "Grape Leaves",
        stars: 5,
        price: 52
    },
    {
        img: "img/products/f5.jpg",
        alt: "Green Olives",
        brand: "ACORSA",
        name: "Green Olives",
        stars: 5,
        price: 25
    },
    {
        img: "img/products/f6.jpg",
        alt: "Mixed Nuts",
        brand: "AL KAZZI",
        name: "Mixed Nuts",
        stars: 5,
        price: 78
    },
    {
        img: "img/products/f7.jpg",
        alt: "Arabic Coffee - Regular",
        brand: "NAJJAR",
        name: "Arabic Coffee - Regular",
        stars: 5,
        price: 78
    },
    {
        img: "img/products/f8.jpg",
        alt: "Arabic Coffee - Decaf",
        brand: "NAJJAR",
        name: "Arabic Coffee - Decaf",
        stars: 5,
        price: 28
    },
]

const product2 = [
    {
        img: "img/products/n1.jpg",
        alt: "Long Bread Sticks from Moulin D'or",
        brand: "MOULIN D'OR",
        name: "Long Bread Sticks",
        stars: 5,
        price: 10
    },
    {
        img: "img/products/n2.jpg",
        alt: "Rose Water from Cortas",
        brand: "CORTAS",
        name: "Rose Water",
        stars: 5,
        price: 15
    },
    {
        img: "img/products/n3.jpg",
        alt: "Chick Peas from Cortas",
        brand: "CORTAS",
        name: "Chick Peas",
        stars: 5,
        price: 8
    },
    {
        img: "img/products/n4.jpg",
        alt: "#1 Dark Brown Bulgar Wheat from Sunnyland Mills",
        brand: "SUNNYLAND MILLS",
        name: "#1 Dark Brown Bulgar Wheat",
        stars: 5,
        price: 52
    },
    {
        img: "img/products/n5.jpg",
        alt: "White, Bulgar Wheat, Fine from OliveNation",
        brand: "OLIVENATION",
        name: "White, Bulgar Wheat, Fine",
        stars: 5,
        price: 5
    },
    {
        img: "img/products/n6.jpg",
        alt: "Orange Blossom Water by CORTAS",
        brand: "CORTAS",
        name: "Orange Blossom Water",
        stars: 5,
        price: 18
    },
    {
        img: "img/products/n7.jpg",
        alt: "Pomegranate Molasses by CORTAS",
        brand: "CORTAS",
        name: "Pomegranate Molasses",
        stars: 5,
        price: 15
    },
    {
        img: "img/products/n8.jpg",
        alt: "Pitted Pressed Dates by BAROODY",
        brand: "BAROODY",
        name: "Pitted Pressed Dates",
        stars: 5,
        price: 20
    }
];


// Function to generate HTML for a product
function createProductHTML(product) {
    return `
        <article class="pro">
            <img src="${product.img}" alt="${product.alt}">
            <div class="description">
                <span class="product-brand">${product.brand}</span>
                <h5 class="product-name">${product.name}</h5>
                <div class="star">
                    ${'<i class="fas fa-star"></i>'.repeat(product.stars)}
                </div>
                <data class="product-price" value="${product.price}">$${product.price}</data>
            </div>
            <a href="#" aria-label="Add ${product.name} to cart"><i class="fal fa-shopping-cart cart"></i></a>
        </article>
    `;
}

// Get product containers
const proContainer1 = document.querySelector('#product1 .pro-container');
const proContainer2 = document.querySelector('#product2 .pro-container');

// Generate and append product HTML for section 1
let productHTML1 = '';
product1.forEach(product => {
    productHTML1 += createProductHTML(product);
});
proContainer1.innerHTML = productHTML1;

// Generate and append product HTML for section 2
let productHTML2 = '';
product2.forEach(product => {
    productHTML2 += createProductHTML(product);
});
proContainer2.innerHTML = productHTML2;


