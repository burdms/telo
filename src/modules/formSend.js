import popupClose from './popupClose';

export default function formSend(id) {
  const successMessage = 'Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.',
    errorMessage = 'Упс! Что-то пошло не так... Перезагрузите страницу и попробуйте еще раз',
    loadingMessage = document.createElement('div'),
    formBlock = document.getElementById(id),
    form = formBlock.querySelector('form'),
    formContent = formBlock.querySelector('.form-content');

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();

      let flag = true;

      form.querySelectorAll('input').forEach(item => {
        if (!item.value) {
          flag = false;
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
        form.appendChild(loadingMessage);

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

            setTimeout(() => {
              if (formBlock.closest('.popup')) {
                popupClose(formBlock);
              }
            }, 3000);
          })
          .catch(error => {
            form.removeChild(loadingMessage);
            formContent.style.justifyContent = 'center';
            formContent.innerHTML = `
              <p class="status-message">${errorMessage}</p>
              `;
            console.error(error);

            setTimeout(() => {
              if (formBlock.closest('.popup')) {
                popupClose(formBlock);
              }
            }, 3000);
          });
      } else {
        loadingMessage.innerHTML = `
          <p class="status-message">'Необходимо заполнить все поля!'</p>
          `;

        setTimeout(() => {
          loadingMessage.innerHTML = ``;
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
