import Ajax from '../axios'
import url from './api.url'

export const indexDangerBusiness = () => Ajax.get(url.indexDangerBusiness)
export const indexSafeStaus = () => Ajax.get(url.indexSafeStaus)
export const indexResponse = () => Ajax.get(url.indexResponse)
export const indexCarsCount = () => Ajax.get(url.indexCarsCount)
export const indexImportantCars = () => Ajax.get(url.indexImportantCars)
export const indexBigDangerSource = () => Ajax.get(url.indexBigDangerSource)
export const indexBigDangerTest = () => Ajax.get(url.indexBigDangerTest)
export const indexImportantCraft = () => Ajax.get(url.indexImportantCraft)
export const indexImportantCraftVideo = () => Ajax.get(url.indexImportantCraftVideo)
