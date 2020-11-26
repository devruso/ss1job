import data from '../data.js';
const homeScreen = {
    render: () =>{
        const {products} = data;
        return `
        <ul class ="products">
        ${products.map(
          product => `
        
        <li>
            <div class="product">
            <a href="/#/product/${product._id}">
              <img src="${product.image}" alt="${product.name}"
            /></a>
            <div class="product-name">
              <a href="/#/product/1">${product.name}</a>
              <div class="product-brand">${product.marca}</div>
              <div class="product-price">R$${product.price}</div>
              <div class="product-rating">${product.rating}</div>
            </div>
          </div>
        </li>
        `).join('\n')
    }
        `
    }
}
export default homeScreen;