const menuForm = document.getElementById('menuForm');
const menuList = document.getElementById('menuList');

menuForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const menu = document.getElementById('menu').value;
    const method = document.getElementById('method').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const pax = document.getElementById('pax').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;

    const menuCart = document.createElement('div');
    menuCart.classList.add('menu-Cart');
    menuCart.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Menu:</strong> ${menu}</p>
        <p><strong>Method:</strong> ${method}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Pax:</strong> ${pax}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Tambah fungsi delete
    menuCart.querySelector('.delete-btn').addEventListener('click', function () {
        menuCart.remove();
    });

    if (!name || !menu || !method || !date || !time || !pax || !mobile || !email) {
        alert('Please fill in all fields before submitting!');
        return; // Hentikan proses submit
    }

    menuList.appendChild(menuCart);
    menuForm.reset();
});