import { PluginObject } from 'vue';
import Vue from 'vue';
import { ImageLazyLoadDirective } from './directives';

export class LazyLoadPlugin implements PluginObject<unknown> {
  install = (app: typeof Vue): void => {
    app.directive('img-lazy-load', new ImageLazyLoadDirective());
  };
}
