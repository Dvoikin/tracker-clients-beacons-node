import { FilterParams } from "pip-services-commons-node";
import { PagingParams } from "pip-services-commons-node";
import { Descriptor } from "pip-services-commons-node";
import { DataPage } from "pip-services-commons-node";
import { DirectClient } from "pip-services-net-node";

import { BeaconV1 } from "./BeaconV1";
import { IBeaconsClientV1 } from './IBeaconsClientV1';

export class BeaconsDirectClientV1 extends DirectClient<any> implements IBeaconsClientV1 {
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor('tracker-services-beacons', 'controller', '*', '*', '*'));
    }

    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<BeaconV1>) => void): void {
        let timing = this.instrument(correlationId, 'beacons.get_beacons');
        this._controller.getBeacons(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        })
    }

    public getBeaconById(correlationId: string, id: string, callback: (err: any, item: BeaconV1) => void): void {
        let timing = this.instrument(correlationId, 'beacons.get_beacon_by_id');
        this._controller.getBeaconById(correlationId, id, (err, item) => {
            timing.endTiming();
            callback(err, item);
        })
    }

    public calculatePosition(correlationId: string, siteId: string, udis: string[], callback: (err: any, position: any) => void): void {
        let timing = this.instrument(correlationId, 'beacons.calculate_position');
        this._controller.calculatePosition(correlationId, siteId, udis, (err, position) => {
            timing.endTiming();
            callback(err, position);
        })
    }

    public createBeacon(correlationId: string, item: BeaconV1, callback: (err: any, item: BeaconV1) => void): void {
        let timing = this.instrument(correlationId, 'beacons.create_beacon');
        this._controller.createBeacon(correlationId, item, (err, item) => {
            timing.endTiming();
            callback(err, item);
        })
    }

    public updateBeacon(correlationId: string, item: BeaconV1, callback: (err: any, item: BeaconV1) => void): void {
        let timing = this.instrument(correlationId, 'beacons.update_beacon');
        this._controller.updateBeacon(correlationId, item, (err, item) => {
            timing.endTiming();
            callback(err, item);
        })
    }

    public deleteBeaconById(correlationId: string, id: string, callback: (err: any, item: BeaconV1) => void): void {
        let timing = this.instrument(correlationId, 'beacons.delete_beacon_by_id');
        this._controller.deleteBeaconById(correlationId, id, (err, item) => {
            timing.endTiming();
            if (callback) callback(err, item);
        })
    }
}