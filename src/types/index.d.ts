type Education = {
    school: string;
    year: string;
  };
  
  type Tag = {
    tag: string;
    id: string;
  };
  
  type Interest = {
    like: string;
    id: string
  };
  
  type UserData = {
    id: number;
    name: string
    location?: string;
    plays?: string;
    programs?: string;
    
    school?: string;
    hashTag?: Tag[];
    interest?: Interest[];
  };