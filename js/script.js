
$(function(){

var  o;
  var counter=0;
    var box=$('.box')

   var counter=0;
	var money=Number(prompt('Enter the count of money!'));
	var name=prompt('Enter your  Name please!')
     $('#counter').html('Count'+':' + money) ;
     $('#player').html(name)
   var t=money;
	for(var i=1;i<=5;i++){	
		$('.spitakner').append($('<img>').addClass('imgner').attr('src',`./images/${i}.jpg`).css({background:'white',"border-radius":"50%",width:"60px",height:"60px",margin:'10px ',"box-shadow":"10px 10px 5px 0px rgba(0,0,0,0.75)",  }));
	}
   $('#play').on('click', function(){
   	setTimeout(function(){
   		var spin = new Audio("./sounds/spin.mp3");
	var coin = new Audio("./sounds/coin.mp3");
	var win = new Audio("./sounds/win.mp3");
	var lose = new Audio("./sounds/lose.mp3");
  	 				spin.play();
	var img=[];
   	var one=0;
   	var two=0;
   	var three=0;
   	var arr=[];
   	var k ;
		for(var i = 0; i < 3; i++){
			        k = Math.floor(Math.random()*(i+6));
		            img.push(`${k}.jpg`);
		            arr.push(k)
		        }
  	 		
			
					
		for(var j = 0;j<img.length; j++){
			$(box[j]).css({"background-size": "cover","background-repeat":" no-repeat"});	
        }
	        if(counter>4){

			  o = Math.floor(Math.random()*(i+6));
	        	arr[0]=o;
	        	arr[1]=o;
	        	arr[2]=o;
	        	img[0]=`${o}.jpg`;
	        	img[1]=`${o}.jpg`;
	        	img[2]=`${o}.jpg`; 
	        	if(img[0]=='3.jpg' && img[1]=='3.jpg' &&img[1]=='3.jpg'){

		            for(var i=0;i<6;i++){
		            	$('.imgner').removeAttr('src')
		            	$('.imgner').attr('src',`./images/3.jpg`);

		            }
	        	  win.src='./sounds/coin.mp3';
	        	  win.play();
		        	   $('.jackpot').css('display','block');
					        	   setTimeout(function(){
					        	   	$('.jackpot').css('display','none');
					        	   },1500);
	        	 
	        	}else {
	        		for(var i=0;i<6;i++){
	        			$('.imgner').removeAttr('src')
		            	$('.imgner').attr('src',`./images/${o}.jpg`);
		            }
	        	   	$('.win').css('display','block');
	        	   setTimeout(function(){
	        	   	$('.win').css('display','none');
	        	   },1500);
	        	   	

	        	}
 	        }

           $(box[0]).css({"background-image":`url(./images/${img[0]})`}) ;
           $(box[1]).css({"background-image":`url(./images/${img[1]})`}) ;
           $(box[2]).css({"background-image":`url(./images/${img[2]})`}) ;
       

           	if(arr[0]==arr[1] && arr[1]==arr[2] && arr[2]==arr[0]){
           		if(img[0]=='3.jpg' && img[1]=='3.jpg' &&img[1]=='3.jpg'){
           			t=t+500;
           		} else if(img[0]=='3.jpg' && img[1]=='3.jpg' &&img[1]=='3.jpg'){

           			t=t+300;
	        	   $('.yellowbtn').css('display','block');
	        	   setTimeout(function(){
	        	   	$('.yellowbtn').css('display','none');
	        	   },1500);
           		}else{
           			t=t+20 ;
           		}
           		           		
           		 $('#counter').html('Count'+':' + t) ;
           	 	win.src="./sounds/win.mp3";
           		 win.play();
           		 console.log('win')
           		 counter=0
				}else {
					t=t-5 ;           		
           				 $('#counter').html('Count'+':' + t) ;
					
					lose.play();
					setTimeout(function(){
						lose.src='';

					},2000)
           		counter++;

				
				} 

        img=[];
        if(t <0){
        	var money=Number(prompt('Your money over:Enter the count of money!'));
     		$('#counter').html('Count'+':' + money) ;
     		t=money
   
        }
   	},100)
   })
	

})
