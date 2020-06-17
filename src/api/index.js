import localPromiseResponse from '@/utils/localPromiseResponse'
import FactoryData from '@/models/FactoryData'
import SafetyStatus from '@/models/SafetyStatus'
import AccidentResponse from '@/models/AccidentResponse'

export const factoryAsync = params => {
  if (!params) {
    return localPromiseResponse(new FactoryData())
  }
  // api response
}

export const safetyAsync = params => {
  if (!params) {
    return localPromiseResponse(new SafetyStatus())
  }
  // api response
}

export const accidentResponseAsync = params => {
  if (!params) {
    return localPromiseResponse(new AccidentResponse())
  }
  // api response
}