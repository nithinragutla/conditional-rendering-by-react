import Admin from "./admin";

import User from "./user";

var isrole = "Admin";

var  compon=""

// if (isrole == "admin") {
//     compon=<Admin />
// }
// else {
//     compon=<User />
// }

// switch(isrole){
//    case "Admin":
//    compon=<Admin/>
//    break;
//    case "User":
//       compon=<User/>
//       break;
// }

function Condit() {

   return(

   <>
   {isrole=="Admin"?<Admin/>:<User/>}
   {/* {compon} */}
   {/* {isrole} */}
   </>
   )

}
export default Condit;