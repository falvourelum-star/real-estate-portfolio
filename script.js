
    const listings = [
      { id: 1, title: 'Luxury 4-Bedroom Duplex', price: '₦120,000,000', location: 'Lekki, Lagos', beds: 4, baths: 5, size: '450 m²', type: 'buy', desc: 'This beautifully designed four-bedroom duplex offers modern living in a quiet and secure neighborhood. Features spacious bedrooms, contemporary kitchen, and private parking.' },
      { id: 2, title: 'Contemporary 3-Bedroom Apartment', price: '₦4,500,000/yr', location: 'Ikeja, Lagos', beds: 3, baths: 3, size: '220 m²', type: 'rent', desc: 'Sleek urban apartment in a high-security gated compound. Close to business hubs and top commercial centers.' },
      { id: 3, title: 'Prime Waterfront Villa', price: '₦350,000,000', location: 'Ikoyi, Lagos', beds: 5, baths: 6, size: '700 m²', type: 'buy', desc: 'Exclusive waterfront mansion complete with private dock, swimming pool, and fully automated smart home controls.' }
    ];

    const grid = document.getElementById('propertyGrid');

    function renderListings(items) {
      grid.innerHTML = items.map(item => `
        <div class="card">
          <div class="card-img" style="background-image: url('estate12.jpeg')">
            <span class="badge">${item.type === 'buy' ? 'For Sale' : 'For Rent'}</span>
          </div>
          <div class="card-body">
            <div class="price">${item.price}</div>
            <h3 class="card-title">${item.title}</h3>
            <p class="location">📍 ${item.location}</p>
            <div class="specs">
              <span>🛏 ${item.beds} Beds</span>
              <span>🛁 ${item.baths} Baths</span>
              <span>📐 ${item.size}</span>
            </div>
            <button class="btn btn-secondary" style="width: 100%;" onclick="openModal(${item.id})">View Property</button>
          </div>
        </div>
      `).join('');
    }

    function filterListings() {
      const type = document.getElementById('searchType').value;
      const location = document.getElementById('searchLocation').value;
      
      const filtered = listings.filter(item => {
        const matchesType = type === 'all' || item.type === type;
        const matchesLoc = location === 'all' || item.location.includes(location);
        return matchesType && matchesLoc;
      });

      renderListings(filtered);
    }

    function openModal(id) {
      const item = listings.find(l => l.id === id);
      document.getElementById('modalTitle').innerText = item.title;
      document.getElementById('modalLocation').innerText = '📍 ' + item.location;
      document.getElementById('modalPrice').innerText = item.price;
      document.getElementById('modalDesc').innerText = item.desc;
      document.getElementById('modalSpecs').innerHTML = `
        <strong>Bedrooms:</strong> ${item.beds} | 
        <strong>Bathrooms:</strong> ${item.baths} | 
        <strong>Property Size:</strong> ${item.size}
      `;
      document.getElementById('detailsModal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('detailsModal').style.display = 'none';
    }

    document.getElementById('menuToggle').addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('active');
    });

    renderListings(listings);
