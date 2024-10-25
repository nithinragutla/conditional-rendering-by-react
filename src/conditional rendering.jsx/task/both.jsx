import Men_cloth from "./men";

import Women_cloth from "./women";

var clothing ="men";

var  Compon

// if (clothing =="men") {
//     Compon=<Men_cloth/>
// }
// else {
//     Compon=<Women_cloth/>
// }

// switch(clothing){
//    case "Men":
//    compon=<Men_cloth/>
//    break;
//    case "women":
//       compon=<Women_cloth/>
//       break;
// }

function Both() {
    

   return(

   <>
   {clothing=="men"?<Men_cloth/>:<Women_cloth/>}
   {/* {Compon} */}
   {/* {clothing} */}
   </>
   )

   

}
export default Both;