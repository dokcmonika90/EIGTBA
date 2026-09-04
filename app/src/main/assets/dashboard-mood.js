(function(){'use strict';
var KEY='eigtba-v4';
function getData(){try{return JSON.parse(localStorage.getItem(KEY)||'null')||{};}catch(e){return {};}}
function esc(v){return String(v==null?'':v).replace(/[&<>\"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c];});}
function nameOf(data,id){var a=(data.alters||[]).find(function(x){return String(x.id)===String(id);});return a?a.name:'Unknown';}
function render(){
 var home=document.getElementById('home'); if(!home)return;
 var data=getData(), moods=Array.isArray(data.moods)?data.moods:[];
 var card=document.getElementById('dashboardMoodCard');
 if(!card){card=document.createElement('div');card.className='card';card.id='dashboardMoodCard';var front=document.getElementById('homeFront');var host=front&&front.parentElement; if(host&&host.parentElement)host.parentElement.insertBefore(card,host.nextElementSibling);else home.appendChild(card);}
 var latest=moods.length?moods[moods.length-1]:null;
 if(!latest){card.innerHTML='<h3>Current Mood</h3><p class="small">No mood has been logged yet.</p><button class="primary" id="dashboardMoodGo">Log a Mood</button>';}else{
   card.innerHTML='<h3>Current Mood</h3><div style="font-size:24px;margin:6px 0">'+esc(latest.mood)+'</div><div><b>'+esc(nameOf(data,latest.who))+'</b></div><div class="small">Logged '+new Date(latest.at).toLocaleString()+'</div><div class="row" style="margin-top:8px"><button class="secondary" id="dashboardMoodGo">View Mood</button></div>';
 }
 var btn=document.getElementById('dashboardMoodGo'); if(btn)btn.onclick=function(){var mood=document.getElementById('mood');if(!mood)return;document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});mood.classList.add('active');document.querySelectorAll('#nav button').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-page')==='mood');});};
}
render();setInterval(render,1000);
})();
