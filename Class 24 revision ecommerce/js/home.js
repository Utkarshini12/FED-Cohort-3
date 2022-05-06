const categoryList = document.getElementById("categoryList");

function loadCategories() {
    fetch(BASE_URL + '/api/v1/category/all', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token:localStorage.getItem("token")}),
    }).then(response => response.json()).then(data => {
            console.log('Success:', data);
            if(data.success) {
                renderCategories(data.categories);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function renderCategories(categories) {
    let categoryListHtml = '<div class="category-item rounded-3 d-flex justify-content-center align-items-center">'
        + '<a class="text-decoration-none text-white" href="productList.html">All Products</a>'
        + '</div>';
    for(i = 0; i < categories.length; i++) {
        categoryListHtml += '<div class="category-item rounded-3 d-flex justify-content-center align-items-center">'
        + '<a class="text-decoration-none text-white" href="productList.html?categoryId=' + categories[i].categoryId + '">' + categories[i].name + '</a>'
        + '</div>';
    }

    categoryList.innerHTML = categoryListHtml;
}

loadCategories();