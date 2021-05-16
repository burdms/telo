export default function calculator() {
  const form = document.getElementById('card_order'),
    periods = form.querySelector('.time').querySelectorAll('input'),
    periodValuesMoz = [1999, 9900, 13900, 19900],
    periodValuesShe = [2999, 14990, 21990, 24990],
    clubs = form.querySelectorAll('.club'),
    clubsValues = [],
    promocode = form.querySelector('.price-message').querySelector('input'),
    total = form.querySelector('#price-total');

  clubs.forEach(item => {
    clubsValues.push(item.querySelector('input'));
  });

  total.textContent = periodValuesMoz[0];

  function getPeriodValue(array) {
    periods.forEach((item, index) => {
      if (item.checked) {
        total.textContent = array[index];
      }
    });
  }

  form.addEventListener('change', () => {
    if (clubsValues[0].checked) {
      getPeriodValue(periodValuesMoz);
    } else {
      getPeriodValue(periodValuesShe);
    }

    if (promocode.value === 'ТЕЛО2019') {
      total.textContent = Math.floor(total.textContent * 0.7);
    }
  });
}
