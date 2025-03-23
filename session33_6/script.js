const weatherDetails = {
  "Hà Nội": {
    temp: 25,
    humidity: 70,
    windpped: 5,
    description: "Có mây",
    icon: "☁️",
  },
  "Hồ Chí Minh": {
    temp: 32,
    humidity: 75,
    wind: 7,
    description: "Nắng",
    icon: "☀️",
  },
  "Đà Nẵng": {
    temp: 28,
    humidity: 82,
    wind: 12,
    description: "Mưa rào",
    icon: "🌧️",
  },
};

document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("city").value.trim();
  const output = document.getElementById("result");

  if (weatherDetails[city]) {
    const info = weatherDetails[city];
    output.innerHTML = `
            <div class="weather-card">
                <h3>${city}</h3>
                <div class="weather-symbol">${info.icon}</div>
                <p><strong>${info.temp}°C</strong> - ${info.description}</p>
                <p>Độ ẩm: ${info.humidity}%</p>
                <p>Tốc độ gió: ${info.wind} km/h</p>
            </div>
        `;
  } else {
    output.innerHTML = `<p class="alert">Không tìm thấy dữ liệu thành phố!</p>`;
  }
});
