import {makeAutoObservable} from 'mobx';

export default class PostStore {
    constructor(){
        this._category = []
        this._posts = [] 
        this._page = 1     
        this._totalCount = 0
        this._limit = 10
        makeAutoObservable(this)
    }

    setCategoru(category){
        this._category = category
    }

    setPosts(post){
        this._posts = post
    }

    setPage(page){
        this._page = page
    }
    setTotalCount(totalCount){
        this._totalCount = totalCount
    }
    setLimit(limit){
        this._limit = limit
    }

    get category(){
        return  this._category
    }

    get posts(){
        return this._posts
    }

    get page(){
        return  this._page
    }

    get totalCount(){
        return  this._totalCount
    }

    get limit(){
        return this._limit
    }
}