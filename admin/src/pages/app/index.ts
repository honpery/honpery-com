import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootloader, createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import * as pages from './pages';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: Object.values(pages),
    bootstrap: [pages.App],
})
export class AppModule {

    constructor(public appRef: ApplicationRef) { }

    public hmrOnInit(store) {

        if (!store || !store.state) return;

        /*tslint:disable*/
        console.log('HMR store', store);
        console.log('store.state.data:', store.state.data);
        /*tslint:enable*/

        if ('restoreInputValues' in store) store.restoreInputValues();

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;

    }
    public hmrOnDestroy(store) {

        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);

        store.disposeOldHosts = createNewHosts(cmpLocation);

        store.state = { data: 'yolo' };

        store.restoreInputValues = createInputTransfer();

        removeNgStyles();
    }
    public hmrAfterDestroy(store) {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
