//www.technozone51fr

// define blocks 
'use strict';


Blockly.Blocks.technozone_init_eeprom = {
  init: function() {
    this.setColour(230);
    this.setHelpUrl(Blockly.Msg.TECHNOZONE_MAIN_HELPURL);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT312);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT312);
  }
};

Blockly.Blocks.technozone_store_eeprom = {
 
  init: function() {
    this.setHelpUrl(Blockly.Msg.TECHNOZONE_MAIN_HELPURL);
    this.setColour(230);
    
  //modifié par driss par le bloc en dessous à cause de interpolateMsg qui n'est pas dans blockly_compressed.js
    /*
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        Blockly.Msg.TECHNOZONE51_TEXT313 + ' %1 ' +
        Blockly.Msg.TECHNOZONE51_TEXT314,
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
         Blockly.ALIGN_RIGHT);
   */
    /* remplacer par*/
    this.appendDummyInput()
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT313)
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM), "VAR")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT314);
    /* fin du remplacer par driss*/


    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT313+Blockly.Msg.TECHNOZONE51_TEXT314);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};

Blockly.Blocks.technozone_restore_eeprom = {
 
  init: function() {
    this.setHelpUrl(Blockly.Msg.TECHNOZONE_MAIN_HELPURL);
    this.setColour(230);
    
    //modifié par driss par le bloc en dessous à cause de interpolateMsg qui n'est pas dans blockly_compressed.js
    /*
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        Blockly.Msg.TECHNOZONE51_TEXT315 + ' %1 ' +
        Blockly.Msg.TECHNOZONE51_TEXT316,
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
         Blockly.ALIGN_RIGHT);

    */
    /* remplacer par*/
    this.appendDummyInput()
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT315)
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM), "VAR")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT316);
    /* fin du remplacer par driss*/


    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT315+Blockly.Msg.TECHNOZONE51_TEXT316);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};

Blockly.Blocks.technozone_declare_var = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);

     //modifié par driss par le bloc en dessous à cause de interpolateMsg qui n'est pas dans blockly_compressed.js
    /*
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        "Déclare la variable " + ' %1 ' + Blockly.Msg.VARIABLES_SET_TYPE + ' %2 ',
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
        ['TYPE',new Blockly.FieldDropdown([["Entier", "int"], ["Entier long", "long"],["Octet", "byte"],["Nombre decimal", "float"],["Texte", "String"],["Booleen", "boolean"]])],
        Blockly.ALIGN_RIGHT);

    */
    /* remplacer par*/
    this.appendDummyInput()
        .appendField("Déclare la variable ")
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM), "VAR")
        .appendField(Blockly.Msg.VARIABLES_SET_TYPE)
        .appendField(new Blockly.FieldDropdown([["Entier", "int"], ["Entier long", "long"],["Octet", "byte"],["Nombre decimal", "float"],["Texte", "String"],["Booleen", "boolean"]]), "TYPE");
    /* fin du remplacer par driss*/

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};

Blockly.Blocks.technozone_variables_set = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);

    //modifié par driss par le bloc en dessous à cause de interpolateMsg qui n'est pas dans blockly_compressed.js
    /*
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        Blockly.Msg.VARIABLES_SET_TITLE + ' %1 ' +
        Blockly.Msg.VARIABLES_SET_TAIL + ' %2',
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
        ['VALUE', null, Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT);
   */
    /* remplacer par*/
    this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_SET_TITLE)
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM), "VAR")
        .appendField(Blockly.Msg.VARIABLES_SET_TAIL)
        .appendField(null, Blockly.ALIGN_RIGHT, "VALUE");
    /* fin du remplacer par driss*/



    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};


Blockly.Blocks.technozone_variables_get = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    this.contextMenuType_ = 'variables_set';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};


//pap1cc OK
Blockly.Blocks.technozone_pap1cc = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT69)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT70)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//pap1relatif OK
Blockly.Blocks.technozone_pap1relatif = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT71)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT70)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);
    this.appendValueInput("PAS",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT72);               
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

Blockly.Blocks.technozone_robot_btn = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("le bouton RUN/STOP est appuyé");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

//wf_available OK
Blockly.Blocks.technozone_wf_available = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT192);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT193);
  }
};

//robot_bt_available OK
Blockly.Blocks.technozone_robot_bt_available = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT159);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT160);
  }
};

//bt_init OK
Blockly.Blocks.technozone_bt_init = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT157);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT112)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/bt1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT165);
    this.appendDummyInput("")
	      .appendTitle("RX ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "DIST")
    this.appendDummyInput("")
        .appendTitle("TX ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "TRIGER");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT158);
  }
};

