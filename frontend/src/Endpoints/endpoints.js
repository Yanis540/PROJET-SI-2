
//! auth part
export const refreshAccessTokenEndpoint='/auth/refresh/token'
export const registerUserEndPoint='/auth/register' 
export const loginEndPoint='/auth/login'
export const sendValidationEmailEndPoint='/auth/send/validation' 
export const validateUserEndPoint='/auth/validate/user' 
export const refreshAccessTokenEndPoint='/auth/refresh/token' 


//! registre de l'acte 

export const getRegistresActesEndPoint='/status/register/get';
export const getRegistreUniqueActesEndPoints=(numero_registre)=>`/status/register/get/single/${numero_registre}`;
export const createRegistreActeEndPoint='/status/register/create'
export const updateRegistreActeEndPoint=(numero_registre)=>`/status/register/update/${numero_registre}`


//! Actes 
export const getActeUniqueEndPoint=(numero_acte)=>`/status/status/get/single/${numero_acte}`;
export const getStats=`/status/status/stats`;
export const getActesParCategoryEndPoint='/status/status/get/category';
export const getActesEndPoint='/status/status/get';
export const createActesEndPoint='/status/status/create';
export const deleteActeEndPoint=(numero_acte)=>`/status/status/delete/${numero_acte}`;
export const updateActeEndPoint=(numero_acte)=>`/status/status/update/${numero_acte}`;


//! Personne 
export const createPersonEndPoint='/person/create';
export const deletePersonEndPoint=(NIN)=>`/person/delete/${NIN}`;
export const getPersonsEndPoint='/person/get/persons';
export const updatePersonEndPoint=(NIN)=>`/person/update/${NIN}`;

//! user 
export const updateUserEndPoint='/user/update';

export const updateMaireEndPoint='/user/maire/update'