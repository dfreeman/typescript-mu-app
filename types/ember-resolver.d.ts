declare module 'ember-resolver/resolvers/fallback' {
  import Resolver from '@ember/application/resolver';
  export default class extends Resolver {}
}

declare module 'ember-resolver/ember-config' {
  export default function(modulePrefix: string): {};
}
