import Route from "@ember/routing/route";
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route.extend({
  myService: service('my-service')
}) {
  model() {
    return { compiled: true };
  }

  activate(this: ApplicationRoute) {
    console.log(this.get('myService').check());
  }
}
