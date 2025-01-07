document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const telegram = document.getElementById('telegram').value;

    const message = "Новая запись на пробное занятие:\nФИО: ${fullname}\nТелефон: ${phone}\nUsername в Telegram: ${telegram}";

    const token = '7627174908:AAHS_ykW-wPTMW3B06hESzsDTvAcyTK0UdM'; // Замените на ваш токен
    const chatId = '@kola224'; // Замените на ваш chat_id или username

    fetch("https://api.telegram.org/bot${token}/sendMessage", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Сообщение успешно отправлено!');
        } else {
            alert('Ошибка при отправке сообщения.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке сообщения.');
    });
});
