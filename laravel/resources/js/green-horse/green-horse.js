import $ from 'jquery';

let Posts = function () {

    let that = this;
    that.apiUri = 'http://localhost:8000/';

    that.loadPosts = function () {
        const uri = that.apiUri + 'api/posts/';
        $.get(uri, function (data) {
            console.log('loading posts from: ', uri);
        });
    };
};

let posts = new Posts();
posts.loadPosts();
