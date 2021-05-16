import popupClose from "./popupClose";

export default function formSend(id, promocode = false) {
  const successMessage = 'Ваша заявка отправлена.<br>Мы свяжемся с вами в ближайшее время.',
    errorMessage = 'Упс! Что-то пошло не так...<br>Перезагрузите страницу и попробуйте еще раз',
    form = document.getElementById(id),
    formContent = form.closest('.form-content'),
    popupThanks = document.getElementById('thanks');

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
        if (!item.value && item.getAttribute('placeholder') !== 'Промокод') {
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

        if (promocode) {
          body['promocode'] = form.querySelector('.price-message').querySelector('input').value;
          body['sum'] = form.querySelector('#price-total').textContent;
        }

        postData(body)
          .then(response => {
            if (response.status !== 200) {
              throw new Error('Статус отправки не равен 200');
            }

            loadingMessage.innerHTML = '';

            if (formContent) {
              formContent.style.justifyContent = 'center';
              formContent.innerHTML = `
                <p class="status-message">${successMessage}</p>
                `;

              setTimeout(() => {
                formContent.closest('.popup').classList.remove('popup_active');
              }, 3000);
            } else {
              form.reset();
              popupThanks.classList.add('popup_active');
              popupClose('thanks');
              popupThanks.querySelector('p').innerHTML = successMessage;
            }
          })
          .catch(error => {
            loadingMessage.innerHTML = '';

            if (formContent) {
              formContent.style.justifyContent = 'center';
              formContent.innerHTML = `
                <p class="status-message">${errorMessage}</p>
                `;

              setTimeout(() => {
                formContent.closest('.popup').classList.remove('popup_active');
              }, 3000);
            } else {
              form.reset();
              popupThanks.classList.add('popup_active');
              popupClose('thanks');
              popupThanks.querySelector('p').innerHTML = errorMessage;
            }

            console.error(error);
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
