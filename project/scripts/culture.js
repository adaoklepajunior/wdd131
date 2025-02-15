// Fines data for each category
const hotelsData = {
    luxurious: [
        { name: 'Qoya', cost: '774.00', characteristic: 'Breakfast, pub, restaurant, gyn, spa, heated pool' },
        { name: 'Full Jazz', cost: '600.00', characteristic: 'Restaurant, 24h open bar, gyn, business center, jazz shows' },
        { name: 'Pestana', cost: '554.00', characteristic: 'Gyn, Restaurant, heated indoor pool, business center' }
    ],
    average: [
        { name: 'Hotel 10', cost: '400.00', characteristic: 'wi-fi, restaurant, pet friendly' },
        { name: 'Jardim Botanico House', cost: '150.00', characteristic: 'Themed rooms, kitchen, business center' },
        { name: 'Rochelle Convention', cost: '320.00', characteristic: 'Air-conditioned rooms, private parking, wi-fi' }
    ],
    airbnb: [
        { name: 'House', cost: '1021.00', characteristic: '4 rooms, 5 bathrooms' },
        { name: 'Apartment', cost: '180.00', characteristic: 'luxury decorated studio' },
        { name: 'Trailer', cost: '700.00', characteristic: 'RV with transparent hut' }
    ],
    room: [
        { name: 'kitnet Bigorrilho', cost: '20.00', characteristic: 'room, bathroom, bills included' },
        { name: 'Kitnet Batel', cost: '20.00', characteristic: 'room, bathroom, bills included, kitchen' },
        { name: 'Room Downtown', cost: '25.00', characteristic: 'room, bathroom, bills included' }
    ]
};

// Function to load hotels based on the selected category
function loadHotels(category) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';  // Clear previous content

    const hotels = hotelsData[category];
    hotels.forEach(hotel => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = hotel.name;

        const costCell = document.createElement('td');
        costCell.textContent = hotel.cost;

        const characteristicCell = document.createElement('td');
        characteristicCell.textContent = hotel.characteristic;

        row.appendChild(nameCell);
        row.appendChild(costCell);
        row.appendChild(characteristicCell);

        tableBody.appendChild(row);
    });
}