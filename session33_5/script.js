const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 35990000,
    image:
      "https://phucanhcdn.com/media/lib/08-12-2022/dell-xps-15-9520-silver-a2.jpg",
    description:
      "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 32990000,
    image:
      "https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain",
    description:
      "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 28990000,
    image:
      "https://imei24.com/img/samsung/10_30_46_Samsung_Galaxy_S24_ultra_imei24.jpg",
    description:
      "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: 7990000,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf",
    description:
      "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 11990000,
    image:
      "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: 3990000,
    image:
      "https://fitgearshop.vn/files/product/loa-bluetooth-jbl-charge-5-hi3dxa6w.png",
    description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];

function displayProducts(filter) {
  if (!filter) {
    filter = "";
  }
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filter.toLowerCase() === "laptop") {
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes("laptop")
    );
  }

  filteredProducts.forEach((product) => {
    let productHTML = `
              <div class="product">
                  <img src="${product.image}" alt="${product.name}">
                  <h3>${product.name}</h3>
                  <p>${product.description}</p>
                  <p class="price">${product.price.toLocaleString()} VNĐ</p>
                  <a class="buy-btn">Buy</a>
              </div>
          `;
    productList.innerHTML += productHTML;
  });
}

function searchProduct() {
  const searchBox = document.getElementById("searchBox").value;
  displayProducts(searchBox);
}

displayProducts();
