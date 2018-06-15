import { Component } from '@nestjs/common';
import {databaseConnection} from '../main';
import {GenericService} from './generic.service';

@Component()
export class BusinessRequestService extends GenericService<BusinessRequests> implements IService<BusinessRequests> {
    constructor() {
        super();
    }
    
    initializeRepository() {
        this.repository = databaseConnection.getRepository(BusinessRequests);
    }
    
}