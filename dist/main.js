(()=>{"use strict";function e(e){const t=document.getElementById(e);t.addEventListener("click",(e=>{const s=e.target;(s.closest(".close-form")||s.classList.contains("overlay"))&&t.classList.remove("popup_active")}))}function t(t){const s=document.getElementById(t),n=s.querySelector("form").getAttribute("id");s.classList.add("popup_active"),function(e){document.getElementById(e).querySelectorAll("input").forEach((e=>{e.addEventListener("input",(e=>{const t=e.target;"tel"===t.type&&(t.value=t.value.replace(/[^0-9+()-]/g,"")),"text"===t.type&&(t.value=t.value.replace(/[^а-яё -]/gi,""))})),e.addEventListener("blur",(()=>{e.value=e.value.replace(/-+/g,"-"),e.value=e.value.replace(/ +/g," "),e.value=e.value.replace(/^(-| )+/g,""),e.value=e.value.replace(/(-| )$/g,""),e.value=e.value.replace(/^./g,(e=>e.toUpperCase())),e.value=e.value.replace(/(?!^).*/,(e=>e.toLowerCase()))}))}))}(n),e(t),function(t){const s=document.createElement("div"),n=document.getElementById(t),l=n.querySelector("form"),c=n.querySelector(".form-content");if(s.style.marginTop="10px",l){const t=l.querySelector('input[type="tel"]'),o=l.querySelector('input[type="checkbox"]'),r=/^\+7([-()]*\d){10}$/;l.appendChild(s),l.addEventListener("submit",(i=>{i.preventDefault();let a=!0;if(o.checked||(a=!1,s.innerHTML='\n            <p class="error-message">Необходимо согласиться с обработкой персональных данных</p>\n            '),r.test(t.value)||(a=!1,s.innerHTML='\n            <p class="error-message">Укажите телефон в формате: +7(999)999-99-99</p>\n            '),l.querySelectorAll("input").forEach((e=>{e.value||(a=!1,s.innerHTML='\n            <p class="error-message">Необходимо заполнить все поля!</p>\n            ')})),a){s.innerHTML="\n          <div class='sk-three-bounce'>\n            <div class='sk-bounce-1 sk-child'></div>\n            <div class='sk-bounce-2 sk-child'></div>\n            <div class='sk-bounce-3 sk-child'></div>\n          </div>\n          ";const t=new FormData(l),o={};t.forEach(((e,t)=>{o[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(o).then((t=>{if(200!==t.status)throw new Error("Статус отправки не равен 200");l.removeChild(s),c.style.justifyContent="center",c.innerHTML='\n              <p class="status-message">Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</p>\n              ',setTimeout((()=>{n.closest(".popup")&&e(n)}),3e3)})).catch((t=>{l.removeChild(s),c.style.justifyContent="center",c.innerHTML='\n              <p class="status-message">Упс! Что-то пошло не так... Перезагрузите страницу и попробуйте еще раз</p>\n              ',console.error(t),setTimeout((()=>{n.closest(".popup")&&e(n)}),3e3)}))}else setTimeout((()=>{s.innerHTML=""}),3e3)}))}}(n)}!function(){const e=document.querySelector(".clubs-list ul");document.addEventListener("click",(s=>{const n=s.target;n.closest(".club-select")&&!n.closest(".clubs-list__ul_active")?e.classList.toggle("clubs-list__ul_active"):n.closest(".clubs-list__ul_active")||e.classList.remove("clubs-list__ul_active"),n.classList.contains("open-popup")&&(s.preventDefault(),t("free_visit_form")),"#callback_form"===n.getAttribute("data-popup")&&t("callback_form")}))}(),function(){const t=s=>{s.target.closest(".fixed-gift")&&(document.removeEventListener("click",t),document.querySelector(".fixed-gift").style.display="none",document.getElementById("gift").classList.add("popup_active"),e("gift"))};document.addEventListener("click",t)}(),function(){const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;function s(){e.forEach((s=>{s.style.display="none",e[t].style.display="flex"}))}setInterval((()=>{t===e.length-1?t=0:t++,s()}),5e3),s()}()})();