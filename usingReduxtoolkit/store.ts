import { configureStore } from '@reduxjs/toolkit';
import trafficPointReducer from './slice/TrafficPointSlice'
import  vendingZoneReducer  from './slice/VendingZoneSlice';
import  offStreetParkingReducer  from './slice/OffStreetParkingSlice';
import  onStreetParkingReducer  from './slice/OnStreetParkingSlice';
import  busStopsReducer  from './slice/BusStopsSlice';
import  fileUploadReducer  from './slice/FileUploadSlice';
import  loginReducer  from './slice/LoginSlice';
import  districtReducer  from './slice/DistrictSlice';
import  townMasterReducer  from './slice/TownMasterSlice';
import  designationReducer  from './slice/DesignationSlice';
import WorkItemReducer from './slice/WorkItemSlice';
import VendingZoneReportReducer from './slice/VendingZoneReportSlice';
import offStreetReducer from './slice/OffStreetSlice';
import onStreetReducer from './slice/OnStreetReportSlice';
import busStopReducer from './slice/BusStopReportSlice';
import roadTypeReducer from './slice/RoadTypeSlice';
import venderTypeReducer from './slice/VenderTypeSlice';
import trafficPointSubmittedReducer from './slice/TrafficPointSubmitSlice';
import vendingZoneSubmittedReducer from './slice/VendingZoneSubmitSlice';
import offStreetSubmittedReducer from './slice/OffStreetSubmittedSlice';
import onStreetSubmittedReducer from './slice/OnStreetSubmittedSlice';
import busStopSubmittedSlice from './slice/BusStopSubmittedSlice';

const store = configureStore({
  reducer: {
    trafficPoint:trafficPointReducer, 
    vendingZone:vendingZoneReducer,
    offStreetParking:offStreetParkingReducer,
    onStreetParking:onStreetParkingReducer,
    busStops:busStopsReducer,
    fileUpload:fileUploadReducer,
    login:loginReducer,
    district : districtReducer,
    townMaster : townMasterReducer,
    roadType : roadTypeReducer,
    designation : designationReducer,
    workItem : WorkItemReducer,
    vendingZoneReport : VendingZoneReportReducer,
    offStreetReport : offStreetReducer,
    onStreetReport : onStreetReducer,
    busStopReport : busStopReducer,
    venderType : venderTypeReducer,
    trafficPointSubmitted : trafficPointSubmittedReducer,
    vendingZonesubmitted : vendingZoneSubmittedReducer,
    offStreetsubmitted : offStreetSubmittedReducer, 
    onStreetsubmitted : onStreetSubmittedReducer,
    busStopSubmitted : busStopSubmittedSlice
  },
});

export default store;