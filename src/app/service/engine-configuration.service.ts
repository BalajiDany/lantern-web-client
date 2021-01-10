import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable()
export class EngineConfigurationService {

    private apiEndpoint = environment.baseUrl;

    constructor(
        private httpClient: HttpClient,
    ) {
    }

    public resetLocationBasedEngines(): Observable<void> {
        return this.httpClient
            .get<void>(this.apiEndpoint + '/api/v1/config/reset/locationBasedEngines');
    }

}
