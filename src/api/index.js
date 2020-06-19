import localPromiseResponse from '@/utils/localPromiseResponse'
import FactoryData from '@/models/FactoryData'
import SafetyStatus from '@/models/SafetyStatus'
import AccidentResponse from '@/models/AccidentResponse'
import VehicleCount from '@/models/VehicleCount'
import VehicleMonitor from '../models/VehicleMonitor'

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

export const vehicleAsync = params =>{
  if (!params) {
    return localPromiseResponse(new VehicleCount())
  }
  // api response
}

export const vehicleMonitorAsync = params =>{
  if (!params) {
    return localPromiseResponse(new VehicleMonitor())
  }
  // api response
}