import{a as b,S as w,i}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const q="51375874-08b60e99a61a885b42830ac73",v="https://pixabay.com/api/";async function S(o,t=1){const a={key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await b.get(v,{params:a})).data}const u=document.querySelector(".gallery"),f=document.querySelector("#load-more"),m=document.querySelector(".loader");let P=new w(".gallery a",{captionsData:"alt",captionDelay:250});function $(o){const t=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:s,comments:h,downloads:L})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${a}" alt="${e}" loading="lazy" />
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
              <b>Downloads:</b> ${L}
            </p>
          </div>
        </li>`).join("");u.insertAdjacentHTML("beforeend",t),P.refresh()}function B(){u.innerHTML=""}function E(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}function H(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}const M=document.querySelector("#search-form"),O=document.querySelector("#load-more");let g="",c=1,l=0;M.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.query.value.trim();if(!t){i.warning({message:"Please enter a search query"});return}g=t,c=1,B(),y(),await p()});O.addEventListener("click",async()=>{c++,await p(!0)});async function p(o=!1){try{E();const t=await S(g,c),a=t.hits;if(l=t.totalHits,a.length===0){i.error({message:"Sorry, no images found. Please try another query!"}),d();return}if($(a),o||i.success({message:`Hooray! We found ${l} images.`}),c*15>=l?(y(),i.info({message:"We're sorry, but you've reached the end of search results."})):H(),o){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}catch(t){i.error({message:"Something went wrong. Please try again."}),console.error(t)}finally{d()}}
//# sourceMappingURL=index.js.map
