interface Info {
    count: number;
    pages: number;
    next: string | null; // URL to the next page, or null if there isn't one
    prev: string | null; // URL to the previous page, or null if there isn't one
  }
  
  interface Origin {
    name: string;
    url: string;
  }
  
  interface Location {
    name: string;
    url: string;
  }
  
  export interface Character {
    id: number;
    name: string;
    status: string; // e.g., "Alive", "Dead", etc.
    species: string; // e.g., "Human", "Alien", etc.
    type: string; // Can be an empty string or specific type for some characters
    gender: string; // e.g., "Male", "Female", "Genderless", etc.
    origin: Origin;
    location: Location;
    image: string; // URL of the character's image
    episode: string[]; // Array of URLs for episodes that the character appears in
    url: string; // URL for the character details
    created: string; // Timestamp of when the character was created
  }
  
  export interface ApiResponse {
    info: Info;
    results: Character[];
  }