const orderSummary = document.getElementById("orderSummary");
const priceDetails = document.getElementById("priceDetails");
const confirmPaymentBtn = document.getElementById("confirmPaymentBtn");
const orderConfirmed = document.getElementById("orderConfirmed");
let orderId = 0;

function loadOrderDetails() {
    const data = {
        userId: localStorage.getItem("userId"),
        token:localStorage.getItem("token")
    };
    fetch(BASE_URL + '/api/v1/order/details', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if(data.success) {
                renderOrderDetails(data.orderDetails);
                orderId = data.orderDetails.orderId;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function renderOrderDetails(data) {
    let orderDetailsHtml = '<div class="order-details-title fw-bold">Order Summary</div>';

    for(i=0; i < data.products.length; i++) {
        orderDetailsHtml += '<div class="order-details-product d-flex flex-row">'
            + '<div class="order-details-product-img d-flex">'
            + '<img src="https://img.favpng.com/8/17/0/product-design-clip-art-logo-food-png-favpng-TsCQEsJH2LUYN3d5Q6RzrTsqL.jpg">'
            + '</div>'
            + '<div class="order-details-product-data d-flex flex-column">'
            + '<div>' + data.products[i].name + '</div>'
            + '<div>&#8377; ' + data.products[i].price + '</div>'
            + '</div>'
            + '</div>';
    }

    let priceDetailsHtml = '<div class="price-details-title fw-bold">Price Details</div>'
        + '<div class="price-details-data">'
        + '<div class="price-details-item d-flex flex-row justify-content-between">'
            + '<div>Price</div>'
            + '<div>&#8377; ' + data.total + '</div>'
        + '</div>'
        + '<div class="price-details-item d-flex flex-row justify-content-between">'
            + '<div>Discount</div>'
            + '<div>&#8377; 0</div>'
        + '</div>'
        + '<div class="price-details-item d-flex flex-row justify-content-between">'
            + '<div>Delivery Charges</div>'
            + '<div>FREE</div>'
        + '</div>'
        + '<div class="price-details-item d-flex flex-row justify-content-between">'
            + '<div>Total</div>'
            + '<div>&#8377; ' + data.total + '</div>'
        + '</div>'
        + '</div>'
    
    orderSummary.innerHTML = orderDetailsHtml;
    priceDetails.innerHTML = priceDetailsHtml;
}

function confirmPayment() {
    const data = {
        orderId,
        userId: localStorage.getItem('userId'),
        payment: true,
        token:localStorage.getItem("token")
    };

    fetch(BASE_URL + '/api/v1/order/edit', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if(data.success) {
                orderConfirmed.classList.remove('d-none');
	            confirmPaymentBtn.classList.add('d-none');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

loadOrderDetails();

confirmPaymentBtn.addEventListener("click", confirmPayment);