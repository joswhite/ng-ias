import { module, bootstrap } from 'angular';
// Config
import config from './config/config';
import routes from './config/routes';
// Layout Components
import ApplicationComponent from './components/application/application.component';
import ComponentsComponent from './components/components/components.component';
import ProjectComponent from './components/project/project.component';
// Docs Components
import AppBarComponent from './components/docs/app-bar/app-bar.component';
import AvatarComponent from './components/docs/avatar/avatar.component';
import ButtonComponent from './components/docs/button/button.component';
import DialogComponent from './components/docs/dialog/dialog.component';
import HeaderComponent from './components/docs/header/header.component';
import IconComponent from './components/docs/icon/icon.component';
import IconButtonComponent from './components/docs/icon-button/icon-button.component';
import InputComponent from './components/docs/input/input.component';
import LinkComponent from './components/docs/link/link.component';
import ListComponent from './components/docs/list/list.component';
import MenuComponent from './components/docs/menu/menu.component';
import NavComponent from './components/docs/nav/nav.component';
import PanelComponent from './components/docs/panel/panel.component';
import SearchBoxComponent from './components/docs/search-box/search-box.component';
import SideNavComponent from './components/docs/side-nav/side-nav.component';
import TableComponent from './components/docs/table/table.component';
import TileComponent from './components/docs/tile/tile.component';
import TileGridComponent from './components/docs/tile-grid/tile-grid.component';


module('app', [
    'ng-mfux',
    'ui.router'
])
    .config(routes)
    .config([
        '$qProvider',
        function($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }
    ])
    .constant('config', config)
    // Layout Components
    .component('application', ApplicationComponent)
    .component('components', ComponentsComponent)
    .component('project', ProjectComponent)
    // Docs Components
    .component('appBarDocumentation', AppBarComponent)
    .component('avatarDocumentation', AvatarComponent)
    .component('buttonDocumentation', ButtonComponent)
    .component('dialogDocumentation', DialogComponent)
    .component('headerDocumentation', HeaderComponent)
    .component('iconDocumentation', IconComponent)
    .component('iconButtonDocumentation', IconButtonComponent)
    .component('inputDocumentation', InputComponent)
    .component('linkDocumentation', LinkComponent)
    .component('listDocumentation', ListComponent)
    .component('menuDocumentation', MenuComponent)
    .component('navDocumentation', NavComponent)
    .component('panelDocumentation', PanelComponent)
    .component('searchBoxDocumentation', SearchBoxComponent)
    .component('sideNavDocumentation', SideNavComponent)
    .component('tableDocumentation', TableComponent)
    .component('tileDocumentation', TileComponent)
    .component('tileGridDocumentation', TileGridComponent);

bootstrap(document, [ 'app' ]);