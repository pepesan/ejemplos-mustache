(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['plantilla'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <h3>Hay booleano</h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <h4>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.objeto_complejo : depth0)) != null ? stack1.nombre : stack1), depth0))
    + "</h4>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "        <li>"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + ":"
    + alias4(alias5(depth0, depth0))
    + ":"
    + alias4(alias5((depths[1] != null ? depths[1].titulo : depths[1]), depth0))
    + ": "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<h1>Hola "
    + alias3(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"titulo","hash":{},"data":data}) : helper)))
    + "</h1>\n<div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.booleano : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <h4>"
    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.objeto_complejo : depth0)) != null ? stack1.nombre : stack1), depth0))
    + "</h4>\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.objeto_complejo : depth0),{"name":"with","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.miarray : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n    <h4>"
    + alias3((helpers.ayuda || (depth0 && depth0.ayuda) || alias2).call(alias1,(depth0 != null ? depth0.booleano : depth0),{"name":"ayuda","hash":{},"data":data}))
    + "</h4>\n</div>";
},"useData":true,"useDepths":true});
})();