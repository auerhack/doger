// Генерация случайного ID (пример, может потребоваться заменить)
function generateRandomId() {
    return Math.random().toString(36).substring(7);
}
const categories = [
    {id: '3', title: 'Пахлава', products: [
        { 
            id: generateRandomId(), 
            name: "Пахлава медовая", 
            description: "Медовая пахлава состоит из тонких слоёв теста, грецких орехов и натурального меда.", 
            price: 75, 
            image: "images/pahlava/medovaya.png",
        },
        { 
            id: generateRandomId(), 
            name: "Пахлава фисташковая", 
            description: "Нежное тесто, обволакивающие фисташки, и сладкий сироп рассыпают ароматом.", 
            price: 85, 
            image: "images/pahlava/fistashka.png",
        },
        { 
            id: generateRandomId(), 
            name: "Пахлава шоколадная", 
            description: "Нежное тесто, щедро пропитанное шоколадом, утонченно дополнено орехами.", 
            price: 85, 
            image: "images/pahlava/shokolad.png",
        },
        { 
            id: generateRandomId(), 
            name: "Бурма с грецкими орехами", 
            description: "Хрустящие слои, великолепно пропитанные медом, усыпанные ароматными орехами.", 
            price: 80, 
            image: "images/pahlava/burma_greckii_oreh.png",
        },
        { 
            id: generateRandomId(), 
            name: "Бурма с миндалём", 
            description: "Тонкие слои теста, щедро пропитанные медом, обсыпанные хрустящим миндалем.", 
            price: 80, 
            image: "images/pahlava/burma_mindal.png",
        },

        
    ]},
    { id: '1', title: 'Пончики', products: [
        { 
            id: generateRandomId(), 
            name: "Шоколадный пончик", 
            description: "Политый шоколадной глазурью с начинкой из какао крема", 
            price: 99, 
            image: "images/ponchik/shokolad1.png",
        },
        { 
            id: generateRandomId(), 
            name: "Клубничный пончик", 
            description: "Политый шоколадной глазурью с начинкой из клубничного джема", 
            price: 99, 
            image: "images/ponchik/klubnika1.png",
        },
        { 
            id: generateRandomId(), 
            name: "Творожный пончик", 
            description: "Политый шоколадной глазурью с начинкой из творога", 
            price: 99, 
            image: "images/ponchik/tvorog1.png",
        },
        { 
            id: generateRandomId(), 
            name: "Банановый пончик", 
            description: "Политый шоколадной глазурью с начинкой из бананового джема", 
            price: 99, 
            image: "images/ponchik/banan1.png",
        },
        { 
            id: generateRandomId(), 
            name: "Йогуртовый пончик", 
            description: "Политый шоколадной глазурью с начинкой из йогурта", 
            price: 99, 
            image: "images/ponchik/iogurt1.png",
        },
        { 
            id: generateRandomId(), 
            name: "Ванильный пончик", 
            description: "Политый шоколадной глазурью с ванильно-сливочной начинкой", 
            price: 99, 
            image: "images/ponchik/vanil1.png",
        },
        { 
            id: generateRandomId(), 
            name: "Пончик со сгущенкой", 
            description: "Политый шоколадной глазурью с начинкой из варенной сгущёнки", 
            price: 99, 
            image: "images/ponchik/sgushenka1.png",
        },
        { 
            id: generateRandomId(), 
            name: "Пончик «Нутелла»", 
            description: "Политый молочным бельгийским шоколадом с начинкой из Нутеллы", 
            price: 120, 
            image: "images/ponchik/nutella1.png",
        },
    ]},
    { id: '2', title: 'Бабл ти', products: [
        // Бабл Ти
        { 
            id: generateRandomId(), 
            name: "Бабл ти Орео 0.5л", 
            description: "Печенье Орео, молоко, шарики из тапиоки/соковые шарики", 
            price: 270, 
            image: "images/bubbletea/oreo.png",
        },
        { 
            id: generateRandomId(), 
            name: "Бабл ти Ягодное молоко 0.5л", 
            description: "Натуральная клубника, малина, сахар, чай, молоко, шарики из тапиоки/соковые шарики", 
            price: 290, 
            image: "images/bubbletea/yagoda.png",
        },
        { 
            id: generateRandomId(), 
            name: "Бабл ти Апельсин-маракуйя 0.5л", 
            description: "Натуральный апельсин, натуральная маракуйя, жасминовый чай, Sprite, сахар, шарики из тапиоки/соковые шарики", 
            price: 270, 
            image: "images/bubbletea/apelsin_marakuia.png",
        },
        { 
            id: generateRandomId(), 
            name: "Бабл ти Чай матча 0.5л", 
            description: "Матча чай, молоко, сахар, шарики из тапиоки/соковые шарики", 
            price: 270, 
            image: "images/bubbletea/matcha.png",
        },
    ]},
    
];

