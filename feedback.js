document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('messageForm');
    var submitBtn = document.getElementById('submitBtn');
    var inputs = form.querySelectorAll('.form-control');
    var successMessage = document.getElementById('successMessage');

    function validateForm() {
        var isValid = true;
        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isValid = false;
            }
        });
        submitBtn.disabled = !isValid;
    }

    inputs.forEach(function(input) {
        input.addEventListener('input', validateForm);
    });

    submitBtn.addEventListener('click', function() {
        if (submitBtn.disabled) return;

        var name = document.getElementById('name').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var message = document.getElementById('message').value.trim();

        var botToken = '7151169356:AAEZgMZMgydBzp4Teitfmzho1Wwew9Qrs_o';
        var chatId = '-1002042232059';
        var messageThreadId = '420';
        var url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        var text = `Сообщение от: ${name}\nНомер телефона: ${phone}\nСообщение: ${message}`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                message_thread_id: messageThreadId
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                form.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                alert('Ошибка отправки сообщения.');
                setTimeout(() => {
                    submitBtn.disabled = false;
                }, 3000); // 3 секунды
            }
        })
        .catch(error => {
            alert('Произошла ошибка: ' + error.message);
            setTimeout(() => {
                submitBtn.disabled = false;
            }, 3000); // 3 секунды
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.getElementById('closeButton');
    const successMessage = document.getElementById('successMessage');
    const messageForm = document.querySelector('.message-form');
  
    // Находим все элементы в форме
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const messageTextarea = document.getElementById('message');
  
    closeButton.addEventListener('click', function() {
      successMessage.style.display = 'none'; // Скрыть successMessage
      messageForm.style.display = 'flex'; // Показать message-form
      
      // Очищаем поля ввода
      nameInput.value = '';
      phoneInput.value = '';
      messageTextarea.value = '';
    });
  });
  