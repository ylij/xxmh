div=document.querySelectorAll("body>div"),
ul=document.querySelectorAll("body>div>ul:nth-child(1)"),
v0=0,v1=1,v2=0,v3=0,
path="http://xxmh.gufengmh.com/bookimages/",
btn=document.querySelectorAll("body>div:nth-child(2)>button,#box3 button"),

f1=()=>{
	div[1].removeAttribute("class");
	div[2].removeAttribute("class");
	div[0].className="dis",
	ul[0].innerHTML="";
	f5(0);
},

f2=()=>{
	div[0].removeAttribute("class");
	div[2].removeAttribute("class");
	div[1].className="dis",
	ul[1].innerHTML="";
	f6(0);
},

f3=()=>{
	div[0].removeAttribute("class");
	div[1].removeAttribute("class");
	div[2].className="dis",
	div[2].children[0].innerHTML="";
	f4(1);
},

f4=(i)=>{
	if(i>dat[v1][v2][v3][2])return;
	img=document.createElement("img"),
	img.src=path+dat[v1][v2][v3][1]+i+".jpg",
	img.onerror=img.onload=()=>{f4(i+1)};
	div[2].children[0].appendChild(img);
},

f5=(i)=>{
	if(i==dat[v0].length)return;
	let m=document.querySelectorAll("#box1 img");
	for(var i=0;i<m.length;i++)m[i].onerror=m[i].onload=null;
	li=document.createElement("li"),
	img=document.createElement("img"),
	h=document.createElement("h4"),
	p=document.createElement("p"),
	li.n=i,
	li.onclick=function(){v2=this.n;f2();},
	img.src=path+dat[v0][i][2],
	img.onerror=img.onload=()=>{f5(i+1)},
	h.innerHTML=dat[v0][i][0],
	p.innerHTML=dat[v0][i][1];
	li.appendChild(img);
	li.appendChild(h);
	li.appendChild(p);
	ul[0].appendChild(li);
	for(var j=0;j<ul[0].children.length-1;j++){
		if(li.isEqualNode(ul[0].children[j]))ul[0].removeChild(ul[0].children[j]);
	};
},

f6=(i)=>{
	if(i==dat[v1][v2].length)return;
	li=document.createElement("li"),
	img=document.createElement("img"),
	p=document.createElement("p"),
	img.src=path+dat[v1][v2][i][0],
	img.onerror=img.onload=()=>{f6(i+1)},
	p.innerHTML="第"+(+i+1)+"話",
	li.n=i,
	li.onclick=function(){v3=this.n;f3();};
	li.appendChild(p);
	li.appendChild(img);
	ul[1].appendChild(li);
},

btn[0].onclick=()=>{
	div[1].removeAttribute("class");
	div[0].className="dis";
	scrollTo(0,0);
},

btn[1].onclick=()=>{
	div[0].removeAttribute("class");
	div[2].removeAttribute("class");
	div[1].className="dis";
	scrollTo(0,0)
},
btn[2].onclick=()=>{
	if(v3>0){
		v3--;
		f3();
		scrollTo(0,0)
	}
},
btn[3].onclick=()=>{
	if(v3<dat[v1][v2].length){
		v3++;
		f3();
		scrollTo(0,0)
	}
},

v5={},
page=document.querySelector("#page>ul");
for(i in v4){
	li=document.createElement("li"),
	li.innerHTML=+i+1,
	li.v=v4[i]+".js",
	li.onclick=function(){
		if(this.className)return;
		t=this,
		script=document.createElement("script"),
		script.src=t.v,
		script.onload=()=>{
			document.body.removeChild(script);
			v5.removeAttribute("class");
			v5=t,v5.className="pck";
		},
		script.onerror=()=>{document.body.removeChild(script)};
		document.body.appendChild(script);
		scrollTo(0,0);
	};
	if(i==0)v5=li;
	page.appendChild(li);
}
