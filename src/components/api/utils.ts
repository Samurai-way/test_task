import {ResponseType} from "../types/Types";

export const filterUSD = (array: ResponseType[])=>{
    const out = array.filter(el => {
        return el.r030 === 840
    } )
    return  out.length===1 ? out[0].rate: 0
}
export const filterEUR = (array: ResponseType[])=>{
    const out = array.filter(el => {
        return el.r030 === 978
    } )
    return  out.length===1 ? out[0].rate: 0
}