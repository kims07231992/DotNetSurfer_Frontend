import { Injectable } from '@angular/core';
import { Status } from '../../../models/status';
import { JWTGatewayService } from '../../shared/jwtgateway.service';

@Injectable()
export class StatusService {

    constructor(private jwtGateway: JWTGatewayService) {

    }

    getStatuses() {
        return this.jwtGateway.get('api/statuses');
    }
} 
