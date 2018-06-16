console.log('hello');
const getPosts = () => {
     return window.fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>console.log(posts))
}