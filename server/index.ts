import { Server, ServerCredentials } from '@grpc/grpc-js';
import { AuthServiceService } from '../protos/auth';
import { login } from "./login"

const server = new Server();
server.addService(AuthServiceService, { login: login }); // login 은 이후에 정의할 예정입니다.
server.bindAsync('localhost:8080', ServerCredentials.createInsecure(), () => {
  server.start();
});