L.Mapzen.Map.prototype.addData = function (dataLayerName, customData, customStyle) {
  var tangram = this._tangram;
  var self = this;
  if (tangram._layer) {
    if (tangram._layer.scene.config) {
      if (!customStyle) tangram._layer.scene.config.layers.nyc = { 'data': { 'source': dataLayerName }, 'draw': { 'lines': { 'order': 1000, 'width': '2px', 'color': 'red' } } };
      else tangram._layer.scene.config.layers.nyc = { 'data': { 'source': dataLayerName }, 'draw': customStyle };
      tangram._layer.scene.setDataSource(dataLayerName, { type: 'GeoJSON', url: customData.url});
      // tangram._layer.scene.redraw();
    } else {
      return window.setTimeout(self.addData.bind(self, dataLayerName, customData, customStyle), 200);
    }
  } else {
    return window.setTimeout(self.addData.bind(self, dataLayerName, customData, customStyle), 200);
  }
}


L.Mapzen.Map.prototype.addScene = function (sceneURL, basePath) {
  var tangram = this._tangram;
  var self = this;
  if (tangram._layer) {
    if (tangram._layer.scene.config) {
      console.log(tangram._layer.scene);
      var newSceneObj = {};

      var imports = [];
      // var currentSceneource = tangram._layer.scene.config_source;

      currentSceneSource = L.Mapzen.BasemapStyles.Refill;
      imports.push(currentSceneSource);
      imports.push(sceneURL);
      newSceneObj.imports = imports;

      tangram._layer.scene.reload(newSceneObj).then( function () {
        console.log('hm?')
      });
      //console.log(tangram._layer.scene);

      // tangram._layer.scene.updateConfig();
      // tangram._layer.scene.requestRedraw();
    } else {
      return window.setTimeout(self.addScene.bind(self, sceneURL, basePath), 200);
    }
  } else {
    return window.setTimeout(self.addScene.bind(self, sceneURL, basePath), 200);
  }
}