export interface Movie  {
    Title: string,
    Poster: string,
    Year: string, 
    Type: string,
    imdbID: string 
}

export interface MovieDetails {
    Title: string,
    Poster: string,
    Year: string, 
    Type: string,
    imdbID: string 
    Actors: String,
    Awards: String,
    Country: String,
    Director: String,
    Genre: String,
    Language: String
    Plot: String

}


export interface ApiResponse {
    data: {Search: Movie[]}
}