//wf_init OK
Blockly.Blocks.technozone_wf_init = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT189);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT190)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wifi1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT165);
    this.appendDummyInput("")
	      .appendTitle("RX ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "RXpin")
    this.appendDummyInput("")
        .appendTitle("TX ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "TXpin");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT191);
  }
};


//speech_init OK
Blockly.Blocks.technozone_speech_init = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=parole:faire_parler_vos_cartes_arduino',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT167); 
    this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT168); 
    this.appendValueInput("PITCH",'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT169); 
    this.appendValueInput("BENDING",'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT170); 
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT153);
  }
};


//ihm_init OK
Blockly.Blocks.technozone_ihm_init = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bt1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT111);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT112)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/bt1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT165);
    this.appendDummyInput("")
	      .appendTitle("RX ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "DIST")
    this.appendDummyInput("")
        .appendTitle("TX ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "TRIGER");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT113);
  }
};

Blockly.Blocks.technozone_robot_ihm_init = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT111);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT113);
  }
};

Blockly.Blocks.technozone_robot_bt_init = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT157);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT158);
  }
};

//robot_ihm_available OK
Blockly.Blocks.technozone_robot_ihm_available = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT114);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT115);
  }
};

//robot_ihm_change OK
Blockly.Blocks.technozone_robot_ihm_change = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT116);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT117);
  }
};

//robot_ihm_inter_read OK
Blockly.Blocks.technozone_robot_ihm_inter_read = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT138)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "10"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT140);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT141);
  }
};

Blockly.Blocks.technozone_rfid_init = {
  category: 'TechnoZone51 : RFID',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT263)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/rfid.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT264);
  }
};


Blockly.Blocks.technozone_rfid_write = {
  category: 'TechnoZone51 : RFID',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
	this.setColour(190);	
	this.appendValueInput("NUM",'Number')
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT265)
		.setCheck('Number')
	this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT268)	
		.appendTitle(new Blockly.FieldImage("blocks/technozone51/rfid.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");		
	this.appendValueInput("TEXT", String)
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT280) 
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT269);  
  }
};

Blockly.Blocks.technozone_rfid_read = {
  category: 'TechnoZone51 : RFID',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
	this.appendValueInput("NUM",'Number')
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT267)
		.setCheck('Number')
	this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT268)	
		.appendTitle(new Blockly.FieldImage("blocks/technozone51/rfid.jpg", 64, 64))
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
	this.setInputsInline(true);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT269);
  }
};

Blockly.Blocks.technozone_rfid_text = {
  category: 'TechnoZone51 : RFID',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT270)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/rfid.jpg", 64, 64))
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT270);
  }
};


Blockly.Blocks.technozone_rfid_card = {
  category: 'TechnoZone51 : RFID',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT271)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/rfid.jpg", 64, 64))
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT271);
  }
};


//serial_init
Blockly.Blocks.technozone_serial_init = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT171)
        .appendTitle(new Blockly.FieldDropdown([["300", "300"], ["600", "600"], ["1200", "1200"], ["2400", "2400"], ["4800", "4800"], ["9600", "9600"], ["14400", "14400"], ["19200", "19200"], ["28800", "28800"], ["38400", "38400"], ["57600", "57600"], ["115200", "115200"]]), "BAUD")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT172);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT171);
  }
};

//serial_print
Blockly.Blocks.technozone_serial_print = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT173); 
   this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT173);
  }
};

//serial_println
Blockly.Blocks.technozone_serial_println = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT174); 
   this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT174);
  }
};

//robot_ihm_btn_read OK
Blockly.Blocks.technozone_robot_ihm_btn_read = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "10"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT108);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT133);
  }
};

//robot_ihm_potar_read OK
Blockly.Blocks.technozone_robot_ihm_potar_read = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:BTIHM1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT148)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "10"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT149);
  }
};

//robot_ihm_led_def OK
Blockly.Blocks.technozone_robot_ihm_led_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT118)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT121);
  }
};

//wf_reset
Blockly.Blocks.technozone_wf_reset = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT200); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT201);
  }
};

Blockly.Blocks.technozone_wf_treatment = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT279); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT279);
  }
};

//robot_ihm_btn_def OK
Blockly.Blocks.technozone_robot_ihm_btn_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT131)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT132);
  }
};

//speech_say
Blockly.Blocks.technozone_speech_say = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=parole:faire_parler_vos_cartes_arduino',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT167);
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT166);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT132);
  }
};

