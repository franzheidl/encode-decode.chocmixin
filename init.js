function urlencode() {
  Recipe.run(function(recipe) {
    var r, s, result;
    
    if (recipe.selection.length > 0) {
      r = recipe.selection;
    }
    else {
      r = new Range(0, recipe.length);
    }
    
    s = recipe.textInRange(r);
    
    result = encodeURIComponent(s);
            
    recipe.replaceTextInRange(r, result);
    
  });
}


function urldecode() {
  Recipe.run(function(recipe) {
    var r, s, result;
    
    if (recipe.selection.length > 0) {
      r = recipe.selection;
    }
    else {
      r = new Range(0, recipe.length);
    }
    
    s = recipe.textInRange(r);
    
    result = decodeURIComponent(s);
            
    recipe.replaceTextInRange(r, result);
    
  });
}


function base64encode() {
  Recipe.run(function(recipe) {
    var r, s, b, result;
    
    if (recipe.selection.length > 0) {
      r = recipe.selection;
    }
    else {
      r = new Range(0, recipe.length);
    }
    
    s = recipe.textInRange(r);
    
    b = new Buffer(s);
    
    result = b.toString('base64');
        
    recipe.replaceTextInRange(r, result);
    
  });
}


function base64decode() {
  Recipe.run(function(recipe) {
    var r, s, b, result;
    
    if (recipe.selection.length > 0) {
      r = recipe.selection;
    }
    else {
      r = new Range(0, recipe.length);
    }
    
    s = recipe.textInRange(r);
    
    b = new Buffer(s, 'base64');
    
    result = b.toString();
    
    recipe.replaceTextInRange(r, result);
    
  });
}





Hooks.addMenuItem('Text/Encode/URL-encode', '', function() {
  urlencode();
});

Hooks.addMenuItem('Text/Encode/URL-decode', '', function() {
  urldecode();
});

Hooks.addMenuItem('Text/Encode/base64-encode', '', function() {
  base64encode();
});

Hooks.addMenuItem('Text/Encode/base64-decode', '', function() {
  base64decode();
});
