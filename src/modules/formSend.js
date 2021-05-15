export default function formSend(id) {
  const successMessage = 'Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.',
    errorMessage = 'Упс! Что-то пошло не так... Перезагрузите страницу и попробуйте еще раз',
    // loadingMessage = document.createElement('div'),
    form = document.getElementById(id),
    formContent = form.closest('.form-content');

  let loadingMessage;

  if (!form.querySelector('.js-loading-message')) {
    loadingMessage = document.createElement('div');
    loadingMessage.classList.add('js-loading-message');
    loadingMessage.style.marginTop = '10px';
    form.appendChild(loadingMessage);
  } else {
    loadingMessage = form.querySelector('.js-loading-message');
  }

  if (form) {
    const tel = form.querySelector('input[type="tel"]'),
      privacy = form.querySelector('input[type="checkbox"]'),
      telPattern = /^\+7([-()]*\d){10}$/;

    form.addEventListener('submit', event => {
      event.preventDefault();

      let flag = true;

      if (!privacy.checked) {
        flag = false;
        loadingMessage.innerHTML = `
            <p class="error-message">Необходимо согласиться с обработкой персональных данных</p>
            `;
      }

      if (!telPattern.test(tel.value)) {
        flag = false;
        loadingMessage.innerHTML = `
            <p class="error-message">Укажите телефон в формате: +7(999)999-99-99</p>
            `;
      }

      form.querySelectorAll('input').forEach(item => {
        if (!item.value) {
          flag = false;
          loadingMessage.innerHTML = `
            <p class="error-message">Необходимо заполнить все поля!</p>
            `;
        }
      });

      if (flag) {
        loadingMessage.innerHTML = `
          <div class='sk-three-bounce'>
            <div class='sk-bounce-1 sk-child'></div>
            <div class='sk-bounce-2 sk-child'></div>
            <div class='sk-bounce-3 sk-child'></div>
          </div>
          `;

        const formData = new FormData(form),
          body = {};

        formData.forEach((value, key) => {
          body[key] = value;
        });

        postData(body)
          .then(response => {
            if (response.status !== 200) {
              throw new Error('Статус отправки не равен 200');
            }

            form.removeChild(loadingMessage);
            formContent.style.justifyContent = 'center';
            formContent.innerHTML = `
              <p class="status-message">${successMessage}</p>
              `;

            if (formContent.closest('.popup')) {
              setTimeout(() => {
                formContent.closest('.popup').classList.remove('popup_active');
              }, 3000);
            }
          })
          .catch(error => {
            form.removeChild(loadingMessage);
            formContent.style.justifyContent = 'center';
            formContent.innerHTML = `
              <p class="status-message">${errorMessage}</p>
              `;
            console.error(error);

            if (formContent.closest('.popup')) {
              setTimeout(() => {
                formContent.closest('.popup').classList.remove('popup_active');
              }, 3000);
            }
          });
      } else {
        setTimeout(() => {
          loadingMessage.innerHTML = '';
        }, 3000);
      }
    });
  }

  function postData(body) {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
  }
}
