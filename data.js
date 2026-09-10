var APP_DATA = {
  "scenes": [
    {
      "id": "0-view-1",
      "name": "View 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7394389960803487,
        "pitch": 0.043298160347287507,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5615033317445386,
          "pitch": 0.17266743491757808,
          "rotation": 0,
          "target": "1-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-view-2",
      "name": "View 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13245465918245358,
          "pitch": 0.1934503281492468,
          "rotation": 0,
          "target": "0-view-1"
        },
        {
          "yaw": 3.138015146786837,
          "pitch": 0.19602881189665133,
          "rotation": 0,
          "target": "2-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-view-3",
      "name": "View 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6839011747598907,
          "pitch": 0.16974333130706398,
          "rotation": 0,
          "target": "1-view-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
