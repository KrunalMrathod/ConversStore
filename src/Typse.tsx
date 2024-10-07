export interface Sale {
  title : string;
  bannerImg : string;
  products : string[];
  
}

export interface LaunchData {
  id: number;
  images: string[];
  text?: string;
  heading?: string;
  textHeading?: string;
  title : string
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
  products : string[];
}
