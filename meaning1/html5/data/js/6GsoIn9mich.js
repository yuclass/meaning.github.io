window.globalProvideData('slide', '{"title":"Drag and Drop","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide1","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6GsoIn9mich","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6oai8ByGD2p.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6cwJXtBOBbK.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5hDiwRK21Ab.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6Xt38kAHAz8.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5i1mIJNd810.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.60LY6rgdlF3"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5fK4NcWp69s.InvalidPromptSlide"}}]}]},"ReviewInt_5jCvEozcNRb":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6oai8ByGD2p"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6cwJXtBOBbK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5hDiwRK21Ab"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Xt38kAHAz8"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5i1mIJNd810"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_5jCvEozcNRb":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6oai8ByGD2p"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6cwJXtBOBbK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5hDiwRK21Ab"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Xt38kAHAz8"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5i1mIJNd810"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5jCvEozcNRb":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5jCvEozcNRb"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"DisableChoices_5jCvEozcNRb":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6oai8ByGD2p"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6cwJXtBOBbK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5hDiwRK21Ab"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Xt38kAHAz8"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5i1mIJNd810"},"enabled":{"type":"boolean","value":false}}]},"5jCvEozcNRb_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"60LY6rgdlF3.$Status","typea":"property","valueb":"correct","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5jCvEozcNRb"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"60LY6rgdlF3.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"60LY6rgdlF3.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5jCvEozcNRb"}]}]}]}]},"NavigationRestrictionPreviousSlide_6GsoIn9mich":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00001100101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5fK4NcWp69s","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5fK4NcWp69s","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"5jCvEozcNRb_CheckAnswered"}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6GsoIn9mich"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6VzlJJHzKM4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6icxChdlKVb"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VDRHYXysyZ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6VZ80yShCaF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6oai8ByGD2p"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6cwJXtBOBbK"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5hDiwRK21Ab"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Xt38kAHAz8"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5i1mIJNd810"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6NQJgkXkEow"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/5fNx0NZkd12_80_DX1296_DY1296.swf","type":"normal","altText":"Picture 1","width":1296,"height":72,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":40,"yPos":14,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":40,"altText":"Picture 1","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":40,"strokewidth":0}},"width":648,"height":40,"resume":true,"useHandCursor":true,"id":"6VzlJJHzKM4"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6XAkXjL5nTi_80_DX80_DY80.swf","type":"normal","altText":"Picture 2","width":68,"height":80,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":8,"yPos":6,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":17,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":34,"bottom":40,"altText":"Picture 2","pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":0,"yPos":0,"width":34,"height":40,"strokewidth":0}},"width":34,"height":40,"resume":true,"useHandCursor":true,"id":"6icxChdlKVb"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/5XhUXegQQIo_80_DX744_DY744.swf","type":"normal","altText":"Picture 3","width":744,"height":541,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":46,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":186,"rotateYPos":140,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":372,"bottom":280,"altText":"Picture 3","pngfb":false,"pr":{"l":"Lib","i":2}},"html5data":{"xPos":0,"yPos":0,"width":372,"height":280,"strokewidth":0}},"width":372,"height":280,"resume":true,"useHandCursor":true,"id":"5VDRHYXysyZ"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":3,"id":"01","url":"story_content/5f09yRviTMH_80_DX602_DY602.swf","type":"animatedgif","altText":"落日河流.gif","width":601,"height":594,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":376,"yPos":54,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":150.5,"rotateYPos":128,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":301,"bottom":256,"altText":"落日河流.gif","pngfb":false,"pr":{"l":"Lib","i":3}},"html5data":{"xPos":0,"yPos":0,"width":301,"height":256,"strokewidth":0}},"width":301,"height":256,"resume":true,"useHandCursor":true,"id":"6VZ80yShCaF"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":4,"id":"01","url":"story_content/6LsjfNZS9Ec_80_DX146_DY146.swf","type":"normal","altText":"Picture 5","width":146,"height":96,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":80,"yPos":310,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":36.5,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":36,"snapy":24,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5jCvEozcNRb"],"dragoverids":["_drop_5jCvEozcNRb"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":73,"bottom":48,"altText":"Picture 5","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":73,"height":48,"strokewidth":0}},"width":73,"height":48,"resume":true,"useHandCursor":true,"id":"6oai8ByGD2p","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":5,"id":"01","url":"story_content/5tYONyUmnQN_80_DX146_DY146.swf","type":"normal","altText":"Picture 6","width":146,"height":96,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":168,"yPos":310,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":36.5,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":36,"snapy":24,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5jCvEozcNRb"],"dragoverids":["_drop_5jCvEozcNRb"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":73,"bottom":48,"altText":"Picture 6","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":73,"height":48,"strokewidth":0}},"width":73,"height":48,"resume":true,"useHandCursor":true,"id":"6cwJXtBOBbK","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":6,"id":"01","url":"story_content/60jTvazvXVg_80_DX144_DY144.swf","type":"normal","altText":"Picture 7","width":144,"height":95,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":264,"yPos":310,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":36,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":36,"snapy":23,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5jCvEozcNRb"],"dragoverids":["_drop_5jCvEozcNRb"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":72,"bottom":47,"altText":"Picture 7","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":0,"yPos":0,"width":72,"height":47,"strokewidth":0}},"width":72,"height":47,"resume":true,"useHandCursor":true,"id":"5hDiwRK21Ab","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":7,"id":"01","url":"story_content/6dGwPEFncyW_80_DX144_DY144.swf","type":"normal","altText":"Picture 8","width":144,"height":95,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":368,"yPos":310,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":36,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":36,"snapy":23,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5jCvEozcNRb"],"dragoverids":["_drop_5jCvEozcNRb"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":72,"bottom":47,"altText":"Picture 8","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":0,"yPos":0,"width":72,"height":47,"strokewidth":0}},"width":72,"height":47,"resume":true,"useHandCursor":true,"id":"6Xt38kAHAz8","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":8,"id":"01","url":"story_content/6iJP2mz9Mcs_80_DX238_DY238.swf","type":"normal","altText":"Picture 9","width":238,"height":96,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":464,"yPos":310,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":59.5,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":59,"snapy":24,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5jCvEozcNRb"],"dragoverids":["_drop_5jCvEozcNRb"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":119,"bottom":48,"altText":"Picture 9","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":0,"yPos":0,"width":119,"height":48,"strokewidth":0}},"width":119,"height":48,"resume":true,"useHandCursor":true,"id":"5i1mIJNd810","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":9,"id":"01","url":"story_content/68LhXgFuxoB_80_DX1312_DY1312.swf","type":"normal","altText":"Picture 10","width":1312,"height":195,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":80,"yPos":350,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":328,"rotateYPos":53.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":328,"snapy":53,"dragreturn":true,"multidrop":true,"droptype":"free","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5jCvEozcNRb"],"dragoverids":["_drop_5jCvEozcNRb"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":656,"bottom":107,"altText":"Picture 10","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":0,"yPos":0,"width":656,"height":107,"strokewidth":0}},"width":656,"height":107,"resume":true,"useHandCursor":true,"id":"6NQJgkXkEow"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');