const productDetails = document.getElementById("productDetails");
const addToCartBtn = document.getElementById("addToCartBtn");
const goToCartBtn = document.getElementById("goToCartBtn");

function loadProductDetails() {
    const productId = window.location.search.split("=")[1];
    const data = {
        productId,
        userId: localStorage.getItem("userId"),
        token:localStorage.getItem("token")
    };
    fetch(BASE_URL + '/api/v1/product/details', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                renderProductDetails(data.productDetails);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function renderProductDetails(data) {
    const productDetailsHtml = '<div class="product-name">' + data.name + '</div>'
        + '<div class="product-price fw-bold">&#8377; ' + data.price + '</div>'
        + '<div class="product-description">'
        + '<div class="product-description-title fw-bold">Description</div>'
        + '<div class="product-description-data">' + data.description + '</div>'
        + '</div>';

    productDetails.innerHTML = productDetailsHtml;

    if(data.addedToCart == 1) {
        goToCartBtn.classList.remove('d-none');
	    addToCartBtn.classList.add('d-none');
    }
}

function addToCartFn() {
    const productId = window.location.search.split("=")[1];
    const data = {
        productId,
        userId: localStorage.getItem("userId"),
        token:localStorage.getItem("token")
    };
    fetch(BASE_URL + '/api/v1/order/add', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                goToCartBtn.classList.remove('d-none');
	            addToCartBtn.classList.add('d-none');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

addToCartBtn.addEventListener("click", addToCartFn);

loadProductDetails();