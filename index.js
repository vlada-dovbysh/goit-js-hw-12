import{a as L,S as v,i}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m=15,w="https://pixabay.com/api/",_="49472978-10c322c2b56102295a27a1e47";async function f(r,o=1){return await L.get(`${w}`,{params:{key:_,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:o}})}const g=document.querySelector(".gallery"),O=document.querySelector(".loader"),s={bttn:document.querySelector('button[name="load-more"]'),hideBttn(){s.bttn.classList.add("visually-hidden")},showBttn(){s.bttn.classList.remove("visually-hidden")}};function h(r){const o=r.map(({webformatURL:a,largeImageURL:c,tags:e,likes:t,views:l,comments:y,downloads:b})=>`<li class="gallery_item">
    <a class="gallery_img_link" href="${c}">
    <img class="gallery_img"
        src="${a}" 
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
            ${l}
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
    `).join("");g.insertAdjacentHTML("beforeend",o),S.refresh()}const S=new v(".gallery a",{captionsData:"alt",captionDelay:150});function $(){g.innerHTML=""}function u(){O.classList.toggle("visually-hidden")}const p=document.querySelector(".form");let n,d="";p.addEventListener("submit",B);s.bttn.addEventListener("click",E);i.settings({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:iconError,closeOnEscape:!0,closeOnClick:!0,position:"bottomCenter"});async function B(r){if(r.preventDefault(),n=1,s.hideBttn(),d=r.target.elements["search-text"].value.trim(),!d){i.error({title:"Error",message:"Please, enter a valid image name!"});return}$(),u();try{const a=await f(d,n);if(a.data.total===0){i.error({message:"Sorry, there are no images matching<br>your search query. Please try again!"});return}h(a.data.hits),a.data.totalHits<m?s.hideBttn():s.showBttn(),n+=1}catch(a){i.error({title:"Oh no!",message:`${a.message}`})}finally{u()}p.reset()}async function E(){u();try{const r=await f(d,n);h(r.data.hits),n+=1,window.scrollBy({top:window.innerHeight*2,behavior:"smooth"});const o=Math.ceil(r.data.totalHits/m);n>o&&(s.hideBttn(),i.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#09",icon:iconInfo}))}catch(r){i.error({title:"Oh no!",message:`${r.message}`})}finally{u()}}
//# sourceMappingURL=index.js.map
