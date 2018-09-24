window.onload=function(){
			var colors=document.getElementById('colors')
	        var p=document.getElementsByTagName('p');
	        var art=document.getElementById('art');
	        var changeColor=function(event){
	        	var color=event.target.style.backgroundColor
	        	art.style.backgroundColor=color;
	        	if(localStorage.colorCount){
	        		localStorage.colorCount=Number(localStorage.colorCount)+1;
	        	}else{
	        		localStorage.colorCount=1
	        	};
	            localStorage[localStorage.colorCount]=color;
	            for(var i=0;i<p.length;i++){
	            	p[i].className=''
	            }
	            event.target.className='top';
	        };
	        if(localStorage.colorCount){
	        	art.style.backgroundColor=localStorage[localStorage.colorCount]
	        }else{
	        	art.style.backgroundColor='gray';
	        }
	        for(var i=0;i<7;i++){
	        	p[i].addEventListener('click',changeColor);
	        };
	    }