function renderProducts() {
    const detailsProduct = document.querySelector('.details_product');

   // Проходимся по каждой категории
categories.forEach(category => {
    // Создаем элементы для категории и заголовка
    const section = document.createElement('section');
    section.classList.add('section');
    section.id = `category${category.id}`;

    const titleLink = document.createElement('div');
    titleLink.classList.add('title_link');
    titleLink.textContent = category.title;

    const menuPage = document.createElement('div');
    menuPage.classList.add('menu_page');
    menuPage.id = `menu${category.id}`;

    // Добавляем заголовок в секцию
    section.appendChild(titleLink);
    // Добавляем меню в секцию
    section.appendChild(menuPage);

    // Проходимся по каждому продукту в категории и создаем элементы для них
    category.products.forEach(product => {
        const productElement = document.createElement('article');
        productElement.classList.add('menu_page_card');
        productElement.id = product.id;

        productElement.innerHTML = `
            <div class="img_text_menu_page_card">
                <div class="img_menu_page_card">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="text_menu_page_card">
                    <div class="name_menu_page_card">${product.name}</div>
                    <div class="desc_menu_page_card">${product.description}</div>
                </div>
            </div>
            <div class="price_add_menu_page_card">
                <div class="price_menu_page_card">${product.price} сом</div>
                <div class="remove_quantity_add"> 
                    <button class="remove_from_cart" onclick="removeFromCart('${product.id}')" style="display: none;">-</button>
                    <span class="quantity_in_cart" id="quantity_${product.id}" style="display: none;"></span>
                    <button class="add_menu_page_card" onclick="addToCart('${product.id}', '${product.name}', '${product.price}', '${product.image}')">
                        Выбрать
                    </button>
                </div>
            </div>
        `;

        // Добавляем продукт в меню
        menuPage.appendChild(productElement);
    });

    // Добавляем секцию (категорию) на страницу
    detailsProduct.appendChild(section);
});

}

// Вызываем функцию для добавления продуктов на страницу при загрузке
renderProducts();



function updateButtonState(productId, callback) {
    const addButton = document.getElementById(productId).querySelector('.add_menu_page_card');
    const removeButton = document.getElementById(productId).querySelector('.remove_from_cart');
    const cartItem = document.querySelector(`.product_card[data-id="${productId}"]`);
    const menuPageCard = document.getElementById(productId);

    if (cartItem) {
        const currentQuantity = parseInt(cartItem.dataset.quantity);
        addButton.textContent = currentQuantity > 0 ? '+' : 'Выбрать';
        addButton.classList.toggle('added', currentQuantity > 0); // Добавляет/удаляет класс "added" в зависимости от наличия товара в корзине

        removeButton.style.display = currentQuantity > 0 ? 'inline' : 'none'; // Скрываем, если счетчик равен 0

        // Добавляем счетчик рядом с кнопкой "Выбрать" на menu_page_card
        const quantityElement = menuPageCard.querySelector('.quantity_in_cart');
        quantityElement.textContent = currentQuantity > 0 ? `${currentQuantity}` : '';
        quantityElement.style.display = currentQuantity > 0 ? 'inline' : 'none'; // Скрываем, если счетчик равен 0
    } else {
        addButton.textContent = 'Выбрать'; // Текст кнопки "Выбрать"
        addButton.classList.remove('added'); // Удаляет класс "added", если товар не в корзине

        // Скрываем счетчик и кнопку "Убрать из корзины" на menu_page_card
        const quantityElement = menuPageCard.querySelector('.quantity_in_cart');
        quantityElement.style.display = 'none';
        removeButton.style.display = 'none';
    }

    // Вызываем колбэк, если он предоставлен
    if (callback) {
        callback();
    }
}




