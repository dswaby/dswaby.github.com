define(["jquery","hbs!../../app/templates/app_template","hbs!../../app/templates/repos", "velocity","velocity.ui"], function($, appTpl, reposTpl) {

  function App(config){
    var defaults = {
      testString: "hello"
    };

    this.config = $.extend(true, {}, defaults, config);
  }

  // gets JSON from dummy test
  App.prototype.loadJSON = function(callback) {
    that = this;
    var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', 'mock_data.json', true); // Replace 'my_data' with the path to your file
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          callback(xobj.responseText);
        }
    };
    xobj.send(null);
  };

  App.prototype.getRepos = function() {
    $.ajax({
      dataType: "json",
      url: 'https://api.github.com/users/dswaby/repos',
      success: function(repo){
        if (repo.length) {
          var repoHtml = reposTpl(repo);
          $("#repos").html(repoHtml);
        }
      }
    });
    setInterval(function() {
      $("li").velocity("transition.perspectiveUpIn", { stagger: 150 });
    }, 4000);
  };

  App.prototype.init = function() {
    that = this;
    that.loadJSON(function(response) {
      var actual_JSON = JSON.parse(response);
    });
    that.getRepos();
  };

  var app = new App();
  app.init();

});
