// --- Product Data (Centralized) ---
const products = {
    mobile: [
        {
            id: 'm1',
            name: 'iPhone 15 Pro',
            category: 'mobile',
            image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1?wid=512&hei=512&fmt=jpeg&qlt=95&.v=1692845702701',
            price: '$999',
            features: {
                'Display': '6.1" OLED ProMotion',
                'Processor': 'A17 Bionic',
                'RAM': '8GB',
                'Storage': '128GB',
                'Camera': '48MP Main + 12MP Ultra-Wide + 12MP Telephoto',
                'Battery': 'Excellent',
                'OS': 'iOS',
                'Weight': '187g'
            }
        },
        {
            id: 'm2',
            name: 'Samsung Galaxy S24 Ultra',
            category: 'mobile',
            image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-s928-sm-s928bzthmea-thumb-539077202?semc_src=permanent_shop_s24-main-kv-page&semc_alt=internal-s24-main-kv-page&nav_id=samsung-main-kv-page&_ga=2.234661413.1118181655.1706692591-1402241680.1706692591&fmt=webp',
            price: '$1199',
            features: {
                'Display': '6.8" Dynamic AMOLED 2X',
                'Processor': 'Snapdragon 8 Gen 3',
                'RAM': '12GB',
                'Storage': '256GB',
                'Camera': '200MP Main + 12MP Ultra-Wide + 10MP Telephoto + 50MP Periscope',
                'Battery': 'Excellent',
                'OS': 'Android',
                'Weight': '232g'
            }
        },
        {
            id: 'm3',
            name: 'Google Pixel 8 Pro',
            category: 'mobile',
            image: 'https://store.google.com/product/pixel_8_pro?hl=en-US',
            price: '$799',
            features: {
                'Display': '6.7" Super Actua Display',
                'Processor': 'Google Tensor G3',
                'RAM': '12GB',
                'Storage': '128GB',
                'Camera': '50MP Main + 48MP Ultra-Wide + 48MP Telephoto',
                'Battery': 'Very Good',
                'OS': 'Android',
                'Weight': '213g'
            }
        },
        {
            id: 'm4',
            name: 'OnePlus 12',
            category: 'mobile',
            image: 'https://image.oneplus.com/content/dam/oasis/product-description-pages/cn/1plus-12/pc/color-pic/green.png',
            price: '$799',
            features: {
                'Display': '6.82" Fluid AMOLED LTPO',
                'Processor': 'Snapdragon 8 Gen 3',
                'RAM': '12GB',
                'Storage': '256GB',
                'Camera': '50MP Main + 48MP Ultra-Wide + 64MP Periscope',
                'Battery': 'Excellent',
                'OS': 'Android',
                'Weight': '220g'
            }
        }
    ],
    laptop: [
        {
            id: 'l1',
            name: 'MacBook Air M3',
            category: 'laptop',
            image: 'https://appleworlds.pk/wp-content/uploads/2024/06/apple_silver-600x600.jpg',
            price: '$1099',
            features: {
                'Display': '13.6" Liquid Retina',
                'Processor': 'Apple M3',
                'RAM': '8GB',
                'Storage': '256GB SSD',
                'Battery Life': '18 Hours',
                'Weight': '1.24 kg',
                'OS': 'macOS',
                'Ports': '2x Thunderbolt / USB 4, MagSafe 3'
            }
        },
        {
            id: 'l2',
            name: 'Dell XPS 15',
            category: 'laptop',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldn3FeI3xHzrgKyW1hz9sr-vamZDjNBkaWQ&s',
            price: '$1499',
            features: {
                'Display': '15.6" FHD+ IPS',
                'Processor': 'Intel Core i7 (13th Gen)',
                'RAM': '16GB',
                'Storage': '512GB SSD',
                'Battery Life': '10 Hours',
                'Weight': '1.92 kg',
                'OS': 'Windows 11 Home',
                'Ports': '2x Thunderbolt 4, 1x USB-C 3.2 Gen 2, SD card reader'
            }
        },
        {
            id: 'l3',
            name: 'HP Spectre x360 14',
            category: 'laptop',
            image: 'https://i0.wp.com/www.hpflagshipstore.com/wp-content/uploads/2023/11/HP-SPECTRE-X360-14-EF2051TU.jpg?fit=600%2C600&ssl=1',
            price: '$1399',
            features: {
                'Display': '14" 2.8K OLED Touch',
                'Processor': 'Intel Core Ultra 7',
                'RAM': '16GB',
                'Storage': '1TB SSD',
                'Battery Life': '14 Hours',
                'Weight': '1.39 kg',
                'OS': 'Windows 11 Home',
                'Ports': '2x Thunderbolt 4, 1x USB-A 3.2 Gen 2'
            }
        },
        {
            id: 'l4',
            name: 'Lenovo ThinkPad X1 Carbon Gen 12',
            category: 'laptop',
            image: 'https://i.pcmag.com/imagery/reviews/02PX9YDzfu4pBDkKQBx9jdk-19.fit_scale.size_1028x578.v1709144797.jpg',
            price: '$1799',
            features: {
                'Display': '14" WUXGA IPS',
                'Processor': 'Intel Core Ultra 7',
                'RAM': '16GB',
                'Storage': '512GB SSD',
                'Battery Life': '15 Hours',
                'Weight': '1.13 kg',
                'OS': 'Windows 11 Pro',
                'Ports': '2x Thunderbolt 4, 2x USB-A 3.2 Gen 1, HDMI 2.1'
            }
        }
    ]
};

