import {observable , action , useStrict} from 'mobx'
useStrict(true)
export default class ArticleStore {
    @observable list = []
    @observable page = 1
    @observable limit = 10
    @observable total = 0

    @action setList (array){
        this.list = array
    }
    @action setPage (page){
        this.page = page
    }
    @action setTotal (data){
        this.total = data
    }
}