//robot_ihm_inter_def OK
Blockly.Blocks.technozone_robot_ihm_inter_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT134)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT135);
  }
};

//robot_ihm_potar_def OK
Blockly.Blocks.technozone_robot_ihm_potar_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT142)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT143)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["10", "10"], ["100", "100"], ["1000", "1000"]]), "DIVISOR");
    this.appendValueInput("POTARI",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT144)
        .setCheck('Number');  
    this.appendValueInput("POTARA",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT145)
        .setCheck('Number'); 
    this.appendValueInput("POTARP",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT146)
        .setCheck('Number');  
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120); 
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT147);
  }
};

//robot_ihm_gauge_def
Blockly.Blocks.technozone_robot_ihm_gauge_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT150)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119); 
    this.appendValueInput("GRADUATION", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT151); 
    this.appendValueInput("TITRE", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT152); 
    this.appendValueInput("CONTENT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120); 
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT153);
  }
};

//wf_setup
Blockly.Blocks.technozone_wf_setup = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")	
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT197)
		.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT274, "AP"], [Blockly.Msg.TECHNOZONE51_TEXT275, "STA"]]), "STA");
    this.appendValueInput("SSID", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT194); 
    this.appendValueInput("PASSWD", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT195); 
    this.appendValueInput("SERVERIP", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT196); 
    this.appendValueInput("GATEWAYIP", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT198); 
    this.appendValueInput("SUBNETIP", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT199);
	this.appendDummyInput("")	
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT278)
		.appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT276, "activé"], [Blockly.Msg.TECHNOZONE51_TEXT277, "désactivé"]]), "VERBOSE");	
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT202);
  }
};

//robot_ihm_gauge_write
Blockly.Blocks.technozone_robot_ihm_gauge_write = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT154)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("VALEUR",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT155)
        .setCheck('Number');   
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT156)
        .appendTitle(new Blockly.FieldDropdown([["0", "0"],["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "DECIMAL");
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Positionne une gauge IHM (réf : BTIHM1)');
  }
};

//robot_ihm_led_on OK
Blockly.Blocks.technozone_robot_ihm_led_on = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT122)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT123)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT124, "0"], [Blockly.Msg.TECHNOZONE51_TEXT125, "1"], [Blockly.Msg.TECHNOZONE51_TEXT126, "2"], [Blockly.Msg.TECHNOZONE51_TEXT127, "3"], [Blockly.Msg.TECHNOZONE51_TEXT128, "4"], [Blockly.Msg.TECHNOZONE51_TEXT129, "5"]]), "COLOR");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT130);
  }
};

//robot_ihm_inter_on OK
Blockly.Blocks.technozone_robot_ihm_inter_on = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT136, "1"], [Blockly.Msg.TECHNOZONE51_TEXT137, "0"]]), "COLOR") 
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT138)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT139);
  }
};

//robot_bt_read OK
Blockly.Blocks.technozone_robot_bt_read = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(160);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT161);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT162);
  }
};

//robot_bt_write
Blockly.Blocks.technozone_robot_bt_write = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(190);
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT163);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT164);
  }
};

Blockly.Blocks.technozone_robot_irleft = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Un obstacle a été détecté à gauche");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_ircenter = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Un obstacle a été détecté au centre");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_irright = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Un obstacle a été détecté à droite");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_ligleft = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Une ligne a été détecté à gauche avec comme seuil:");
	this.appendValueInput("SEUILLEFT",'Number')
		.setCheck('Number');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_ligright = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Une ligne a été détecté à droite avec comme seuil:");
	this.appendValueInput("SEUILRIGHT",'Number')
		.setCheck('Number');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_init = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT308);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT308);
  }
};

Blockly.Blocks.technozone_robot_move = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("Faire ")
        .appendTitle(new Blockly.FieldDropdown([["avancer", "0"], ["reculer", "1"]]), "DIR");     
    this.appendValueInput("DISTANCE",'Number')
        .appendTitle(" le robot de ")
        .setCheck('Number');
    this.setInputsInline(true);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["cm", "1"], ["mm", "0"]]), "UNIT");
    this.appendDummyInput("")
        .appendTitle(" en mode ")
        .appendTitle(new Blockly.FieldDropdown([["préemptif", "1"], ["non préemptif", "0"]]), "PREEMPTIF");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks.technozone_robot_turn = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("Faire tourner le robot à ")
        .appendTitle(new Blockly.FieldDropdown([["droite", "0"], ["gauche", "1"]]), "ROT");     
    this.appendValueInput("ANGLE",'Number')
        .appendTitle(" de ")
        .setCheck('Number');
    this.setInputsInline(true);
    this.appendDummyInput("")
        .appendTitle(" degré ");
    this.appendDummyInput("")
        .appendTitle("en mode ")
        .appendTitle(new Blockly.FieldDropdown([["préemptif", "1"], ["non préemptif", "0"]]), "PREEMPTIF");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks.technozone_robot_stop = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("Stopper le robot")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks.technozone_robot_speed = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("Fixe la vitesse maximale du robot");
    this.appendValueInput("VITESSEMAX",'Number')
        .appendTitle(" sur [0..255] ")
        .setCheck('Number');    
    this.setInputsInline(true);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Vitesse maximale du robot (réf : BARBOT1)');
  }
};

