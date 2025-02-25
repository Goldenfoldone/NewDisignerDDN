import {makeAutoObservable} from 'mobx';

export default class EventsStore {
    constructor(){
        this._events = []        
        makeAutoObservable(this)
    }

    
    setPosts(post){
        this._events = post
    }

    get posts(){
        return this._events
    }
}