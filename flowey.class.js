
function Flowey(){
  this.configuration = floweySpriteConfig
  this.containerId = "lsb";
  this.imgExtension = ".jpg";
  this.imgFolder = "img";
}

// logical xor
function XOR(a,b) { return ( a ? 1 : 0 ) ^ ( b ? 1 : 0 ); }


Flowey.prototype.init = function(JQuery){
  var randomIndex = Math.floor(Math.random() * this.configuration.length);
  var $ = JQuery;

  var oneSelected = false;

  for(var i = 0; i<this.configuration.length; i++){
    var imgId = this.configuration[i].name.substring(1);
    var imgSrc = this.imgFolder + "/" + imgId + this.imgExtension;
    var classNames="hide flowey";

    // create html elements based on configuration
    if(!oneSelected){
      if( XOR((floweyUseWinkAsDefault && "flowey_wink" == imgId),(i == randomIndex)) ){
        classNames = "flowey";
        oneSelected = true;
      }
    }

    var imgHtml = "<img id=\"" + imgId + "\" class=\""+ classNames +"\" height=\"500px\" width=\"500px\" src=\""+ imgSrc +"\" style=\"position:relative;bottom:200px\"/>";
    $("#"+this.containerId).append(imgHtml);
  }
};

Flowey.prototype.getRandomSprite = function(){
  var entryLength = this.configuration.length;

  var randomNr = Math.floor(Math.random() * entryLength);
  var randomEntry = this.configuration[randomNr];

  return randomEntry;
};

Flowey.prototype.addSprite = function(selector,stext){
  this.configuration.push({
    name: selector,
    text: stext
  });
};

Flowey.prototype.removeAllSprites = function(){
  this.configuration = [];
};

Flowey.prototype.removeSprite = function(cname){
  for (var i = 0; i<this.configuration.length; i++){
    if(this.configuration[i].name === cname){
      delete this.configuration[i];
    }
  }
};
