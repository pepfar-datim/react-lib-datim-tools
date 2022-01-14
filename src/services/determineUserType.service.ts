import {idName} from "../types/idName.type";
import {getAllUserTypes, getAppUserTypes, UserType, userTypeReRules} from "../types/user.type";
import {debugLog} from "@pepfar-react-lib/http-tools";

export function isUserType(userGroups:idName[], type:UserType):boolean{
    return userGroups.some(userGroup=>{
        let userGroupName = userGroup.name;
        let re = new RegExp(userTypeReRules[type]);
        return re.test(userGroupName);
    });
}

export function determineUserType(userGroups:idName[]):UserType{
    let foundTypes:UserType[]=[];
    getAppUserTypes().forEach((userType:UserType)=>{
        if (isUserType(userGroups, userType)) foundTypes.push(userType);
    });
    const userTypes = getAllUserTypes();
    foundTypes.sort((t1,t2)=>userTypes.indexOf(t2)-userTypes.indexOf(t1));
    if (foundTypes.length>1) debugLog(`Multiple User Types found ${foundTypes} ${userGroups.map(g=>g.name)}`);
    if (foundTypes.length===0) return UserType.unknown;
    return foundTypes[0];
}