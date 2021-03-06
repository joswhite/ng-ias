import * as angular from 'angular';
import { IAugmentedJQuery, IAttributes} from 'angular';

export interface IContentTemplateFunction {
    ($element: IAugmentedJQuery, $attrs?: IAttributes): string;
}

export function Component(options: {
    bindings?: any,
    bindToController?: boolean,
    controllerAs?: string,
    template?: (string | any[] | IContentTemplateFunction),
    templateUrl?: string,
    transclude?: boolean,
    stylesheetUrl?: string
}) {
    return (controller: Function) => angular.extend(options, { controller: controller });
}