Blockly.Blocks.technozone_robot_ram_declare = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT175)
    this.appendValueInput("NOMBRE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT176);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT175);
  }
};

//eeprom write
Blockly.Blocks.technozone_robot_eeprom_write = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT185)
    this.appendValueInput("NOMBRE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT187);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT185);
  }
};

//eeprom read
Blockly.Blocks.technozone_robot_eeprom_read = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT186)
    this.appendValueInput("NOMBRE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT187);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT186);
  }
};

//ram reset
Blockly.Blocks.technozone_robot_ram_reset = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT177);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT177);
  }
};

//ram_get
Blockly.Blocks.technozone_robot_ram_get = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendValueInput("INDEX",'Number')
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT178);    
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT178);
  }
};

Blockly.Blocks.technozone_robot_ram_flash = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(160);
    this.appendValueInput("TEXT",'String')
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT307);    
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT307);
  }
};

//ram set
Blockly.Blocks.technozone_robot_ram_set = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);

    this.appendValueInput("NOMBRE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT179);
    this.appendValueInput("INDEX",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT180);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT175);
  }
};

//DS1307_initDate OK

Blockly.Blocks.technozone_DS1307_rtcinit = {
  category: 'TechnoZone51 : Horloge temps réel',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT306)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ds1307.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT306);
  }
};


Blockly.Blocks.technozone_DS1307_initDate = {
  category: 'TechnoZone51 : Horloge temps réel',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT231)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ds1307.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.appendValueInput("JOUR",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT232)
        .setCheck('Number');  
    this.appendValueInput("MOIS",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT233)
        .setCheck('Number');   
    this.appendValueInput("ANNEE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT234)
        .setCheck('Number');                                     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT239);
  }
};

//DS1307_initTime OK
Blockly.Blocks.technozone_DS1307_initTime = {
  category: 'TechnoZone51 : Horloge temps réel',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT235)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ds1307.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.appendValueInput("HEURE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT236)
        .setCheck('Number'); 
    this.appendValueInput("MINUTE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT237)
        .setCheck('Number');  
    this.appendValueInput("SECONDE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT238)
        .setCheck('Number');                                    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT239);
  }
};

//DS1307_readTime OK
Blockly.Blocks.technozone_DS1307_readTime = {
  category: 'TechnoZone51 : Horloge temps réel',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(160);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT240);                                  
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT239);
  }
};

//DS1307_readDate OK
Blockly.Blocks.technozone_DS1307_readDate = {
  category: 'TechnoZone51 : Horloge temps réel',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(160);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT241);                                  
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT239);
  }
};

//DS1307_read OK
Blockly.Blocks.technozone_DS1307_read = {
  category: 'TechnoZone51 : Horloge temps réel',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT242)
        .appendTitle(new Blockly.FieldDropdown([["les heures", "1"], ["les minutes", "2"], ["les secondes", "3"], ["le jour", "4"], ["le mois", "5"], ["l'année", "6"]]), "ITEM");                                                     
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT239);
  }
};


//millis_micro OK
Blockly.Blocks.technozone_millis_micro = {
  category: 'TechnoZone51 : Horloge temps réel',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT243)
        .appendTitle(new Blockly.FieldDropdown([["millisecondes", "1"], ["microsecondes", "2"]]), "ITEM")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT244);                                                    
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT239);
  }
};

//pap1init OK
Blockly.Blocks.technozone_pap1init = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT63)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");         
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT66)
        .appendTitle(new Blockly.FieldDropdown([["Single Stepping", "SINGLE_STEPPING"], ["Full Stepping", "FULL_STEPPING"], ["Half Stepping", "HALF_STEPPING"]]), "MODE");             
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT67)
        .appendTitle(new Blockly.FieldDropdown([["Auto Relax", "AUTO_RELAX"], ["No Auto Relax", "NO_AUTO_RELAX"]]), "RELAX");                 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//pap1busy OK
