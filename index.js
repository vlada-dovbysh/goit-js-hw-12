import{a as L,S as v,i as s}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m=15,_="https://pixabay.com/api/",w="49472978-10c322c2b56102295a27a1e47";async function f(t,a=1){return await L.get(`${_}`,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:a}})}const g=document.querySelector(".gallery"),S=document.querySelector(".loader"),i={bttn:document.querySelector('button[name="load-more"]'),hideBttn(){i.bttn.classList.add("visually-hidden")},showBttn(){i.bttn.classList.remove("visually-hidden")}};function h(t){const a=t.map(({webformatURL:o,largeImageURL:c,tags:e,likes:r,views:n,comments:y,downloads:b})=>`<li class="gallery_item">
    <a class="gallery_img_link" href="${c}">
    <img class="gallery_img"
        src="${o}" 
        alt="${e}" 
        width="360" 
        height="200" /></a>
    <div class="gallery_item_box">
        <ul class="gallery_item_list">
        <li>
            <p>Likes</p>
            ${r}
        </li>
        <li>
            <p>Views</p>
            ${n}
        </li>
        <li>
            <p>Comments</p>
            ${y}
        </li>
        <li>
            <p>Downloads</p>
            ${b}
        </li>
        </ul>
    </div>
    </li>
    `).join("");g.insertAdjacentHTML("beforeend",a),O.refresh()}const O=new v(".gallery a",{captionsData:"alt",captionDelay:150});function $(){g.innerHTML=""}function d(){S.classList.toggle("visually-hidden")}const p=document.querySelector(".form");let l,u="";p.addEventListener("submit",B);i.bttn.addEventListener("click",C);s.settings({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:iconError,closeOnEscape:!0,closeOnClick:!0,position:"bottomCenter"});async function B(t){if(t.preventDefault(),l=1,i.hideBttn(),u=t.target.elements["search-text"].value.trim(),!u){s.error({title:"Error",message:"Please, enter a valid image name!"});return}$(),d();try{const o=await f(u);if(o.data.total===0){s.error({message:"Sorry, there are no images matching<br>your search query. Please try again!"});return}h(o.data.hits),o.data.totalHits<m?i.hideBttn():i.showBttn(),l+=1}catch(o){s.error({title:"Oh no!",message:`${o.message}`})}finally{d()}p.reset()}async function C(){d();try{const t=await f(u,l);t.data.totalHits<Math.ceil(m*l)&&(i.hideBttn(),s.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#09",icon:iconInfo})),h(t.data.hits),l+=1,q()}catch(t){s.error({title:"Oh no!",message:`${t.message}`})}finally{d()}}function q(){const t=document.querySelector(".gallery_item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
