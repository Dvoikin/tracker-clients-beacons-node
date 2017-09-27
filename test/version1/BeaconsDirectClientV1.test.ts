let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;


import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';

import { ConfigParams } from 'pip-services-commons-node';
import { BeaconsMemoryPersistence } from 'tracker-services-beacons-node';
import { BeaconsController } from 'tracker-services-beacons-node';
import { References } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';

import { BeaconV1 } from "../../src/version1/BeaconV1";
import { BeaconsDirectClientV1 } from "../../src/version1/BeaconsDirectClientV1";
import { BeaconsClientFixtureV1 } from './BeaconsClientFixtureV1';

suite('BeaconsController', () => {
    let client: BeaconsDirectClientV1;
    let fixture: BeaconsClientFixtureV1;
    let persistence: BeaconsMemoryPersistence;
    let controller: BeaconsController;

    suiteSetup((done) => {
        persistence = new BeaconsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new BeaconsController();
        client = new BeaconsDirectClientV1();

        let references = References.fromTuples(
            new Descriptor('tracker-services-beacons', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('tracker-services-beacons', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('tracker-services-beacons', 'client', 'direct', 'default', '1.0'), client            
        );

        controller.setReferences(references);
        client.setReferences(references);

        fixture = new BeaconsClientFixtureV1(client);
        client.open(null, done);
    });

    suiteTeardown((done) => {
        client.close(null, done);
    });

    setup((done) => {
        persistence.clear(null, done);
    });

    test('CRUD operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Calculate position', (done) => {
        fixture.testCalculatePosition(done);
    });
});