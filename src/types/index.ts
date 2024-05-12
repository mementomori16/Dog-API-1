export interface Breed {
    name: string;
    image: string;
  }
  
  export interface ApiResponse {
    message: Record<string, string[]>;
    status: string;
  }
  