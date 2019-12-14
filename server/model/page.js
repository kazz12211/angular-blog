class Page {
    constructor(page, total, pageSize, rows, query, order) {
        this.page = page;
        this.total = total;
        this.pageSize = pageSize;
        this.rows = rows;
        this.query = query;
        this.order = order;
        this.pages = Math.floor(total/pageSize);
        if(total % pageSize > 0) {
            this.pages++;
        }
        this.next = (this.page < this.pages - 1);
        this.prev = (this.page > 0);
    }
}

module.exports = Page;