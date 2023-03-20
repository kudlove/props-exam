import  {observable , action, makeObservable} from 'mobx';

class CounterStore{

    constructor() {
        makeObservable(this);
    }
    @observable
    _count =5;
    @observable
    _log ="console_log";

    get count(){
        return this._count
    }

    @action makeZero = () => {
        this._count = 0;
    };

    @action increment() {
        this._count++;
        console.log(this._count);
    }

    @action
    decrement(){
        this._count --;
        console.log(this._count);
    }

}

export default new CounterStore();