function addToCart(productId, name, price, image) {
    const cartContainer = document.getElementById('cart');
    const existingCartItem = document.querySelector(`.product_card[data-id="${productId}"]`);

    if (existingCartItem) {
        // Если товар уже есть в корзине, увеличим количество
        const quantityElement = existingCartItem.querySelector('.quantity');
        const currentQuantity = parseInt(existingCartItem.dataset.quantity) + 1;
        existingCartItem.dataset.quantity = currentQuantity;
        quantityElement.textContent = `${currentQuantity}x`;
    } else {
        const cartItem = document.createElement('a');
        cartItem.classList.add('product_card');
        cartItem.setAttribute('data-id', `${productId}`);
        cartItem.dataset.id = productId;
        cartItem.dataset.quantity = 1;
        cartItem.innerHTML = `
                <a href="#${productId}" class="product_card_img">
                    <img src="${image}" alt="${name}">
                </a>
                <div class="text_product_card">
                    <div class="product_card_name">${name}</div>
                    <div class="product_card_price">${price}c</div>
                </div>
                <button class="product_card_remove" data-id="${productId}" onclick="removeItemFromCart('${productId}')">⨉</button>
                <div class="quantity quantity_sb">1x</div>
        `;
        // Вставляем элемент перед первым дочерним элементом в контейнере
        const cartContainer = document.getElementById('cart');
        const firstChild = cartContainer.firstChild;
        if (firstChild) {
            cartContainer.insertBefore(cartItem, firstChild);
        } else {
            cartContainer.appendChild(cartItem);
        }

        console.log(`Товар с id ${productId} добавлен в корзину.`);
    }

    // Вызываем функцию для обновления состояния кнопки после добавления товара
    updateButtonState(productId);
}

function removeFromCart(productId) {
    const cartItem = document.querySelector(`.product_card[data-id="${productId}"]`);

    if (cartItem) {
        const quantityElement = cartItem.querySelector('.quantity');
        const currentQuantity = parseInt(cartItem.dataset.quantity);

        if (currentQuantity > 1) {
            // Если товар в корзине больше одного, уменьшим количество
            cartItem.dataset.quantity = currentQuantity - 1;
            quantityElement.textContent = `${cartItem.dataset.quantity}x`;
        } else {
            setTimeout(() => {
                cartItem.remove();
                console.log(`Товар с id ${productId} удален из корзины.`);
                // Вызываем функцию для обновления состояния кнопки после удаления товара
                updateButtonState(productId);
            }, 0); // Задержка для завершения анимации перед удалением элемента
        }

        // Обновляем состояние кнопки после уменьшения количества
        updateButtonState(productId);
    }
}

function removeItemFromCart(productId) {
    const cartItem = document.querySelector(`.product_card[data-id="${productId}"]`);

    if (cartItem) {
        setTimeout(() => {
            cartItem.remove();
            console.log(`Товар с id ${productId} удален из корзины.`);
            // Вызываем функцию для обновления состояния кнопки после удаления товара
            updateButtonState(productId);
        }, 0); // Задержка для завершения анимации перед удалением элемента
    }
}

// Открывает модальное окно заказа
function openOrderModal() {
    // Добавляем класс для блокировки прокрутки
    document.body.classList.add('modal-open');

    // Отображает модальное окно
    const modal = document.getElementById('orderModal');
    modal.style.display = 'block';

    // Очищает содержимое cartModal перед добавлением новых товаров
    const cartModal = document.getElementById('cartModal');
    cartModal.innerHTML = '';

    // Получает все товары из корзины
    const cartItems = document.querySelectorAll('.product_card');

    let deliveryCost = 150; // Фиксированная стоимость доставки
    let totalSum = 0; // Переменная для хранения общей суммы

    if (cartItems.length > 0) {
        // Корзина не пуста, отображаем товары
        cartItems.forEach(item => {
            const productId = item.dataset.id;
            const productImage = item.querySelector('.product_card_img img').src;
            const productName = item.querySelector('.product_card_name').textContent;
            const productPrice = item.querySelector('.product_card_price').textContent;
            const productQuantity = item.dataset.quantity;

            const productInfo = document.createElement('div');
            productInfo.classList.add('product_in_cart');
            productInfo.innerHTML = `
                <div class="product_in_cart_img">
                    <img src="${productImage}" alt="${productName}"> 
                </div>
                <div class="product_in_cart_text">
                    <div class="product_in_cart_name">${productName}</div>
                    <div class="product_in_cart_price_quantity">
                        <div class="product_in_cart_price">${productPrice}</div>
                        <div class="product_in_cart_quantity">${productQuantity}x</div>
                    </div>
                </div>
            `;

            totalSum += parseInt(productPrice) * parseInt(productQuantity); // Добавляем к общей сумме

            cartModal.appendChild(productInfo);
        });

        // Скрываем сообщение о пустой корзине
        const emptyCartMessage = document.getElementById('emptyCartMessage');
        emptyCartMessage.style.display = 'none';

        // Показываем поля оформления заказа
        const orderBlocks = document.querySelector('.order-modal');
        orderBlocks.style.display = '';

        // Показываем блок cart-modal
        cartModal.style.display = 'flex';

       const deliveryInfoElement = document.createElement('div');
        deliveryInfoElement.classList.add('delivery-info');
        deliveryInfoElement.innerHTML = `<span>Доставка:</span> <span class="delivery-cost-indicator">${deliveryCost} сом</span>`;
        cartModal.appendChild(deliveryInfoElement);

        // Добавляем стоимость доставки к общей сумме
        totalSum += deliveryCost;
        // Отображаем итоговую сумму
        const totalSumElement = document.createElement('div');
        totalSumElement.classList.add('total-sum');
        totalSumElement.innerHTML = `<span>Итого:</span> <span class="total-sum-indicator">${totalSum} сом</span>`;
        cartModal.appendChild(totalSumElement);
    } else {
        // Корзина пуста, отображаем сообщение
        const emptyCartMessage = document.getElementById('emptyCartMessage');
        emptyCartMessage.style.display = 'flex';

        // Скрываем поля оформления заказа
        const orderBlocks = document.querySelector('.order-modal');
        orderBlocks.style.display = 'none';

        // Скрываем блок cart-modal
        cartModal.style.display = 'none';
    }
}

