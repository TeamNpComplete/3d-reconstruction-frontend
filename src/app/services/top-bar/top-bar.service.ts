import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class TopBarService {
    loginButtonClicked: Subject<boolean> = new Subject();

    public sendLoginClicked(value: boolean) {
        this.loginButtonClicked.next(value);
    }

    public getLoginButtonClicked() {
        return this.loginButtonClicked;
    }
}