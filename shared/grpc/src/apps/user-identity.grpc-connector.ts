import { GrpcOptions, Transport } from "@nestjs/microservices";
import { UserIdentityConfig } from "@shared/config";
import path from "path";

export const UserIdentityGRPCConnector: GrpcOptions = {
    transport: Transport.GRPC,
    options: {
      package: UserIdentityConfig.grpc.package,
      url: `localhost:${UserIdentityConfig.grpc.port}`,
      protoPath: path.join(process.cwd(), 'proto', `${UserIdentityConfig.namepsace}.proto`,),
    }
  }