<script>
var fruits = ["Saab", "2", "BMW"]; 

function check (fruits1,lol ){
if ( typeof fruits[lol]=="undefined") {
		fruits[lol]=0;
}
else if ( typeof fruits[lol]=="number") {
		fruits[lol]=1;
}
 else if ( typeof fruits[lol]=="string") {
		fruits[lol]=-1;
  } 
  
  return fruits;
  
  } 
  </script>