Blockly.Blocks.technozone_pap1busy = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT73)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", 64, 64));
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//mot2 OK
Blockly.Blocks.technozone_mot2 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:mot2',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT51)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT58)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/mot2.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT59);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT60)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PINDIR");
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT61)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownPWMPins), "PINPWM");  
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT62);
  }
};

//telec2 OK
Blockly.Blocks.technozone_presstelec = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT305)
        .appendField(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", 64, 64))
	this.appendDummyInput("")	
        .setAlign(Blockly.ALIGN_RIGHT)
	this.setOutput(true, 'String');
	this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT49);
  }
};




//telecsetup OK
Blockly.Blocks.technozone_telecsetup = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT100)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT101);
  }
};

//telecint OK
Blockly.Blocks.technozone_telecinit = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT104)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", 64, 64));
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT105);
  }
};

//telecflush OK
Blockly.Blocks.technozone_telecflush = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT102)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT103);
  }
};

//mot1easybot1 OK
Blockly.Blocks.technozone_mot1easybot1 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT51)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT56)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/easybot.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT57);
  }
};

//mot1easycon1 OK
Blockly.Blocks.technozone_mot1easycon1 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT51)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT52)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/easycon1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT55);
  }
};

//lcdinit OK
Blockly.Blocks.technozone_lcdinit = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT74)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT75)
        .appendTitle(new Blockly.FieldDropdown([["39", "39"], ["63", "63"]]),"I2C_adress");
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT76)
        .appendTitle(new Blockly.FieldTextInput('16',Blockly.Blocks.math_number.validator), 'nbcol');
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT77)
        .appendTitle(new Blockly.FieldTextInput('2',Blockly.Blocks.math_number.validator), 'nblig');   
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT78)     
        .appendTitle(new Blockly.FieldCheckbox('TRUE'), 'backlight');   
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT79)     
        .appendTitle(new Blockly.FieldCheckbox('FALSE'), 'cursor'); 
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT80)     
        .appendTitle(new Blockly.FieldCheckbox('FALSE'), 'blink');          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT81);
  }
};

//lcdspecial OK
Blockly.Blocks.technozone_lcdspecial = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT82)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT83, "1"], [Blockly.Msg.TECHNOZONE51_TEXT84, "2"],[Blockly.Msg.TECHNOZONE51_TEXT85, "3"],[Blockly.Msg.TECHNOZONE51_TEXT86, "4"],[Blockly.Msg.TECHNOZONE51_TEXT87, "5"],[Blockly.Msg.TECHNOZONE51_TEXT88, "6"],[Blockly.Msg.TECHNOZONE51_TEXT89, "7"],[Blockly.Msg.TECHNOZONE51_TEXT90, "8"]]),"special");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT91);
  }
};

//lcdclear OK
Blockly.Blocks.technozone_lcdclear = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT92)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT93);
  }
};

//lcdwrite OK
Blockly.Blocks.technozone_lcdwrite = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT94)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT95);
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT96)
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'COL');  
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT97)
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'LIG');      
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT98);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT99);
  }
};

Blockly.Blocks.technozone_robot_lcdclear = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("efface l'écran LCD")
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Efface l'écran LCD sur le bus I2C (réf : LCD1)");
  }
};


Blockly.Blocks.technozone_robot_lcdwrite = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("écrire sur l'écran LCD")
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
        .appendTitle("à partir de la position");
    this.appendDummyInput("")    
        .appendTitle("colonne [0..MAXCOL-1]")
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'COL');  
    this.appendDummyInput("")    
        .appendTitle("ligne [0..MAXLIG-1]")
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'LIG');      
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("le texte");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Ecrire sur l'écran LCD (réf : LCD1)");
  }
};

Blockly.Blocks.technozone_robot_lcdspecial = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("fonctions spéciales de l'écran LCD")
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldDropdown([["active le curseur", "cursor"],["désactive le curseur", "noCursor"],["faire clignoter le curseur", "blink"],["arrête le clignotement du curseur", "noBlink"],["active l'affichage", "display"],["désactive l'affichage", "noDisplay"]]),"special");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Fonction spéciales de l'écran LCD (réf : LCD1)");
  }
};

//led1red OK
Blockly.Blocks.technozone_led1red = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/led1red.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//led1green OK
Blockly.Blocks.technozone_led1green = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/led1green.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT36);
  }
};

