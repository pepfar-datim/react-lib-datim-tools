import {DhisUser} from "../types/dhisUser.type";
import {getData} from "@pepfar-react-lib/http-tools";
import {UserType} from "../types/user.type";
import {determineUserType} from "./determineUserType.service";

export async function getMyUserType():Promise<UserType>{
    let dhisMe:DhisUser = await getData('/me?fields=userGroups[id,name],userCredentials[userRoles[id,name]]')
    return determineUserType(dhisMe.userGroups);
}
