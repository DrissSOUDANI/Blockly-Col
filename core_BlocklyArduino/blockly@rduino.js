/**
 * Blockly@rduino
 */

'use strict';



/**
 * Create a namespace for the application.
 */
var BlocklyDuino = {};
Blockly.pathToBlockly = './';
Blockly.pathToMedia = './media/';

BlocklyDuino.selectedToolbox = "toolbox_none";
BlocklyDuino.selectedCard = 'arduino_uno';
BlocklyDuino.selectedTab = 'blocks';
BlocklyDuino.inlineBool = true;
BlocklyDuino.withImage = true;
//BlocklyDuino.ajaxOK = true;
BlocklyDuino.toolboxInIndexHtml = false;



/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
BlocklyDuino.workspace = null;




/**
 * Populate the currently selected pane with content generated from the blocks.
 */
BlocklyDuino.renderContent = function() {
  var content = $('#content_' + BlocklyDuino.selectedTab);
 
	if (content.prop('id') == 'content_blocks') {
		// If the workspace was changed by the XML tab, Firefox will have
		// performed an incomplete rendering due to Blockly being invisible. Rerender.
		BlocklyDuino.workspace.render();
		$(".blocklyTreeSeparator").removeAttr("style");
//		BlocklyDuino.workspace.setVisible(true);
		$(".blocklyToolboxDiv").show();
	} else {
//		BlocklyDuino.workspace.setVisible(false);
		$(".blocklyToolboxDiv").hide();
		switch (content.prop('id')) {
		
		case 'content_arduino':
			try {
				$('#pre_arduino')
						.text(
								Blockly.Arduino
										.workspaceToCode(BlocklyDuino.workspace));
				if (typeof prettyPrintOne == 'function') {
					$('#pre_arduino').html(prettyPrintOne($('#pre_arduino').html(), 'cpp'));
				}
				
			} catch (e) {
				alert(e);
			}
			break;

		
		}
	}

	
};





/**
 * Populate the the edit textarea "edit_code" with the pre arduino code
 */
BlocklyDuino.editArduinoCode = function() {
	    $('#edit_code').val($('#pre_arduino').text());
};

/**
 * Populate the content arduino code pane with the edit textarea "edit_code"
 */
BlocklyDuino.valideEditedCode = function() {
	    try {
	    	$('#pre_arduino').text($('#edit_code').val());
		    if (typeof prettyPrintOne == 'function') {
		    	$('#pre_arduino').html(prettyPrintOne($('#pre_arduino').html(), 'cpp'));
		    }
	    } catch (e) {
	            alert(e);
		}
};

/**
 * Render Arduino code in preview box
 */
BlocklyDuino.renderArduinoCodePreview = function() {
	$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
	if (typeof prettyPrintOne == 'function') {
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
	}
};

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */

BlocklyDuino.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};







/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * 
 * @param {string}
 *            defaultXml Text representation of default blocks.
 */
BlocklyDuino.loadBlocks = function(defaultXml) {
	
	if (defaultXml) {
		// Load the editor with default starting blocks.
		var xml = Blockly.Xml.textToDom(defaultXml);
		Blockly.Xml.domToWorkspace(BlocklyDuino.workspace, xml);
	} else {
		var loadOnce = null;
		try {
			loadOnce = window.localStorage.loadOnceBlocks;
		} catch (e) {
			// Firefox sometimes throws a SecurityError when accessing
			// localStorage.
			// Restarting Firefox fixes this, so it looks like a bug.
		}
		if (loadOnce != null) {
			// Language switching stores the blocks during the reload.
			delete window.localStorage.loadOnceBlocks;
			var xml = Blockly.Xml.textToDom(loadOnce);
			Blockly.Xml.domToWorkspace(BlocklyDuino.workspace, xml);
		}
	}
};

/*
 *  Store the blocks for the duration of the reload.
 */
BlocklyDuino.backupBlocks = function () {
  if (typeof Blockly != 'undefined' && window.localStorage) {
    var xml = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.localStorage.loadOnceBlocks = text;
  }
};




/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
BlocklyDuino.saveXmlFile = function () {
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	
	var toolbox = window.localStorage.toolbox;
	if (!toolbox) {
		toolbox = $("#toolboxes").val();
	}
	
	if (toolbox) {
		var newel = document.createElement("toolbox");
		newel.appendChild(document.createTextNode(toolbox));
		xml.insertBefore(newel, xml.childNodes[0]);
	}
	
	var toolboxids = window.localStorage.toolboxids;
	if (toolboxids === undefined || toolboxids === "") {
		if ($('#defaultCategories').length) {
			toolboxids = $('#defaultCategories').html();
		}
	}
	
	if (toolboxids) {
		var newel = document.createElement("toolboxcategories");
		newel.appendChild(document.createTextNode(toolboxids));
		xml.insertBefore(newel, xml.childNodes[0]);
	}
	
	var data = Blockly.Xml.domToPrettyText(xml);
	var datenow = Date.now();
	var uri = 'data:text/xml;charset=utf-8,' + encodeURIComponent(data);
	$(this).attr({
	            'download': "blockly@col_"+datenow+".xml",
				'href': uri,
				'target': '_blank'
	});
};




