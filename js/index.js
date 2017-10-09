/*
* @Author: 宏达
* @Date:   2017-10-07 18:06:02
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-07 22:22:57
*/
window.onload=function(){
/*banner图*/
	let banner=document.querySelector('.banner');
	let slide=banner.querySelector('ul');
	let lis=slide.querySelectorAll('li');
	let textw=parseInt(getComputedStyle(banner,null).width);
	let button=banner.querySelector('.slide-button');
	let left=button.querySelectorAll('li')[0];
	let right=button.querySelectorAll('li')[1];
	let now=0;
	let next=0;
	let flag=true;
	let t=setInterval(move, 2000);
    
    banner.onmouseover=function(){
    	clearInterval(t);
    }
    banner.onmouseout=function(){
    	t=setInterval(move, 2000);
    }
	function move(){
        next++;
        if(next==lis.length){
        	next=0;
        }
        lis[next].style.left = textw+'px';
        animate(lis[now],{left:-textw});
        animate(lis[next],{left:0},function(){
            flag=true;
        });
        now=next;
	}
	function moveL(){
        next--;
        if(next<0){
        	next=lis.length-1;
        }
        lis[next].style.left = -textw+'px';
        animate(lis[now],{left:textw});
        animate(lis[next],{left:0},function(){
            flag=true;
        });
        now=next;
	}
	left.onclick=function(){
		if (!flag) {
            return;
        }
		moveL();
		flag=false;
	}
	right.onclick=function(){
		if (!flag) {
            return;
        }
		move();
		flag=false;
	}
/*返回顶部*/
    window.onscroll=function(){
    	let top=document.querySelector('.top-button');
    	let topnav=document.querySelector('.top-nav');
    	let scrolltop=document.documentElement.scrollTop;
    	if(scrolltop>400){
    		top.style.display='block';
    	}else{
    		top.style.display='none';
    	}
    	top.onclick=function(){
           animate(document.documentElement,{scrollTop:topnav});
        }
    }

}
