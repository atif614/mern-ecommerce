class APIFunctionality {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {}
        console.log(keyword);
        this.query = this.query.find({ ...keyword });
        // console.log(this.query);
        // console.log(this);
        return this;
    }
    filter() {
        const queryCopy = { ...this.queryStr };
        console.log(queryCopy);
        const removeFields = ["keyword", "page", "limit"];
        removeFields.forEach(key => delete queryCopy[key]);
        this.query = this.query.find(queryCopy);
        return this;
    }
    pagination(resultsPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        console.log(currentPage);
        const skip = resultsPerPage*(currentPage-1);
        console.log(skip)
        this.query=this.query.limit(resultsPerPage).skip(skip);
        return this;
    }
}
export default APIFunctionality;