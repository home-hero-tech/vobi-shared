# Vobi Shared

This package is a utility to shared files that needs to be used in our microsservices.

# Folders

The folders are organized by project and its resources. Every project folder must be included in the "files" from `package.json`. This is necessary to make only important files exportable.

Resources that are not from a specific project, as functions and helpers, can be saved in `commom` folder.

## gRPC

The gRPC folder must contain the ProtoBuffers compiled. The script to compile must be in the NPM script. We use the [grpc_tools_node_protoc_ts](https://www.npmjs.com/package/grpc_tools_node_protoc_ts) package to build with the following parameters: 

```
npx grpc_tools_node_protoc --js_out=import_style=commonjs:FOLDER_OUT --ts_out=FOLDER_OUT --grpc_out=grpc_js:FOLDER_OUT -I=FOLDER_IN FOLDER_IN/*.proto`
```
*FOLDER_OUT* is the proto files path (`proto/<service-name>`) and *FOLDER_IN* is the compiled path (`<service-name>/grpc`).

IMPORTANT: Use Node 20 to compile!

Every proto file generate two outputs: a *_pb.js file containing the messages (using [google-protobuff](https://www.npmjs.com/package/google-protobuf) format) and a *_grpc_pb.js file containing the clients and services (using [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) format). If you use TypeScript, we will generate more two files implementing the types from theses files.

### Recommendations

* Avoid to put protobuffers files in other projects (except in specific cases, for example, when your service connects with a gRPC external to Vobi and only that project needs to make this communicate). If you are creating a service that will be consumed by other internal Vobi services, <b>ALWAYS</b> place the protobuffer here and only here.

* Avoid to load *.proto files directly into your application (that's why the protos files are separated in a non-exportable folder in the package), otherwise you will need to unnecessarily install dependencies in your project to open them. The compiled protobuffers are ready to use and are all you need to implement services and clients. So, create a new project, add a compile command in package.json and enjoy!

## Other things

Besides the protobuffer compiled, you can share everything in this packages, as ORM models, enums, and so on.