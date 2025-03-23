document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('loadBtn');
    const container = document.getElementById('itemsContainer');
  
    if (button && container) {
      button.addEventListener('click', async () => {
        try {
          const response = await fetch('/api/items');
          const data = await response.json();
  
          container.innerHTML = '';
          data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML = `<h3>${item.name}</h3><p>Price: ${item.price}</p>`;
            container.appendChild(div);
          });
        } catch (err) {
          container.innerHTML = '<p style="color:red;">Error loading items</p>';
          console.error('Fetch error:', err);
        }
      });
    }
  });
  