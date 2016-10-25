var TangramUtil = function (scene) {

  this.scene = scene;

  this.addData = function (dataLayerName, customData, customStyle) {
    // if (!customStyle) tangram._layer.scene.config.layers.nyc = { 'data': { 'source': dataLayerName }, 'draw': { 'lines': { 'order': 1000, 'width': '2px', 'color': 'red' } } };
    // else
    this.scene.config.layers.nyc = { 'data': { 'source': dataLayerName }, 'draw': customStyle };
    this.scene.setDataSource(dataLayerName, { type: 'GeoJSON', url: customData.url});
  }

  this.removeData = function (dataLayerName) {
    var newDataSources = {};
    for (var sourceName in this._layer.scene.config.sources){
      if (sourceName === dataLayerName) ;
      else {
        newDataSources[sourceName] = this._layer.scene.config.sources[sourceName];
      }
    }
    this._layer.scene.config.sources = newDataSources;
    this._layer.scene.updateConfig();
  }

  this.addScene = function (sceneURL, basePath) {
    var newSceneObj = {};
    var imports = [];

    var currentSceneSource = L.Mapzen.BasemapStyles.Refill;//tangram._layer.scene.config_source;
    imports.push(currentSceneSource);
    imports.push(sceneURL);
    newSceneObj.import = imports;

    this.scene.reload(newSceneObj).then(function () {
      // console.log('hm?')
    });
  }
};
