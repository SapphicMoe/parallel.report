export interface Resource {
  title: string;
  prefix: string;
  category: string[];
  color: {
    background: string;
    border: string;
    text: string;
  };
  image: {
    file: string;
    height: number;
    width: number;
  };
  description: string;
  site: string;
  contributors: {
    name: string;
    link: string;
    role: string;
    bold?: boolean;
  }[];
}

export interface ResourceModule {
  default: Resource;
}

export interface Contributor {
  author: string;
  link: string;
  resources: {
    name: string;
    description: string;
    link: string;
  }[];
}
