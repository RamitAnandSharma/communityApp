// export interface PageInterface {
//    title: string;
//    component: any;
//    icon: string;
//    logsOut ? : boolean;
//    index ? : number;
//    tabComponent ? : any;
// }

export interface PageInterface {
  title: string;
  url: string;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}

export interface PageInterface {
  title: string;
  url: string;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}
export interface City {
  id: number;
  city: string;
  state: string;
}
export interface Location {
  id: number;
  building: string;
}
export interface Residence {
  id: number;
  name: string;
}
