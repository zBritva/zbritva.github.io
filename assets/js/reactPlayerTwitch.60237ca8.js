(self.webpackChunkilfatgaliev=self.webpackChunkilfatgaliev||[]).push([[6216],{9482:(e,t,a)=>{var r,s=Object.create,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of n(t))p.call(e,s)||s===a||l(e,s,{get:()=>t[s],enumerable:!(r=i(t,s))||r.enumerable});return e},y=(e,t,a)=>(((e,t,a)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a),d={};((e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})})(d,{default:()=>P}),e.exports=(r=d,h(l({},"__esModule",{value:!0}),r));var u=((e,t,a)=>(a=null!=e?s(o(e)):{},h(!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),e)))(a(7294)),c=a(8045),m=a(1776);class P extends u.Component{constructor(){super(...arguments),y(this,"callPlayer",c.callPlayer),y(this,"playerID",this.props.config.playerId||`twitch-player-${(0,c.randomString)()}`),y(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),y(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:a,onError:r,config:s,controls:l}=this.props,i=m.MATCH_URL_TWITCH_CHANNEL.test(e),n=i?e.match(m.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(m.MATCH_URL_TWITCH_VIDEO)[1];t?i?this.player.setChannel(n):this.player.setVideo("v"+n):(0,c.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,{video:i?"":n,channel:i?n:"",height:"100%",width:"100%",playsinline:a,autoplay:this.props.playing,muted:this.props.muted,controls:!!i||l,time:(0,c.parseStartTime)(e),...s.options});const{READY:r,PLAYING:o,PAUSE:p,ENDED:h,ONLINE:y,OFFLINE:d,SEEK:u}=t.Player;this.player.addEventListener(r,this.props.onReady),this.player.addEventListener(o,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(h,this.props.onEnded),this.player.addEventListener(u,this.props.onSeek),this.player.addEventListener(y,this.props.onLoaded),this.player.addEventListener(d,this.props.onLoaded)}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}y(P,"displayName","Twitch"),y(P,"canPlay",m.canPlay.twitch),y(P,"loopOnEnded",!0)}}]);