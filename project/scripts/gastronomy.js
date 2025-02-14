// Function to display the current year and last modified date in the footer
document.addEventListener('DOMContentLoaded', function () {
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('year').textContent = year;
    document.getElementById('lastModified').textContent = lastModified;
});

// Hamburger menu toggle for mobile view
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('show');
});

const foods = [
    {
      foodName: "Churrasco (Brazilian BBQ)",
      averagePrice: "80.00",
      averageCalories: 220,
      imageUrl:
      "https://images.pexels.com/photos/28893428/pexels-photo-28893428/free-photo-of-espetos-de-carne-grelhada-ao-ar-livre-em-um-dia-de-verao.jpeg"
    },
    {
      foodName: "Gourmet Burgers",
      averagePrice: "30.00",
      averageCalories: 500,
      imageUrl:
      "https://images.pexels.com/photos/1025804/pexels-photo-1025804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      foodName: "Carne de Onça",
      averagePrice: "45.00",
      averageCalories: 519,
      imageUrl:
      "https://images.pexels.com/photos/14242079/pexels-photo-14242079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      foodName: "Colonial Coffee shops",
      averagePrice: "30.00",
      averageCalories: 3000,
      imageUrl:
      "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      foodName: "Fried Pastry (Pastel)",
      averagePrice: "7.00",
      averageCalories: 350,
      imageUrl:
      "https://images.pexels.com/photos/15010282/pexels-photo-15010282/free-photo-of-lanche-petisco-aperitivo-comida-rapida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      foodName: "Pasta (Fettuccine Alfredo)",
      averagePrice: "45.00",
      averageCalories: 370,
      imageUrl:
      "https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
  ];
  
  // Create food cards
  function displayFoods(foods) {
      // where food will be displayed
      const foodGrid = document.querySelector('.foods-grid');
      foodGrid.innerHTML = "";
  
      foods.forEach(food => {
          // Create a figure element
          const figure = document.createElement('figure');
  
          // Create and append an image element with lazy loading
          const img = document.createElement('img');
          img.src = food.imageUrl;
          img.alt = `${food.foodName}`;
          img.loading = "lazy";
          figure.appendChild(img);
  
          // Create and append a caption and the figure
          const figcaption = document.createElement('figcaption');
          figcaption.innerHTML = `
              <h3>${food.foodName}</h3>
              <p><strong>Average Price:</strong> ${food.averagePrice}</p>
              <p><strong>Average Calories:</strong> ${food.averageCalories}</p>
          `;
          figure.appendChild(figcaption);
          foodGrid.appendChild(figure);
      });
  }
  
  function filterFoods(option) {
      let filteredFoods = foods;
  
      switch (option) {
          case "cheap":
              filteredFoods = foods.filter(food => food.averagePrice <50.00);
              break;
          case "expensive":
              filteredFoods = foods.filter(food => food.averagePrice >50.00);
              break;
          case "super-caloric":
              filteredFoods = foods.filter(food => food.averageCalories >300);
              break;
          case "caloric":
              filteredFoods = foods.filter(food => food.averageCalories <300);
              break;
          default:
              filteredFoods = foods;
              break;
      }
      displayFoods(filteredFoods);
  }
  
  document.getElementById("home").addEventListener("click", () => filterFoods("home"));
  document.getElementById("cheap").addEventListener("click", () => filterFoods("cheap"));
  document.getElementById("expensive").addEventListener("click", () => filterFoods("expensive"));
  document.getElementById("super-caloric").addEventListener("click", () => filterFoods("super-caloric"));
  document.getElementById("caloric").addEventListener("click", () => filterFoods("caloric"));
  
  // Call the function and pass the array of atractions
  displayFoods(foods);