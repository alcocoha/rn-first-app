import { GET, POST } from './config';

const API_URL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/";

/**
 * Autor: Jorge Hurtado
 * Descripción: Método global para peticiones rest a través de fetch
 * @ endPoint: Es el end point del api a solicitar
 * @ verb: Es el verbo HTTP a utilizar
 */
const REST_API = async ( endPoint, verb ) => {
    const respond = await fetch( `${API_URL}${endPoint}`, verb );
    if( respond.status === 404 || respond.status === 500 )  throw new Error( "Not 200 response" );
    return respond.json();
};

/**
 * Autor: Jorge Hurtado
 * Descripción: Método GET para peticiones
 */
export const getData = endPoint => REST_API( endPoint, GET() );

/**
 * Autor: Jorge Hurtado
 * Descripción: Método POST para peticiones
 */
export const postData = ( endPoint, params ) => REST_API( endPoint, POST( params ) );