// Закрывает модальное окно заказа
function closeOrderModal() {
    // Удаляем класс для разблокировки прокрутки
    document.body.classList.remove('modal-open');
    
    // Закрываем модальное окно
    const orderModal = document.getElementById('orderModal');
    orderModal.style.display = 'none';
}

// Добавляем обработчик события для клавиши Esc
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeOrderModal();
    }
});
















// Добавляем обработчик события pageshow
window.addEventListener('pageshow', function(event) {
    // Проверяем, является ли событие pageshow событием возврата
    if (event.persisted) {
        // Если да, обновляем страницу
        location.reload();
    }
});






function displayOrderHistory() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const accordionElement = document.getElementById('accordion');

    // Очищаем содержимое элемента перед обновлением
    accordionElement.innerHTML = '';

    if (orders.length > 0) {
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.classList.add('accordion-item');

            const orderTitle = document.createElement('div');
            orderTitle.classList.add('accordion-title');
            orderTitle.innerHTML = `
                <span>${order.date}</span>
                <span>${order.totalSum} сом</span>
            `;

            const orderContent = document.createElement('div');
            orderContent.classList.add('accordion-content');

            order.products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('my_order_product');
                productElement.innerHTML = `
                    <div class="my_order_product_name">${product.name}</div>
                    <div class="my_order_product_quantity_price">
                        <div class="my_order_product_quantity">${product.quantity}x</div>
                        <div class="my_order_product_price">${product.price} сом</div>
                    </div>
                `;
                orderContent.appendChild(productElement);
            });

            const deliveryInfo = document.createElement('div');
            deliveryInfo.classList.add('delivery-info');
            deliveryInfo.innerHTML = `<span>Доставка:</span> <span class="delivery-cost-indicator">${order.deliveryCost} сом</span>`;
            orderContent.appendChild(deliveryInfo);

            const totalSum = document.createElement('div');
            totalSum.classList.add('total-sum');
            totalSum.innerHTML = `<span>Итого:</span> <span class="total-sum-indicator">${order.totalSum} сом</span>`;
            orderContent.appendChild(totalSum);

            orderItem.appendChild(orderTitle);
            orderItem.appendChild(orderContent);

            accordionElement.appendChild(orderItem);

            // Добавляем обработчик события клика на заголовок аккордеона
            orderTitle.addEventListener('click', function() {
                orderItem.classList.toggle('active');
                const content = orderItem.querySelector('.accordion-content');
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });
        });
    } else {
        // Если заказов нет, отображаем сообщение об отсутствии заказов
        accordionElement.innerHTML = '<div class="no_orders_text">Вы ещё не заказывали или очистили историю браузера!</div>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayOrderHistory();
});


// Функция для сохранения заказа в localStorage
function saveOrder(order) {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}
function saveOrderAsync(order) {
    setTimeout(function() {
        var orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
    }, 0);
}

