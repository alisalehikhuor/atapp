import{m as u,_ as m,r as d,o,c as l,F as h,d as _,e as s,t as r,b as p,w as y,f}from"./index.d5aab7aa.js";var A={methods:{Play(t){typeof t=="number"?(this.currentTrack=this.tracks[t],this.isTimerPlaying=!0,this.resetPlayer()):this.audio.paused?(this.audio.play(),this.isTimerPlaying=!0):(this.audio.pause(),this.isTimerPlaying=!1)},resetPlayer(){this.barWidth=0,this.circleLeft=0,this.audio.currentTime=0,this.audio.src=this.currentTrack.source,setTimeout(()=>{this.isTimerPlaying?this.audio.play():this.audio.pause()},300)}}};const k={name:"playlist",props:{intracks:Array,listname:String},methods:{...u(["Play"])}},g=["onDblclick"],v={class:"row"},P={class:"col-1 num-col"},T=["onClick"],b={class:"col-1 img-col"},C=["src"],$={class:"col-lg-10 col-md-9 col-8"};function w(t,B,a,D,N,V){const n=d("router-link");return o(),l("ul",null,[(o(!0),l(h,null,_(a.intracks,(e,i)=>(o(),l("li",{key:i,onDblclick:c=>t.Play({index:i,listname:a.listname})},[s("div",v,[s("div",P,[s("p",{class:"num-index",onClick:c=>t.Play({index:i,listname:a.listname})},r(i+1),9,T)]),s("div",b,[s("img",{src:e.cover},null,8,C)]),s("div",$,[s("h6",null,r(e.name),1),p(n,{to:`/artist/${e.artist}`},{default:y(()=>[f(r(e.artist),1)]),_:2},1032,["to"])])])],40,g))),128))])}var F=m(k,[["render",w]]);export{F as a,A as p};
