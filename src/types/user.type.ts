export enum UserType {
    'Global' = 'Global',
    'GlobalAgency' = 'Global Agency',
    'GlobalPartner' = 'Global Partner',
    'InterAgency' = 'Inter-Agency',
    'MOH'= 'MOH',
    'Agency' = 'Agency',
    'Partner' = 'Partner',
    'superAdmin' = 'superAdmin',
    'unknown' = 'unknown',
    'System'='System'
};

export const userTypeReRules = {
    [UserType.Partner]: '^OU .+ Partner .+ users',
    [UserType.GlobalPartner]: '^Global Partner .+ users',
    [UserType.Agency]:  '^OU .+ Agency .+ users',
    [UserType.GlobalAgency]: '^Global Agency .+ users',
    [UserType.Global]: '^Global users',
    [UserType.InterAgency]: '^OU .+ Interagency users',
    [UserType.MOH]: '^OU .+ MOH users$',
    [UserType.System]: '^System users$'
};

export function getAllUserTypes():UserType[]{
    return Object.entries(UserType).map(e=>e[1] as UserType);
}

export function getAppUserTypes():UserType[]{
    return getAllUserTypes().filter(t=>![UserType.unknown, UserType.superAdmin].includes(t))
}