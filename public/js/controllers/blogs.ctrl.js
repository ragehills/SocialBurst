angular
    .module('social-burst')
    .controller('BlogsController', BlogsController)

function BlogsController (Blog, Auth, $stateParams, $state, $http) {
  var self = this;    

    self.all = []

    self.createBlog = function() {
        Blog.create({
                uid: Auth.$getAuth().uid,
                blog: {
                    title: self.newBlog.title,
                    url: self.newBlog.url,
                    post: self.newBlog.post
                }
        }).then(function (blog) {
            console.log(blog)
            self.newBlog = {}
            $state.go('my-blogs')
        })
        .catch(function (err) {
            self.err = err.err
            resetBlog()
        })
    }

    self.showBlog = function() {
        Blog.getAll()
        .then(function(res) {
            self.all = res.data.blogs
            // console.log(self.all)
        })
        .catch(function(err) {
            console.log(err)
            self.err = err.err
        })
    }

    self.indexBlogs = function () {
        var uid = Auth.$getAuth().uid
        Blog.indexBlogs(uid)
        .then(function(res) {
            console.log(res)
            self.all = res.data.blog
        })
        .catch(function (err) {
            console.log(err)
        })
        
    }

    function resetBlog () {
        self.title = ""
        self.url = ""
        self.post = ""
    }


}