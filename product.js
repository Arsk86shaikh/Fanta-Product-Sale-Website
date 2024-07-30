// const buyNowButtons = document.querySelectorAll('.buy-now');
//   const productInfoDiv = document.getElementById('product-info');

//   buyNowButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const productId = button.getAttribute('data-product');
//       const productInfo = getProductInfo(productId);
//       productInfoDiv.innerHTML = productInfo;
//       productInfoDiv.style.display = 'block';
//     });
//   });

//   function getProductInfo(productId) {
//     switch (productId) {
//       case 'Fanta Orange':
//         return `
//           <h2>Fanta Orange</h2>
//           <p>Carbonated Water, Sugar, Acidifier: Citric Acid, ...</p>
//           <p>Available Sizes: 7.5 fl oz, 6 pack; 7.5 fl oz, 10 pack;</p>
//         `;
//       case 'Fanta Berry':
//         return `
//           <h2>Fanta Berry</h2>
//           <p>Carbonated Water, Sugar, Acidifier: Citric Acid, ...</p>
//           <p>Available Sizes: 7.5 fl oz, 6 pack; 7.5 fl oz, 10 pack;</p>
//         `;
//       // Add more cases for each product
//       default:
//         return '';
//     }
//   }
// alert("chaulu hai");

document.addEventListener('DOMContentLoaded', () => {
  // Add CSS styles dynamically
  const style = document.createElement('style');
  style.innerHTML = `
      .product-details {
          height: auto;
          width: 25vw;
          display: flex;
          flex-direction: column;
          align-items: center;
    
          
      }
      .product-detail img {
          max-width: auto;
          height: 300px;
          margin-left: 40px;
          margin-right: -none;
          
      }
      .product-details h2{
        font-weight: bold;
          font: 700 20px / 28px Noto-regional, Noto-latin, TCCC-UnityText, sans-serif;
      }
      .product-details p{
        font: 400 14px / 24px Noto-regional, Noto-latin, TCCC-UnityText, sans-serif;
 
      }
      .product-details h6{
        font: 400 14px / 24px Noto-regional, Noto-latin, TCCC-UnityText, sans-serif;
        font-weight:  bold;
        font-size:1rem;
      }
      
      #purchase-form-container {
          margin-top: 20px;
          width: 300px;
            display: none;
justify-content: center;
align-items: flex-start;
      }
      #purchase-form {
          display: flex;
          flex-direction: column;
      }
      #purchase-form label {
          margin-bottom: 5px;
      }
      #purchase-form input {
          margin-bottom: 10px;
          padding: 5px;
      }
      #purchase-form button {
          padding: 10px;
         background-color: #070707;
           color: wheat;
         font-weight: bold;
}
         
          border: none;
          cursor: pointer;
      }
      #purchase-form button:hover {
          background-color: #0056b3;
      }


  `;
  document.head.appendChild(style);

  // Function to handle "Buy Now" button click
  function handleBuyNowClick(event) {
      event.preventDefault();
      const product = event.target.getAttribute('data-product');
      
      // Mock product information - replace with actual data as needed
      const productInfo = {
          'Fanta Orange': {
              name: 'Fanta Orange ',
              description: 'Carbonated Water, Sugar, Acidifier: Citric Acid, Emulsifier: Gum Arabic, Preservative: Potassium Sorbate, Acidity Regulator: Sodium Citrate, Caffeine, Natural Identical Citrus Flavors, Antioxidants: Ascorbic Acid and Calcium Disodium (EDTA), Colour: Tartrazine*.Available Sizes: 7.5 fl oz, 6 pack; 7.5 fl oz, 10 pack;',
              price: '$4.00',
              image: 'productimages/width1960.webp'

          },
          'Fanta Berry': {
              name: 'Fanta Berry',
              description: 'Carbonated Water, Sugar, Acidifier: Citric Acid, Emulsifier: Gum Arabic, Preservative: Potassium Sorbate, Acidity Regulator: Sodium Citrate, Caffeine, Natural Identical Citrus Flavors, Antioxidants: Ascorbic Acid and Calcium Disodium (EDTA), Colour: Tartrazine*.Available Sizes: 7.5 fl oz, 6 pack; 7.5 fl oz, 10 pack;',
              price: '$5.20',
              image: 'productimages/fanta berry.webp'
          },
          'PepFanta Grape': {
              name: 'Fanta Grape',
              description: 'a refreshing, sparkling soft drink bursting with delicious grape flavour. The dome-shaped lip balm delivers the authentic taste of Fanta grape while providing extended hydration to your lips. The iconic Fountain cup design is sure to make an impression whenever you use it. Available Sizes: 12 fl oz, 20 fl oz, 2 Liters',
              price: '$4.10',
              image: 'productimages/fanta grape.webp'
          }

      };
      
      const productDetails = productInfo[product];
      const productDetail=productInfo[product];
      if (productDetails||productDetail) {
          const productInfoDiv = document.getElementById('product-info');
          productInfoDiv.innerHTML = `
           <div class="product-detail">
            <img src="${productDetail.image}" alt="${productDetails.name}">
          
              <div class="product-details">
                  <h2>${productDetails.name}</h2>
                  <p>${productDetails.description}</p>
                  <h6>Price: ${productDetails.price}</h6>
              </div>
            </div>

          `;
          document.getElementById('purchase-form-container').style.display = 'block';
      }
  }
  
  // Add event listeners to "Buy Now" buttons
  const buyNowButtons = document.querySelectorAll('.buy-now');
  buyNowButtons.forEach(button => {
      button.addEventListener('click', handleBuyNowClick);
  });
  

document.getElementById('purchase-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const quantity = document.getElementById('quantity').value;
      const mobile=document.getElementById('mobile').value;
     const  total =document.getElementById('total').value;
    //  const  price =document.getElementById('price').value;
    // total=price*quantity;

      // Here you can handle the form data as needed
      alert(`Purchase submitted for ${name}, ${quantity} items to be shipped to ${address}, ${mobile},${total}.`);
  });
});
// document.addEventListener('DOMContentLoaded', (event) => {
//   // Get the modal
//   const modal = document.getElementById("productModal");

//   // Get the <span> element that closes the modal
//   const span = document.getElementsByClassName("close")[0];

//   // Function to open the modal and populate it with product details
//   function openModal(productName, productDescription) {
//       // Set the modal content
//       document.getElementById("modalProductName").innerText = productName;
//       document.getElementById("modalProductDescription").innerText = productDescription;

//       // Display the modal
//       modal.style.display = "block";
//   }

//   // Get all "Buy Now" buttons and attach the click event to open the modal
//   const buyNowButtons = document.querySelectorAll(".buy-now-btn");
//   buyNowButtons.forEach(button => {
//       button.addEventListener("click", (e) => {
//           const productName = e.target.getAttribute("data-product-name");
//           const productDescription = e.target.getAttribute("data-product-description");
//           openModal(productName, productDescription);
//       });
//   });

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//       modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//       if (event.target == modal) {
//           modal.style.display = "none";
//       }
//   }
// });