/**
 * Load Arduino code from component pre_arduino
 */


/**
 // * Load blocks from local file.
 */
BlocklyDuino.load = function (event) {
  var files = event.target.files;
  // Only allow uploading one file.
  if (files.length != 1) {
    return;
  }

  // FileReader
  var reader = new FileReader();
  reader.onloadend = function(event) {
    var target = event.target;
    // 2 == FileReader.DONE
    if (target.readyState == 2) {
      try {
        var xml = Blockly.Xml.textToDom(target.result);
      } catch (e) {
        alert(MSG['xmlError']+'\n' + e);
        return;
      }
      var count = BlocklyDuino.workspace.getAllBlocks().length;
      if (count && confirm(MSG['xmlLoad'])) {
    	  BlocklyDuino.workspace.clear();
      }
      $('#tab_blocks a').tab('show');
      Blockly.Xml.domToWorkspace(BlocklyDuino.workspace, xml);
      BlocklyDuino.selectedTab = 'blocks';
      BlocklyDuino.renderContent();
      
	  // load toolbox
      var elem = xml.getElementsByTagName("toolbox")[0];
      if (elem != undefined) {
		var node = elem.childNodes[0];
		window.localStorage.toolbox = node.nodeValue;
		$("#toolboxes").val(node.nodeValue);
		
		// load toolbox categories
		elem = xml.getElementsByTagName("toolboxcategories")[0];
		if (elem != undefined) {
			node = elem.childNodes[0];
			window.localStorage.toolboxids = node.nodeValue;
		}

		window.location = window.location.protocol + '//'
				+ window.location.host + window.location.pathname;
		/*
		var search = BlocklyDuino.addReplaceParamToUrl(window.location.search, 'toolbox', $("#toolboxes").val());
		window.location = window.location.protocol + '//'
				+ window.location.host + window.location.pathname
				+ search;
		*/
	}

    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    $('#load').val('');
  };
  reader.readAsText(files[0]);
};

/**
 * Discard all blocks from the workspace. 
 */
BlocklyDuino.discard = function () {
  var count = BlocklyDuino.workspace.getAllBlocks().length;
  if (count < 2 || window.confirm(MSG['discard'].replace('%1', count))) {
    BlocklyDuino.workspace.clear();
    //clean URL from example if opened
	var search = window.location.search;
    var newsearch = search.replace(/([?&]url=)[^&]*/, '');
	window.history.pushState(search, "Title", newsearch);
    BlocklyDuino.renderContent();
  }
};

/**
 * Undo/redo functions
 */
BlocklyDuino.Undo = function () {
  Blockly.mainWorkspace.undo(0);
};
BlocklyDuino.Redo = function () {
  Blockly.mainWorkspace.undo(1);
};

/**
 * Binds functions to each of the buttons, nav links, and related.
 */
BlocklyDuino.bindFunctions = function() {
	
	$('#clearLink').on("click", BlocklyDuino.clearLocalStorage);

	var clipboard = new Clipboard('#btn_CopyCode');
	
	// Navigation buttons
	$('#btn_delete').on("click", BlocklyDuino.discard);
	$('#btn_undo').on("click", BlocklyDuino.Undo);
	$('#btn_redo').on("click", BlocklyDuino.Redo);
	$('#btn_block_capture').on("click", BlocklyDuino.workspace_capture);
	$('#btn_saveXML').on("click", BlocklyDuino.saveXmlFile);
	

	$('#pinout').on("focus", function() {
		BlocklyDuino.selectedCard = $(this).val();
	});
	
	$('#toolboxes').on("change", BlocklyDuino.changeToolboxDefinition);	

	$('#configModal').on('hidden.bs.modal', function(e) {
		BlocklyDuino.loadToolboxDefinition(BlocklyDuino.selectedToolbox);
	});

	$('#load').on("change", BlocklyDuino.load);
	
	
	$('#btn_fakeload').on("click", function() {
		$('#load').click();
	});
	
	
	$('#menuPanelBlockly li[id^=tab_]').on("click", function() {
		BlocklyDuino.selectedTab = $(this).attr('id').substring(4);
		BlocklyDuino.renderContent();
	});
	

	$('#btn_size').on("click", BlocklyDuino.changeSize);
	$('#btn_config').on("click", BlocklyDuino.openConfigToolbox);

	$('#btn_edit_code').on("click", BlocklyDuino.editArduinoCode);
	$('#btn_validCode').on("click", BlocklyDuino.valideEditedCode);

	$('#select_all').on("click", BlocklyDuino.checkAll);
	$('#btn_valid_config').on("click", BlocklyDuino.changeToolbox);
	
	$('#btn_inline').on("click", BlocklyDuino.inline);
	$('#btn_blocs_picture').on("click", BlocklyDuino.blockPicture);	
	$('#btn_blocs_picture_mini').on("click", BlocklyDuino.blockPicture_mini);
	$('#btn_blocs_picture_maxi').on("click", BlocklyDuino.blockPicture_maxi);
	
	//$('#btn_card_picture_mini').on("click", BlocklyDuino.cardPicture_mini);
	//$('#btn_card_picture_maxi').on("click", BlocklyDuino.cardPicture_maxi);
	
	$('#btn_preview').on("click", function() {
		$("#toggle").toggle("slide");
	});
	$('#pre_previewArduino').on("click", function() { 	
		$("#toggle").toggle("slide");
	});

	
	
	$('#btn_convert').on('click', function() {
		$('#convertModal').css("z-index", 1060);
		$('#convertModal').css("display", "inline-block");
	});
	
	$('#convertModal button.close').on('click', function() {
		$('#convertModal').css("z-index", 0);
		$('#convertModal').hide();
	});
	
	
  	$('#pinout').on("change", BlocklyDuino.ArduinoCard);
  	
  	$("#tab_blocks").css("display", "none");
  	$('#tab_blocks').on("click", function() { 	
		$("#tab_blocks").css("display", "none"); 
		$("#tab_arduino").css("display", "block"); 
	});

	$('#tab_arduino').on("click", function() {	
			$("#tab_blocks").css("display", "block"); 
			$("#tab_arduino").css("display", "none"); 
		});

};

/**
 * checks all checkboxes in modal "configModal"
 */
BlocklyDuino.checkAll = function () {
    if(this.checked) {
        // Iterate each checkbox
        $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = true;
        });
    } 
      else {
      $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = false;
        });
    }
};

