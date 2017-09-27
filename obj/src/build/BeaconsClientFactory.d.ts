import { Descriptor } from "pip-services-commons-node";
import { Factory } from "pip-services-commons-node";
export declare class BeaconsClientFactory extends Factory {
    static NullClientV1Descriptor: Descriptor;
    static DirectClientV1Descriptor: Descriptor;
    static HttpClientV1Descriptor: Descriptor;
    static LambdaClientV1Descriptor: Descriptor;
    constructor();
}