//led1yellow OK
Blockly.Blocks.technozone_led1yellow = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/led1yellow.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT37);
  }
};
//led1white OK
Blockly.Blocks.technozone_led1white = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/led1white.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT037);
  }
};

//relay1 OK
Blockly.Blocks.technozone_relay1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:relay1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT38)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/relay1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT39)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT40, "LOW"], [Blockly.Msg.TECHNOZONE51_TEXT41, "HIGH"]]), "STAT"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT42);
  }
};

//buzzer1 OK
Blockly.Blocks.technozone_buzzer1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT43)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/buzzer1.jpg", 64, 64))
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
    this.appendValueInput("NUM",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT44)
    this.appendValueInput("TPS",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT45)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT46);
  }
};

Blockly.Blocks.technozone_mosfet1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:relay1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT260)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/mosfet1.jpg", 64, 64))  
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT261)		
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT262)
		this.appendValueInput("NUM",'Number')
		this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT272);
  }
};

//wf_led OK
Blockly.Blocks.technozone_wf_led = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT203)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfled.jpg", 38, 38))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT204) 
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT123)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT124, "none"], [Blockly.Msg.TECHNOZONE51_TEXT125, "red"], [Blockly.Msg.TECHNOZONE51_TEXT126, "orange"], [Blockly.Msg.TECHNOZONE51_TEXT127, "yellow"], [Blockly.Msg.TECHNOZONE51_TEXT128, "green"], [Blockly.Msg.TECHNOZONE51_TEXT129, "blue"]]), "COLOR");       
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT205);
  }
};

//wf_potar OK
Blockly.Blocks.technozone_wf_potar = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		    .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT213)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfpotar.jpg", 80, 40))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT204) 
    this.appendValueInput("POSITION",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT214); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT215);
  }
};

//wf_gauge OK
Blockly.Blocks.technozone_wf_gauge = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		    .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT220)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfgauge.jpg", 80, 40))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT204) 
    this.appendValueInput("POSITION",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT214); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT221);
  }
};

//wf_label OK
Blockly.Blocks.technozone_wf_label = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		    .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT222)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wflabel.jpg", 80, 40))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT204) 
    this.appendValueInput("TEXTE",String)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT223); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT224);
  }
};


//wf_potar_read OK
Blockly.Blocks.technozone_wf_potar_read = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT22)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfpotar.jpg", 80, 40))    
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT216);
  }
};

//wf_edit_read OK
Blockly.Blocks.technozone_wf_edit_read_text = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT228)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfedit.jpg", 160, 40))    
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT229);
  }
};

Blockly.Blocks.technozone_wf_edit_read_number = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT284)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfedit.jpg", 160, 40))    
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT229);
  }
};

Blockly.Blocks.technozone_wf_file = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
	this.setColour(190);	
	this.appendValueInput("FIELD",'Number')
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT286)
		.setCheck('Number')
	this.appendDummyInput("")
	.appendTitle(new Blockly.FieldImage("blocks/technozone51/wifi2.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT287);
	this.appendValueInput("TEXTE", String)
        .setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT288);  
  }
};

Blockly.Blocks.technozone_wf_clean = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
	this.setColour(190);	
	this.appendValueInput("FIELD",'Number')
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT289)
		.setCheck('Number')
	this.appendDummyInput("")
	.appendTitle(new Blockly.FieldImage("blocks/technozone51/wifi2.jpg", 64, 64))
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT288);  
  }
};

Blockly.Blocks.technozone_wf_clean_picture = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
	this.setColour(190);	
	this.appendValueInput("FIELD",'Number')
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT310)
		.setCheck('Number')
	this.appendDummyInput("")
	.appendTitle(new Blockly.FieldImage("blocks/technozone51/wifi2.jpg", 64, 64))
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT288);  
  }
};

Blockly.Blocks.technozone_wf_resol_cam = {
	category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT290)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/camera.jpg", 64, 64))
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT282)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT291, "160x120"], [Blockly.Msg.TECHNOZONE51_TEXT292, "176x144"], [Blockly.Msg.TECHNOZONE51_TEXT293, "320x240"], [Blockly.Msg.TECHNOZONE51_TEXT294, "352x288"], [Blockly.Msg.TECHNOZONE51_TEXT295, "640x480"], [Blockly.Msg.TECHNOZONE51_TEXT296, "800x600"], [Blockly.Msg.TECHNOZONE51_TEXT297, "1024x768"], [Blockly.Msg.TECHNOZONE51_TEXT298, "1280x1024"], [Blockly.Msg.TECHNOZONE51_TEXT299, "1600x1200"]]), "RESOL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT249);
  }
};

