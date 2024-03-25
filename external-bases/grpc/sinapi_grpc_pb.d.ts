// package: 
// file: sinapi.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as sinapi_pb from "./sinapi_pb";
import * as generic_pb from "./generic_pb";

interface ISinapiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAll: ISinapiService_IgetAll;
    getMonthsAvailable: ISinapiService_IgetMonthsAvailable;
}

interface ISinapiService_IgetAll extends grpc.MethodDefinition<sinapi_pb.GetAllRequest, sinapi_pb.GetAllResponse> {
    path: "/Sinapi/getAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sinapi_pb.GetAllRequest>;
    requestDeserialize: grpc.deserialize<sinapi_pb.GetAllRequest>;
    responseSerialize: grpc.serialize<sinapi_pb.GetAllResponse>;
    responseDeserialize: grpc.deserialize<sinapi_pb.GetAllResponse>;
}
interface ISinapiService_IgetMonthsAvailable extends grpc.MethodDefinition<generic_pb.Void, sinapi_pb.GetSinapiMonthsAvailableResponse> {
    path: "/Sinapi/getMonthsAvailable";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<generic_pb.Void>;
    requestDeserialize: grpc.deserialize<generic_pb.Void>;
    responseSerialize: grpc.serialize<sinapi_pb.GetSinapiMonthsAvailableResponse>;
    responseDeserialize: grpc.deserialize<sinapi_pb.GetSinapiMonthsAvailableResponse>;
}

export const SinapiService: ISinapiService;

export interface ISinapiServer {
    getAll: grpc.handleUnaryCall<sinapi_pb.GetAllRequest, sinapi_pb.GetAllResponse>;
    getMonthsAvailable: grpc.handleUnaryCall<generic_pb.Void, sinapi_pb.GetSinapiMonthsAvailableResponse>;
}

export interface ISinapiClient {
    getAll(request: sinapi_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    getAll(request: sinapi_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    getAll(request: sinapi_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    getMonthsAvailable(request: generic_pb.Void, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetSinapiMonthsAvailableResponse) => void): grpc.ClientUnaryCall;
    getMonthsAvailable(request: generic_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetSinapiMonthsAvailableResponse) => void): grpc.ClientUnaryCall;
    getMonthsAvailable(request: generic_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetSinapiMonthsAvailableResponse) => void): grpc.ClientUnaryCall;
}

export class SinapiClient extends grpc.Client implements ISinapiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAll(request: sinapi_pb.GetAllRequest, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: sinapi_pb.GetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    public getAll(request: sinapi_pb.GetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetAllResponse) => void): grpc.ClientUnaryCall;
    public getMonthsAvailable(request: generic_pb.Void, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetSinapiMonthsAvailableResponse) => void): grpc.ClientUnaryCall;
    public getMonthsAvailable(request: generic_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetSinapiMonthsAvailableResponse) => void): grpc.ClientUnaryCall;
    public getMonthsAvailable(request: generic_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sinapi_pb.GetSinapiMonthsAvailableResponse) => void): grpc.ClientUnaryCall;
}
