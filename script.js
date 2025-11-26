// --- LOCAL STORAGE SYSTEM ---
function loadItems() {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : null;
}

function saveItems() {
    localStorage.setItem("items", JSON.stringify(items));
}

function loadCart() {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


// ======================
//  DATA PRODUK FIXED
// ======================
let items = [

    // --- TUKANG SOMAY ---
    { id: 1, kategori: "Tukang Somay", nama: "Sagu 1kg", harga: 8000 },
    { id: 2, kategori: "Tukang Somay", nama: "Sagu 1/2kg", harga: 4000 },
    { id: 3, kategori: "Tukang Somay", nama: "Sagu 1/4kg", harga: 2000 },

    { id: 4, kategori: "Tukang Somay", nama: "Terigu 1kg", harga: 8000 },
    { id: 5, kategori: "Tukang Somay", nama: "Terigu 1/4kg", harga: 2000 },
    { id: 6, kategori: "Tukang Somay", nama: "Terigu 1/2kg", harga: 4000 },

    { id: 7, kategori: "Tukang Somay", nama: "Kacang 1kg", harga: 38000 },
    { id: 8, kategori: "Tukang Somay", nama: "Kacang 1/2kg", harga: 19000 },
    { id: 9, kategori: "Tukang Somay", nama: "Kacang 1/4kg", harga: 9500 },

    { id: 10, kategori: "Tukang Somay", nama: "Minyak 1kg", harga: 19000 },
    { id: 11, kategori: "Tukang Somay", nama: "Minyak 1/2kg", harga: 9500 },
    { id: 12, kategori: "Tukang Somay", nama: "Minyak 1/4kg", harga: 5000 },

    { id: 13, kategori: "Tukang Somay", nama: "Citrun", harga: 3000 },

    { id: 14, kategori: "Tukang Somay", nama: "Miwon 1/4kg", harga: 12000 },
    { id: 15, kategori: "Tukang Somay", nama: "Miwon 500", harga: 3000 },
    { id: 16, kategori: "Tukang Somay", nama: "Miwon 1000", harga: 5500 },
    { id: 17, kategori: "Tukang Somay", nama: "Miwon 1 500", harga: 500 },
    { id: 18, kategori: "Tukang Somay", nama: "Miwon 1 1000", harga: 1000 },

    { id: 19, kategori: "Tukang Somay", nama: "Bihun 1/4", harga: 5000 },
    { id: 20, kategori: "Tukang Somay", nama: "Bihun 1/2", harga: 10000 },

    { id: 21, kategori: "Tukang Somay", nama: "Kerupuk 1/4", harga: 4000 },
    { id: 22, kategori: "Tukang Somay", nama: "Kerupuk 1/2", harga: 8000 },

    { id: 23, kategori: "Tukang Somay", nama: "Kecap Kuda Besar", harga: 8000 },
    { id: 24, kategori: "Tukang Somay", nama: "Kecap Kuda Kecil", harga: 4500 },
    { id: 25, kategori: "Tukang Somay", nama: "Kecap Bango Kemas", harga: 3000 },
    { id: 26, kategori: "Tukang Somay", nama: "Kecap Sedap Kemas", harga: 2000 },

    { id: 27, kategori: "Tukang Somay", nama: "Gula Merah 1/4", harga: 4500 },
    { id: 28, kategori: "Tukang Somay", nama: "Gula Merah 1/2", harga: 8000 },
    { id: 29, kategori: "Tukang Somay", nama: "Gula Merah 1 On", harga: 2000 },

    { id: 30, kategori: "Tukang Somay", nama: "Bawang Putih 1/4", harga: 9000 },
    { id: 31, kategori: "Tukang Somay", nama: "Bawang Putih 1/2", harga: 18000 },
    { id: 32, kategori: "Tukang Somay", nama: "Bawang Putih 1 On", harga: 3500 },

    { id: 33, kategori: "Tukang Somay", nama: "Kara", harga: 5500 },
    { id: 34, kategori: "Tukang Somay", nama: "Miki", harga: 5000 },

    { id: 35, kategori: "Tukang Somay", nama: "Saos Bantal Sedap", harga: 4000 },
    { id: 36, kategori: "Tukang Somay", nama: "Saos Bantal Sambel", harga: 3500 },

    { id: 37, kategori: "Tukang Somay", nama: "Kemiri 1 On", harga: 5000 },
    { id: 38, kategori: "Tukang Somay", nama: "Kemiri 1/2", harga: 22000 },
    { id: 39, kategori: "Tukang Somay", nama: "Kemiri 1/4", harga: 11000 },
    { id: 40, kategori: "Tukang Somay", nama: "Kemiri 1kg", harga: 44000 },


    // --- ROKOK (ID LANJUT 41) ---
    { id: 41, kategori: "Rokok", nama: "Merah", harga: 16000 },
    { id: 42, kategori: "Rokok", nama: "Djinggo", harga: 11000 },
    { id: 43, kategori: "Rokok", nama: "Divo", harga: 12000 },

    { id: 44, kategori: "Rokok", nama: "Twizz Unggu", harga: 26000 },
    { id: 45, kategori: "Rokok", nama: "Twizz Kuning", harga: 26000 },

    { id: 46, kategori: "Rokok", nama: "Aroma Teh", harga: 15000 },
    { id: 47, kategori: "Rokok", nama: "Aroma Kuning", harga: 15000 },
    { id: 48, kategori: "Rokok", nama: "Aroma Blod", harga: 26000 },

    { id: 49, kategori: "Rokok", nama: "Super", harga: 25000 },

    { id: 50, kategori: "Rokok", nama: "Aspro Kecil", harga: 18000 },
    { id: 51, kategori: "Rokok", nama: "Aspro Besar", harga: 28000 },

    { id: 52, kategori: "Rokok", nama: "Surya 16", harga: 35000 },
    { id: 53, kategori: "Rokok", nama: "Surya 12", harga: 26000 },

    { id: 54, kategori: "Rokok", nama: "Sampoerna Mild", harga: 35000 },
    { id: 55, kategori: "Rokok", nama: "Sampurna", harga: 16000 },

    { id: 56, kategori: "Rokok", nama: "Revil", harga: 22000 },
    { id: 57, kategori: "Rokok", nama: "Samsu", harga: 20000 },
    { id: 58, kategori: "Rokok", nama: "Prima", harga: 16000 },

    { id: 59, kategori: "Rokok", nama: "Harmoni 16", harga: 13000 },
    { id: 60, kategori: "Rokok", nama: "Harmoni 12", harga: 10000 },

    { id: 61, kategori: "Rokok", nama: "Gula Aren 16", harga: 11000 },
    { id: 62, kategori: "Rokok", nama: "Gula Aren 12", harga: 9000 },

    { id: 63, kategori: "Rokok", nama: "76 Apel", harga: 15000 },
    { id: 64, kategori: "Rokok", nama: "76 Mangga", harga: 15000 },

    { id: 65, kategori: "Rokok", nama: "Wismilak", harga: 16000 },

    { id: 66, kategori: "Rokok", nama: "Neslite Max", harga: 17000 },

    { id: 67, kategori: "Rokok", nama: "Evo", harga: 25000 },

    { id: 68, kategori: "Rokok", nama: "Djinggo Teh", harga: 12000 },
    { id: 69, kategori: "Rokok", nama: "Djinggo Herba", harga: 12000 },

    { id: 70, kategori: "Rokok", nama: "Juara Teh Manis", harga: 15000 },
    { id: 71, kategori: "Rokok", nama: "Juara Jambu", harga: 15000 },

    { id: 72, kategori: "Rokok", nama: "Diablo", harga: 12000 },
    { id: 73, kategori: "Rokok", nama: "Asa", harga: 8000 },
    { id: 74, kategori: "Rokok", nama: "Sagan", harga: 11000 },

    { id: 75, kategori: "Rokok", nama: "Neslite Putih", harga: 22000 },
    { id: 76, kategori: "Rokok", nama: "Neslite Mentol", harga: 22000 },
    { id: 77, kategori: "Rokok", nama: "Neslite Hitam", harga: 22000 },

    { id: 78, kategori: "Rokok", nama: "Magnum Mex 12", harga: 20000 },
    { id: 79, kategori: "Rokok", nama: "Magnum Mex 20", harga: 30000 },

    { id: 80, kategori: "Rokok", nama: "Coklat Biasa", harga: 17000 },
    { id: 81, kategori: "Rokok", nama: "Coklat Extra", harga: 16000 },

    { id: 82, kategori: "Rokok", nama: "Camel", harga: 20000 },
    { id: 83, kategori: "Rokok", nama: "Ziga", harga: 17000 }
];


// ID berikutnya aman
let nextItemId = Math.max(...items.map(i => i.id)) + 1;


// =====================
//  STATE
// =====================
let cart = loadCart();


// =====================
// FORMAT RUPIAH
// =====================
const formatRupiah = num =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(num);


// =====================
// SEARCH
// =====================
window.searchItems = () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    
    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.nav-button[data-category="Semua"]').classList.add('active');

    document.getElementById('product-display').classList.remove('hidden');
    document.getElementById('admin-panel').classList.add('hidden');

    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    document.getElementById('current-category-title').textContent =
        `Hasil Pencarian untuk: "${query}"`;

    const filtered = items.filter(item =>
        item.nama.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        productList.innerHTML = '<p>Barang tidak ditemukan.</p>';
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h4>${item.nama}</h4>
            <p>${formatRupiah(item.harga)}</p>
            <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
        `;
        productList.appendChild(card);
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            addItemToCart(parseInt(e.target.dataset.id));
        });
    });
};


// =====================
// DISPLAY PRODUK
// =====================
const displayProducts = (category = "Semua", force = false) => {

    if (document.getElementById('search-input').value && !force) {
        searchItems();
        return;
    }

    const productList = document.getElementById('product-list');
    productList.innerHTML = "";
    document.getElementById('product-display').classList.remove('hidden');
    document.getElementById('admin-panel').classList.add('hidden');

    document.getElementById("current-category-title").textContent =
        category === "Semua" ? "Semua Produk" : `Kategori: ${category}`;

    const filtered =
        category === "Semua"
            ? items
            : items.filter(i => i.kategori === category);

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h4>${item.nama}</h4>
            <p>${formatRupiah(item.harga)}</p>
            <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
        `;
        productList.appendChild(card);
    });

    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", e => {
            addItemToCart(parseInt(e.target.dataset.id));
        });
    });
};


