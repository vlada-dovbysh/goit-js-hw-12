import{a as L,S as v,i}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=15,_="https://pixabay.com/api/",w="49472978-10c322c2b56102295a27a1e47";async function f(r,a=1){return await L.get(`${_}`,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:a}})}const g=document.querySelector(".gallery"),O=document.querySelector(".loader"),s={bttn:document.querySelector('button[name="load-more"]'),hideBttn(){s.bttn.classList.add("visually-hidden")},showBttn(){s.bttn.classList.remove("visually-hidden")}};function p(r){const a=r.map(({webformatURL:o,largeImageURL:c,tags:e,likes:t,views:n,comments:y,downloads:b})=>`<li class="gallery_item">
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
            ${t}
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
    `).join("");g.insertAdjacentHTML("beforeend",a),S.refresh()}const S=new v(".gallery a",{captionsData:"alt",captionDelay:150});function $(){g.innerHTML=""}function d(){O.classList.toggle("visually-hidden")}const h=document.querySelector(".form");let l,u="";h.addEventListener("submit",E);s.bttn.addEventListener("click",P);i.settings({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:iconError,closeOnEscape:!0,closeOnClick:!0,position:"bottomCenter"});async function E(r){if(r.preventDefault(),l=1,s.hideBttn(),u=r.target.elements["search-text"].value.trim(),!u){i.error({title:"Error",message:"Please, enter a valid image name!"});return}$(),d();try{const o=await f(u);if(o.data.total===0){i.error({message:"Sorry, there are no images matching<br>your search query. Please try again!"});return}p(o.data.hits),o.data.totalHits<m?s.hideBttn():s.showBttn(),l+=1}catch(o){i.error({title:"Oh no!",message:`${o.message}`})}finally{d()}h.reset()}async function P(){d();try{const r=await f(u,l);p(r.data.hits),l+=1;const a=Math.ceil(r.data.totalHits/m);l>a&&(s.hideBttn(),i.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#09",icon:iconInfo}))}catch(r){i.error({title:"Oh no!",message:`${r.message}`})}finally{d()}}
//# sourceMappingURL=index.js.map
