import Service from '@ember/service';

export default class MyService extends Service {
  check() {
    return 'ok!';
  }
}

declare module '@ember/service' {
  interface Registry {
    'my-service': MyService
  }
}
