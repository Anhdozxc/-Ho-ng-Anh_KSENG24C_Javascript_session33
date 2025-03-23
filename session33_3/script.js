let dish = [
  { id: 1, name: "Rau sạch", category: "Đồ ăn" },
  { id: 2, name: "Thịt lợn", category: "Đồ ăn" },
  { id: 3, name: "Pepsi không calo", category: "Nước" },
  { id: 4, name: "Cocacola", category: "Nước" },
  { id: 5, name: "Cờ lê", category: "Dụng cụ" },
  { id: 6, name: "Tuy vít", category: "Dụng cụ" },
];

document.getElementById("filterButton").onclick = function () {
  let category = document.getElementById("categorySelect").value;
  let list = document.getElementById("productList");
  list.innerHTML = "";

  let html = "";
  for (let i = 0; i < dish.length; i++) {
    if (!category || dish[i].category === category) {
      html +=
        "<li id='product-" +
        dish[i].id +
        "'><strong>ID:</strong> " +
        dish[i].id +
        " - <strong>Tên:</strong> " +
        dish[i].name +
        " - <strong>Danh mục:</strong> " +
        dish[i].category +
        "</li>";
    }
  }
  list.innerHTML = html;
};
