import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

console.log(environment.apiUrl);

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor() {}
}
