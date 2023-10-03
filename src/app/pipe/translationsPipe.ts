import {Pipe, PipeTransform} from '@angular/core';
import * as translations from 'src/assets/translationsfile.json';
import { FranchinettranslationService } from '../services/franchinettranslations/franchinettranslation.service';
import { TranslationTags } from '../interfaces/tanslationtags';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslationPipe implements PipeTransform {
  data: Array<TranslationTags> = translations as unknown as Array<TranslationTags>;
  language: string = 'EN';
  languagesBuffer: Array<TranslationTags> = new Array<TranslationTags>();
  constructor(private translationService:FranchinettranslationService) {
    for(let i=0; i<this.data.length; i++) {
      this.languagesBuffer.push({Name: this.data[i].Name, English: this.data[i].English, French:this.data[i].French});
    }
  }
  transform(value: any) {
    console.log(this.translationService.language);
    let dataConvert: Array<any> = JSON.parse(JSON.stringify(this.data));
    console.log(this.languagesBuffer);
    let translation = this.languagesBuffer.find((element:TranslationTags) => element.Name === value);
    this.language = this.translationService.language;
    console.log(translation);


    if(translation!== undefined && this.language === 'EN') {
      return translation.English;
    } else if (translation !== undefined && this.language === 'FR') {
      return translation.French;
    } else {
      return value;
    }

  }
}

