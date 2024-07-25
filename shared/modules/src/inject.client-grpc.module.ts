import { ClientsModule, GrpcOptions } from "@nestjs/microservices";


export const injectClientGrpcModule = (connectors: GrpcOptions[]) => {
    return ClientsModule.register(connectors.map((connector) => ({
        name: connector.options.package as string,
        transport: connector.transport,
        options: {
            ...connector.options
        },
    }))
    )
}