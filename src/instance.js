function getInstanceJs(parentClass, scriptInterface, addonTriggers, C3) {
  return class extends parentClass {
    constructor(inst, properties) {
      super(inst);

      this.mode = 0;
      this.enabled = true;
      this.objectMap = new Map();

      this.customList = [];
      if (properties) {
        this.mode = properties[0];
        this.enabled = properties[1];
      }
      if (this.enabled) this._StartTicking();
    }

    Release() {
      super.Release();
    }

    SaveToJson() {
      return {
        mode: this.mode,
        enabled: this.enabled,
        customList: this.customList.map((x) => {
          if (x.isLayer) {
            return {
              isLayer: true,
              layer: x.layer.GetSID(),
              instMode: x.instMode,
              layerMode: x.layerMode,
            };
          } else {
            return {
              isLayer: false,
              inst: x.inst.GetUID(),
              mode: x.mode,
            };
          }
        }),
      };
    }

    LoadFromJson(o) {
      this.mode = o.mode;
      this.enabled = o.enabled;
      this.customList = o.customList.map((x) => {
        if (x.isLayer) {
          return {
            isLayer: true,
            layer: this._inst
              .GetRuntime()
              .GetCurrentLayout()
              .GetLayerBySID(x.layer),
            instMode: x.instMode,
            layerMode: x.layerMode,
          };
        } else {
          return {
            isLayer: false,
            inst: this._inst.GetRuntime().GetInstanceByUID(x.inst),
            mode: x.mode,
          };
        }
      });
    }

    _GetObjectsFromInst(inst, mode, map, eachCallback) {
      map.set(inst.GetUID(), inst);
      if (eachCallback) eachCallback(inst);
      if (mode !== 0) {
        inst
          .GetWorldInfo()
          .GetChildren()
          .forEach((childWi) => {
            this._GetObjectsFromInst(
              childWi._inst,
              mode === 1 ? 0 : 2,
              map,
              eachCallback
            );
          });
      }
    }

    _GetObjectsFromLayer(layer, instMode, layerMode, map, eachCallback) {
      layer._GetInstances().forEach((inst) => {
        this._GetObjectsFromInst(inst, instMode, map, eachCallback);
      });
      if (layerMode !== 0) {
        layer.GetSubLayers().forEach((sub) => {
          this._GetObjectsFromLayer(
            sub,
            instMode,
            layerMode === 1 ? 0 : 2,
            map,
            eachCallback
          );
        });
      }
    }

    _GetAllObjects(eachCallback) {
      const objectMap = this.objectMap;
      objectMap.clear();

      this.customList.forEach((x) => {
        if (x.isLayer) {
          this._GetObjectsFromLayer(
            x.layer,
            x.instMode,
            x.layerMode,
            objectMap,
            eachCallback
          );
        } else {
          this._GetObjectsFromInst(x.inst, x.mode, objectMap, eachCallback);
        }
      });

      if (this.mode !== 0) {
        this._inst
          .GetWorldInfo()
          .GetChildren()
          .forEach((childWi) => {
            this._GetObjectsFromInst(
              childWi._inst,
              this.mode === 1 ? 0 : 2,
              objectMap,
              eachCallback
            );
          });
      }

      return Array.from(objectMap.values());
    }

    _UpdateBoundingBox() {
      let minX = Number.MAX_SAFE_INTEGER;
      let minY = Number.MAX_SAFE_INTEGER;
      let maxX = Number.MIN_SAFE_INTEGER;
      let maxY = Number.MIN_SAFE_INTEGER;
      let anyInst = false;

      this._GetAllObjects((inst) => {
        anyInst = true;
        const bbox = inst.GetWorldInfo().GetBoundingBox();
        minX = Math.min(minX, bbox.getLeft());
        minY = Math.min(minY, bbox.getTop());
        maxX = Math.max(maxX, bbox.getRight());
        maxY = Math.max(maxY, bbox.getBottom());
      });

      if (!anyInst) {
        minX = 0;
        minY = 0;
        maxX = 0;
        maxY = 0;
      }

      const wi = this._inst.GetWorldInfo();
      const ox = wi.GetOriginX();
      const oy = wi.GetOriginY();

      const width = maxX - minX;
      const height = maxY - minY;

      const wiArr = [];
      const children = [...wi.GetChildren()];
      children.forEach((childWi) => {
        wiArr.push({
          wi: childWi,
          transformX: childWi.GetTransformWithParentX(),
          transformY: childWi.GetTransformWithParentY(),
          transformWidth: childWi.GetTransformWithParentWidth(),
          transformHeight: childWi.GetTransformWithParentHeight(),
          transformAngle: childWi.GetTransformWithParentAngle(),
          transformZElevation: childWi.GetTransformWithParentZElevation(),
          transformOpacity: childWi.GetTransformWithParentOpacity(),
          transformVisibility: childWi.GetTransformWithParentVisibility(),
          destroyWithParent: childWi.GetDestroyWithParent(),
        });
        wi.RemoveChild(childWi);
      });
      wi.SetSize(width, height);
      wi.SetXY(minX + ox * width, minY + oy * height);
      wi.SetBboxChanged();
      wiArr.forEach((x) => {
        wi.AddChild(x.wi, x);
      });
    }

    Tick() {
      this._UpdateBoundingBox();
    }

    Trigger(method) {
      super.Trigger(method);
      const addonTrigger = addonTriggers.find((x) => x.method === method);
      if (addonTrigger) {
        this.GetScriptInterface().dispatchEvent(new C3.Event(addonTrigger.id));
      }
    }

    GetScriptInterfaceClass() {
      return scriptInterface;
    }

    // ACTS
    _SetEnabled(e) {
      this.enabled = e;
      if (this.enabled) this._StartTicking();
      else this._StopTicking();
    }
    _AddObjectToCustomList(object, mode) {
      object
        .GetCurrentSol()
        .GetInstances()
        .forEach((inst) => {
          this.customList.push({ isLayer: false, inst, mode });
        });
    }
    _RemoveFromList(object) {
      let insts = object.GetCurrentSol().GetInstances();
      this.customList = this.customList.filter((x) => !insts.includes(x.inst));
    }
    _ClearList() {
      this.customList = [];
    }
    _AddLayerToCustomList(layer, instMode, layerMode) {
      this.customList.push({ isLayer: true, layer, instMode, layerMode });
    }
    _RemoveLayerFromList(layer) {
      this.customList = this.customList.filter((x) => x.layer !== layer);
    }
    _SetBoundingBoxMode(m) {
      this.mode = m;
    }

    // CNDS
    _IsEnabled() {
      return this.enabled;
    }

    // EXPS
    _Count() {
      return this._GetAllObjects().length;
    }
  };
}
