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

const atractions = [
    {
      atractionName: "Botanical Garden",
      location: "Bairro Jardim Botânico",
      dedicated: "1991, October, 5",
      area: 2992367.1,
      imageUrl:
      "https://images.pexels.com/photos/1754064/pexels-photo-1754064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      atractionName: "Train Ride Through the Mountains",
      location: "Bairro Jardim Botânico",
      dedicated: "1884, May, 21",
      area: 101284,
      imageUrl:
      "https://images.pexels.com/photos/825785/pexels-photo-825785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      atractionName: "Tanguá Park",
      location: "Bairro Pilarzinho",
      dedicated: "1996, November, 23",
      area: 2540282.86,
      imageUrl:
      "https://images.pexels.com/photos/19220139/pexels-photo-19220139/free-photo-of-por-do-sol-ponto-de-referencia-ponto-historico-relaxamento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      atractionName: "Ópera de Arame - Wire Opera",
      location: "Bairro Abranches",
      dedicated: "1992, March, 18",
      area: 1108682.77,
      imageUrl:
      "https://images.pexels.com/photos/12828285/pexels-photo-12828285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      atractionName: "Oscar Niemeyer Museum",
      location: "Centro Cívico",
      dedicated: "2002, November, 22",
      area: 376736.86,
      imageUrl:
      "https://images.pexels.com/photos/1045200/pexels-photo-1045200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      atractionName: "Curitiba Brazil Temple",
      location: "Bairro Mossunguê",
      dedicated: "2008, June, 1",
      area: 27850,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1235.jpg"
    },
    
  ];
  
  // Create atraction cards
  function displayAtractions(atractions) {
      // where atraction will be displayed
      const atractionGrid = document.querySelector('.atractions-grid');
      atractionGrid.innerHTML = "";
  
      atractions.forEach(atraction => {
          // Create a figure element
          const figure = document.createElement('figure');
  
          // Create and append an image element with lazy loading
          const img = document.createElement('img');
          img.src = atraction.imageUrl;
          img.alt = `${atraction.atractionName}`;
          img.loading = "lazy";
          figure.appendChild(img);
  
          // Create and append a caption and the figure
          const figcaption = document.createElement('figcaption');
          figcaption.innerHTML = `
              <h3>${atraction.atractionName}</h3>
              <p><strong>Location:</strong> ${atraction.location}</p>
              <p><strong>Dedicated:</strong> ${atraction.dedicated}</p>
              <p><strong>Area:</strong> ${atraction.area}</p>
          `;
          figure.appendChild(figcaption);
          atractionGrid.appendChild(figure);
      });
  }
  
  function filterAtractions(option) {
      let filteredAtractions = atractions;
  
      switch (option) {
          case "older":
              filteredAtractions = atractions.filter(atraction => new Date(atraction.dedicated).getFullYear() < 1900);
              break;
          case "newer":
              filteredAtractions = atractions.filter(atraction => new Date(atraction.dedicated).getFullYear() > 2000);
              break;
          case "huge":
              filteredAtractions = atractions.filter(atraction => atraction.area >1000000);
              break;
          case "small":
              filteredAtractions = atractions.filter(atraction => atraction.area < 40000);
              break;
          default:
              filteredAtractions = atractions;
              break;
      }
      displayAtractions(filteredAtractions);
  }
  
  document.getElementById("home").addEventListener("click", () => filterAtractions("home"));
  document.getElementById("older").addEventListener("click", () => filterAtractions("older"));
  document.getElementById("newer").addEventListener("click", () => filterAtractions("newer"));
  document.getElementById("huge").addEventListener("click", () => filterAtractions("huge"));
  document.getElementById("small").addEventListener("click", () => filterAtractions("small"));
  
  // Call the function and pass the array of atractions
  displayAtractions(atractions);