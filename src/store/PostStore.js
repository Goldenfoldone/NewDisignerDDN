import {makeAutoObservable} from 'mobx';

export default class PostStore {
    constructor(){
        this._category = []
        this._posts = []        
        makeAutoObservable(this)
    }

    setCategoru(category){
        this._category = category
    }

    setPosts(post){
        this._posts = post
    }

    get category(){
        return  this._category
    }

    get posts(){
        return this._posts
    }
}