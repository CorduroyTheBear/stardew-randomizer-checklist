// Export tables

// Traveling Merchant
import tm_Sun from "./JsonFiles/TravelingMerchant/tm_Sun.json";
import tm_Mon from "./JsonFiles/TravelingMerchant/tm_Mon.json";
import tm_Tue from "./JsonFiles/TravelingMerchant/tm_Tue.json";
import tm_Wed from "./JsonFiles/TravelingMerchant/tm_Wed.json";
import tm_Thu from "./JsonFiles/TravelingMerchant/tm_Thu.json";
import tm_Fri from "./JsonFiles/TravelingMerchant/tm_Fri.json";
import tm_Sat from "./JsonFiles/TravelingMerchant/tm_Sat.json";


export const GROUPED_TABLES = 
{
   travelingMerchant:
   {
        heading: "Traveling Merchant",
        className: "tableLevel-2_Heading",
        groups:
        [
            { id: "tm_Sun", heading: "Sunday",    className: "tableLevel-2_Tables", data: tm_Sun },
            { id: "tm_Mon", heading: "Monday",    className: "tableLevel-2_Tables", data: tm_Mon },
            { id: "tm_Tue", heading: "Tuesday",   className: "tableLevel-2_Tables", data: tm_Tue },
            { id: "tm_Wed", heading: "Wednesday", className: "tableLevel-2_Tables", data: tm_Wed },
            { id: "tm_Thu", heading: "Thursday",  className: "tableLevel-2_Tables", data: tm_Thu },
            { id: "tm_Fri", heading: "Friday",    className: "tableLevel-2_Tables", data: tm_Fri },
            { id: "tm_Sat", heading: "Saturday",  className: "tableLevel-2_Tables", data: tm_Sat }
        ]
   } 
    
};





// To Add more grouped tables

// 1. Put .json file in ./data/JsonFiles
// 2. Export tables (shown above)