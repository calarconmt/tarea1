// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { IServerParams } from '../interfaces/serverparams';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServerConfigService {

//   public config: {[key: string]: IServerParams};
//   public current: IServerParams;

//   constructor() {
//     this.config = {
//       onemine: {
//         host: environment.serverHost,
//         port: environment.serverPort
//       },
//     };
//     this.current = this.config['onemine'];
//   }
//   public getCurrent() {
//     return this.current;
//   }

//   public setDefaultConfig(value: string) {
//     this.current = this.config[value];
//   }
// }
