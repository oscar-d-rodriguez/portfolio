function run() {
    if(document.querySelector("#canvas")){
        var canvas=document.querySelector("#canvas"),trails=document.querySelector("#trails"),ctx=canvas.getContext("2d"),Tctx=trails.getContext("2d"),PI=Math.PI,COUNT=6,R1=150,R2=R1/(2*PI)*COUNT,COLOR="#fff",SPEED=.05,ANGLE=0,ANGLEDIFF=360/COUNT*(PI/180),CENTER={x:window.innerWidth/2,y:window.innerHeight/2};function init(){ctx.canvas.width=2*CENTER.x,ctx.canvas.height=2*CENTER.y,Tctx.canvas.width=2*CENTER.x,Tctx.canvas.height=2*CENTER.y,window.requestAnimationFrame(draw)}function draw(){Tctx.fillStyle="rgba(26,29,37,0.05)",Tctx.fillRect(0,0,Tctx.canvas.width,Tctx.canvas.height),ctx.clearRect(0,0,2*CENTER.x,2*CENTER.y),ANGLE-=PI/360*SPEED,drawCenter(ctx);var t=getCoordinates();drawFirstLevelPoints(t.mainPoints),drawSecondLevelPoints(t.secondaryPoints),drawConnectors(t.mainPoints,t.secondaryPoints),window.requestAnimationFrame(draw)}function getCoordinates(){for(var e={mainPoints:[],secondaryPoints:[]},a=[ANGLE],t=1;t<COUNT;t++)a.push(ANGLE+ANGLEDIFF*t);return a.forEach(function(t){e.mainPoints.push(getPointCoordinates(CENTER,t,R1))}),e.mainPoints.forEach(function(t,n){var i=getPointCoordinates(t,a[n]+a[n]*COUNT*2,R2);e.secondaryPoints.push(i)}),e}function getPointCoordinates(t,n,i){return{x:t.x+i*Math.cos(n),y:t.y+i*Math.sin(n)}}function drawCenter(t){drawCirclePoint(CENTER.x,CENTER.y,20),drawCircle(CENTER.x,CENTER.y,R1-4,!0)}function drawFirstLevelPoints(t){t.map(function(t){drawCirclePoint(t.x,t.y,10),drawCircle(t.x,t.y,R2-4)})}function drawSecondLevelPoints(t){t.map(function(t){drawCirclePoint(t.x,t.y,2),drawPoint(t.x,t.y)})}function drawConnectors(t,a){t.forEach(function(t,n){drawLine(t,CENTER),drawLine(t,a[n]);for(var i=a.length,e=1;e<i;e++)drawLine(a[0],a[i-1]),drawLine(a[e],a[e-1])})}function drawCirclePoint(t,n,i){ctx.beginPath(),ctx.strokeStyle=COLOR,ctx.lineWidth=i,ctx.arc(t,n,i/2,0,2*PI,!1),ctx.stroke(),ctx.beginPath(),ctx.strokeStyle=COLOR,ctx.lineWidth=2,ctx.arc(t,n,i+4,0,2*PI,!1),ctx.stroke()}function drawCircle(t,n,i,e){e&&ctx.setLineDash([2,4]),ctx.globalAlpha=.2,ctx.beginPath(),ctx.strokeStyle=COLOR,ctx.lineWidth=2,ctx.arc(t,n,i+4,0,2*PI,!1),ctx.stroke(),ctx.globalAlpha=1,ctx.setLineDash([0])}function drawLine(t,n){ctx.globalAlpha=.5,ctx.beginPath(),ctx.strokeStyle=COLOR,ctx.lineWidth=2,ctx.moveTo(t.x,t.y),ctx.lineTo(n.x,n.y),ctx.stroke(),ctx.globalAlpha=1}function drawPoint(t,n){Tctx.globalAlpha=1,Tctx.beginPath(),Tctx.strokeStyle=COLOR,Tctx.lineWidth=1,Tctx.arc(t,n,.5,0,2*PI,!1),Tctx.stroke(),Tctx.globalAlpha=1,Tctx.setLineDash([0])}window.addEventListener("resize",function(){CENTER={x:window.innerWidth/2,y:window.innerHeight/2},ctx.canvas.width=2*CENTER.x,ctx.canvas.height=2*CENTER.y,Tctx.canvas.width=2*CENTER.x,Tctx.canvas.height=2*CENTER.y}),init();
    }
}