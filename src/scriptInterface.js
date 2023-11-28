function getScriptInterface(parentClass, map) {
  return class extends parentClass {
    constructor() {
      super();
      map.set(this, parentClass._GetInitInst().GetSdkInstance());
      this.INCLUDE_CHILDREN = {
        NONE: 0,
        OWN: 1,
        ALL: 2,
      };
      this.BOUNDING_BOX_MODE = {
        CUSTOM_LIST: 0,
        OWN_CHILDREN: 1,
        ALL_CHILDREN: 2,
      };
    }

    addObjectToCustomList(objectClass, includeChildrenMode) {
      const that = map.get(this);
      const instances = objectClass
        .getPickedInstances()
        .map((inst) => that._runtime.GetInstanceByUID(inst.uid));
      that._DoAddInstancesToCustomList(instances, includeChildrenMode);
    }
    removeFromList(objectClass) {
      const that = map.get(this);
      const instances = objectClass
        .getPickedInstances()
        .map((inst) => that._runtime.GetInstanceByUID(inst.uid));
      that._DoRemoveInstancesFromCustomList(instances);
    }
    _sdkLayerFromScriptLayer(layer) {
      if (!layer) return null;
      const that = map.get(this);
      if (typeof layer === "object") {
        layer = layer.name;
      }
      return that._runtime.GetMainRunningLayout().GetLayer(layer);
    }
    _AddLayerToCustomList(layer, childrenMode, subLayerMode) {
      const that = map.get(this);
      that._AddLayerToCustomList(
        this._sdkLayerFromScriptLayer(layer),
        subLayerMode,
        childrenMode
      );
    }
    removeLayerFromList(layer) {
      const that = map.get(this);
      that._RemoveLayerFromList(this._sdkLayerFromScriptLayer(layer));
    }
    setBoundingBoxMode(boundingBoxMode) {
      const that = map.get(this);
      that._SetBoundingBoxMode(boundingBoxMode);
    }
  };
}