/**
 * Build modal to configure ToolBox
 */
BlocklyDuino.openConfigToolbox = function () {
	var modalbody = $("#modal-body-config");
	
	// load the toolboxes id's stored in session
	var loadIds = window.localStorage.toolboxids;

	// set the default toolbox if none
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}

	
	// clear modal
	modalbody.empty();
	var i=0, n;
	var ligne = "";

	// create a checkbox for each toolbox category
	$("#toolbox").children("category").each(function() {
		n = loadIds.search($(this).attr("id"));

		// checks if toolbox was already chosen
		if (n >= 0) {
			ligne = '<input type="checkbox" checked="checked" name="checkbox_'
					+ i + '" id="checkbox_' + $(this).attr("id") + '"/> '
					+ Blockly.Msg[$(this).attr("id")] + '<br/>';
		} else {
			ligne = '<input type="checkbox" name="checkbox_' + i
					+ '" id="checkbox_' + $(this).attr("id") + '"/> '
					+ Blockly.Msg[$(this).attr("id")] + '<br/>';
		}
		i++;
		modalbody.append(ligne);
     });
	

};

/**
 * Change the ToolBox following the chosen configuration
 */
BlocklyDuino.changeToolbox = function () {
	// Store the blocks for the duration of the reload.
	BlocklyDuino.backupBlocks();
	
	// read the toolboxes id's from the checkboxes
	var toolboxIds = [];
	$('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
		if (this.checked == true) {
			var xmlid = this.id;
			toolboxIds.push(xmlid.replace("checkbox_", ""));
		}
	});

	// store id's in session
	window.localStorage.toolboxids = toolboxIds;
	
	
	// store toolboxe id in session
	window.localStorage.toolbox = $("#toolboxes").val();
	
	
	window.location = window.location.protocol + '//'
	+ window.location.host + window.location.pathname
	
};

/**
 * Build the xml using toolboxes checked in config modal and stored in session
 */
