import axios from 'axios'
import { filterUSD } from './utils';
export const res = async ()=>{
    const resp = await axios('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    return filterUSD(resp.data)
}