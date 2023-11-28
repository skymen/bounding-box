<img src="./src/icon.svg" width="100" /><br>
# bounding_box <br>
Description <br>
<br>
Author: skymen <br>
<sub>Made using [c3ide2-framework](https://github.com/ConstructFund/c3ide2-framework) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
node ./build.js
```

To run the dev server, run

```
npm i
node ./dev.js
```

The build uses the pluginConfig file to generate everything else.
The main files you may want to look at would be instance.js and scriptInterface.js

## Examples Files

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |
| Bounding Box Mode | The bounding box mode. Own children: only direct children. All children: The entire hierarchy. Custom list: only the children in the custom list. | combo |
| Enabled | Whether the bounding box is enabled. | check |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Set Enabled | Set whether the bounding box is enabled. | Enabled             *(boolean)* <br> |
| Add object to custom list | Add an object to the custom list. | Object             *(object)* <br>Include Children             *(combo)* <br> |
| Remove from list | Remove an object from the custom list. | Object             *(object)* <br> |
| Clear list | Clear the custom list. |  |
| Add layer to custom list | Add a layer to the custom list. | Layer             *(layer)* <br>Include Instance Children             *(combo)* <br>Include Sub Layers             *(combo)* <br> |
| Remove layer from list | Remove a layer from the custom list. | Layer             *(layer)* <br> |
| Set bounding box mode | Set the bounding box mode. | Mode             *(combo)* <br> |
| Update bounding box | Update the bounding box. |  |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |
| Is enabled | Check whether the bounding box is enabled. |  |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| Count | The number of objects in the bounding box. | number |  | 
