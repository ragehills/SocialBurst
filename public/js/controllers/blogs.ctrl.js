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
            // console.log(blog)
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
            // console.log(res.data)
            self.all = res.data
            // console.log(self.all)
        })
        .catch(function(err) {
            console.log(err)
            self.err = err.err
        })
    }

    self.indexBlogs = function () {
        console.log("tis working")
        var uid = Auth.$getAuth().uid
        Blog.getMyBlogs(uid)
            .then(function(res) {
                // console.log(res.data)
                self.all = res.data
            })
            .catch(function (err) {
                console.log(err)
            })
        
    }

    self.showOneBlog = function () {
        console.log("I can show one for you")
    }

    function resetBlog () {
        self.title = ""
        self.url = ""
        self.post = ""
    }


}