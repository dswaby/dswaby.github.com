require.config({
  paths: {
    "components": "../bower_components",
    "jquery": "../bower_components/jquery/dist/jquery",
    "velocity": "../bower_components/velocity/jquery.velocity",
    "velocity.ui": "../bower_components/velocity/velocity.ui",
    "Handlebars":"../bower_components/require-handlebars-plugin/hbs/handlebars",
    "hbs": "../bower_components/require-handlebars-plugin/hbs"
  },
  shim: {
  	"velocity.ui": {
  		deps: ["velocity"]
  	}
  }
});

if (!window.requireTestMode) {
  require(['js/main'], function(){ });
}





