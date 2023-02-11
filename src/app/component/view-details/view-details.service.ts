import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
// import * as internal from 'stream';

@Injectable({
  providedIn: 'root'
})
export class ViewDetailsService {

  filteredURI: any = "http://localhost:8181/api/get-filtered-jobs/";
  URI: any = "http://localhost:8181/api/get-jobs/";

  constructor(private http: HttpClient) { }

  public getData(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get(this.URI+pageNumber+"/"+pageSize);
  }


  getFilteredDataForNameStatusLocationJobType(name: string, statusArray: string[], locationArray: string[], jobType: string[],
    pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyNamePresent": true,
      "companyName": name,
      "iscompanyStatusPresent": true,
      "status": statusArray,
      "iscompanyLocationPresent": true,
      "location": locationArray,
      "iscompanyJobTypePresent": true,
      "jobType": jobType
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForNameStatusLocation(name: string, statusArray: string[], locationArray: string[], 
    pageNumber: number, pageSize: number) :Observable<any> {
    const body = {
      "iscompanyNamePresent": true,
      "companyName": name,
      "iscompanyStatusPresent": true,
      "status": statusArray,
      "iscompanyLocationPresent": true,
      "location": locationArray,
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForNameStatusJobType(name: string, statusArray: string[], jobType: string[],
    pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyNamePresent": true,
      "companyName": name,
      "iscompanyStatusPresent": true,
      "status": statusArray,
      "iscompanyJobTypePresent": true,
      "jobType": jobType
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForNameLocationJobType(name: string, locationArray: string[], jobType: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyNamePresent": true,
      "companyName": name,
      "iscompanyLocationPresent": true,
      "location": locationArray,
      "iscompanyJobTypePresent": true,
      "jobType": jobType
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForStatusLocationJobType(statusArray: string[], locationArray: string[], jobType: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyStatusPresent": true,
      "status": statusArray,
      "iscompanyLocationPresent": true,
      "location": locationArray,
      "iscompanyJobTypePresent": true,
      "jobType": jobType
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForNameStatus(name: string, statusArray: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyNamePresent": true,
      "companyName": name,
      "iscompanyStatusPresent": true,
      "status": statusArray
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForLocationJobType(locationArray: string[], jobType: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyLocationPresent": true,
      "location": locationArray,
      "iscompanyJobTypePresent": true,
      "jobType": jobType
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForNameJobType(name: string, jobType: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyNamePresent": true,
      "companyName": name,
      "iscompanyJobTypePresent": true,
      "jobType": jobType
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForNameLocation(name: string, locationArray: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyNamePresent": true,
      "companyName": name,
      "iscompanyLocationPresent": true,
      "location": locationArray
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForStatusJobType(statusArray: string[], jobType: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyStatusPresent": true,
      "status": statusArray,
      "iscompanyJobTypePresent": true,
      "jobType": jobType
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForStatusLocation(statusArray: string[], locationArray: string[],
    pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyStatusPresent": true,
      "status": statusArray,
      "iscompanyLocationPresent": true,
      "location": locationArray
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }
// ============================================================================================================
  getFilteredDataForName(name: string, pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyNamePresent": true,
      "companyName": name
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForStatus(statusArray: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyStatusPresent": true,
      "status": statusArray
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForLocation(locationArray: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyLocationPresent": true,
      "location": locationArray
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

  getFilteredDataForJobType(jobType: string[], pageNumber: number, pageSize: number): Observable<any>{
    const body = {
      "iscompanyJobTypePresent": true,
      "jobType": jobType
    }
    return this.http.post(this.filteredURI+pageNumber+"/"+pageSize, body);
  }

}
