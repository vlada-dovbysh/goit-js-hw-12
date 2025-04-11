import{a as d,S as p,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function g(a){return d.get("https://pixabay.com/api/",{params:{key:"44491424-16647b4b62eeb4d02a84100fb",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}})}const c=document.querySelector(".gallery"),h=document.querySelector(".loader");function y(a){const o=a.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:s,comments:m,downloads:f})=>`<li class="gallery_item">
    <a class="gallery_img_link" href="${r}">
    <img class="gallery_img"
        src="${i}" 
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
            ${s}
        </li>
        <li>
            <p>Comments</p>
            ${m}
        </li>
        <li>
            <p>Downloads</p>
            ${f}
        </li>
        </ul>
    </div>
    </li>
    `).join("");c.innerHTML=o,b.refresh()}const b=new p(".gallery a",{captionsData:"alt",captionDelay:150});function L(){c.innerHTML=""}function l(){h.classList.toggle("visually-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",_);n.settings({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:iconPath,closeOnEscape:!0,closeOnClick:!0,position:"topRight"});function _(a){a.preventDefault();const o=a.target.elements["search-text"],i=o.value.trim();if(!o.value||!i){n.error({title:"Error",message:"Please, enter a valid image name!"});return}L(),l(),g(i).then(r=>{if(r.data.total===0)return n.error({message:"Sorry, there are no images matching<br>your search query. Please try again!"}),l();l(),y(r.data.hits)}).catch(r=>(n.error({title:"Oh no!",message:`${r.message}`}),l())),u.reset()}
//# sourceMappingURL=index.js.map