BlocklyDuino.buildToolbox = function() {
	
	// set the toolbox from url parameters
	//var loadIds = BlocklyDuino.getStringParamFromUrl('toolboxids', '');
	var loadIds='';

	// set the toolbox from local storage
	if (loadIds === undefined || loadIds === "") {
		loadIds = window.localStorage.toolboxids;
	}

	// set the default toolbox if none
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}
	
	window.localStorage.toolboxids = loadIds;

	var xmlValue = '<xml id="toolbox">\n';	
	var xmlids = loadIds.split(",");
	for (var i = 0; i < xmlids.length; i++) {
		if ($('#'+xmlids[i]).length) {
			xmlValue += $('#'+xmlids[i])[0].outerHTML+'\n';
			
		}
		if(xmlids[i]=="CAT_ARDUINO" || xmlids[i]=="CAT_TECHNOZONE" || xmlids[i]=="CAT_TECHNOZONE_ROBOT" || xmlids[i]=="CAT_DRISS_A4"  || xmlids[i]=="CAT_DRISS_LINKIT_ONE" 
						 || xmlids[i]=="CAT_DRISS_GROVE"  || xmlids[i]=="CAT_DRISS_TINKERKIT") {xmlValue += '<sep gap="30" colour="transparent"></sep>\n'; }

	}

	xmlValue += '</xml>';
	//alert(xmlValue);
	return xmlValue;
};





/**
 * load the xml toolbox definition
 */
BlocklyDuino.loadToolboxDefinition = function(toolboxFile) {
	
};

/**
 * Change toolbox definition
 */
BlocklyDuino.changeToolboxDefinition =  function (){
	BlocklyDuino.loadToolboxDefinition($("#toolboxes").val());
	BlocklyDuino.openConfigToolbox();
}; 


/**
 * Initialize Blockly.  Called on page load.
 */
BlocklyDuino.init = function() {
	
	/*
	if (typeof(Storage) !== "undefined") {
	    // Store
	   window.localforage.setItem("lastname", "Smith");
	    // Retrieve
	    alert(window.localforage.getItem("lastname"));
	} else {
	    alert('sorry');

	}
	*/
	
	if ($('#toolbox').length) {
		BlocklyDuino.toolboxInIndexHtml = true;		
	}
	
	
	Code.initLanguage();

	if (BlocklyDuino.getSize() == 'max') {
		// place div on top
		$("#divBody").css("top", "0px");

		
		// hide Title
		$("#divTitre").css("display", "none");

		$('#btn_size').html('<span id="icon_btn_size" class="glyphicon glyphicon-resize-small"> </span>');
		$('#btn_size').attr("title", MSG['btn_size_min']);

	} else {
		$('#btn_size').html('<span id="icon_btn_size" class="glyphicon glyphicon-fullscreen"> </span>');
		$('#btn_size').attr("title", MSG['btn_size_max']);

	}


	var Cacheobj=document.getElementById("pinout");
	Blockly.Arduino.setDefaultBoard(Cacheobj.options[Cacheobj.selectedIndex].value);

	// build Blockly ...
	BlocklyDuino.workspace = Blockly.inject('content_blocks',
		      {grid:
		          {	spacing: 20,
					length: 2,
					colour: '#ccc',
					snap: true},
					sounds : true,
					media: 'media/',
					rtl: Code.isRtl(),
					toolbox: BlocklyDuino.buildToolbox(),
					zoom:
						{controls: true,
						wheel: true}
		      });
	// bind events to html elements
	BlocklyDuino.bindFunctions();

	BlocklyDuino.renderContent();
	
	BlocklyDuino.workspace.addChangeListener(BlocklyDuino.renderArduinoCodePreview);

	// load blocks stored in session or passed by url
	//var urlFile = BlocklyDuino.getStringParamFromUrl('url', '');
	var urlFile ="";
	var loadOnce = null;
	try {
			loadOnce = window.localStorage.loadOnceBlocks;
		} catch (e) {
			// Firefox sometimes throws a SecurityError when accessing
			// localStorage.
			// Restarting Firefox fixes this, so it looks like a bug.
		}
	if (urlFile) {
		if (loadOnce != null)
			{
			if (!confirm(MSG['xmlLoad']))
				{
				BlocklyDuino.loadBlocks();
				}
			}
		$.get( urlFile, function( data ) {
	        BlocklyDuino.loadBlocks(data );
			}, 'text');
	} else {
		BlocklyDuino.loadBlocks();
	}
	
    // Hook a save function onto unload.
	window.addEventListener('unload', BlocklyDuino.backupBlocks, false);


	$('body').on('mousedown', '#convertModal', function() {
        $(this).addClass('draggable').parents().on('mousemove', function(e) {
            $('.draggable').offset({
                top: e.pageY,
                left: e.pageX - $('.draggable').outerWidth()/2
            }).on('mouseup', function() {
                $(this).removeClass('draggable');
            });
            e.preventDefault();
        });
    }).on('mouseup', function() {
        $('.draggable').removeClass('draggable');
    });
	

};



