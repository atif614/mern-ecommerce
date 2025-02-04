class APIFunctionality {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword?{
            name:{
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        }:{}
        console.log(keyword);
        this.query=this.query.find({...keyword});
        // console.log(this.query);
        // console.log(this);
        return this;
    }
}
export default APIFunctionality;