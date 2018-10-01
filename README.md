# GitHub Library

A small library for personal use.

* Build the package:

```bash
npm run-script build
```

* Testing the package:

```bash
npm run-script test
```

## API

### Github.addComment( target, comment ) ⇒ `Undefined`

| Param     | Type      | Default       | Description       |
| --------- | --------- | ------------- | ----------------- |
| `target`  | `String`  | `document`    | Selector object   |
| `comment` | `Object`  |               | Comment data      |

Adding a comment to a template.

Example:

```javascript
window.addEventListener("load", function () {
  Github.getComments("octocat/Hello-World", 1,
    function (error, comments) {
      if (error) { throw new Error(error); }
      // code
    });
});
```

### Github.getComments( repos, issue, callback ) ⇒ `Array`

| Param         | Type          | Default   | Description       |
| ------------- | ------------- | --------- | ----------------- |
| `repos`       | `String`      |           | Repository name   |
| `issue`       | `Number`      |           | Issue number      |
| `callback`    | `Function`    |           | Function handler  |

Getting a list of comments.

Example:

```html
<!-- Template -->
<script type="text/html" id="template">
  <div class="panel panel-default">
    <!-- Title -->
    <div class="panel-heading">
      <img class="github-avatar img-rounded" src="{{= it.avatar }}">
      <a href="{{= it.url }}"><strong>{{= it.user }}</strong></a>
      <span>commented on {{= it.date }}</span>
    </div>
    <!-- Content -->
    <div class="panel-body">{{= it.content }}</div>
  </div>
</script>

<!-- Script loading comments -->
<script defer type="text/javascript">
  window.addEventListener("load", function () {
    Github.getComments("octocat/Hello-World", 1,
      function (error, comments) {
        if (error) { throw new Error(error); }
        comments.forEach(function (comment) {
          Github.addComment("#comments", comment);
        });
      });
  });
</script>
```

## License

<img width="256px" alt="MIT License" src="https://raw.githubusercontent.com/valentineus/valentineus.github.io/master/assets/images/7d05cad0-d553-42c7-be1f-7007926ba720.png" />

[MIT](LICENSE.txt).
Copyright (c)
[Valentin Popov](https://valentineus.link/).
