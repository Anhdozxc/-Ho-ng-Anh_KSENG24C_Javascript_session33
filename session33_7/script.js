let cart = [];

document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy A54",
      price: 7490000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg",
    },
    {
      id: 2,
      name: "Laptop Dell Inspiron 15",
      price: 15990000,
      image:
        "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg",
    },
    {
      id: 3,
      name: "Tai nghe AirPods Pro",
      price: 4990000,
      image:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH",
    },
    {
      id: 4,
      name: "Đồng hồ thông minh Apple Watch",
      price: 8990000,
      image: "https://m.media-amazon.com/images/I/81kq5wkaqAL.jpg",
    },
    {
      id: 5,
      name: "Máy ảnh Canon EOS M50",
      price: 12490000,
      image:
        "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg",
    },
    {
      id: 6,
      name: "Loa Bluetooth JBL Flip 5",
      price: 2190000,
      image:
        "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg",
    },
    {
      id: 7,
      name: "Bàn phím cơ Logitech G Pro",
      price: 2490000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
    },
    {
      id: 8,
      name: "Chuột không dây Logitech MX Master",
      price: 1890000,
      image:
        "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png",
    },
  ];

  const productGrid = document.getElementById("product-grid");

  products.forEach(function (product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="${product.image}" alt="${
      product.name
    }" class="product-image">
            <div class="product-title">${product.name}</div>
            <div class="product-price">${product.price.toLocaleString()}₫</div>
            <button class="add-to-cart-btn" data-id="${
              product.id
            }">Thêm vào giỏ hàng</button>
        `;
    productGrid.appendChild(productCard);
  });

  const buttons = document.getElementsByClassName("add-to-cart-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const productId = parseInt(this.dataset.id);
      let product = null;

      for (let j = 0; j < products.length; j++) {
        if (products[j].id === productId) {
          product = products[j];
          break;
        }
      }

      let existingItem = null;
      for (let k = 0; k < cart.length; k++) {
        if (cart[k].id === productId) {
          existingItem = cart[k];
          break;
        }
      }

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        });
      }

      updateCart();
    });
  }

  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItems.innerHTML = "<p>Giỏ hàng trống</p>";
    } else {
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
                    <div class="cart-item-name">${cart[i].name}</div>
                    <div class="cart-item-price">${cart[
                      i
                    ].price.toLocaleString()}₫ x ${cart[i].quantity}</div>
                    <div class="cart-controls">
                        <button class="cart-btn" onclick="updateQuantity(${i}, -1)">-</button>
                        <span>${cart[i].quantity}</span>
                        <button class="cart-btn" onclick="updateQuantity(${i}, 1)">+</button>
                        <button class="cart-btn cart-btn-remove" onclick="removeFromCart(${i})">X</button>
                    </div>
                `;
        cartItems.appendChild(cartItem);
      }
    }
    totalPriceElement.textContent = `Tổng: ${total.toLocaleString()}₫`;
  }

  window.updateQuantity = function (index, change) {
    if (cart[index].quantity + change > 0) {
      cart[index].quantity += change;
    } else {
      cart.splice(index, 1);
    }
    updateCart();
  };

  window.removeFromCart = function (index) {
    cart.splice(index, 1);
    updateCart();
  };

  document
    .getElementById("checkout-btn")
    .addEventListener("click", function () {
      if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
      } else {
        alert("Cảm ơn bạn đã mua hàng!\nTổng giá trị đơn hàng: ");
        cart = [];
        updateCart();
      }
    });

  updateCart();
});