Blockly.Blocks.technozone_wf_cam_shoot = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
	this.setColour(190);	
		this.appendDummyInput("")
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT300)
		.appendTitle(new Blockly.FieldImage("blocks/technozone51/camera.jpg", 64, 64))
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT301);
	this.appendValueInput("FIELD",'Number');
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT288);  
  }
};
	
Blockly.Blocks.technozone_wf_cam_disp = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
	this.setColour(190);	
	this.appendValueInput("PICTURE",'Number')
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT302)
		.setCheck('Number')
	this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT303)	
		.appendTitle(new Blockly.FieldImage("blocks/technozone51/camera.jpg", 64, 64));	
	this.appendValueInput("FIELD", 'Number')
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT304);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT269);  
  }
};

Blockly.Blocks.technozone_robot_buzzer_tone = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1',
  init: function() {
    this.setColour(190);
    this.appendValueInput("FREQUENCE",'Number')
        .appendTitle("émettre un son d'une fréquence ")
        .setCheck('Number');
    this.appendValueInput("DURATION",'Number')
        .appendTitle(" Hz pendant une durée de ")
        .setCheck('Number');
    this.appendDummyInput("")
		.appendTitle(" ms");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Buzzer (réf : LED1-BUZZER1)');
  }
};

Blockly.Blocks.technozone_robot_irsend = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		.appendTitle("Déclenche une détection d'obstacles");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Buzzer (réf : LED1-BUZZER1)');
  }
};

//sonar1 OK
Blockly.Blocks.technozone_sonar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:sonar1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
	      .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT28)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/sonar1.jpg", 64, 64))
    this.appendDummyInput("")
	      .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT29)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "TRIGER")
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT30)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "DIST");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT31);
  }
};

//servo1 OK
Blockly.Blocks.technozone_servo1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT47)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/servomoteur1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
    this.appendValueInput("DEGREE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT48);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT49);
  }
};

Blockly.Blocks.technozone_servo2 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT309)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/servomoteur1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
    this.appendValueInput("DEGREE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT48);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT49);
  }
};

//servo1 OK
Blockly.Blocks.technozone_robot_servo1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT47)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/servomoteur1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
    this.appendValueInput("DEGREE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT48);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT184);
  }
};

//ram declare
Blockly.Blocks.technozone_ram_declare = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT175)
    this.appendValueInput("NOMBRE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT176);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT175);
  }
};

//eeprom write
Blockly.Blocks.technozone_eeprom_write = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT185)
    this.appendValueInput("NOMBRE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT187);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT185);
  }
};

//eeprom read
Blockly.Blocks.technozone_eeprom_read = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT186)
    this.appendValueInput("NOMBRE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT187);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT186);
  }
};

//ram reset
Blockly.Blocks.technozone_ram_reset = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT177);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT177);
  }
};

//ram_get
Blockly.Blocks.technozone_ram_get = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendValueInput("INDEX",'Number')
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT178);    
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT178);
  }
};

Blockly.Blocks.technozone_ram_flash = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(160);
    this.appendValueInput("TEXT",'String')
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT307);    
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT307);
  }
};

//ram set
Blockly.Blocks.technozone_ram_set = {
  category: 'TechnoZone51 : Mémoire',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);

    this.appendValueInput("NOMBRE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT179);
    this.appendValueInput("INDEX",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT180);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT175);
  }
};


//read_servo1 OK
Blockly.Blocks.technozone_read_servo1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT50)
        .appendField(new Blockly.FieldImage("blocks/technozone51/servomoteur1.jpg", 64, 64))
	this.appendDummyInput("")	
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownPWMPins), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT49);
  }
};

//btn1white OK
Blockly.Blocks.technozone_btn1white = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/btn1white.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT7);
  }
};

//wf_switch
Blockly.Blocks.technozone_wf_switch = {
category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT138)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfswitch.jpg", 80, 40))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT208) 
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT206)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.LOGIC_BOOLEAN_TRUE, "true"], [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "false"]]), "LOGIQUE");       
    this.setInputsInline(true);    
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT207);
  }
};

Blockly.Blocks.technozone_wf_bascule = {
category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT281)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfswitch.jpg", 80, 40))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT208) 
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT282)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.LOGIC_BOOLEAN_TRUE, "true"], [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "false"]]), "LOGIQUE");       
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT283);
  }
};


//wf_btn
Blockly.Blocks.technozone_wf_btn = {
category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfbtn.jpg", 83, 40))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT208) 
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT209);
    this.setInputsInline(true);    
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT210);
  }
};

