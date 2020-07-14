import { Injectable } from '@angular/core';
import { NgxConfigureService } from 'ngx-configure';
import { HttpClient } from '@angular/common/http';
import { Instrument } from 'src/app/shared/models/Instrument.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor(private configService: NgxConfigureService,
              private httpClient: HttpClient) { }

  public get(): Observable<Array<Instrument>> {
    const url = this.configService.config.api + "get";
    return this.httpClient.get<Array<Instrument>>(url);
  }

  public async add(name: string, symbol: string, type: string): Promise<any> {
    const url = this.configService.config.api + "add";
    return await this.httpClient.post<Array<Instrument>>(url, {
      name,
      symbol,
      type 
    }).toPromise();
  }

  public async delete(id: number): Promise<any> {
    const url = this.configService.config.api + "delete";
    return await this.httpClient.post<Array<Instrument>>(url, {
      instrumentId: id 
    }).toPromise();
  }
}
