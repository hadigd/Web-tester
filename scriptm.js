// Function to save clicked product
function viewProduct(title, desc, price, image) {
  const product = { title, desc, price, image };
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}

// Load selected product
const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
  document.getElementById("product-img").src = product.image;
  document.getElementById("product-title").textContent = product.title;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-desc").textContent = product.desc;
} else {
  document.querySelector(".container").innerHTML = "<p>Product not found!</p>";
}

// Function to send WhatsApp message
function orderOnWhatsApp(name, price, image, quantity, desc) {
  const phoneNumber = "923442987080"; // Your number
  const message = `Hello! I want to order:\n\n*Product:* ${name}\n*Price:* ${price}\n*Quantity:* ${quantity}\n*Description:* ${desc}\n*Image:* ${window.location.origin}/${image}`;
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  alert("Note.......                       chat with our team what exaitly you want ");
  window.open(waUrl, "_blank");
}

// Handle Buy Now button
document.getElementById("buy-now-btn").addEventListener("click", function() {
  const quantity = document.getElementById("quantity").value;
  if (product) {
    orderOnWhatsApp(product.title, product.price, product.image, quantity, product.desc);
  }
});
