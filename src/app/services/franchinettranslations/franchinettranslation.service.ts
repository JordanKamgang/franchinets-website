import { Injectable } from '@angular/core';
import * as translations from 'src/assets/translationsfile.json';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FranchinettranslationService {

  _language = 'EN';
  url = 'src/assets/translationsfile.json';
  data: any = translations;
  translatObjecte: Array<translationTags> = new Array<translationTags>();
  constructor(private http: HttpClient) {
    this.getAllTranslations().subscribe((res: Array<translationTags>) => {
      this.translatObjecte = res;
    })
   }

   public set language(value: string) {
    this._language = value;
   }

   public get language() {
    return this._language;
   }

   getTranslations(value: string): Observable<string> {
    return this.http.get(this.url).pipe(map((translations: any) => {

    let translation = translations.find((element:any) => element.name === value);

    if(translation!== undefined && this.language === 'EN') {
      return translation.englich;
    } else if (translation !== undefined && this.language === 'FR') {
      return translation.francais;
    } else {
      return value;
    }
    }));
   }

   getObj(): Array<translationTags> {
    return this.translatObjecte;
   }

   getAllTranslations(): Observable<Array<translationTags>> {
    return this.http.get(this.url).pipe(map((translations: any) => {
      let obj = new Array<translationTags>();

      translations.forEach((element: any) => {
        obj.push({name:element.name, englich:element.englich, francais:element.francais});
      });

      return obj;
    }))
   }
}
interface translationTags {
  name: string;
  englich: string;
  francais: string;
}
