pliny.function({
  name: "findProperty",
  description: "Searches an object for a property that might go by different names in different browsers.",
  parameters: [{
    name: "elem",
    type: "Object",
    description: "The object to search."
  }, {
    name: "arr",
    type: "Array",
    description: "An array of strings that lists the possible values for the property name."
  }, ],
  returns: "String",
  examples: [{
    name: "Find the right name of the fullScree element.",
    description: "    grammar(\"JavaScript\");\n\
    var elementName = findProperty(document, [\"fullscreenElement\", \"mozFullScreenElement\", \"webkitFullscreenElement\", \"msFullscreenElement\"]);\n\
    console.assert(!isFirefox || elementName === \"mozFullScreenElement\");\n\
    console.assert(!isChrome || elementName === \"webkitFullscreenElement\");\n\
    console.assert(!isIE || elementName === \"msFullscreenElement\");"
  }]
});

function findProperty(elem, arr) {
  for (var i = 0; i < arr.length; ++i) {
    if (elem[arr[i]] !== undefined) {
      return arr[i];
    }
  }
}