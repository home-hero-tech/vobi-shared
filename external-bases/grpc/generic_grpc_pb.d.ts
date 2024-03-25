// package: 
// file: generic.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as generic_pb from "./generic_pb";

interface IGenericService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addToRefurbish: IGenericService_IaddToRefurbish;
    addToLibrary: IGenericService_IaddToLibrary;
}

interface IGenericService_IaddToRefurbish extends grpc.MethodDefinition<generic_pb.AddToRefurbishRequest, generic_pb.Void> {
    path: "/Generic/addToRefurbish";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<generic_pb.AddToRefurbishRequest>;
    requestDeserialize: grpc.deserialize<generic_pb.AddToRefurbishRequest>;
    responseSerialize: grpc.serialize<generic_pb.Void>;
    responseDeserialize: grpc.deserialize<generic_pb.Void>;
}
interface IGenericService_IaddToLibrary extends grpc.MethodDefinition<generic_pb.AddToLibraryRequest, generic_pb.Void> {
    path: "/Generic/addToLibrary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<generic_pb.AddToLibraryRequest>;
    requestDeserialize: grpc.deserialize<generic_pb.AddToLibraryRequest>;
    responseSerialize: grpc.serialize<generic_pb.Void>;
    responseDeserialize: grpc.deserialize<generic_pb.Void>;
}

export const GenericService: IGenericService;

export interface IGenericServer {
    addToRefurbish: grpc.handleUnaryCall<generic_pb.AddToRefurbishRequest, generic_pb.Void>;
    addToLibrary: grpc.handleUnaryCall<generic_pb.AddToLibraryRequest, generic_pb.Void>;
}

export interface IGenericClient {
    addToRefurbish(request: generic_pb.AddToRefurbishRequest, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    addToRefurbish(request: generic_pb.AddToRefurbishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    addToRefurbish(request: generic_pb.AddToRefurbishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    addToLibrary(request: generic_pb.AddToLibraryRequest, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    addToLibrary(request: generic_pb.AddToLibraryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    addToLibrary(request: generic_pb.AddToLibraryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
}

export class GenericClient extends grpc.Client implements IGenericClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addToRefurbish(request: generic_pb.AddToRefurbishRequest, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    public addToRefurbish(request: generic_pb.AddToRefurbishRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    public addToRefurbish(request: generic_pb.AddToRefurbishRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    public addToLibrary(request: generic_pb.AddToLibraryRequest, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    public addToLibrary(request: generic_pb.AddToLibraryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
    public addToLibrary(request: generic_pb.AddToLibraryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: generic_pb.Void) => void): grpc.ClientUnaryCall;
}
