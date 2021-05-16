(()=>{"use strict";function e(e){document.getElementById(e).querySelectorAll("input").forEach((e=>{e.addEventListener("input",(e=>{const t=e.target;"tel"===t.type&&(t.value=t.value.replace(/[^0-9+()-]/g,"")),"text"===t.type&&"Промокод"!==t.getAttribute("placeholder")&&(t.value=t.value.replace(/[^а-яё -]/gi,"")),"Промокод"===t.getAttribute("placeholder")&&(t.value=t.value.replace(/[^а-яё0-9]/gi,""))})),e.addEventListener("blur",(()=>{e.value=e.value.replace(/-+/g,"-"),e.value=e.value.replace(/ +/g," "),e.value=e.value.replace(/^(-| )+/g,""),e.value=e.value.replace(/(-| )$/g,""),"Промокод"===e.getAttribute("placeholder")?e.value=e.value.replace(/./g,(e=>e.toUpperCase())):(e.value=e.value.replace(/^./g,(e=>e.toUpperCase())),e.value=e.value.replace(/(?!^).*/,(e=>e.toLowerCase())))}))}))}function t(e){const t=document.getElementById(e);t.addEventListener("click",(e=>{const s=e.target;(s.closest(".close-form")||s.classList.contains("overlay")||s.classList.contains("close-btn"))&&t.classList.remove("popup_active")}))}function s(e,s=!1){const n="Ваша заявка отправлена.<br>Мы свяжемся с вами в ближайшее время.",r="Упс! Что-то пошло не так...<br>Перезагрузите страницу и попробуйте еще раз",c=document.getElementById(e),l=c.closest(".form-content"),o=document.getElementById("thanks");let a;if(c.querySelector(".js-loading-message")?a=c.querySelector(".js-loading-message"):(a=document.createElement("div"),a.classList.add("js-loading-message"),a.style.marginTop="10px",c.appendChild(a)),c){const e=c.querySelector('input[type="tel"]'),i=c.querySelector('input[type="checkbox"]'),d=/^\+7([-()]*\d){10}$/;c.addEventListener("submit",(u=>{u.preventDefault();let p=!0;if(i&&!i.checked&&(p=!1,a.innerHTML='\n            <p class="error-message">Необходимо согласиться с обработкой персональных данных</p>\n            '),d.test(e.value)||(p=!1,a.innerHTML='\n            <p class="error-message">Укажите телефон в формате: +7(999)999-99-99</p>\n            '),"footer_form"===c.id&&0===c.querySelectorAll(".club input:checked").length&&(p=!1,a.innerHTML='\n            <p class="error-message">Необходимо выбрать клуб!</p>\n            '),c.querySelectorAll("input").forEach((e=>{e.value||"Промокод"===e.getAttribute("placeholder")||(p=!1,a.innerHTML='\n            <p class="error-message">Необходимо заполнить все поля!</p>\n            ')})),p){a.innerHTML="\n          <div class='sk-three-bounce'>\n            <div class='sk-bounce-1 sk-child'></div>\n            <div class='sk-bounce-2 sk-child'></div>\n            <div class='sk-bounce-3 sk-child'></div>\n          </div>\n          ";const e=new FormData(c),i={};e.forEach(((e,t)=>{i[t]=e})),s&&(i.promocode=c.querySelector(".price-message").querySelector("input").value,i.sum=c.querySelector("#price-total").textContent),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(i).then((e=>{if(200!==e.status)throw new Error("Статус отправки не равен 200");a.innerHTML="",l?(l.style.justifyContent="center",l.innerHTML=`\n                <p class="status-message">${n}</p>\n                `,setTimeout((()=>{l.closest(".popup").classList.remove("popup_active")}),3e3)):(c.reset(),o.classList.add("popup_active"),t("thanks"),o.querySelector("p").innerHTML=n)})).catch((e=>{a.innerHTML="",l?(l.style.justifyContent="center",l.innerHTML=`\n                <p class="status-message">${r}</p>\n                `,setTimeout((()=>{l.closest(".popup").classList.remove("popup_active")}),3e3)):(c.reset(),o.classList.add("popup_active"),t("thanks"),o.querySelector("p").innerHTML=r),console.error(e)}))}else setTimeout((()=>{a.innerHTML=""}),3e3)}))}}function n(n){const r=document.getElementById(n);if(r.classList.add("popup_active"),r.querySelector("form")){const t=r.querySelector("form").getAttribute("id");e(t),s(t)}t(n)}function r(e){const t=document.createElement("div"),s=document.createElement("div");t.classList.add("slider-arrow","prev"),t.id="prev",t.innerHTML='\n    <span>\n      <i class="fa fa-angle-left"></i>\n    </span>\n    ',s.classList.add("slider-arrow","next"),s.id="next",s.innerHTML='\n    <span>\n      <i class="fa fa-angle-right"></i>\n    </span>\n    ',e.appendChild(t),e.appendChild(s)}!function(){const e=document.querySelector(".clubs-list ul");document.addEventListener("click",(t=>{const s=t.target;s.closest(".club-select")&&!s.closest(".clubs-list__ul_active")?e.classList.toggle("clubs-list__ul_active"):s.closest(".clubs-list__ul_active")||e.classList.remove("clubs-list__ul_active"),s.classList.contains("open-popup")&&(t.preventDefault(),n("free_visit_form")),"#callback_form"===s.getAttribute("data-popup")&&n("callback_form")}))}(),function(){const e=document.querySelector(".top-menu"),t=e.offsetTop,s=document.querySelector(".head-slider");screen.availWidth<=768&&window.addEventListener("scroll",(()=>{const n=window.scrollY;n>t?(e.classList.add("top-menu_fixed"),s.classList.add("head-slider_menu-fixed")):n<t&&(e.classList.remove("top-menu_fixed"),s.classList.remove("head-slider_menu-fixed"))}))}(),function(){const e=s=>{s.target.closest(".fixed-gift")&&(document.removeEventListener("click",e),document.querySelector(".fixed-gift").style.display="none",document.getElementById("gift").classList.add("popup_active"),t("gift"))};document.addEventListener("click",e)}(),e("banner-form"),s("banner-form"),function(){const e=document.querySelector(".services-slider"),t=document.querySelector(".services-slider__wrapper"),s=e.querySelectorAll(".slide").length,n=225,c=n*(s-5);let l=0;r(e);const o=e.querySelector("#prev"),a=e.querySelector("#next");o.classList.add("slider-arrow_inactive"),e.addEventListener("click",(e=>{const s=e.target;s.closest("#next")&&l!==-c&&(o.classList.remove("slider-arrow_inactive"),t.style.transform=`translateX(${l-n}px)`,l-=n,l===-c&&a.classList.add("slider-arrow_inactive")),s.closest("#prev")&&0!==l&&(a.classList.remove("slider-arrow_inactive"),t.style.transform=`translateX(${l+n}px)`,l+=n,0===l&&o.classList.add("slider-arrow_inactive"))}))}(),function(){const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),s=[],n=document.querySelector(".slider-dots");let c,l=0;function o(e){t[e].classList.add("slide_active"),s[e].classList.add("slider-dots__item_active")}function a(){t.forEach((e=>{e.classList.remove("slide_active")})),s.forEach((e=>{e.classList.remove("slider-dots__item_active")}))}function i(){a(),l++,l>=t.length&&(l=0),o(l)}function d(){c=setInterval(i,5e3)}r(e),e.addEventListener("click",(e=>{const n=e.target;a(),n.closest("#next")&&(l++,l>=t.length&&(l=0)),n.closest("#prev")&&(l--,l<0&&(l=t.length-1)),n.classList.contains("slider-dots__item")&&s.forEach(((e,t)=>{e===n&&(l=t)})),o(l)})),e.addEventListener("mouseover",(()=>{clearInterval(c)})),e.addEventListener("mouseout",(()=>{d()})),function(){for(let e=0;e<t.length;e++){const t=document.createElement("div");t.classList.add("slider-dots__item"),0===e&&t.classList.add("slider-dots__item_active"),s.push(t),n.append(t)}}(),d()}(),e("footer_form"),s("footer_form"),document.body.classList.contains("js-main-page")&&(function(){const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;function s(){e.forEach((s=>{s.style.display="none",e[t].style.display="flex"}))}setInterval((()=>{t===e.length-1?t=0:t++,s()}),5e3),s()}(),function(){const e=document.getElementById("card_order"),t=e.querySelector(".time").querySelectorAll("input"),s=[1999,9900,13900,19900],n=[2999,14990,21990,24990],r=e.querySelectorAll(".club"),c=[],l=e.querySelector(".price-message").querySelector("input"),o=e.querySelector("#price-total");function a(e){t.forEach(((t,s)=>{t.checked&&(o.textContent=e[s])}))}r.forEach((e=>{c.push(e.querySelector("input"))})),o.textContent=s[0],e.addEventListener("change",(()=>{c[0].checked?a(s):a(n),"ТЕЛО2019"===l.value&&(o.textContent=Math.floor(.7*o.textContent))}))}(),e("card_order"),s("card_order",!0)),document.body.classList.contains("js-club-page")&&(e("card_order"),s("card_order"))})();