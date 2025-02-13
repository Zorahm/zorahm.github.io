document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const progressBar = document.getElementById('progress-bar');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const textToCopy = button.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Скопировано: ${textToCopy}`);
            }).catch(() => {
                showToast('Ошибка при копировании!');
            });
        });
    });

    function showToast(message) {
        toastMessage.textContent = message;
        toast.style.display = 'flex';

        // Убедиться, что прогресс-бар обнуляется перед запуском
        progressBar.style.transition = 'none';
        progressBar.style.width = '0';

        // Небольшая задержка для плавного старта
        setTimeout(() => {
            progressBar.style.transition = 'width 3s linear'; // Включить анимацию
            progressBar.style.width = '100%';
        }, 50);

        // Уведомление исчезает через 3 секунды
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3050); // Учитывается время анимации прогресс-бара
    }
});