//wf_potar_test
Blockly.Blocks.technozone_wf_potar_test = {
category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT217)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfpotar.jpg", 83, 40))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT208) 
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT218);
    this.setInputsInline(true);    
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT219);
  }
};

//wf_edit_test
Blockly.Blocks.technozone_wf_edit_test = {
category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT225)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfedit.jpg", 160, 40))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT204) 
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT226);
    this.setInputsInline(true);    
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT227);
  }
};

//wf_btn_reset
Blockly.Blocks.technozone_wf_btn_reset = {
  category: 'TechnoZone51 : Wifi',
  helpUrl: 'http://www.technozone51.fr/dokuwiki2/doku.php?id=documentation:wifi1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT211)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/wfbtn.jpg", 83, 40))
    this.appendValueInput("FIELD",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT208); 
    this.setInputsInline(true);         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT212);
  }
};

//btn1black OK
Blockly.Blocks.technozone_btn1black = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/btn1black.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT8);
  }
};

//btn1green OK
Blockly.Blocks.technozone_btn1green = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/btn1green.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT9);
  }
};

//btn1red OK
Blockly.Blocks.technozone_btn1red = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/btn1red.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT10);
  }
};

//Switch1 OK
Blockly.Blocks.technozone_switch1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:switch1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT11)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/switch1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT12);
  }
};

//ils1 OK
Blockly.Blocks.technozone_ils1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ils1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT1)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ils1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT13);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT14);
  }
};

//proxi1 OK
Blockly.Blocks.technozone_proxi1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:proxi1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT15)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/proxi1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT16);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT17);
  }
};

//bari1 OK
Blockly.Blocks.technozone_bari1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bari1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT18)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/bari1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT16);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT19);
  }
};

//Détecteur de ligne OK
Blockly.Blocks.technozone_lig1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lig1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT1)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lig1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT3);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT4);
  }
};

//cmouv1 OK
Blockly.Blocks.technozone_cmouv1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:cmouv1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT1)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/cmouv1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT20);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT21);
  }
};

//potar1 OK
Blockly.Blocks.technozone_potar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:potar1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT22)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/potar1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT23);
  }
};

//ctn1 OK
Blockly.Blocks.technozone_ctn1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ctn1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT24)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ctn1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT25);
  }
};

//ds18B20
Blockly.Blocks.technozone_robot_ds18b20 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT188)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/barbotds18.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT182);
  }
};

//ds18B20 gettemp
Blockly.Blocks.technozone_robot_ds18b20_gettemp = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT181)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/barbotds18.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
    this.setOutput(true, 'Number');

    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT182);
  }
};

//ds18B20
Blockly.Blocks.technozone_ds18b20 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT188)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ds18B20.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT230);
  }
};

//dhtxx
Blockly.Blocks.technozone_dhtxx = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT245)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/dht22.jpg", 64, 64))
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT246, "DHT22"], [Blockly.Msg.TECHNOZONE51_TEXT247, "DHT11"], [Blockly.Msg.TECHNOZONE51_TEXT248, "DHT21"]]), "STAT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT249);
  }
};

//ds18B20 gettemp
Blockly.Blocks.technozone_ds18b20_gettemp = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT181)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ds18B20.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
    this.setOutput(true, 'Number');

    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT230);
  }
};

//dhtxx gettemp
Blockly.Blocks.technozone_dhtxx_gettemp = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT250)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/dht22.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT249);
  }
};

//dhtxx gethumid
Blockly.Blocks.technozone_dhtxx_gethumid = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT251)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/dht22.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT249);
  }
};

//ldr1 OK
Blockly.Blocks.technozone_ldr1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ldr1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT26)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ldr1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT27);
  }
};

//ldr1 OK
Blockly.Blocks.technozone_robot_ldr1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ldr1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT26)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/barbotldr1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT183);
  }
};

Blockly.Blocks.technozone_bme_init = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT255)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/bme.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT255);
  }
};

Blockly.Blocks.technozone_bme_read = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT256)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/bme.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT256);
  }
};

Blockly.Blocks.technozone_bme_gettemp = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT257)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/bme.jpg", 64, 64))
    this.setOutput(true, 'Number');

    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT257);
  }
};

Blockly.Blocks.technozone_bme_gethum = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT258)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/bme.jpg", 64, 64))
    this.setOutput(true, 'Number');

    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT258);
  }
};

Blockly.Blocks.technozone_bme_getpres = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT259)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/bme.jpg", 64, 64))
    this.setOutput(true, 'Number');

    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT259);
  }
};