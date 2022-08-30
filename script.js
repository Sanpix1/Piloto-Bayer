(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "id": "camera_E40C2E8B_EAEA_BE2F_41BA_CFC0D9F6B497",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790",
 "thumbnailUrl": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_t.jpg",
 "label": "Via Iantena 8",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B9512ACC_B78B_A797_41B9_229A83D6865F",
  "this.overlay_B9246AC8_B789_A79F_41E5_1D075CFF96D2",
  "this.overlay_B948DD96_B78F_BDB3_41B2_B3B710219F48",
  "this.overlay_CEDD0BF7_DAA7_BF33_41DA_654224286DCF",
  "this.overlay_CF1608BC_DAA3_B935_41A3_208E38F5C536",
  "this.overlay_CEA2DEEF_DAAF_B954_41B9_598A29BCAB48"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A36793D7_A862_1B55_41D4_440646406482_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  "this.PanoramaPlayListItem_E4757E3D_EAEA_BE6B_41C2_A53B4DE1BC0E",
  "this.PanoramaPlayListItem_E4753E3D_EAEA_BE6B_41D2_1A65A8ABF5B3",
  {
   "media": "this.panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_camera"
  },
  {
   "media": "this.panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_camera"
  },
  {
   "media": "this.panorama_A349F735_A862_1CEA_41CC_B52B5799B401",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A349F735_A862_1CEA_41CC_B52B5799B401_camera"
  },
  "this.PanoramaPlayListItem_E474EE3D_EAEA_BE6B_41E5_32560B9735BB",
  {
   "media": "this.panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_camera"
  },
  {
   "media": "this.panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_camera"
  },
  {
   "media": "this.panorama_A3581AF9_A862_155D_41DF_288F19AF7D82",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_camera"
  },
  {
   "media": "this.panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_camera"
  },
  {
   "media": "this.panorama_A36793D7_A862_1B55_41D4_440646406482",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A36793D7_A862_1B55_41D4_440646406482_camera"
  },
  {
   "media": "this.panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_camera"
  },
  {
   "media": "this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_camera"
  },
  {
   "media": "this.panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_camera"
  },
  {
   "media": "this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_camera"
  },
  {
   "media": "this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_camera"
  },
  "this.PanoramaPlayListItem_E4749E3D_EAEA_BE6B_41B3_F284497109D0",
  "this.PanoramaPlayListItem_E4740E3D_EAEA_BE6B_41E9_AEC67F95669D",
  {
   "media": "this.panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_camera"
  },
  {
   "media": "this.panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_camera"
  },
  {
   "media": "this.panorama_A340661D_A862_1CDA_41B9_9FDBE569727F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_camera"
  },
  "this.PanoramaPlayListItem_E477BE3D_EAEA_BE6B_41E0_2A6CEB508258",
  {
   "media": "this.panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_camera"
  },
  {
   "media": "this.panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_camera"
  },
  {
   "media": "this.panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_camera"
  },
  {
   "media": "this.video_DA4B4FD4_D5B8_B7CD_41E9_DC7F2A958E6E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 25, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 25)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_D47DF42C_DB00_F86E_419B_C191D35F4955",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 26, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 26)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_E556DFA1_E9E1_32C9_41E9_573DE771A55C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 27, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 27)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_E52E11B4_E9E1_2ECF_41C1_D0F356C40E69",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 28, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 28)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_E5CA1388_E9E1_12D8_41C0_F906A2236BAD",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 29)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_E51AFD40_E9F4_2BED_41E8_D3F42793F84B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 30, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 30)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 30, 0)",
   "player": "this.MainViewerVideoPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "label": "\u00c1lbum de Fotos FOTO_ABELHAS",
 "thumbnailUrl": "media/album_C454F3DE_D5AC_64FD_41E7_05DC56692B56_t.png",
 "playList": "this.album_C454F3DE_D5AC_64FD_41E7_05DC56692B56_AlbumPlayList",
 "id": "album_C454F3DE_D5AC_64FD_41E7_05DC56692B56",
 "class": "PhotoAlbum"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40",
 "thumbnailUrl": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_t.jpg",
 "label": "Dry Pack 4",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EC16A53D_C606_4C07_41E1_55E97828904C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -100.1,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "id": "camera_E7725011_EAEA_A23A_41E0_BB74C1C33AC5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_FEFD75DF_EA08_05CD_41D0_997B106BF4A7",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E4820E2D_EAEA_BE6B_41EB_D6CF16DF4941, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4820E2D_EAEA_BE6B_41EB_D6CF16DF4941, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E4820E2D_EAEA_BE6B_41EB_D6CF16DF4941",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD",
 "thumbnailUrl": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_t.jpg",
 "label": "Restaurante",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F1BF2BE0_D03B_57A0_41E1_658EAEAB028E",
  "this.overlay_F27BBEA1_D03D_F1A0_415B_D4C9667A0156"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A340661D_A862_1CDA_41B9_9FDBE569727F"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5",
 "thumbnailUrl": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_t.jpg",
 "label": "Liquid Pack 3",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A4A33BD3_B79A_E5B1_41C3_EB207FF2705E",
  "this.overlay_C65E7377_D10C_854A_41E4_8C3144611B32"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_camera"
  },
  {
   "media": "this.panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_camera"
  },
  {
   "media": "this.panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_camera"
  },
  {
   "media": "this.panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_camera"
  },
  {
   "media": "this.panorama_A349F735_A862_1CEA_41CC_B52B5799B401",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A349F735_A862_1CEA_41CC_B52B5799B401_camera"
  },
  {
   "media": "this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_camera"
  },
  {
   "media": "this.panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_camera"
  },
  {
   "media": "this.panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_camera"
  },
  {
   "media": "this.panorama_A3581AF9_A862_155D_41DF_288F19AF7D82",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_camera"
  },
  {
   "media": "this.panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_camera"
  },
  {
   "media": "this.panorama_A36793D7_A862_1B55_41D4_440646406482",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A36793D7_A862_1B55_41D4_440646406482_camera"
  },
  {
   "media": "this.panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_camera"
  },
  {
   "media": "this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_camera"
  },
  {
   "media": "this.panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_camera"
  },
  {
   "media": "this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_camera"
  },
  {
   "media": "this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_camera"
  },
  {
   "media": "this.panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_camera"
  },
  {
   "media": "this.panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_camera"
  },
  {
   "media": "this.panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_camera"
  },
  {
   "media": "this.panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_camera"
  },
  {
   "media": "this.panorama_A340661D_A862_1CDA_41B9_9FDBE569727F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_camera"
  },
  {
   "media": "this.panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_camera"
  },
  {
   "media": "this.panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_camera"
  },
  {
   "media": "this.panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_camera"
  },
  {
   "media": "this.panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_camera"
  },
  {
   "media": "this.video_DA4B4FD4_D5B8_B7CD_41E9_DC7F2A958E6E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_D47DF42C_DB00_F86E_419B_C191D35F4955",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_E556DFA1_E9E1_32C9_41E9_573DE771A55C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_E52E11B4_E9E1_2ECF_41C1_D0F356C40E69",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_E5CA1388_E9E1_12D8_41C0_F906A2236BAD",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_E51AFD40_E9F4_2BED_41E8_D3F42793F84B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 0)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 72,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_camera",
 "manualRotationSpeed": 1826,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E76D9FF2_EAEA_BDF9_41DE_9E33D07D8CF4",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.67,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_E47570BD_EAEA_A26B_41ED_53D485D3FF9D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": [
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
 ],
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": [
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
 ],
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.18,
  "class": "PanoramaCameraPosition",
  "pitch": 16.53
 },
 "id": "camera_E5ED3E9A_EAEA_BE2E_41D2_AB89B8C9F47B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "yaw": 74.96,
 "hideDuration": 500,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.81,
 "autoplay": true,
 "id": "popup_C9D128E5_DB00_081E_41E1_CCB4CF24F350",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.04,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "video": {
  "width": 854,
  "class": "VideoResource",
  "height": 480,
  "mp4Url": "media/video_D47DF42C_DB00_F86E_419B_C191D35F4955.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.1,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_E5B71EF8_EAEA_BFE9_41D1_CA84FFAC1F41",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 2.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_E4E7C05F_EAEA_A226_41E9_48C0784DA753",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A349F735_A862_1CEA_41CC_B52B5799B401_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 171.73,
  "class": "PanoramaCameraPosition",
  "pitch": 4.59
 },
 "id": "camera_E5D14EE8_EAEA_BFEA_41EB_8C78BDDC5BAE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F",
 "thumbnailUrl": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_t.jpg",
 "label": "Liquid Pack 2",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E7459D7A_C602_DC02_41E1_FE86F25CD83E",
  "this.overlay_E7EA7691_C606_CC1E_41E4_ED5040F76228"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A36793D7_A862_1B55_41D4_440646406482"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A36793D7_A862_1B55_41D4_440646406482"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3581AF9_A862_155D_41DF_288F19AF7D82"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7",
 "thumbnailUrl": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_t.jpg",
 "label": "Via Iantrena 4",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A63CE296_B7B9_A7B0_41BF_D06805565A8D",
  "this.overlay_CCD6F2CB_D00D_B1E0_41E2_04244659D30D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.53,
  "class": "PanoramaCameraPosition",
  "pitch": -13.78
 },
 "id": "camera_E7AADFC3_EAEA_BE1F_41EB_096319F15693",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "label": "FOTO_ABELHAS",
 "id": "album_C454F3DE_D5AC_64FD_41E7_05DC56692B56_0",
 "thumbnailUrl": "media/album_C454F3DE_D5AC_64FD_41E7_05DC56692B56_0_t.jpg",
 "width": 1512,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_C454F3DE_D5AC_64FD_41E7_05DC56692B56_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 2088
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 92.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E51E2F56_EAEA_BE39_41E2_19439DC06E7F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E7022050_EAEA_A239_41EB_4DF3314C2469",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "Apresentadora_portaria",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_E51AFD40_E9F4_2BED_41E8_D3F42793F84B_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E51AFD40_E9F4_2BED_41E8_D3F42793F84B",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E51AFD40_E9F4_2BED_41E8_D3F42793F84B.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0",
 "thumbnailUrl": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_t.jpg",
 "label": "Portaria Externa",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BE693F94_B192_958F_415A_5F591D5E40E6",
  "this.overlay_A1793857_B18F_FA89_41C8_79500625309D",
  "this.overlay_C47E7002_D00C_D060_41D8_F5380895A9D3",
  "this.overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952",
  "this.overlay_FABD7E23_EA18_0674_41E1_711D23615DDB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 81.73,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_E7266030_EAEA_A27A_41C9_D52C003B4EC3",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -83.57,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_E4F5F05F_EAEA_A226_41E4_A1F1A34B97F0",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_FEA75D94_EA38_0A5C_41E3_ACF3D1B6FF6C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E49DFE2D_EAEA_BE6B_41A6_195AB10F171D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E49DFE2D_EAEA_BE6B_41A6_195AB10F171D, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E49DFE2D_EAEA_BE6B_41A6_195AB10F171D",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": -16.53
 },
 "id": "camera_E78FDFD3_EAEA_BE3F_41E0_39B223AD6C63",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.82,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_E496809E_EAEA_A229_41DD_CC809775A20C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.51,
  "class": "PanoramaCameraPosition",
  "pitch": 13.78
 },
 "id": "camera_E7104050_EAEA_A239_41E3_E76772CB89EB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window443"
 },
 "bodyPaddingRight": 0,
 "id": "window_E04CD8F3_EAE6_E3FF_41E6_E5C88569FEA6",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Window",
 "minHeight": 20,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "bodyPaddingTop": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "closeButtonBorderColor": "#000000",
 "backgroundColor": [],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedIconLineWidth": 5,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverIconColor": "#666666",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "footerBackgroundOpacity": 0,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "headerPaddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "children": [
  "this.viewer_uidE4B7BE1D_EAEA_BE2A_41D4_D7F59A18E46B"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "minWidth": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonIconLineWidth": 5,
 "closeButtonPressedIconColor": "#888888",
 "bodyPaddingLeft": 0,
 "closeButtonPressedBorderColor": "#000000",
 "titlePaddingRight": 5,
 "scrollBarWidth": 10,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [],
 "closeButtonPressedBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -157.96,
  "class": "PanoramaCameraPosition",
  "pitch": -27.55
 },
 "id": "camera_E4C9706F_EAEA_A2E7_41C0_11D652C90014",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "APA",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_D47DF42C_DB00_F86E_419B_C191D35F4955_t.jpg",
 "width": 854,
 "loop": false,
 "id": "video_D47DF42C_DB00_F86E_419B_C191D35F4955",
 "class": "Video",
 "height": 480,
 "video": {
  "width": 854,
  "class": "VideoResource",
  "height": 480,
  "mp4Url": "media/video_D47DF42C_DB00_F86E_419B_C191D35F4955.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 101.02,
  "class": "PanoramaCameraPosition",
  "pitch": 4.59
 },
 "id": "camera_E5950F08_EAEA_BE29_41E9_B10DFA96C93D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window444"
 },
 "bodyPaddingRight": 0,
 "id": "window_E04DF8F3_EAE6_E3FF_41E8_65BC08EECAE5",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Window",
 "minHeight": 20,
 "horizontalAlign": "center",
 "bodyBackgroundColorDirection": "vertical",
 "shadow": true,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "bodyBackgroundOpacity": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "bodyPaddingTop": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "closeButtonBorderColor": "#000000",
 "backgroundColor": [],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedIconLineWidth": 5,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverIconColor": "#666666",
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "propagateClick": false,
 "footerBackgroundOpacity": 0,
 "veilOpacity": 0.4,
 "overflow": "scroll",
 "headerPaddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "children": [
  "this.viewer_uidE48AEE2D_EAEA_BE6B_41D8_5891935B4AD7"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 20,
 "footerHeight": 5,
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "borderSize": 0,
 "headerPaddingBottom": 5,
 "minWidth": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonBackgroundOpacity": 0.3,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingLeft": 0,
 "headerPaddingTop": 10,
 "closeButtonPaddingLeft": 5,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 5,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titlePaddingBottom": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "gap": 10,
 "closeButtonIconLineWidth": 5,
 "closeButtonPressedIconColor": "#888888",
 "bodyPaddingLeft": 0,
 "closeButtonPressedBorderColor": "#000000",
 "titlePaddingRight": 5,
 "scrollBarWidth": 10,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [],
 "closeButtonPressedBorderSize": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -95.51,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "id": "camera_E5A14EF8_EAEA_BFE9_41EA_4085C78C91E6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.06,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "id": "camera_E4DF107E_EAEA_A2E6_41DF_B99CDABF6117",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 167.14,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "id": "camera_E72CA021_EAEA_A21B_41E2_9751FF1B787A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.84,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_E50E3F46_EAEA_BE19_41E7_6BEAD3938750",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A349F735_A862_1CEA_41CC_B52B5799B401"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6",
 "thumbnailUrl": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_t.jpg",
 "label": "Portaria Interna 1",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BE72DEF4_B196_978E_41E4_BA70BC8E7E9A",
  "this.overlay_A13CBD70_B191_7A87_41DF_28FFE2D0DF11",
  "this.overlay_A407D402_B1B2_8A8A_41CF_324F7C60D279",
  "this.overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD",
  "this.overlay_F9E21F92_EA18_0657_41D8_18B7ADF0C786",
  "this.overlay_F8BFE74F_EA08_06CC_41D5_EDE109837EEE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.82,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "id": "camera_E7D5FFA4_EAEA_BE19_41D0_475CCA21616B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "Recep\u00e7\u00e3o",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_E5CA1388_E9E1_12D8_41C0_F906A2236BAD_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E5CA1388_E9E1_12D8_41C0_F906A2236BAD",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E5CA1388_E9E1_12D8_41C0_F906A2236BAD.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.84,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_E538AF46_EAEA_BE19_41E4_5B5E386460B6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_E6D2C7C2_E9F4_66ED_41D5_AF341A642CC1",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E4826E2D_EAEA_BE6B_41CF_7274D88AA0B3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4826E2D_EAEA_BE6B_41CF_7274D88AA0B3, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E4826E2D_EAEA_BE6B_41CF_7274D88AA0B3",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435",
 "thumbnailUrl": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_t.jpg",
 "label": "Portaria Interna 2",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A043F973_B1B1_BA89_41D0_40869736F10B",
  "this.overlay_DC876FCF_CFFC_EFE0_41DB_669A664749A6",
  "this.overlay_C7E24929_D555_24FA_41D0_0A1B1FAE0F2F",
  "this.overlay_C4FF9D4F_D5B8_D8DA_41B8_E4FFF0219ED5",
  "this.popup_C80B831E_DB00_382B_41E5_D6C3FCA698F8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.57,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "id": "camera_E564FF17_EAEA_BE26_41E2_0B4D2B8EFB57",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "player": "this.MainViewerPhotoAlbumPlayer",
   "media": "this.album_C454F3DE_D5AC_64FD_41E7_05DC56692B56",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_E4829E2D_EAEA_BE6B_41D7_5668FB5B3705",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173",
 "thumbnailUrl": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_t.jpg",
 "label": "Audit\u00f3rio",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A50A5238_B78A_A6FF_41E2_A8CB2FAE66D6"
 ]
},
{
 "items": [
  {
   "media": "this.video_D47DF42C_DB00_F86E_419B_C191D35F4955",
   "start": "this.viewer_uidE48AEE2D_EAEA_BE6B_41D8_5891935B4AD7VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_E47FCE3D_EAEA_BE6B_41EC_ABB4A3B8AF22, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_E47FCE3D_EAEA_BE6B_41EC_ABB4A3B8AF22, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE48AEE2D_EAEA_BE6B_41D8_5891935B4AD7VideoPlayer)",
   "player": "this.viewer_uidE48AEE2D_EAEA_BE6B_41D8_5891935B4AD7VideoPlayer"
  }
 ],
 "id": "PlayList_E47FCE3D_EAEA_BE6B_41EC_ABB4A3B8AF22",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_DA4B4FD4_D5B8_B7CD_41E9_DC7F2A958E6E",
   "start": "this.viewer_uidE4B7BE1D_EAEA_BE2A_41D4_D7F59A18E46BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_E47C3E3D_EAEA_BE6B_41A5_D40460B44C37, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_E47C3E3D_EAEA_BE6B_41A5_D40460B44C37, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidE4B7BE1D_EAEA_BE2A_41D4_D7F59A18E46BVideoPlayer)",
   "player": "this.viewer_uidE4B7BE1D_EAEA_BE2A_41D4_D7F59A18E46BVideoPlayer"
  }
 ],
 "id": "PlayList_E47C3E3D_EAEA_BE6B_41A5_D40460B44C37",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208",
 "thumbnailUrl": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_t.jpg",
 "label": "Dry Pack 3",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E2F55695_C603_CC06_41E7_77EAD9D46D2E",
  "this.overlay_E0F588F6_C602_4402_41CE_95B45ADBC8B5"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 116.63,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_E55AAF36_EAEA_BE66_41E0_AA98A49233E7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "yaw": -1.46,
 "hideDuration": 500,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.47,
 "id": "popup_C4D91F5E_D5B4_7DFC_41E0_55ADA953883D",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -18.47,
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C4D91F5E_D5B4_7DFC_41E0_55ADA953883D_0_2.jpg",
    "width": 741,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -6.43,
  "class": "PanoramaCameraPosition",
  "pitch": 8.27
 },
 "id": "camera_E42960CD_EAEA_A22B_41E6_3E6D3C5A9C5A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3581AF9_A862_155D_41DF_288F19AF7D82"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85",
 "thumbnailUrl": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_t.jpg",
 "label": "Via Interna 3",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B80866F5_B78F_EF71_41BC_8C6F4830EFAD",
  "this.overlay_CBCE426A_D07B_50A3_41E2_E866A96E7993"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -165.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_E758A021_EAEA_A21B_41E9_6C6BD159E215",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "Recep\u00e7\u00e3o",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_FA69A988_EA18_0A34_41EC_6FF37E11E1E7_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_FA69A988_EA18_0A34_41EC_6FF37E11E1E7",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FA69A988_EA18_0A34_41EC_6FF37E11E1E7.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -97.35,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "id": "camera_E41C9E9A_EAEA_BE2E_41E7_73D3F81A3355",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A349F735_A862_1CEA_41CC_B52B5799B401",
 "thumbnailUrl": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_t.jpg",
 "label": "Portaria Interna 3",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A220881F_B1B6_BAB9_41BC_CE0043F8C896",
  "this.overlay_A31DA2BA_B1B7_8FFB_41C2_EC143161EE08"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -91.84,
  "class": "PanoramaCameraPosition",
  "pitch": -6.43
 },
 "id": "camera_FAFFDF65_EAEA_BE1A_4188_BF59AFF9E20A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "Portaria Externa",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "Portaria Interna 1",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "Estacionamento",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "Portaria Interna 2",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "Portaria Interna 3",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "Via Interna 1",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "Via Interna 2",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "Via Interna 3",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "Via Interna 3a",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "Via Iantrena 4",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "Via Interna 5",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  },
  {
   "label": "Via Interna 6",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "MenuItem"
  },
  {
   "label": "Via Interna 7",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "MenuItem"
  },
  {
   "label": "Restaurante",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "MenuItem"
  },
  {
   "label": "Via Iantena 8",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "MenuItem"
  },
  {
   "label": "Via Interna 9",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "MenuItem"
  },
  {
   "label": "Auditório",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "MenuItem"
  },
  {
   "label": "Liquid pack 1",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "MenuItem"
  },
  {
   "label": "Liquid Pack 2",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "MenuItem"
  },
  {
   "label": "Liquid Pack 3",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "MenuItem"
  },
  {
   "label": "Liquid pack 4",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "MenuItem"
  },
  {
   "label": "Dry Pack 1",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "MenuItem"
  },
  {
   "label": "Dry Pack 2",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "MenuItem"
  },
  {
   "label": "Dry Pack 3",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "MenuItem"
  },
  {
   "label": "Dry Pack 4",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "selectedBackgroundColor": "#202020",
 "rollOverOpacity": 0.8,
 "class": "Menu",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "backgroundColor": "#404040",
 "opacity": 0.4
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 72,
  "yaw": -61.53,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "id": "camera_E7670002_EAEA_A219_41C4_F80D11F44C83",
 "manualRotationSpeed": 1826,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.82,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "id": "camera_E7D12FA4_EAEA_BE19_41D8_7D27FF4FE162",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_FA69A988_EA18_0A34_41EC_6FF37E11E1E7",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E4822E2D_EAEA_BE6B_41DE_AA0717B0279A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4822E2D_EAEA_BE6B_41DE_AA0717B0279A, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E4822E2D_EAEA_BE6B_41DE_AA0717B0279A",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E79B7FE2_EAEA_BE1E_41D6_42DD56515FD2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.51,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "id": "camera_E44A40BD_EAEA_A26B_41DC_90BEE2EA46B5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.92,
  "class": "PanoramaCameraPosition",
  "pitch": -11.94
 },
 "id": "camera_E7796002_EAEA_A219_41E6_32E40B3B41CA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9",
 "thumbnailUrl": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_t.jpg",
 "label": "Dry Pack 1",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CF5F4019_D104_82C6_41D6_89E31736E190",
  "this.overlay_CA11E43E_D13B_833A_41A9_CEF351E70DB9",
  "this.overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA",
  "this.overlay_F94D4DB4_EA38_0A5C_41CA_289353F5C383"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A36793D7_A862_1B55_41D4_440646406482"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB",
 "thumbnailUrl": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_t.jpg",
 "label": "Via Interna 6",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A7B5C93C_B7BA_A2F0_41C3_44EFD164F3CE",
  "this.overlay_F036D048_D017_50E0_41C3_71CE2E845D02"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_FAEFFF65_EAEA_BE1A_41E5_59B80A6D4587",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -151.53,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "id": "camera_FACFAF75_EAEA_BEFB_41D4_826BAE0C9D17",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 171.73,
  "class": "PanoramaCameraPosition",
  "pitch": 9.18
 },
 "id": "camera_E746D011_EAEA_A23A_41E0_5DA148C255B3",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -80.82,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_E73A9040_EAEA_A219_41C5_8E2D6F8D12ED",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "Liquid_Pack",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_FEFD75DF_EA08_05CD_41D0_997B106BF4A7_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_FEFD75DF_EA08_05CD_41D0_997B106BF4A7",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FEFD75DF_EA08_05CD_41D0_997B106BF4A7.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E7864FE2_EAEA_BE1E_41D9_8E7671898261",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 121.22,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "id": "camera_E7BA9FD3_EAEA_BE3F_41E1_80E31E2F9538",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -155.2,
  "class": "PanoramaCameraPosition",
  "pitch": -8.27
 },
 "id": "camera_E5876F08_EAEA_BE29_41BB_3759431A5149",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "yaw": -64.63,
 "hideDuration": 500,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 23.42,
 "autoplay": true,
 "id": "popup_C80B831E_DB00_382B_41E5_D6C3FCA698F8",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "loop": false,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 8.54,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_DA4B4FD4_D5B8_B7CD_41E9_DC7F2A958E6E.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -114.8,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_E4AD707E_EAEA_A2E6_41EB_76A28DA0E55B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.06,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_E57ABF27_EAEA_BE67_41D7_BD7EE79E3F3E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.59,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "id": "camera_E4A2708E_EAEA_A226_41E1_A94118ECEB43",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "Apresentadora_portaria",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_E6D2C7C2_E9F4_66ED_41D5_AF341A642CC1_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E6D2C7C2_E9F4_66ED_41D5_AF341A642CC1",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_E6D2C7C2_E9F4_66ED_41D5_AF341A642CC1.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.18,
  "class": "PanoramaCameraPosition",
  "pitch": 16.53
 },
 "id": "camera_E5E2CEAA_EAEA_BE69_41D2_845251A24615",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD",
 "thumbnailUrl": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_t.jpg",
 "label": "Via Interna 1",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B9339709_B78B_AE91_41C7_B3E4ECAC4021",
  "this.overlay_B8E9E7F0_B789_AD8F_419E_E67E812BF4DD"
 ]
},
{
 "label": "Dry_Pack",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_E556DFA1_E9E1_32C9_41E9_573DE771A55C_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E556DFA1_E9E1_32C9_41E9_573DE771A55C",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E556DFA1_E9E1_32C9_41E9_573DE771A55C.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_D7C903AB_DAAE_1449_41E9_D55ADCEEFC14.mp3",
  "oggUrl": "media/audio_D7C903AB_DAAE_1449_41E9_D55ADCEEFC14.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_D7C903AB_DAAE_1449_41E9_D55ADCEEFC14",
 "data": {
  "label": "Musica_Fundo_Tour"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 38.57,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "id": "camera_E439AE7B_EAEA_BEEF_41CC_6655CC332DB0",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD",
 "thumbnailUrl": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_t.jpg",
 "label": "Dry Pack 2",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EF60E2AD_C60E_4406_41D4_F7297F483D84",
  "this.overlay_E1B2FE22_C60E_5C3D_41B3_E0692752D939",
  "this.overlay_CB48F373_DA62_4F4C_41EB_3FDB4ABED311"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A",
 "thumbnailUrl": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_t.jpg",
 "label": "Via Interna 9",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A6978731_B78F_EEF1_41D8_E68C72C069D4",
  "this.overlay_B82EAAEF_B78A_E791_41E5_353D96AFB13B",
  "this.overlay_C6331C2B_D034_D0A0_41E7_6865CDED1858",
  "this.overlay_CFBF13C0_DA65_CF4C_41C6_0E04AA901141",
  "this.overlay_D43517C4_DB00_181E_41D0_6610FE83D419",
  "this.overlay_D4AB9751_DB00_1836_41D1_0F7F822FAF89",
  "this.popup_C9D128E5_DB00_081E_41E1_CCB4CF24F350"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A36793D7_A862_1B55_41D4_440646406482",
 "thumbnailUrl": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_t.jpg",
 "label": "Via Interna 5",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A6934206_B7BA_A693_41E5_87D63B549937",
  "this.overlay_A7B15C2D_B7BA_A290_41D0_2F9FE4F86EA7"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 169.9,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "id": "camera_E70FE040_EAEA_A219_41D0_974B8E363EF3",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84",
 "thumbnailUrl": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_t.jpg",
 "label": "Liquid pack 1",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A63439FD_B786_6570_41E5_54479758EA92",
  "this.overlay_A60ED5DC_B79A_6DB0_41C4_88ACFDAB3EF5",
  "this.overlay_CC2BCD1D_DAA5_B8F4_41E1_BB1421613A38",
  "this.overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A",
  "this.overlay_F95D03C8_EA08_7E34_41E8_8D088E61DA2B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "INTEGRA\u00c7\u00c3O_VISITAS",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_DA4B4FD4_D5B8_B7CD_41E9_DC7F2A958E6E_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_DA4B4FD4_D5B8_B7CD_41E9_DC7F2A958E6E",
 "class": "Video",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_DA4B4FD4_D5B8_B7CD_41E9_DC7F2A958E6E.mp4"
 }
},
{
 "label": "Liquid_Pack",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_E52E11B4_E9E1_2ECF_41C1_D0F356C40E69_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_E52E11B4_E9E1_2ECF_41C1_D0F356C40E69",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_E52E11B4_E9E1_2ECF_41C1_D0F356C40E69.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.59,
  "class": "PanoramaCameraPosition",
  "pitch": 6.43
 },
 "id": "camera_E4B3608E_EAEA_A226_41E7_C68C1E60D138",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "Dry_Pack",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_FEA75D94_EA38_0A5C_41E3_ACF3D1B6FF6C_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_FEA75D94_EA38_0A5C_41E3_ACF3D1B6FF6C",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FEA75D94_EA38_0A5C_41E3_ACF3D1B6FF6C.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.59,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "id": "camera_E45870CD_EAEA_A22B_41DD_AFF0B282B7B2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A340661D_A862_1CDA_41B9_9FDBE569727F",
 "thumbnailUrl": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_t.jpg",
 "label": "Liquid pack 4",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A628F7E5_B79E_6D90_41DC_87CCCE29C3F5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A3581AF9_A862_155D_41DF_288F19AF7D82",
 "thumbnailUrl": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_t.jpg",
 "label": "Via Interna 3a",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A767AA73_B79E_A771_41DA_A8C299D26C69",
  "this.overlay_CC5876B0_D077_51A0_4195_8E5953B5EADB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -170.82,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "id": "camera_E5C11ED9_EAEA_BE2B_41D1_E8CB66F7912B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 116.63,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "id": "camera_E5285F36_EAEA_BE66_41C3_1B1ED47A4C92",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.84,
  "class": "PanoramaCameraPosition",
  "pitch": -10.1
 },
 "id": "camera_E7ACCFB3_EAEA_BE7E_41DB_1AB89124B02E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 72,
  "yaw": -51.43,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "id": "camera_E7A10FC3_EAEA_BE1F_41DF_E5AC06008560",
 "manualRotationSpeed": 1826,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.84,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "id": "camera_E5F35EC9_EAEA_BE2B_41E9_F147BA27EBE7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91",
 "thumbnailUrl": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_t.jpg",
 "label": "Estacionamento",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A19960EF_B191_8B99_41E5_7BD598FADD9B",
  "this.overlay_A020FDF1_B1B1_7589_41DA_0F0565A323C4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.59,
  "class": "PanoramaCameraPosition",
  "pitch": 6.43
 },
 "id": "camera_E481A09E_EAEA_A229_41EB_B27DDA0FB2AC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "id": "camera_E464A0AD_EAEA_A26A_41C4_EC9CB790A86E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "Integra\u00e7\u00e3o_TELA",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_DA1C3F31_D553_5CEA_41D1_D85E6B5B4298_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_DA1C3F31_D553_5CEA_41D1_D85E6B5B4298",
 "class": "Video",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_DA1C3F31_D553_5CEA_41D1_D85E6B5B4298.mp4"
 }
},
{
 "items": [
  {
   "media": "this.video_DA1C3F31_D553_5CEA_41D1_D85E6B5B4298",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E4802E2D_EAEA_BE6B_41D6_267784154E01, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4802E2D_EAEA_BE6B_41D6_267784154E01, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E4802E2D_EAEA_BE6B_41D6_267784154E01",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.69,
  "class": "PanoramaCameraPosition",
  "pitch": -31.22
 },
 "id": "camera_E54ADF27_EAEA_BE67_41D1_75B29A852420",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_C1CC8C05_D5B5_E34F_41B6_7C2E5ECED02C",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_C4D91F5E_D5B4_7DFC_41E0_55ADA953883D_0_0.jpg",
   "width": 1512,
   "class": "ImageResourceLevel",
   "height": 2088
  },
  {
   "url": "media/popup_C4D91F5E_D5B4_7DFC_41E0_55ADA953883D_0_1.jpg",
   "width": 1483,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_C4D91F5E_D5B4_7DFC_41E0_55ADA953883D_0_2.jpg",
   "width": 741,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_C4D91F5E_D5B4_7DFC_41E0_55ADA953883D_0_3.jpg",
   "width": 370,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6",
 "thumbnailUrl": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_t.jpg",
 "label": "Via Interna 2",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A6B8C7F8_B787_AD70_41CF_2542E10BDF46",
  "this.overlay_A6DD0DFC_B786_5D70_41D3_B271ED250AF2"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB",
 "thumbnailUrl": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_t.jpg",
 "label": "Via Interna 7",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E4782E3D_EAEA_BE6B_41D9_1F6C17174B1C",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B8436F22_B786_5E90_41D5_C8ED8D15D020",
  "this.overlay_A63794CB_B789_E390_41E6_AE8D7ACF29BA",
  "this.overlay_C2087152_D13C_8545_41D6_4537466B4D2D",
  "this.overlay_DB26B095_D59C_234F_41D6_7FA291C3C139",
  "this.popup_C4D91F5E_D5B4_7DFC_41E0_55ADA953883D"
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543"
 ],
 "layout": "absolute",
 "left": "0%",
 "width": 330,
 "scrollBarColor": "#000000",
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "layout": "absolute",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 641,
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_BD15DCC8_9478_145B_41E1_35766BBBD98F",
  "this.Container_BD147CC8_9478_145B_41E1_A1505134A3C3"
 ],
 "layout": "absolute",
 "id": "Container_BD141CC8_9478_145B_41D4_265F47E47DB6",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "layout": "absolute",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "layout": "absolute",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "layout": "absolute",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "layout": "absolute",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_BD878AD4_9478_3C4B_41E0_1542ED46C5EC",
  "this.Container_BD84CAD4_9478_3C4B_41DB_EAABF4EA300E"
 ],
 "layout": "absolute",
 "id": "Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "class": "UIComponent",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent1567"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "class": "ZoomImage",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage1568"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton1569"
 },
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "horizontalAlign": "center",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 10,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minWidth": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "id": "IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
 "width": 30,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57.png",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Fullscreen"
 }
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "id": "IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
 "width": 30,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE.png",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Sound"
 }
},
{
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.59,
   "image": "this.AnimatedImageResource_EFD48EB8_C602_7C0E_41E6_647521E882BC",
   "pitch": -9.86,
   "yaw": 66.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84, this.camera_E5E2CEAA_EAEA_BE69_41D2_845251A24615); this.mainPlayList.set('selectedIndex', 17); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B9512ACC_B78B_A797_41B9_229A83D6865F",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.59,
   "yaw": 66.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.19,
   "image": "this.AnimatedImageResource_EFD46EB8_C602_7C0E_41E3_72B4EA45243F",
   "pitch": -13.88,
   "yaw": -156.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB, this.camera_E41C9E9A_EAEA_BE2E_41E7_73D3F81A3355); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B9246AC8_B789_A79F_41E5_1D075CFF96D2",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.19,
   "yaw": -156.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.31,
   "image": "this.AnimatedImageResource_EFD7DEB8_C602_7C0E_41CE_8AEF58511638",
   "pitch": -1.19,
   "yaw": 1.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A, this.camera_E5F35EC9_EAEA_BE2B_41E9_F147BA27EBE7); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B948DD96_B78F_BDB3_41B2_B3B710219F48",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.31,
   "yaw": 1.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Liquid Pack"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_3_0.png",
      "width": 361,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "pitch": -5.4,
   "yaw": 74.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CEDD0BF7_DAA7_BF33_41DA_654224286DCF",
 "maps": [
  {
   "hfov": 22.47,
   "yaw": 74.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_3_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Audit\u00f3rio e Dry Pack"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_4_0.png",
      "width": 430,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ]
   },
   "pitch": 2.09,
   "yaw": 3.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CF1608BC_DAA3_B935_41A3_208E38F5C536",
 "maps": [
  {
   "hfov": 26.86,
   "yaw": 3.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_4_0_map.gif",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Retornar \u00e0 Recep\u00e7\u00e3o"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_5_0.png",
      "width": 607,
      "class": "ImageResourceLevel",
      "height": 92
     }
    ]
   },
   "pitch": -6.66,
   "yaw": -155.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CEA2DEEF_DAAF_B954_41B9_598A29BCAB48",
 "maps": [
  {
   "hfov": 37.69,
   "yaw": -155.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_5_0_map.gif",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "media": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0",
 "class": "PanoramaPlayListItem",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_camera",
 "id": "PanoramaPlayListItem_E4757E3D_EAEA_BE6B_41C2_A53B4DE1BC0E"
},
{
 "media": "this.panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6",
 "class": "PanoramaPlayListItem",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_camera",
 "id": "PanoramaPlayListItem_E4753E3D_EAEA_BE6B_41D2_1A65A8ABF5B3"
},
{
 "media": "this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD",
 "class": "PanoramaPlayListItem",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_camera",
 "id": "PanoramaPlayListItem_E474EE3D_EAEA_BE6B_41E5_32560B9735BB"
},
{
 "media": "this.panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173",
 "class": "PanoramaPlayListItem",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_camera",
 "id": "PanoramaPlayListItem_E4749E3D_EAEA_BE6B_41B3_F284497109D0"
},
{
 "media": "this.panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84",
 "class": "PanoramaPlayListItem",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_camera",
 "id": "PanoramaPlayListItem_E4740E3D_EAEA_BE6B_41E9_AEC67F95669D"
},
{
 "media": "this.panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9",
 "class": "PanoramaPlayListItem",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_camera",
 "id": "PanoramaPlayListItem_E477BE3D_EAEA_BE6B_41E0_2A6CEB508258"
},
{
 "items": [
  {
   "camera": {
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.61",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.66"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_C454F3DE_D5AC_64FD_41E7_05DC56692B56_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_C454F3DE_D5AC_64FD_41E7_05DC56692B56_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.02,
   "image": "this.AnimatedImageResource_F57BB717_D00B_B060_41C6_FCA27A519738",
   "pitch": -21.54,
   "yaw": 130.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208, this.camera_E4E7C05F_EAEA_A226_41E9_48C0784DA753); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EC16A53D_C606_4C07_41E1_55E97828904C",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.02,
   "yaw": 130.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.43,
   "image": "this.AnimatedImageResource_F1F33B8D_D03F_7060_41E6_DD778FEEB7F5",
   "pitch": -4.71,
   "yaw": -158.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F1BF2BE0_D03B_57A0_41E1_658EAEAB028E",
 "data": {
  "label": "Arrow 06b Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.43,
   "yaw": -158.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0_HS_4_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.99,
   "image": "this.AnimatedImageResource_F1F35B8D_D03F_7060_41E7_561965E49065",
   "pitch": -5.02,
   "yaw": 168.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB, this.camera_E76D9FF2_EAEA_BDF9_41DE_9E33D07D8CF4); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F27BBEA1_D03D_F1A0_415B_D4C9667A0156",
 "data": {
  "label": "Arrow 06c Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 168.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0_HS_5_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.95,
   "image": "this.AnimatedImageResource_FE37168B_D00B_B060_41E3_742E2017947B",
   "pitch": -22.3,
   "yaw": 5.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A340661D_A862_1CDA_41B9_9FDBE569727F, this.camera_E73A9040_EAEA_A219_41C5_8E2D6F8D12ED); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A4A33BD3_B79A_E5B1_41C3_EB207FF2705E",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.95,
   "yaw": 5.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.11,
   "image": "this.AnimatedImageResource_C9A3BBE7_D10C_854A_41BC_A910145878B1",
   "pitch": -21.54,
   "yaw": -172.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F, this.camera_E7266030_EAEA_A27A_41C9_D52C003B4EC3); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C65E7377_D10C_854A_41E4_8C3144611B32",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.11,
   "yaw": -172.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "id": "IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
 "width": 30,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3.png",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "visible": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "id": "IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
 "width": 30,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4.png",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 30,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Hs visibility"
 }
},
{
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "id": "IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
 "width": 34,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB.png",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 34,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Gyroscopic"
 }
},
{
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.22,
   "image": "this.AnimatedImageResource_FE30F68B_D00B_B060_41E2_D1C065E47401",
   "pitch": -15.01,
   "yaw": -91.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5, this.camera_E42960CD_EAEA_A22B_41E6_3E6D3C5A9C5A); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E7459D7A_C602_DC02_41E1_FE86F25CD83E",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.22,
   "yaw": -91.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.43,
   "image": "this.AnimatedImageResource_FE30868B_D00B_B060_41DF_04D265CE99BA",
   "pitch": -16.77,
   "yaw": 83.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84, this.camera_E45870CD_EAEA_A22B_41DD_AFF0B282B7B2); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E7EA7691_C606_CC1E_41E4_ED5040F76228",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.43,
   "yaw": 83.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.38,
   "image": "this.AnimatedImageResource_CDE5A264_D00F_70A7_41AA_EEA3AFEFC5ED",
   "pitch": -13.13,
   "yaw": 89.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A36793D7_A862_1B55_41D4_440646406482, this.camera_E481A09E_EAEA_A229_41EB_B27DDA0FB2AC); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A63CE296_B7B9_A7B0_41BF_D06805565A8D",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.38,
   "yaw": 89.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.2,
   "image": "this.AnimatedImageResource_CDE50264_D00F_70A7_41C1_10BBF9481C87",
   "pitch": -21.79,
   "yaw": -172.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3581AF9_A862_155D_41DF_288F19AF7D82, this.camera_E496809E_EAEA_A229_41DD_CC809775A20C); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CCD6F2CB_D00D_B1E0_41E2_04244659D30D",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.2,
   "yaw": -172.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.54,
   "image": "this.AnimatedImageResource_BC922A28_B2D2_1FF6_41CB_8976860B13AE",
   "pitch": -27.95,
   "yaw": 2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6, this.camera_E7AADFC3_EAEA_BE1F_41EB_096319F15693); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BE693F94_B192_958F_415A_5F591D5E40E6",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.54,
   "yaw": 2.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.91,
   "image": "this.AnimatedImageResource_BC926A28_B2D2_1FF6_41E5_2FDB67ADF6DC",
   "pitch": -29.46,
   "yaw": 96.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91, this.camera_E7D12FA4_EAEA_BE19_41D8_7D27FF4FE162); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A1793857_B18F_FA89_41C8_79500625309D",
 "data": {
  "label": "Arrow 06a Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.91,
   "yaw": 96.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0_HS_1_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.44,
   "image": "this.AnimatedImageResource_C8082F1C_D00B_D060_41DF_3A25B6805AFC",
   "pitch": -13,
   "yaw": 76.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD, this.camera_E7ACCFB3_EAEA_BE7E_41DB_1AB89124B02E); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C47E7002_D00C_D060_41D8_F5380895A9D3",
 "data": {
  "label": "Arrow 06c Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.44,
   "yaw": 76.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0_HS_2_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_E6D2C7C2_E9F4_66ED_41D5_AF341A642CC1.mp4"
 },
 "hfov": 50.44,
 "autoplay": false,
 "id": "overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952",
 "enabledInCardboard": true,
 "loop": false,
 "class": "VideoPanoramaOverlay",
 "pitch": -16.31,
 "useHandCursor": true,
 "roll": -4.18,
 "yaw": 40.1,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "chromaThreshold": 0.27,
 "rotationY": -10.42,
 "rotationX": 13.75,
 "chromaSmoothing": 0,
 "click": "if(this.overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952.get('state') != 'playing'){ this.overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952.play(); } else { this.overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952.pause(); }",
 "data": {
  "label": "Video"
 },
 "chromaColor": "#28C034",
 "vfov": 33.43,
 "videoVisibleOnStop": false,
 "distance": 50,
 "stateChange": "if(this.overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952', [this.overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952]); } else { this.resumeGlobalAudios('overlay_E770A842_E9F4_29F2_41D7_BC05A4E2F952'); }"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Imagem"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0_HS_4_0.png",
      "width": 270,
      "class": "ImageResourceLevel",
      "height": 331
     }
    ]
   },
   "hfov": 14.4,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.65,
   "yaw": 31.19
  }
 ],
 "id": "overlay_FABD7E23_EA18_0674_41E1_711D23615DDB",
 "maps": [
  {
   "hfov": 14.4,
   "yaw": 31.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   }
  }
 ]
},
{
 "cursor": "hand",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "shadow": false,
 "borderSize": 0,
 "right": 10,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uidE4B7BE1D_EAEA_BE2A_41D4_D7F59A18E46B",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea1565"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "viewer_uidE48AEE2D_EAEA_BE6B_41D8_5891935B4AD7",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea1566"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.04,
   "image": "this.AnimatedImageResource_C3046847_D105_834A_41D5_6F2A3073D62F",
   "pitch": -23.92,
   "yaw": -98.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435, this.camera_E7670002_EAEA_A219_41C4_F80D11F44C83); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BE72DEF4_B196_978E_41E4_BA70BC8E7E9A",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.04,
   "yaw": -98.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.9,
   "image": "this.AnimatedImageResource_C3076847_D105_834A_41E5_2EBC4A54BF92",
   "pitch": -34.1,
   "yaw": 175.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0, this.camera_E7796002_EAEA_A219_41E6_32E40B3B41CA); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A13CBD70_B191_7A87_41DF_28FFE2D0DF11",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.9,
   "yaw": 175.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.74,
   "image": "this.AnimatedImageResource_C3072847_D105_834A_41D9_96A3D0751522",
   "pitch": -32.22,
   "yaw": 61.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A349F735_A862_1CEA_41CC_B52B5799B401, this.camera_E7725011_EAEA_A23A_41E0_BB74C1C33AC5); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A407D402_B1B2_8A8A_41CF_324F7C60D279",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.74,
   "yaw": 61.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FA69A988_EA18_0A34_41EC_6FF37E11E1E7.mp4"
 },
 "hfov": 67.28,
 "autoplay": false,
 "id": "overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD",
 "enabledInCardboard": true,
 "loop": false,
 "class": "VideoPanoramaOverlay",
 "pitch": -20.22,
 "useHandCursor": true,
 "roll": -2,
 "yaw": 4.88,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "chromaThreshold": 0.21,
 "rotationY": -1.74,
 "rotationX": 11.71,
 "chromaSmoothing": 0,
 "click": "if(this.overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD.get('state') != 'playing'){ this.overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD.play(); } else { this.overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD.pause(); }",
 "data": {
  "label": "Video"
 },
 "chromaColor": "#28C034",
 "vfov": 50.54,
 "videoVisibleOnStop": false,
 "distance": 50,
 "stateChange": "if(this.overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD', [this.overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD]); } else { this.resumeGlobalAudios('overlay_FA8A53A3_EA18_3E75_41E1_408CA8D0DDAD'); }"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Imagem"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_3_0.png",
      "width": 314,
      "class": "ImageResourceLevel",
      "height": 403
     }
    ]
   },
   "hfov": 17.12,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -29.55,
   "yaw": 23.81
  }
 ],
 "id": "overlay_F9E21F92_EA18_0657_41D8_18B7ADF0C786",
 "maps": [
  {
   "hfov": 17.12,
   "yaw": 23.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Sala de Integra\u00e7\u00e3o"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 48.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_4_0.png",
      "width": 781,
      "class": "ImageResourceLevel",
      "height": 122
     }
    ]
   },
   "pitch": -1.13,
   "yaw": -102.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F8BFE74F_EA08_06CC_41D5_EDE109837EEE",
 "maps": [
  {
   "hfov": 48.83,
   "yaw": -102.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_4_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.96,
   "image": "this.AnimatedImageResource_BC959A28_B2D2_1FF6_41B2_9CBE1ADE863E",
   "pitch": -23.93,
   "yaw": -142.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0, this.camera_E40C2E8B_EAEA_BE2F_41BA_CFC0D9F6B497); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A043F973_B1B1_BA89_41D0_40869736F10B",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.96,
   "yaw": -142.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.27,
   "image": "this.AnimatedImageResource_C2E44C06_D11D_82CA_41B4_8DECB94CAB13",
   "pitch": -26.93,
   "yaw": 152.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6, this.camera_E439AE7B_EAEA_BEEF_41CC_6655CC332DB0); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DC876FCF_CFFC_EFE0_41DB_669A664749A6",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.27,
   "yaw": 152.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "blending": 0.02,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_DA1C3F31_D553_5CEA_41D1_D85E6B5B4298.mp4"
 },
 "hfov": 21.95,
 "id": "overlay_C7E24929_D555_24FA_41D0_0A1B1FAE0F2F",
 "enabledInCardboard": true,
 "autoplay": true,
 "loop": true,
 "class": "VideoPanoramaOverlay",
 "pitch": -2.1,
 "useHandCursor": true,
 "yaw": -63.1,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_C7E24929_D555_24FA_41D0_0A1B1FAE0F2F_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ]
 },
 "rotationY": 22.89,
 "rotationX": 3.8,
 "click": "this.overlay_C7E24929_D555_24FA_41D0_0A1B1FAE0F2F.stop()",
 "videoVisibleOnStop": false,
 "roll": 1.84,
 "vfov": 12.57,
 "distance": 50,
 "data": {
  "label": "Video"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 23.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0_HS_3_0.png",
      "width": 378,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ]
   },
   "pitch": 8.54,
   "yaw": -64.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_C80B831E_DB00_382B_41E5_D6C3FCA698F8, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_E04CD8F3_EAE6_E3FF_41E6_E5C88569FEA6, this.video_DA4B4FD4_D5B8_B7CD_41E9_DC7F2A958E6E, this.PlayList_E47C3E3D_EAEA_BE6B_41A5_D40460B44C37, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C4FF9D4F_D5B8_D8DA_41B8_E4FFF0219ED5",
 "data": {
  "label": "Clique aqui para assistir \u000dao v\u00eddeo de integra\u00e7\u00e3o"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.42,
   "yaw": -64.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0_HS_3_0_map.gif",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.89,
   "image": "this.AnimatedImageResource_EFD67EB8_C602_7C0E_41D5_A575A15362BC",
   "pitch": -24.05,
   "yaw": -68.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A, this.camera_E746D011_EAEA_A23A_41E0_5DA148C255B3); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A50A5238_B78A_A6FF_41E2_A8CB2FAE66D6",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.89,
   "yaw": -68.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "viewerArea": "this.viewer_uidE48AEE2D_EAEA_BE6B_41D8_5891935B4AD7",
 "id": "viewer_uidE48AEE2D_EAEA_BE6B_41D8_5891935B4AD7VideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "viewerArea": "this.viewer_uidE4B7BE1D_EAEA_BE2A_41D4_D7F59A18E46B",
 "id": "viewer_uidE4B7BE1D_EAEA_BE2A_41D4_D7F59A18E46BVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.52,
   "image": "this.AnimatedImageResource_EC2D7EB8_C602_7C0E_41D4_5D27110D0A01",
   "pitch": -15.51,
   "yaw": 6.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD, this.camera_E57ABF27_EAEA_BE67_41D7_BD7EE79E3F3E); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E2F55695_C603_CC06_41E7_77EAD9D46D2E",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.52,
   "yaw": 6.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.61,
   "image": "this.AnimatedImageResource_CCC19D36_DA62_5B35_41E2_8356F15119DF",
   "pitch": -57.22,
   "yaw": -156.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40, this.camera_E54ADF27_EAEA_BE67_41D1_75B29A852420); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E0F588F6_C602_4402_41CE_95B45ADBC8B5",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.61,
   "yaw": -156.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -57.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.43,
   "image": "this.AnimatedImageResource_F0173C60_D00B_F0A0_4179_C199CFA60DD4",
   "pitch": -9.36,
   "yaw": 3.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6, this.camera_E4AD707E_EAEA_A2E6_41EB_76A28DA0E55B); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B80866F5_B78F_EF71_41BC_8C6F4830EFAD",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.43,
   "yaw": 3.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.73,
   "image": "this.AnimatedImageResource_F017CC60_D00B_F0A0_41A7_B9CC4CB087EE",
   "pitch": -7.1,
   "yaw": 100.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3581AF9_A862_155D_41DF_288F19AF7D82, this.camera_E4A2708E_EAEA_A226_41E1_A94118ECEB43); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CBCE426A_D07B_50A3_41E2_E866A96E7993",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.73,
   "yaw": 100.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.61,
   "image": "this.AnimatedImageResource_BC95CA28_B2D2_1FF6_41E0_82AC4EC9E9DE",
   "pitch": -27.32,
   "yaw": -113.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0, this.camera_E7BA9FD3_EAEA_BE3F_41E1_80E31E2F9538); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A220881F_B1B6_BAB9_41BC_CE0043F8C896",
 "data": {
  "label": "Arrow 06a Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.61,
   "yaw": -113.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.2,
   "image": "this.AnimatedImageResource_BC951A28_B2D2_1FF6_41C9_6EACB6CA9410",
   "pitch": -19.28,
   "yaw": -86.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435, this.camera_E7A10FC3_EAEA_BE1F_41DF_E5AC06008560); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A31DA2BA_B1B7_8FFB_41C2_EC143161EE08",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.2,
   "yaw": -86.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.67,
   "image": "this.AnimatedImageResource_CCCE5D36_DA62_5B35_41E9_54F29F494784",
   "pitch": -9.73,
   "yaw": -32.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A, this.camera_E5D14EE8_EAEA_BFEA_41EB_8C78BDDC5BAE); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CF5F4019_D104_82C6_41D6_89E31736E190",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.67,
   "yaw": -32.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.22,
   "image": "this.AnimatedImageResource_CCCFCD36_DA62_5B35_41E8_3EBEFF57CD75",
   "pitch": -29.08,
   "yaw": -162.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD, this.camera_E5C11ED9_EAEA_BE2B_41D1_E8CB66F7912B); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CA11E43E_D13B_833A_41A9_CEF351E70DB9",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.22,
   "yaw": -162.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0_HS_3_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FEA75D94_EA38_0A5C_41E3_ACF3D1B6FF6C.mp4"
 },
 "hfov": 57.74,
 "autoplay": false,
 "id": "overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA",
 "enabledInCardboard": true,
 "loop": false,
 "class": "VideoPanoramaOverlay",
 "pitch": -14.65,
 "useHandCursor": true,
 "roll": 1.28,
 "yaw": -97.05,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "chromaThreshold": 0.23,
 "rotationY": 6.32,
 "rotationX": -3.13,
 "chromaSmoothing": 0,
 "click": "if(this.overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA.get('state') != 'playing'){ this.overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA.play(); } else { this.overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA.pause(); }",
 "data": {
  "label": "Video"
 },
 "chromaColor": "#28C034",
 "vfov": 34.54,
 "videoVisibleOnStop": false,
 "distance": 50,
 "stateChange": "if(this.overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA', [this.overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA]); } else { this.resumeGlobalAudios('overlay_F878F7BB_EA38_0654_41A9_67B31DC5DCDA'); }"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Imagem"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0_HS_4_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 279
     }
    ]
   },
   "hfov": 13.46,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.45,
   "yaw": -82.86
  }
 ],
 "id": "overlay_F94D4DB4_EA38_0A5C_41CA_289353F5C383",
 "maps": [
  {
   "hfov": 13.46,
   "yaw": -82.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.84,
   "image": "this.AnimatedImageResource_F5A6B095_D014_B060_41E8_67A3CE4FCBD8",
   "pitch": -6.97,
   "yaw": -1.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A36793D7_A862_1B55_41D4_440646406482, this.camera_E5A14EF8_EAEA_BFE9_41EA_4085C78C91E6); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A7B5C93C_B7BA_A2F0_41C3_44EFD164F3CE",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.84,
   "yaw": -1.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.99,
   "image": "this.AnimatedImageResource_F43BA106_D015_B060_41AB_1742C0011156",
   "pitch": -13.57,
   "yaw": 178.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB, this.camera_E5B71EF8_EAEA_BFE9_41D1_CA84FFAC1F41); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F036D048_D017_50E0_41C3_71CE2E845D02",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.99,
   "yaw": 178.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.96,
   "image": "this.AnimatedImageResource_EFD91EB8_C602_7C0E_41C4_0A338BB7E2BC",
   "pitch": -7.35,
   "yaw": 0.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6, this.camera_E5285F36_EAEA_BE66_41C3_1B1ED47A4C92); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B9339709_B78B_AE91_41C7_B3E4ECAC4021",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.96,
   "yaw": 0.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.76,
   "image": "this.AnimatedImageResource_EFD8CEB8_C602_7C0E_41B5_3B1B11A4E0AB",
   "pitch": -10.49,
   "yaw": 162.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0, this.camera_E50E3F46_EAEA_BE19_41E7_6BEAD3938750); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B8E9E7F0_B789_AD8F_419E_E67E812BF4DD",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.76,
   "yaw": 162.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.54,
   "image": "this.AnimatedImageResource_FE31868B_D00B_B060_41C5_3442AEC0FE93",
   "pitch": -41.14,
   "yaw": -167.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9, this.camera_E70FE040_EAEA_A219_41D0_974B8E363EF3); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF60E2AD_C60E_4406_41D4_F7297F483D84",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.54,
   "yaw": -167.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.04,
   "image": "this.AnimatedImageResource_CCC0BD36_DA62_5B35_41E3_542FCC859D19",
   "pitch": -16.52,
   "yaw": 29.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40, this.camera_E7104050_EAEA_A239_41E3_E76772CB89EB); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E1B2FE22_C60E_5C3D_41B3_E0692752D939",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.04,
   "yaw": 29.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.03,
   "image": "this.AnimatedImageResource_CCC0DD36_DA62_5B35_41E5_3A9B5BBB48F5",
   "pitch": -16.77,
   "yaw": -43.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208, this.camera_E7022050_EAEA_A239_41EB_4DF3314C2469); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CB48F373_DA62_4F4C_41EB_3FDB4ABED311",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.03,
   "yaw": -43.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.68,
   "image": "this.AnimatedImageResource_F35CB374_D035_F0A7_41A4_F0FB841B2237",
   "pitch": -8.98,
   "yaw": 12.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173, this.camera_E4DF107E_EAEA_A2E6_41DF_B99CDABF6117); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A6978731_B78F_EEF1_41D8_E68C72C069D4",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.68,
   "yaw": 12.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.95,
   "image": "this.AnimatedImageResource_CC3807EC_DAA5_F755_41EA_E010D3C95648",
   "pitch": -8.39,
   "yaw": 43.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9, this.camera_E4F5F05F_EAEA_A226_41E4_A1F1A34B97F0); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B82EAAEF_B78A_E791_41E5_353D96AFB13B",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.95,
   "yaw": 43.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.07,
   "image": "this.AnimatedImageResource_F462138E_D037_5060_41E5_B5FDC5773559",
   "pitch": -12.5,
   "yaw": 179.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790, this.camera_E4C9706F_EAEA_A2E7_41C0_11D652C90014); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C6331C2B_D034_D0A0_41E7_6865CDED1858",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.07,
   "yaw": 179.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Dry Pack"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_4_0.png",
      "width": 281,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -4.7,
   "yaw": 51.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CFBF13C0_DA65_CF4C_41C6_0E04AA901141",
 "maps": [
  {
   "hfov": 17.54,
   "yaw": 51.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_4_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_5_0.png",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ]
   },
   "hfov": 4.81,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.04,
   "yaw": 74.96
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_C9D128E5_DB00_081E_41E1_CCB4CF24F350, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_E04DF8F3_EAE6_E3FF_41E8_65BC08EECAE5, this.video_D47DF42C_DB00_F86E_419B_C191D35F4955, this.PlayList_E47FCE3D_EAEA_BE6B_41EC_ABB4A3B8AF22, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D43517C4_DB00_181E_41D0_6610FE83D419",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.81,
   "yaw": 74.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_5_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Clique para conhecer a APA"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_6_0.png",
      "width": 469,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ]
   },
   "pitch": 3.54,
   "yaw": 74.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_D4AB9751_DB00_1836_41D1_0F7F822FAF89",
 "maps": [
  {
   "hfov": 29.26,
   "yaw": 74.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_6_0_map.gif",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.51,
   "image": "this.AnimatedImageResource_F5A5D095_D014_B060_41E8_1019FC30CA1A",
   "pitch": -10.61,
   "yaw": -91.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7, this.camera_E758A021_EAEA_A21B_41E9_6C6BD159E215); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A6934206_B7BA_A693_41E5_87D63B549937",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.51,
   "yaw": -91.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.2,
   "image": "this.AnimatedImageResource_F5A50095_D014_B060_41E0_B7B1E161947A",
   "pitch": -11.87,
   "yaw": 2.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB, this.camera_E72CA021_EAEA_A21B_41E2_9751FF1B787A); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A7B15C2D_B7BA_A290_41D0_2F9FE4F86EA7",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.2,
   "yaw": 2.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.48,
   "image": "this.AnimatedImageResource_F9DEF787_D00D_5061_41C3_9FD5C44138B6",
   "pitch": -14.01,
   "yaw": 6.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F, this.camera_FAFFDF65_EAEA_BE1A_4188_BF59AFF9E20A); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A63439FD_B786_6570_41E5_54479758EA92",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.48,
   "yaw": 6.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.53,
   "image": "this.AnimatedImageResource_F9DE6787_D00D_5061_41D6_7969525BA181",
   "pitch": -17.15,
   "yaw": -58.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790, this.camera_FACFAF75_EAEA_BEFB_41D4_826BAE0C9D17); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A60ED5DC_B79A_6DB0_41C4_88ACFDAB3EF5",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.53,
   "yaw": -58.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Retornar"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0_HS_2_0.png",
      "width": 362,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ]
   },
   "pitch": -13.01,
   "yaw": -69.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CC2BCD1D_DAA5_B8F4_41E1_BB1421613A38",
 "maps": [
  {
   "hfov": 22.08,
   "yaw": -69.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0_HS_2_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_FEFD75DF_EA08_05CD_41D0_997B106BF4A7.mp4"
 },
 "hfov": 45.16,
 "autoplay": false,
 "id": "overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A",
 "enabledInCardboard": true,
 "loop": false,
 "class": "VideoPanoramaOverlay",
 "pitch": -7.48,
 "useHandCursor": true,
 "roll": -1.24,
 "yaw": -28.11,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "chromaThreshold": 0.28,
 "rotationY": -6.06,
 "rotationX": 8.15,
 "chromaSmoothing": 0,
 "click": "if(this.overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A.get('state') != 'playing'){ this.overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A.play(); } else { this.overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A.pause(); }",
 "data": {
  "label": "Video"
 },
 "chromaColor": "#28C034",
 "vfov": 30.8,
 "videoVisibleOnStop": false,
 "distance": 50,
 "stateChange": "if(this.overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A', [this.overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A]); } else { this.resumeGlobalAudios('overlay_FBF154AC_EA08_1A4C_41DD_35CD17732E0A'); }"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Imagem"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0_HS_3_0.png",
      "width": 273,
      "class": "ImageResourceLevel",
      "height": 263
     }
    ]
   },
   "hfov": 16.8,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.43,
   "yaw": -17.21
  }
 ],
 "id": "overlay_F95D03C8_EA08_7E34_41E8_8D088E61DA2B",
 "maps": [
  {
   "hfov": 16.8,
   "yaw": -17.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.54,
   "image": "this.AnimatedImageResource_FE37A68B_D00B_B060_41D6_AEBAC1B15B74",
   "pitch": -26.06,
   "yaw": 87.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5, this.camera_E564FF17_EAEA_BE26_41E2_0B4D2B8EFB57); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A628F7E5_B79E_6D90_41DC_87CCCE29C3F5",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.54,
   "yaw": 87.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.14,
   "image": "this.AnimatedImageResource_EFDBCEB8_C602_7C0E_41B6_4313631B2045",
   "pitch": -29.33,
   "yaw": 7.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7, this.camera_E51E2F56_EAEA_BE39_41E2_19439DC06E7F); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A767AA73_B79E_A771_41DA_A8C299D26C69",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.14,
   "yaw": 7.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.5,
   "image": "this.AnimatedImageResource_CF785EA5_D075_B1A0_41DC_C269ADCD7E11",
   "pitch": -13.63,
   "yaw": -171.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85, this.camera_FAEFFF65_EAEA_BE1A_41E5_59B80A6D4587); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CC5876B0_D077_51A0_4195_8E5953B5EADB",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.5,
   "yaw": -171.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.01,
   "image": "this.AnimatedImageResource_C3278A32_D104_86CA_41D6_0E5D40DB25D7",
   "pitch": -4.96,
   "yaw": 171.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0, this.camera_E79B7FE2_EAEA_BE1E_41D6_42DD56515FD2); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A19960EF_B191_8B99_41E5_7BD598FADD9B",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.01,
   "yaw": 171.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.02,
   "image": "this.AnimatedImageResource_C1072F46_D104_BD4D_41C0_7925E38A0688",
   "pitch": -3.58,
   "yaw": -169.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD, this.camera_E78FDFD3_EAEA_BE3F_41E0_39B223AD6C63); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A020FDF1_B1B1_7589_41DA_0F0565A323C4",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.02,
   "yaw": -169.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.83,
   "image": "this.AnimatedImageResource_EFD8BEB8_C602_7C0E_41D2_D80E46EA8021",
   "pitch": -14.26,
   "yaw": -127.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD, this.camera_E5876F08_EAEA_BE29_41BB_3759431A5149); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A6B8C7F8_B787_AD70_41CF_2542E10BDF46",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.83,
   "yaw": -127.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.77,
   "image": "this.AnimatedImageResource_EFD86EB8_C602_7C0E_41D6_0C325B3959BF",
   "pitch": -10.24,
   "yaw": 122.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85, this.camera_E5950F08_EAEA_BE29_41E9_B10DFA96C93D); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A6DD0DFC_B786_5D70_41D3_B271ED250AF2",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.77,
   "yaw": 122.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.74,
   "image": "this.AnimatedImageResource_F5BFB814_D00F_5060_41C3_84FD2BC5924A",
   "pitch": -12,
   "yaw": -98.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB, this.camera_E464A0AD_EAEA_A26A_41C4_EC9CB790A86E); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B8436F22_B786_5E90_41D5_C8ED8D15D020",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.74,
   "yaw": -98.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.65,
   "image": "this.AnimatedImageResource_F5BFC814_D00F_5060_41D1_7C15B5BA8BE8",
   "pitch": -10.24,
   "yaw": 98.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790, this.camera_E44A40BD_EAEA_A26B_41DC_90BEE2EA46B5); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A63794CB_B789_E390_41E6_AE8D7ACF29BA",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.65,
   "yaw": 98.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.78,
   "image": "this.AnimatedImageResource_C920C941_D13F_8546_41D7_4FE84B40AF78",
   "pitch": -4.08,
   "yaw": 118.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD, this.camera_E47570BD_EAEA_A26B_41ED_53D485D3FF9D); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C2087152_D13C_8545_41D6_4537466B4D2D",
 "data": {
  "label": "Arrow 06c Right"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.78,
   "yaw": 118.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0_HS_2_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 70.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0_HS_3_0.png",
      "width": 1184,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ]
   },
   "pitch": -18.47,
   "yaw": -1.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C4D91F5E_D5B4_7DFC_41E0_55ADA953883D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_C1CC8C05_D5B5_E34F_41B6_7C2E5ECED02C, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DB26B095_D59C_234F_41D6_7FA291C3C139",
 "data": {
  "label": "Hotel das Abelhas - Clique aqui"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 70.23,
   "yaw": -1.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0_HS_3_0_map.gif",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "layout": "absolute",
 "left": "0%",
 "width": 66,
 "scrollBarColor": "#000000",
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "layout": "absolute",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_6396DD92_74B8_852E_41C7_7F2F88EAB543",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "top": "0%",
 "width": "87.879%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "layout": "horizontal",
 "width": 110,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": 110,
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "width": "91.304%",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "85.959%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "children": [
  "this.Container_BD15ECC8_9478_145B_41CB_7D871BE75B47",
  "this.Container_BD158CC8_9478_145B_41B5_3F260A00D36A"
 ],
 "layout": "horizontal",
 "id": "Container_BD15DCC8_9478_145B_41E1_35766BBBD98F",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF"
 ],
 "layout": "vertical",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_BD147CC8_9478_145B_41E1_A1505134A3C3",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "layout": "absolute",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "layout": "horizontal",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "layout": "vertical",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "layout": "absolute",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "layout": "vertical",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_BD87BAD4_9478_3C4B_41D2_A8D83FD6CFF3",
  "this.Container_BD875AD4_9478_3C4B_4145_58969FE396D8"
 ],
 "layout": "horizontal",
 "id": "Container_BD878AD4_9478_3C4B_41E0_1542ED46C5EC",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1"
 ],
 "layout": "vertical",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_BD84CAD4_9478_3C4B_41DB_EAABF4EA300E",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EFD48EB8_C602_7C0E_41E6_647521E882BC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EFD46EB8_C602_7C0E_41E3_72B4EA45243F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EFD7DEB8_C602_7C0E_41CE_8AEF58511638",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34F8C4A_A862_6CBE_41D6_5AD61A423790_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F57BB717_D00B_B060_41C6_FCA27A519738",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A36654DB_A862_3D5E_41E0_33D788CC4E40_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1F33B8D_D03F_7060_41E6_DD778FEEB7F5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0_HS_4_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F1F35B8D_D03F_7060_41E7_561965E49065",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3671A6A_A863_F57E_41C9_FA21661C76DD_0_HS_5_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FE37168B_D00B_B060_41E3_742E2017947B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C9A3BBE7_D10C_854A_41BC_A910145878B1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A358AE94_A862_2DAA_41D4_C299A34C19E5_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FE30F68B_D00B_B060_41E2_D1C065E47401",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FE30868B_D00B_B060_41DF_04D265CE99BA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A366CD9E_A862_EFD7_419E_48E08FFFD34F_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CDE5A264_D00F_70A7_41AA_EEA3AFEFC5ED",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CDE50264_D00F_70A7_41C1_10BBF9481C87",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A35B4C05_A862_2CAA_41B7_0F0801EEFFC7_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_BC922A28_B2D2_1FF6_41CB_8976860B13AE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_BC926A28_B2D2_1FF6_41E5_2FDB67ADF6DC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C8082F1C_D00B_D060_41DF_3A25B6805AFC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3491F05_A862_2CAA_41D8_11514F6FA6C0_0_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C3046847_D105_834A_41D5_6F2A3073D62F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C3076847_D105_834A_41E5_2EBC4A54BF92",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C3072847_D105_834A_41D9_96A3D0751522",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3626A12_A862_F4AE_418B_D1DBCFF74DF6_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_BC959A28_B2D2_1FF6_41B2_9CBE1ADE863E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C2E44C06_D11D_82CA_41B4_8DECB94CAB13",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34D8FC3_A862_6BAE_41DD_AB3762A24435_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EFD67EB8_C602_7C0E_41D5_A575A15362BC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3667CCA_A862_2DBE_41C0_8DCED48D8173_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EC2D7EB8_C602_7C0E_41D4_5D27110D0A01",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CCC19D36_DA62_5B35_41E2_8356F15119DF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3664D2B_A862_2CFE_41C8_6EB7AC70B208_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F0173C60_D00B_F0A0_4179_C199CFA60DD4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F017CC60_D00B_F0A0_41A7_B9CC4CB087EE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34273F3_A862_3B6D_41DB_2DEDE99EFD85_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_BC95CA28_B2D2_1FF6_41E0_82AC4EC9E9DE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_BC951A28_B2D2_1FF6_41C9_6EACB6CA9410",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A349F735_A862_1CEA_41CC_B52B5799B401_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CCCE5D36_DA62_5B35_41E9_54F29F494784",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CCCFCD36_DA62_5B35_41E8_3EBEFF57CD75",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A366DDBB_A862_EFDE_41D8_8369AC69C1F9_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F5A6B095_D014_B060_41E8_67A3CE4FCBD8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F43BA106_D015_B060_41AB_1742C0011156",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A35B5B8B_A862_6BBE_41DB_234A13DEE6AB_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EFD91EB8_C602_7C0E_41C4_0A338BB7E2BC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EFD8CEB8_C602_7C0E_41B5_3B1B11A4E0AB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A35A5349_A862_14BA_41E4_2F65AF0D35CD_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FE31868B_D00B_B060_41C5_3442AEC0FE93",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CCC0BD36_DA62_5B35_41E3_542FCC859D19",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CCC0DD36_DA62_5B35_41E5_3A9B5BBB48F5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34E35A9_A862_1FFA_41BB_21445AEF71FD_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F35CB374_D035_F0A7_41A4_F0FB841B2237",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CC3807EC_DAA5_F755_41EA_E010D3C95648",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F462138E_D037_5060_41E5_B5FDC5773559",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34A644B_A862_1CBE_41E3_8EEC1961A83A_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F5A5D095_D014_B060_41E8_1019FC30CA1A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F5A50095_D014_B060_41E0_B7B1E161947A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A36793D7_A862_1B55_41D4_440646406482_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F9DEF787_D00D_5061_41C3_9FD5C44138B6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F9DE6787_D00D_5061_41D6_7969525BA181",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A341A5BC_A862_FFDA_41C2_411D7A13BF84_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FE37A68B_D00B_B060_41D6_AEBAC1B15B74",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A340661D_A862_1CDA_41B9_9FDBE569727F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EFDBCEB8_C602_7C0E_41B6_4313631B2045",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF785EA5_D075_B1A0_41DC_C269ADCD7E11",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A3581AF9_A862_155D_41DF_288F19AF7D82_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C3278A32_D104_86CA_41D6_0E5D40DB25D7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1072F46_D104_BD4D_41C0_7925E38A0688",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A34E66E4_A862_3D6A_41AE_283E204B5F91_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EFD8BEB8_C602_7C0E_41D2_D80E46EA8021",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_EFD86EB8_C602_7C0E_41D6_0C325B3959BF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A345FB94_A862_2BAA_41D5_A506BECE41B6_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F5BFB814_D00F_5060_41C3_84FD2BC5924A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F5BFC814_D00F_5060_41D1_7C15B5BA8BE8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C920C941_D13F_8546_41D7_4FE84B40AF78",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A340C3CB_A862_7BBE_41CC_3D923796F6FB_0_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "layout": "absolute",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 44,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 50,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "maxHeight": 50,
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "top": "40%",
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "layout": "absolute",
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "width": 290,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 40,
 "paddingLeft": 40,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "paddingTop": 40,
 "backgroundOpacity": 0.7,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 44,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 50,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "maxHeight": 50,
 "bottom": "40%",
 "verticalAlign": "middle",
 "top": "40%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF"
 ],
 "layout": "absolute",
 "id": "Container_BD15ECC8_9478_145B_41CB_7D871BE75B47",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_BD159CC8_9478_145B_41AA_EFEDE92BF07B",
  "this.Container_BD15ACC8_9478_145B_41C2_6D37AD97A48D",
  "this.Container_BD146CC8_9478_145B_41D1_ED9BAFE44A6B"
 ],
 "layout": "vertical",
 "id": "Container_BD158CC8_9478_145B_41B5_3F260A00D36A",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 460,
 "width": "50%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF",
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "iconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_pressed_rollover.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_BD140CC8_9478_145B_41BD_F96EEC163BAF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "layout": "absolute",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "ThumbnailList"
 },
 "left": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "italic",
 "class": "ThumbnailGrid",
 "minHeight": 1,
 "horizontalAlign": "center",
 "itemLabelHorizontalAlign": "center",
 "shadow": false,
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "width": "100%",
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "height": "92%",
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "minWidth": 1,
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "paddingLeft": 70,
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 26,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "class": "WebFrame",
 "minHeight": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "minWidth": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 1,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 140,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "layout": "absolute",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD"
 ],
 "layout": "absolute",
 "id": "Container_BD87BAD4_9478_3C4B_41D2_A8D83FD6CFF3",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "55%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_BD874AD4_9478_3C4B_41DE_DE522887B2C7",
  "this.Container_BD877AD4_9478_3C4B_41AC_A13D39E1584C",
  "this.Container_BD84DAD4_9478_3C4B_41D9_38F6A3F8328B"
 ],
 "layout": "vertical",
 "id": "Container_BD875AD4_9478_3C4B_4145_58969FE396D8",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 460,
 "width": "45%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "paddingLeft": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1",
 "horizontalAlign": "center",
 "class": "IconButton",
 "minHeight": 50,
 "iconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedRollOverIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_pressed_rollover.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_rollover.jpg",
 "pressedIconURL": "skin/IconButton_BD84FAD4_9478_3C4B_41DD_83E1298704B1_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "horizontalAlign": "left",
 "class": "Image",
 "minHeight": 30,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "minWidth": 40,
 "maxWidth": 1095,
 "top": "0%",
 "maxHeight": 1095,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "25%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": true,
 "data": {
  "name": "Image Company"
 }
},
{
 "data": {
  "name": "-Container buttons"
 },
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.Container_66588837_74AF_8B56_41CA_E204728E8E6C",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1"
 ],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "bottom",
 "height": 120,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF",
 "left": "0%",
 "horizontalAlign": "center",
 "class": "Image",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_BD15FCC8_9478_145B_41DA_B306F52E3FCF.jpg",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "maxHeight": 1000,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_BD159CC8_9478_145B_41AA_EFEDE92BF07B",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 50,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_BD15BCC8_9478_145B_41A0_1BDCC9E92EE8",
  "this.Button_BD145CC8_9478_145B_41D6_359CB4C54BCA"
 ],
 "layout": "vertical",
 "id": "Container_BD15ACC8_9478_145B_41C2_6D37AD97A48D",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "minHeight": 300,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_BD146CC8_9478_145B_41D1_ED9BAFE44A6B",
 "width": 370,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 30,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "class": "IconButton",
 "minHeight": 50,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "width": "100%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "class": "IconButton",
 "minHeight": 50,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "width": "100%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 1,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "class": "IconButton",
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "width": "10%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "10%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD",
 "left": "0%",
 "horizontalAlign": "center",
 "class": "Image",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_BD87AAD4_9478_3C4B_41BE_0345EF6421AD.jpg",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "maxHeight": 1000,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_BD874AD4_9478_3C4B_41DE_DE522887B2C7",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "5%",
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_BD876AD4_9478_3C4B_41D6_3C886AE845B6",
  "this.Container_BD870AD4_9478_3C4B_41D4_7C5B5C74D90A"
 ],
 "layout": "vertical",
 "id": "Container_BD877AD4_9478_3C4B_41AC_A13D39E1584C",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_BD84DAD4_9478_3C4B_41D9_38F6A3F8328B",
 "width": 370,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "fontSize": "25px",
 "class": "Button",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 50,
 "label": "Portaria",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E4753E3D_EAEA_BE6B_41D2_1A65A8ABF5B3, 10.10204081632653, -13.775510204081632);; this.mainPlayList.set('selectedIndex', 1); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E4757E3D_EAEA_BE6B_41C2_A53B4DE1BC0E, 3.673469387755102, -1.836734693877551);; this.mainPlayList.set('selectedIndex', 0)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.7,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "data": {
  "name": "Button Panorama List"
 },
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "fontSize": "25px",
 "class": "Button",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 50,
 "label": "Vias de Acesso",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E474EE3D_EAEA_BE6B_41E5_32560B9735BB, 0, 0);; this.mainPlayList.set('selectedIndex', 5)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.7,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "data": {
  "name": "Button Location"
 },
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "fontSize": "25px",
 "class": "Button",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "pressedLabel": "Auditório",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 50,
 "label": "Audit\u00f3rio",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E4749E3D_EAEA_BE6B_41B3_F284497109D0, -168.9795918367347, 1.836734693877551);; this.mainPlayList.set('selectedIndex', 16)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.71,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "fontSize": "25px",
 "class": "Button",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 50,
 "label": "Liquid Pack",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E4740E3D_EAEA_BE6B_41E9_AEC67F95669D, 0, 0);; this.mainPlayList.set('selectedIndex', 17)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.7,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "fontSize": "25px",
 "class": "Button",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 10,
 "mode": "push",
 "height": 50,
 "label": "Dry Pack",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_E477BE3D_EAEA_BE6B_41E0_2A6CEB508258, -111.12244897959184, -4.591836734693878);; this.mainPlayList.set('selectedIndex', 21)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.7,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "layout": "horizontal",
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "width": 40,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 2,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-Container settings"
 },
 "children": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB"
 ],
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_66588837_74AF_8B56_41CA_E204728E8E6C",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 16,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "class": "HTMLText",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 78,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_BD15BCC8_9478_145B_41A0_1BDCC9E92EE8",
 "class": "HTMLText",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button31015"
 },
 "layout": "horizontal",
 "id": "Button_BD145CC8_9478_145B_41D6_359CB4C54BCA",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 180,
 "fontSize": "2.39vh",
 "class": "Button",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "label": "LOREM IPSUM",
 "height": 50,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 50,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_BD876AD4_9478_3C4B_41D6_3C886AE845B6",
 "class": "HTMLText",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "46%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2",
  "this.HTMLText_BD872AD4_9478_3C4B_41E0_004DEE953DF2"
 ],
 "layout": "horizontal",
 "id": "Container_BD870AD4_9478_3C4B_41D4_7C5B5C74D90A",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2",
 "horizontalAlign": "left",
 "class": "Image",
 "minHeight": 1,
 "width": "25%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_BD873AD4_9478_3C4B_41E1_8CD5E779D6D2.jpg",
 "minWidth": 1,
 "maxWidth": 200,
 "maxHeight": 200,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_BD872AD4_9478_3C4B_41E0_004DEE953DF2",
 "class": "HTMLText",
 "minHeight": 1,
 "width": "75%",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.playAudioList([this.audio_D7C903AB_DAAE_1449_41E9_D55ADCEEFC14]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB,this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_BD141CC8_9478_145B_41D4_265F47E47DB6",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_BD84EAD4_9478_3C4B_41C0_BDBA5096F748",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.7,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Player",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": [
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scripts": {
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": true,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": [
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
