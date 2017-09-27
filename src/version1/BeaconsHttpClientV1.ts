
import { ConfigParams } from "pip-services-commons-node";
import { FilterParams } from "pip-services-commons-node";
import { PagingParams } from "pip-services-commons-node";
import { Descriptor } from "pip-services-commons-node";
import { DataPage } from "pip-services-commons-node";
import { CommandableHttpClient } from "pip-services-net-node";

import { BeaconV1 } from "./BeaconV1";
import { IBeaconsClientV1 } from './IBeaconsClientV1';

export class BeaconsHttpClientV1 extends CommandableHttpClient implements IBeaconsClientV1 {
    public constructor(config?: any) {
        super('beacons');
        if (config != null) this.configure(ConfigParams.fromValue(config))
    }

    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<BeaconV1>) => void): void {
        this.callCommand('get_beacons', correlationId, { filter: filter, paging: paging }, callback);
    }

    public getBeaconById(correlationId: string, id: string, callback: (err: any, item: BeaconV1) => void): void {
        this.callCommand('get_beacon_by_id', correlationId, { beacon_id : id }, callback);
    }

    public calculatePosition(correlationId: string, siteId: string, udis: string[], callback: (err: any, position: any) => void): void {
        this.callCommand('calculate_position', correlationId, {site_id: siteId, udis: udis}, callback);
    }

    public createBeacon(correlationId: string, item: BeaconV1, callback: (err: any, item: BeaconV1) => void): void {
        this.callCommand('create_beacon', correlationId, { beacon: item }, callback)
    }

    public updateBeacon(correlationId: string, item: BeaconV1, callback: (err: any, item: BeaconV1) => void): void {
        this.callCommand('update_beacon', correlationId, { beacon: item }, callback)
    }

    public deleteBeaconById(correlationId: string, id: string, callback: (err: any, item: BeaconV1) => void): void {
        this.callCommand('delete_beacon_by_id', correlationId, { beacon_id: id }, callback)
    }
}