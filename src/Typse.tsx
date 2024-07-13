
// export interface LaunchData {
//   images: string[];
//   text: string;
//   heading?: string;
//   textHeading : string;
// }


export interface LaunchData {
  id: number;
  images: string[];
  text?: string;
  heading?: string;
  textHeading?: string;
}

export interface BannerData {
  id: number;
  heading: string;
  text?: string;
  textHead?: string;
  textHeading?: string;
  images: string[];
  buttonText?: string;
  divStyles?: React.CSSProperties;
  layout: 'layout1' | 'layout2' | 'layout3';
}
