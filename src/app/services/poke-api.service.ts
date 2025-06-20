import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, switchMap } from 'rxjs';

interface PokeListResponse {
  count: number;
  next: string;
  previous: string | null;
  results: { name: string; url: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(offset: number = 0, limit: number = 20): Observable<any[]> {
    return this.http.get<PokeListResponse>(`${this.baseUrl}?offset=${offset}&limit=${limit}`).pipe(
      switchMap(response => {
        const requests = response.results.map(pokemon =>
          this.http.get<any>(pokemon.url)
        );
        return forkJoin(requests);
      })
    );
  }
}