// Function to get product by ID
function getProductById(id) {
    for (const category in products) {
        const product = products[category].find(p => p.id === id);
        if (product) {
            return product;
        }
    }
    return null;
}

// --- Home Page Logic ---
if (document.getElementById('mobile-products')) {
    const mobileProductsContainer = document.getElementById('mobile-products');
    const laptopProductsContainer = document.getElementById('laptop-products');

    function renderProductCards(container, category) {
        container.innerHTML = ''; // Clear previous content
        products[category].forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <p>${product.features.Display || product.features.Processor || ''}</p>
                <button class="add-to-compare" data-product-id="${product.id}">Add to Compare</button>
            `;
            container.appendChild(productCard);
        });

        // Add event listeners for "Add to Compare" buttons
        container.querySelectorAll('.add-to-compare').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                addToCompare(productId);
            });
        });
    }

    function addToCompare(productId) {
        let compareList = JSON.parse(localStorage.getItem('compareList')) || [];

        // Add to list if not already present and limit to 2 for direct comparison
        if (!compareList.includes(productId)) {
            if (compareList.length < 2) {
                compareList.push(productId);
                alert(`${getProductById(productId).name} added to comparison list!`);
            } else {
                // If 2 items are already selected, replace the oldest one or notify
                // For simplicity, let's just replace the oldest one
                compareList.shift(); // Remove the first item
                compareList.push(productId);
                alert(`${getProductById(productId).name} added to comparison list! (Oldest item replaced)`);
            }
        } else {
            alert(`${getProductById(productId).name} is already in the comparison list.`);
        }
        localStorage.setItem('compareList', JSON.stringify(compareList));
        updateCompareButtonText(); // Update the nav button text
    }

    function updateCompareButtonText() {
        const compareNavButton = document.querySelector('header nav a[href="comparison.html"]');
        let compareList = JSON.parse(localStorage.getItem('compareList')) || [];
        if (compareList.length > 0) {
            compareNavButton.textContent = `Compare Selected (${compareList.length})`;
        } else {
            compareNavButton.textContent = 'Compare Selected';
        }
    }

    // Initial render and button text update
    renderProductCards(mobileProductsContainer, 'mobile');
    renderProductCards(laptopProductsContainer, 'laptop');
    updateCompareButtonText();
}

// --- Comparison Page Logic ---
if (document.getElementById('comparison-selection')) {
    const categorySelect1 = document.getElementById('categorySelect1');
    const productSelect1 = document.getElementById('productSelect1');
    const categorySelect2 = document.getElementById('categorySelect2');
    const productSelect2 = document.getElementById('productSelect2');
    const compareButton = document.getElementById('compareButton');
    const clearComparisonButton = document.getElementById('clearComparisonButton');
    const comparisonResultsSection = document.getElementById('comparison-results');
    const comparisonTableContainer = document.getElementById('comparison-table-container');

    let selectedProductsForComparison = []; // Stores IDs for current comparison

    // Populate product dropdowns based on category selection
    function populateProductDropdown(categoryDropdown, productDropdown) {
        const category = categoryDropdown.value;
        productDropdown.innerHTML = '<option value="">Select Product</option>'; // Reset
        productDropdown.disabled = true;

        if (category && products[category]) {
            products[category].forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.name;
                productDropdown.appendChild(option);
            });
            productDropdown.disabled = false;
        }
    }

    // Load initial selections from localStorage or set defaults
    function loadInitialComparisonSelections() {
        const compareList = JSON.parse(localStorage.getItem('compareList')) || [];
        selectedProductsForComparison = compareList; // Set initial selection

        if (compareList[0]) {
            const prod1 = getProductById(compareList[0]);
            if (prod1) {
                categorySelect1.value = prod1.category;
                populateProductDropdown(categorySelect1, productSelect1);
                productSelect1.value = prod1.id;
            }
        }
        if (compareList[1]) {
            const prod2 = getProductById(compareList[1]);
            if (prod2) {
                categorySelect2.value = prod2.category;
                populateProductDropdown(categorySelect2, productSelect2);
                productSelect2.value = prod2.id;
            }
        }

        // Automatically trigger comparison if two products are already selected
        if (compareList.length === 2) {
            triggerComparison();
        }
    }

    // Function to generate the comparison table
    function generateComparisonTable(product1, product2) {
        if (!product1 || !product2) {
            comparisonTableContainer.innerHTML = '<p class="note">Please select two products to compare.</p>';
            comparisonResultsSection.classList.remove('hidden');
            return;
        }

        const features1 = product1.features;
        const features2 = product2.features;

        // Collect all unique feature keys
        const allFeatures = new Set([...Object.keys(features1), ...Object.keys(features2)]);

        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>${product1.name}</th>
                        <th>${product2.name}</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Add common features first for better readability
        const commonFeatures = ['Display', 'Processor', 'RAM', 'Storage', 'Battery Life', 'OS', 'Price', 'Weight', 'Camera', 'Ports'];
        commonFeatures.forEach(feature => {
            if (allFeatures.has(feature)) {
                tableHTML += `
                    <tr>
                        <td>${feature}</td>
                        <td>${features1[feature] || 'N/A'}</td>
                        <td>${features2[feature] || 'N/A'}</td>
                    </tr>
                `;
                allFeatures.delete(feature); // Remove from set once added
            }
        });

        // Add remaining unique features
        allFeatures.forEach(feature => {
            tableHTML += `
                <tr>
                    <td>${feature}</td>
                    <td>${features1[feature] || 'N/A'}</td>
                    <td>${features2[feature] || 'N/A'}</td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;
        comparisonTableContainer.innerHTML = tableHTML;
        comparisonResultsSection.classList.remove('hidden');
    }

    function triggerComparison() {
        const p1Id = productSelect1.value;
        const p2Id = productSelect2.value;

        if (!p1Id || !p2Id) {
            alert('Please select two products before comparing!');
            return;
        }

        const product1 = getProductById(p1Id);
        const product2 = getProductById(p2Id);

        generateComparisonTable(product1, product2);
    }

    function clearComparisonSelections() {
        categorySelect1.value = '';
        productSelect1.innerHTML = '<option value="">Select Product</option>';
        productSelect1.disabled = true;

        categorySelect2.value = '';
        productSelect2.innerHTML = '<option value="">Select Product</option>';
        productSelect2.disabled = true;

        localStorage.removeItem('compareList');
        comparisonResultsSection.classList.add('hidden');
        selectedProductsForComparison = []; // Clear internal array
        alert('Comparison selections cleared!');
    }


    // Event Listeners for category changes
    categorySelect1.addEventListener('change', () => populateProductDropdown(categorySelect1, productSelect1));
    categorySelect2.addEventListener('change', () => populateProductDropdown(categorySelect2, productSelect2));

    // Event Listener for the Compare button
    compareButton.addEventListener('click', triggerComparison);

    // Event Listener for the Clear button
    clearComparisonButton.addEventListener('click', clearComparisonSelections);

    // Initialize comparison page
    loadInitialComparisonSelections();
}