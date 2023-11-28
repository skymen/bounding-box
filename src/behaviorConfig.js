// WARNING: DO NOT EDIT THIS FILE, IT IS AUTOGENERATED
module.exports = {
  addonType: "behavior",
  id: "skymen_bounding_box",
  name: "bounding_box",
  version: "1.0.0.0",
  category:
    // "attributes",
    // "movements",
    // "other",
    "general",
  author: "skymen",
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  description: "Description",
  // icon: "icon.svg", // defaults to "icon.svg" if omitted
  // addonUrl: "https://www.construct.net/en/make-games/addons/####/XXXX", // displayed in auto-generated docs
  // githubUrl: "https://github.com/skymen/XXXX", // displays latest release version in auto-generated docs
  fileDependencies: [
    /*
    {
      filename: "filename.js", // no need to include "c3runtime/" prefix
      type:
        "copy-to-output"
        "inline-script"
        "external-dom-script"
        "external-runtime-script"
        "external-css"

      // for copy-to-output only
      // fileType: "image/png"
    }
    */
  ],
  info: {
    Set: {
      IsOnlyOneAllowed: false,
      CanBeBundled: true,
      IsDeprecated: false,
    },
  },
  properties: [
    /*
    {
      type:
        "integer"
        "float"
        "percent"
        "text"
        "longtext"
        "check"
        "font"
        "combo"
        "group"
        "link"
        "info"

      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,

        // minValue: 0, // omit to disable
        // maxValue: 100, // omit to disable

        // for type combo only
        // items: [
        //   {itemId1: "item name1" },
        //   {itemId2: "item name2" },
        // ],

        // dragSpeedMultiplier: 1, // omit to disable

        // for type link only
        // linkCallback: `function(instOrObj) {}`,
        // linkText: "Link Text",
        // callbackType:
        //   "for-each-instance"
        //   "once-for-type"

        // for type info only
        // infoCallback: `function(inst) {}`,
      },
      name: "Property Name",
      desc: "Write an appropriate description for this property. This should explain what the property does but remain short enough for the user to read quickly. When it's a combo, ideally explain what each option does.",
    }
    */
    {
      type: "combo",
      id: "boundingBoxMode",
      options: {
        initialValue: "own",
        items: [
          { custom: "Custom List" },
          { own: "Own Children" },
          { all: "All Children" },
        ],
      },
      name: "Bounding Box Mode",
      desc: "The bounding box mode. Own children: only direct children. All children: The entire hierarchy. Custom list: only the children in the custom list.",
    },
    {
      type: "check",
      id: "enabled",
      options: {
        initialValue: true,
      },
      name: "Enabled",
      desc: "Whether the bounding box is enabled.",
    },
  ],
  aceCategories: {
    // follows the format id: langName
    // in the ACEs refer to categories using the id, not the name
    general: "General",
  },
  Acts: {
    /*
    SampleAction: {
      // The category of the action as it appears in the add action dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this action
      // Cases where you might not want this are:
      // 1- If the action params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the action in the add action dialog
      highlight: true,

      // Set to true to hide the action in the interface. False by default if not specified.
      deprecated: false,

      // Marks the action as async. Defaults to false if not specified.
      isAsync: false,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the action as it appears in the add action dialog
      listName: "Sample Action",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample action [i]{0}[/i]",

      // The description of the action as it appears in the add action dialog
      description: "This is a sample action",
    },
    */
    SetEnabled: {
      category: "general",
      forward: "_SetEnabled",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "enabled",
          name: "Enabled",
          desc: "Whether the bounding box is enabled.",
          type: "boolean",
          value: "true",
        },
      ],
      listName: "Set Enabled",
      displayText: "{my}: Set enabled to [i]{0}[/i]",
      description: "Set whether the bounding box is enabled.",
    },
    AddObjectToCustomList: {
      category: "general",
      forward: "_AddObjectToCustomList",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "object",
          name: "Object",
          desc: "The object to add to the custom list.",
          type: "object",
          allowedPluginIds: ["<world>"],
        },
        {
          id: "includeChildren",
          name: "Include Children",
          desc: "Whether to include the children of the object.",
          type: "combo",
          value: "none",
          items: [{ none: "None" }, { own: "Own" }, { all: "All" }],
        },
      ],
      listName: "Add object to custom list",
      displayText:
        "{my}: Add [b]{0}[/b] to custom list (include children: [i]{1}[/i])",
      description: "Add an object to the custom list.",
    },
    RemoveFromList: {
      category: "general",
      forward: "_RemoveFromList",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "object",
          name: "Object",
          desc: "The object to remove from the custom list.",
          type: "object",
          allowedPluginIds: ["<world>"],
        },
      ],
      listName: "Remove from list",
      displayText: "{my}: Remove [b]{0}[/b] from custom list",
      description: "Remove an object from the custom list.",
    },
    ClearList: {
      category: "general",
      forward: "_ClearList",
      autoScriptInterface: true,
      highlight: false,
      listName: "Clear list",
      displayText: "{my}: Clear custom list",
      description: "Clear the custom list.",
    },
    AddLayerToCustomList: {
      category: "general",
      forward: "_AddLayerToCustomList",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "layer",
          name: "Layer",
          desc: "The layer to add to the custom list.",
          type: "layer",
        },
        {
          id: "includeChildren",
          name: "Include Instance Children",
          desc: "Whether to include the children of the instances.",
          type: "combo",
          value: "none",
          items: [{ none: "None" }, { own: "Own" }, { all: "All" }],
        },
        {
          id: "includeSubLayers",
          name: "Include Sub Layers",
          desc: "Whether to include the sub layers of the layer.",
          type: "combo",
          value: "none",
          items: [{ none: "None" }, { own: "Own" }, { all: "All" }],
        },
      ],
      listName: "Add layer to custom list",
      displayText:
        "{my}: Add [b]{0}[/b] to custom list (include children: [i]{1}[/i], include sub layers: [i]{2}[/i])",
      description: "Add a layer to the custom list.",
    },
    RemoveLayerFromList: {
      category: "general",
      forward: "_RemoveLayerFromList",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "layer",
          name: "Layer",
          desc: "The layer to remove from the custom list.",
          type: "layer",
        },
      ],
      listName: "Remove layer from list",
      displayText: "{my}: Remove [b]{0}[/b] from custom list",
      description: "Remove a layer from the custom list.",
    },
    SetBoundingBoxMode: {
      category: "general",
      forward: "_SetBoundingBoxMode",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "mode",
          name: "Mode",
          desc: "The bounding box mode.",
          type: "combo",
          value: "own",
          items: [
            { custom: "Custom List" },
            { own: "Own Children" },
            { all: "All Children" },
          ],
        },
      ],
      listName: "Set bounding box mode",
      displayText: "{my}: Set bounding box mode to [i]{0}[/i]",
      description: "Set the bounding box mode.",
    },
    UpdateBoundingBox: {
      category: "general",
      forward: "_UpdateBoundingBox",
      autoScriptInterface: true,
      highlight: true,
      listName: "Update bounding box",
      displayText: "{my}: Update bounding box",
      description: "Update the bounding box.",
    },
  },
  Cnds: {
    /*
    SampleCondition: {
      // The category of the action as it appears in the add condition dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this condition
      // Cases where you might not want this are:
      // 1- If the condition params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the condition in the add condition dialog
      highlight: true,

      // Set to true to hide the condition in the interface. False by default if not specified.
      deprecated: false,

      // special conditions properties. These can all be omitted, and they will default to the following values:
      isTrigger: false,
      isFakeTrigger: false,
      isStatic: false,
      isLooping: false,
      isInvertible: true,
      isCompatibleWithTriggers: true,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the condition as it appears in the add condition dialog
      listName: "Sample Condition",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample condition [i]{0}[/i]",

      // The description of the condition as it appears in the add condition dialog
      description: "This is a sample condition",
    },
    */
    IsEnabled: {
      category: "general",
      forward: "_IsEnabled",
      autoScriptInterface: true,
      highlight: false,
      listName: "Is enabled",
      displayText: "{my}: Is enabled",
      description: "Check whether the bounding box is enabled.",
    },
  },
  Exps: {
    /*
    SampleExpression: {
      // The category of the action as it appears in the expression picker
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this expression
      // Cases where you might not want this are:
      // 1- If you don't want it to appear in the script interface
      // 2- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the expression in the expression picker
      highlight: true,

      // Set to true to hide the expression in the interface. False by default if not specified.
      deprecated: false,

      // The type of the expression.
      returnType:
        - "string"
        - "number"
        - "any" // must be either string or number

      // Set to true if the expression is variadic. False by default if not specified.
      isVariadicParameters: false

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
        },
      ],

      // The description of the expression as it appears in the expression picker
      description: "This is a sample expression",
    },
    */
    Count: {
      category: "general",
      forward: "_Count",
      autoScriptInterface: true,
      highlight: false,
      returnType: "number",
      listName: "Count",
      displayText: "{my}: Count",
      description: "The number of objects in the bounding box.",
    },
  },
};