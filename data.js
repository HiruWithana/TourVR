var APP_DATA = {
  "scenes": [
    {
      "id": "0-shot-panoramic-composition-living-room-1",
      "name": "shot-panoramic-composition-living-room (1)",
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
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 0.04853231364826627,
        "pitch": 0.14687644918118892,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.6420218814966248,
          "pitch": 0.12375574535354517,
          "rotation": 6.283185307179586,
          "target": "1-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.669416184543711,
          "pitch": 0.19964165425191283,
          "title": "This is a test Hotspot",
          "text": "<span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, helvetica, sans-serif; font-size: 14px; background-color: rgb(238, 238, 238);\">Designed to work with web standards.</span>"
        }
      ]
    },
    {
      "id": "1-room",
      "name": "room",
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
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 0.010548664195169977,
        "pitch": 0.10884837572201889,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.7371640702874727,
          "pitch": 0.1587965570648322,
          "rotation": 0,
          "target": "2-outdoor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3941336773192194,
          "pitch": -0.03975571253447363,
          "title": "This is a photo",
          "text": "Text can go here"
        }
      ]
    },
    {
      "id": "2-outdoor",
      "name": "outdoor",
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
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -0.2941793009831901,
        "pitch": -0.14988598144036303,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
