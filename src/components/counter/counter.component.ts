export default {
  controller: class Counter {
    private count = 0;

    private yesButton = '<div color="red">Some very bad things have happened. I don\'t know what, but it seems like this is the end for us.</div>';

    $onInit() {
      this.count = 1;
    }

    increment() {
      this.count += 1;
    }

    decrement() {
      this.count -= 1;
    }
  },
  template() {
    return `
      <div>
          <input ng-model="$ctrl.count"></div>
          <button ng-click="$ctrl.increment()">+</button>
          <button ng-click="$ctrl.decrement()">-</button>
          <div ng-bind-html="$ctrl.yesButton"></div>
      </div>
    `;
  }
}