BlocklyDuino.clearLocalStorage = function () {
	window.removeEventListener('unload', BlocklyDuino.backupBlocks, false);
	localStorage.clear();
};



/**
 * Override Blockly method (/Blockly/core/variable.js)
 * To add the block "variables_set_type"
 * 
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace contianing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.Variables.flyoutCategory = function(workspace) {
	
  var variableList = workspace.variableList;
  variableList.sort(goog.string.caseInsensitiveCompare);

  var xmlList = [];
  var button = goog.dom.createDom('button');
  button.setAttribute('text', Blockly.Msg.NEW_VARIABLE);
  button.setAttribute('callbackKey', 'CREATE_VARIABLE');

  Blockly.registerButtonCallback('CREATE_VARIABLE', function(button) {
    Blockly.Variables.createVariable(button.getTargetWorkspace());
  });

  xmlList.push(button);

  if (variableList.length > 0) {
    if (Blockly.Blocks['variables_set']) {
      // <block type="variables_set" gap="20">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'variables_set');
      if (Blockly.Blocks['variables_set_type']) {
        block.setAttribute('gap', 8);
      } else {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, variableList[0]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    

    // override to inject variables_set_type block
    
    if (Blockly.Blocks['variables_set_type']) {
    	var block = goog.dom.createDom('block');
    	block.setAttribute('type', 'variables_set_type');
    	
    	if (Blockly.Blocks['math_change']) {
    		block.setAttribute('gap', 8);
    	} else {
    		block.setAttribute('gap', 24);
    	}
    	xmlList.push(block);
    }
    

    // end override
    if (Blockly.Blocks['variables_set_init']) {
    	var block = goog.dom.createDom('block');
    	block.setAttribute('type', 'variables_set_init');
    	if (Blockly.Blocks['variables_set_init']) {
    		block.setAttribute('gap', 8);
    	} else {
    		block.setAttribute('gap', 24);
    	}
    	xmlList.push(block);
    }
    if (Blockly.Blocks['math_change']) {
      // <block type="math_change">
      //   <value name="DELTA">
      //     <shadow type="math_number">
      //       <field name="NUM">1</field>
      //     </shadow>
      //   </value>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'math_change');
      if (Blockly.Blocks['variables_get']) {
        block.setAttribute('gap', 20);
      }
      var value = goog.dom.createDom('value');
      value.setAttribute('name', 'DELTA');
      block.appendChild(value);

      var field = goog.dom.createDom('field', null, variableList[0]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);

      var shadowBlock = goog.dom.createDom('shadow');
      shadowBlock.setAttribute('type', 'math_number');
      value.appendChild(shadowBlock);

      var numberField = goog.dom.createDom('field', null, '1');
      numberField.setAttribute('name', 'NUM');
      shadowBlock.appendChild(numberField);

      xmlList.push(block);
    }

    for (var i = 0; i < variableList.length; i++) {
      if (Blockly.Blocks['variables_get']) {
        // <block type="variables_get" gap="8">
        //   <field name="VAR">item</field>
        // </block>
        var block = goog.dom.createDom('block');
        block.setAttribute('type', 'variables_get');
        if (Blockly.Blocks['variables_set']) {
          block.setAttribute('gap', 8);
        }
        var field = goog.dom.createDom('field', null, variableList[i]);
        field.setAttribute('name', 'VAR');
        block.appendChild(field);
        xmlList.push(block);
      }
    }
  }
  
  return xmlList;
  
};



// Ajouté par Driss

/**
 * Choose Arduino card : UNO or MEGA
 */
BlocklyDuino.ArduinoCard =  function (){


  profile["default"] = Blockly.Arduino.getDefaultBoard();
  //alert(profile.default.description);
  var Cacheobj=document.getElementById("pinout");
  //alert(Cacheobj.options[Cacheobj.selectedIndex].value);
  
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (window.profile["default"]!=window.profile[Cacheobj.options[Cacheobj.selectedIndex].value]) {
  if (false || window.confirm(MSG['arduino_card']+' '+window.profile[Cacheobj.options[Cacheobj.selectedIndex].value].description+' ?')) {
    //window.profile["default"]=window.profile[Cacheobj.options[Cacheobj.selectedIndex].value];
    Blockly.Arduino.setDefaultBoard(Cacheobj.options[Cacheobj.selectedIndex].value);
	//////    BlocklyDuino.backupBlocks();
    Blockly.mainWorkspace.clear();
	///////    BlocklyDuino.loadBlocks('');
    BlocklyDuino.renderContent();
	}
  }
  

}  


