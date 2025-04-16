import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter.component.html',
    styles: [`
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterComponent {
    counter = 10;
    counterSignal = signal(10)



    increaseBy(value: number) {
        this.counter += value;
        // this.counterSignal.set(this.counterSignal() + value)
        this.counterSignal.update(current => current + value)
    }

    decreaseBy(value: number) {
        this.counter -= value;
    }

    reset() {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}