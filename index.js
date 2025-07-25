import{a as L,S as w,i}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const q="51375874-08b60e99a61a885b42830ac73",S="https://pixabay.com/api/";async function v(o,t=1){const n={key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await L.get(S,{params:n})).data}const y=document.querySelector(".gallery"),f=document.querySelector(".load-more"),m=document.querySelector(".loader");let P=new w(".gallery a",{captionsData:"alt",captionDelay:250});function $(o){const t=o.map(({webformatURL:n,largeImageURL:a,tags:e,likes:r,views:s,comments:h,downloads:b})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${n}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p>
              <b>Likes:</b> ${r}
            </p>
            <p>
              <b>Views:</b> ${s}
            </p>
            <p>
              <b>Comments:</b> ${h}
            </p>
            <p>
              <b>Downloads:</b> ${b}
            </p>
          </div>
        </li>`).join("");y.insertAdjacentHTML("beforeend",t),P.refresh()}function B(){y.innerHTML=""}function E(){m.style.display="inline-block"}function u(){m.style.display="none"}function H(){f.style.display="block"}function d(){f.style.display="none"}const M=document.querySelector(".form"),O=document.querySelector(".load-more");let p="",l=1,c=0;u();d();M.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.query.value.trim();if(!t){i.warning({message:"Please enter a search query"});return}p=t,l=1,B(),d(),await g()});O.addEventListener("click",async()=>{l++,await g(!0)});async function g(o=!1){try{E();const t=await v(p,l),n=t.hits;if(c=t.totalHits,n.length===0){i.error({message:"Sorry, no images found. Please try another query!"}),u();return}if($(n),o||i.success({message:`Hooray! We found ${c} images.`}),l*15>=c?(d(),i.info({message:"We're sorry, but you've reached the end of search results."})):H(),o){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}catch(t){i.error({message:"Something went wrong. Please try again."}),console.error(t)}finally{u()}}
//# sourceMappingURL=index.js.map
