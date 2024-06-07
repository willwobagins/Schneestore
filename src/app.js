document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Nastar", img: "1.jpg", price: 85000 },
      { id: 2, name: "Putri Salju", img: "2.jpg", price: 80000 },
      { id: 3, name: "Kue Kacang", img: "3.jpg", price: 75000 },
      { id: 4, name: "Mata Kucing", img: "4.jpg", price: 45000 },
      { id: 5, name: "Kacang Bawang", img: "5.jpg", price: 30000 },
    ],
  }));
});
