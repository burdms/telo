export default function inputCheck(id) {
  const form = document.getElementById(id);

  form.querySelectorAll('input').forEach(item => {
    item.addEventListener('input', event => {
      const input = event.target;

      if (input.type === 'tel') {
        input.value = input.value.replace(/[^0-9+()-]/g, '');
      }

      if (input.type === 'text' && input.getAttribute('placeholder') !== 'Промокод') {
        input.value = input.value.replace(/[^а-яё -]/gi, '');
      }

      if (input.getAttribute('placeholder') === 'Промокод') {
        input.value = input.value.replace(/[^а-яё0-9]/gi, '');
      }
    });

    item.addEventListener('blur', () => {
      item.value = item.value.replace(/-+/g, '-');
      item.value = item.value.replace(/ +/g, ' ');
      item.value = item.value.replace(/^(-| )+/g, '');
      item.value = item.value.replace(/(-| )$/g, '');
      if (item.getAttribute('placeholder') === 'Промокод') {
        item.value = item.value.replace(/./g, char => char.toUpperCase());
      } else {
        item.value = item.value.replace(/^./g, char => char.toUpperCase());
        item.value = item.value.replace(/(?!^).*/, char => char.toLowerCase());
      }
    });
  });
}
