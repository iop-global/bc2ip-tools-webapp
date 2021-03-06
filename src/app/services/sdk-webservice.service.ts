import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SDKWebService {
  constructor(readonly http: HttpClient) {}

  beforeProofExists(id: string) {
    return this.http.get<boolean>(
      `${environment.endpoints.webService}/before-proof/exists/${id}`
    );
  }

  hasRightAt(did: string, publicKey: string, atHeight?: number) {
    return this.http.get<boolean>(
      `${
        environment.endpoints.webService
      }/dids/${did}/keys/${publicKey}/hasRight${
        !!atHeight ? `/${atHeight}` : ''
      }`
    );
  }
}
