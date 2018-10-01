/**
 * @public
 * @param {String} target
 * @param {Object} comment
 * @description Adding a comment to a template.
 */
function addComment (target = "document", comment = {}) {
    const template = $("#template").html();
    const date = new Date(comment.updated_at);

    /* eslint-disable-next-line no-undef */
    const dotted = doT.template(template);

    $(target).append(dotted({
        avatar: comment.user.avatar_url,
        content: comment.body_html,
        date: date.toDateString(),
        url: comment.user.html_url,
        user: comment.user.login
    }));
}

/**
 * @public
 * @param {String} repos
 * @param {Number} issue
 * @param {Function} callback
 * @description Getting a list of comments.
 */
function getComments (repos = "", issue = 0, callback) {
    const jqxhr = $.ajax({
        url: `https://api.github.com/repos/${repos}/issues/${issue}/comments`,
        headers: { "Accept": "application/vnd.github.v3.html+json" },
        dataType: "json"
    });

    jqxhr.fail((jqXHR, textStatus) => callback(textStatus, null));
    jqxhr.done((data) => callback(null, data));
}

export { addComment, getComments };
