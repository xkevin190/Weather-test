import { ILocation } from "../store/location/initialState";

export const mockLocations: Array<ILocation> = [
    {
      city: "Paris",
      country: "France",
      id: 2,
    },
  ];


export const mockLocationResponse = {
    successful: true,
    response: { 
        geonames:[
            {
                name: "Paris",
                countryName: "France",
                geonameId: 2,
            }
        ]
    },
}
  
