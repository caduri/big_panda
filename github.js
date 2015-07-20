module.exports = {
  redirectToGithub: function(res, json_file) {
    res.redirect("https://status.github.com/api/" + json_file)
  }
};