var isSubmitting = false;
function submitOrder() {
    // Если уже отправляем заказ, выходим из функции
    if (isSubmitting) {
        return;
    }

    // Устанавливаем флаг отправки заказа
    isSubmitting = true;

    if (!navigator.onLine) {
        // Если нет подключения, показываем уведомление и выходим из функции
        alert("Отсутствует подключение к интернету. Пожалуйста, подключитесь к сети и попробуйте снова.");
        // Сбрасываем флаг отправки заказа
        isSubmitting = false;
        return;
    }

    // Получаем данные из формы и корзины товаров
    var address = document.getElementById("address").value;
    var houseNumber = document.getElementById("houseNumber").value;
    var apartmentNumber = document.getElementById("apartmentNumber").value;
    var countryCode = document.getElementById("countryCode").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var fullName = document.getElementById("fullName").value;
    var cartItems = document.querySelectorAll('.product_card');
    var productsInfo = [];

    // Получаем стоимость доставки
    let deliveryCost = 150; // Замените этот числовой пример на фактическую стоимость доставки

    cartItems.forEach(function (cartItem) {
        var productId = cartItem.dataset.id;
        var productName = cartItem.querySelector('.product_card_name').textContent;
        var productPrice = cartItem.querySelector('.product_card_price').textContent;
        var productQuantity = cartItem.dataset.quantity;
        var productTotal = parseInt(productPrice) * parseInt(productQuantity);

        productsInfo.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: productQuantity,
            total: productTotal
        });
    });

    var messageText = `🛒Новый заказ!\n\nИнформация о заказе:\n\nАдрес: ${address}, д: ${houseNumber}, кв.: ${apartmentNumber}\nТелефон: ${countryCode} ${phoneNumber}\nИмя: ${fullName}\n\nТовары в заказе:\n`;

    // Расчет общей суммы заказа
    var orderTotal = productsInfo.reduce(function (sum, product) {
        return sum + product.total;
    }, 0);

    // Добавляем стоимость доставки к общей сумме заказа
    orderTotal += deliveryCost;

    productsInfo.forEach(function (product) {
        messageText += `${product.name} - ${product.quantity} шт. ${product.price} = ${product.total} сом\n`;
    });

    messageText += `\nДоставка: ${deliveryCost} KGS\nИтого: ${orderTotal.toFixed(2)} KGS`;

    // Сохраняем информацию о заказе в localStorage асинхронно
    saveOrderAsync({
        date: new Date().toLocaleString(),
        deliveryCost: deliveryCost,
        totalSum: orderTotal,
        products: productsInfo
    });

    var botToken = '6819853165:AAGTrUZ1l_m92KRh4xznkr2mW81bgigN93o';
    var chatId = '-1002042232059';
    var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(messageText)}`;

    // Отправляем запрос
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Сообщение успешно отправлено в телеграм:', data);

            // Перенаправляем на страницу thankyou.html после успешной отправки заказа
            window.location.href = 'thankyou.html';

            // Сбрасываем флаг отправки заказа
            isSubmitting = false;
        })
        .catch(error => {
            console.error('Ошибка при отправке сообщения в телеграм:', error);
            // Дополнительные действия, если необходимо

            // Сбрасываем флаг отправки заказа
            isSubmitting = false;
        });

    // После отправки заказа обновляем историю заказов
    displayOrderHistory();
}


// Функция для асинхронного сохранения заказа в localStorage
function saveOrderAsync(order) {
    setTimeout(function() {
        var orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
    }, 0);
}
// Вызываем функцию отображения истории заказов при загрузке страницы
window.onload = displayOrderHistory;


function checkFields() {
    // Получаем значения полей
    var address = document.getElementById("address").value;
    var houseNumber = document.getElementById("houseNumber").value;
    var apartmentNumber = document.getElementById("apartmentNumber").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var fullName = document.getElementById("fullName").value;

    // Проверяем, все ли поля заполнены и длина номера телефона равна 9
    var allFieldsFilled = address && houseNumber && fullName && (phoneNumber.length === 10);

    // Получаем кнопку
    var submitButton = document.getElementById("submitOrderBtn");

    // Активируем или деактивируем кнопку в зависимости от заполненности полей
    submitButton.disabled = !allFieldsFilled;
}


// Добавляем обработчики событий для каждого поля ввода
document.getElementById("address").addEventListener("input", checkFields);
document.getElementById("houseNumber").addEventListener("input", checkFields);
document.getElementById("apartmentNumber").addEventListener("input", checkFields);
document.getElementById("phoneNumber").addEventListener("input", checkFields);
document.getElementById("fullName").addEventListener("input", checkFields);


function formatPhoneNumber() {
    var phoneNumberInput = document.getElementById("phoneNumber");
    var phoneNumberValue = phoneNumberInput.value.replace(/[^\d]/g, ''); // Удаляем все нецифровые символы
    var formattedPhoneNumber = phoneNumberValue.replace(/(\d{3})(\d{0,6})/, function(match, p1, p2) {
        return p1 + (p2.length > 0 ? '-' + p2 : '');
    });
    phoneNumberInput.value = formattedPhoneNumber;

    // Проверяем остальные поля после форматирования номера
    checkFields();
}


