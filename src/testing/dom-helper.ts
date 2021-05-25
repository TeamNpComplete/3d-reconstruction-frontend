import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

export class DOMHelper<T> {

    constructor(private fixture: ComponentFixture<T>) {  }

    clickButton(text: string) {
        const elements = this.fixture.debugElement.queryAll(By.css('button'));
        (elements.filter( element => element.nativeElement.textContent === text)[0]).nativeElement.click();
    }
}