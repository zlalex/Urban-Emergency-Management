import localPromiseResponse from '@/utils/localPromiseResponse'
import FactoryData from '@/models/FactoryData'

export const factoryAsync = params => {
  if (!params) {
    return localPromiseResponse(new FactoryData())
  }
  // api response
}