// =====================
// KERANJANG
// =====================
const updateCartTotal = () => {
    const total = cart.reduce((s, x) => s + x.harga * x.qty, 0);
    document.getElementById("cart-total-price").textContent = formatRupiah(total);
    saveCart();
};

const renderCart = () => {
    const wrap = document.getElementById("cart-items");
    wrap.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <div class="cart-item-info">
                <span>${item.nama}</span>
                <span style="font-size:.9em">${formatRupiah(item.harga)} x ${item.qty}</span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" data-id="${item.id}" data-action="decrease">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
                <button class="remove-btn" data-id="${item.id}">X</button>
            </div>
        `;
        wrap.appendChild(li);
    });

    updateCartTotal();
    addCartControlListeners();
};

const addItemToCart = id => {
    const product = items.find(i => i.id === id);
    if (!product) return;

    const exist = cart.find(i => i.id === id);

    if (exist) exist.qty++;
    else cart.push({ ...product, qty: 1 });

    renderCart();
};

const updateItemQuantity = (id, action) => {
    const idx = cart.findIndex(i => i.id === id);
    if (idx < 0) return;

    if (action === "increase") cart[idx].qty++;
    else {
        cart[idx].qty--;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
    }

    renderCart();
};

const removeItemFromCart = id => {
    cart = cart.filter(i => i.id !== id);
    renderCart();
};

const addCartControlListeners = () => {
    document.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            updateItemQuantity(
                parseInt(e.target.dataset.id),
                e.target.dataset.action
            );
        });
    });

    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            removeItemFromCart(parseInt(e.target.dataset.id));
        });
    });
};


// =====================
// ADMIN (EDIT/HAPUS)
// =====================
const renderEditItems = () => {
    const wrap = document.getElementById("edit-item-list");
    wrap.innerHTML = "";

    items.forEach(item => {
        const row = document.createElement("div");
        row.className = "edit-item-row";
        row.innerHTML = `
            <div class="edit-item-info">
                ${item.kategori} | ID:${item.id}
            </div>

            <div class="edit-item-controls">
                <input type="text" id="name-${item.id}" value="${item.nama}">
                <button onclick="saveNewName(${item.id})">Ubah Nama</button>

                <input type="number" id="price-${item.id}" value="${item.harga}">
                <button onclick="saveNewPrice(${item.id})">Ubah Harga</button>

                <button class="btn-delete" onclick="deleteItem(${item.id})">Hapus</button>
            </div>
        `;
        wrap.appendChild(row);
    });
};

window.saveNewPrice = id => {
    const input = document.getElementById(`price-${id}`);
    const val = parseInt(input.value);

    if (!val || val <= 0) return alert("Harga tidak valid!");

    const idx = items.findIndex(i => i.id === id);
    if (idx < 0) return;

    items[idx].harga = val;
    saveItems();
    renderEditItems();
    alert("Harga berhasil diubah!");
};

window.saveNewName = id => {
    const input = document.getElementById(`name-${id}`);
    const name = input.value.trim();

    if (!name) return alert("Nama tidak boleh kosong!");

    const idx = items.findIndex(i => i.id === id);

    items[idx].nama = name;
    saveItems();
    renderEditItems();
    alert("Nama berhasil diubah!");
};

window.deleteItem = id => {
    if (!confirm("Hapus barang ini?")) return;

    items = items.filter(i => i.id !== id);
    cart = cart.filter(i => i.id !== id);

    saveItems();
    saveCart();
    renderEditItems();
    renderCart();
};


// =====================
// TAMBAH ITEM BARU
// =====================
const handleAddItem = e => {
    e.preventDefault();

    const name = document.getElementById("item-name").value;
    const price = parseInt(document.getElementById("item-price").value);
    const cat = document.getElementById("item-category").value;

    const newItem = {
        id: nextItemId++,
        kategori: cat,
        nama: name,
        harga: price
    };

    items.push(newItem);
    saveItems();
    alert("Barang berhasil ditambahkan!");
    e.target.reset();
    renderEditItems();
};


// =====================
// INIT
// =====================
document.addEventListener("DOMContentLoaded", () => {
    displayProducts("Semua");
    renderCart();

    document.querySelectorAll(".nav-button").forEach(btn => {
        btn.addEventListener("click", e => {
            const c = e.target.dataset.category;

            document.querySelectorAll(".nav-button").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");

            document.getElementById("search-input").value = "";

            if (c === "Admin") {
                document.getElementById("product-display").classList.add("hidden");
                document.getElementById("admin-panel").classList.remove("hidden");
                renderEditItems();
            } else {
                displayProducts(c, true);
            }
        });
    });

    document.getElementById("add-item-form").addEventListener("submit", handleAddItem);
});