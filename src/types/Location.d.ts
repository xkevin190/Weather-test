

export interface LocationResponse {
    totalResultsCount: number;
    geonames: GeoName[];
  }
  
  interface GeoName {
    adminCode1: string;
    lng: string;
    geonameId: number;
    toponymName: string;
    countryId: string;
    fcl: string;
    population: number;
    countryCode: string;
    name: string;
    fclName: string;
    adminCodes1: AdminCodes1;
    countryName: string;
    fcodeName: string;
    adminName1: string;
    lat: string;
    fcode: string;
  }
  