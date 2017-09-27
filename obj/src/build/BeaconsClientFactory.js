"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const BeaconsDirectClientV1_1 = require("../version1/BeaconsDirectClientV1");
const BeaconsHttpClientV1_1 = require("../version1/BeaconsHttpClientV1");
const BeaconsLambdaClientV1_1 = require("../version1/BeaconsLambdaClientV1");
const BeaconsNullClientV1_1 = require("../version1/BeaconsNullClientV1");
class BeaconsClientFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(BeaconsClientFactory.NullClientV1Descriptor, BeaconsNullClientV1_1.BeaconsNullClientV1);
        this.registerAsType(BeaconsClientFactory.DirectClientV1Descriptor, BeaconsDirectClientV1_1.BeaconsDirectClientV1);
        this.registerAsType(BeaconsClientFactory.HttpClientV1Descriptor, BeaconsHttpClientV1_1.BeaconsHttpClientV1);
        this.registerAsType(BeaconsClientFactory.LambdaClientV1Descriptor, BeaconsLambdaClientV1_1.BeaconsLambdaClientV1);
    }
}
BeaconsClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('tracker-services-beacons', 'client', 'null', '*', '1.0');
BeaconsClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('tracker-services-beacons', 'client', 'direct', '*', '1.0');
BeaconsClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('tracker-services-beacons', 'client', 'http', '*', '1.0');
BeaconsClientFactory.LambdaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('tracker-services-beacons', 'client', 'lambda', '*', '1.0');
exports.BeaconsClientFactory = BeaconsClientFactory;
//# sourceMappingURL=BeaconsClientFactory.js.map