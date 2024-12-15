new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        postCategory: '',
        groupCategory: '',
        posts: ['貼文 1', '貼文 2', '貼文 3', '貼文 4', '貼文 5', '貼文 6'],
        groups: ['揪團 1', '揪團 2', '揪團 3', '揪團 4', '揪團 5', '揪團 6'],
    },
    methods: {
        search() {
            alert(`搜尋內容：${this.searchQuery}`);
        },
        goTo(page) {
            alert(`導向至 ${page} 頁面`);
        },
        prevPage() {
            alert('上一頁');
        },
        nextPage() {
            alert('下一頁');
        }
    }
});
