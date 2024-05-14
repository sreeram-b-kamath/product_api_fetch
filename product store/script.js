


const fetchData = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    let products = await result.json();
    console.log(products);
    const productContainer = document.getElementById('product-container');
    products.map((product) => {
        console.log(product);
        let productCard = document.createElement('div');
        productCard.className = "card product-card";
        productCard.innerHTML = `
            <div class="card-body product-card-content">
            <div>
                <img class="product-img" src="${product.image}" alt="" width="80%">
                <div>
                <h4>${product.title}</h4>
                <h6>${product.category}</h6>
                <h4>$${product.price}</h4>
                </div>
                </div>
                
                
                <div id="card-btns" class="d-flex align-items-center gap-2">
                <button type="button" class="btn btn-sm btn-outline-dark" data-bs-toggle="modal" data-bs-target="#product${product.id}">
                See Description
                </button>
                <button type="button" class="btn btn-sm btn-success">
                    Buy Now
                </button>
                </div>
                
            </div>


            <div class="modal fade" id="product${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-success">Buy Now</button>
                    </div>
                  </div>
                </div>
            </div>
            `;
        productContainer.appendChild(productCard);
    })
}

fetchData()

