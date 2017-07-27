import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader, hmrModule } from '@angularclass/hmr';
import { AppModule } from './pages';

function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule)
        .then((ngModuleRef: any) => {
            return hmrModule(ngModuleRef, module);
        });
}

bootloader(main);
