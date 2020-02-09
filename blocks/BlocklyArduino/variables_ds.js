/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Variable blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.variables');
goog.provide('Blockly.Blocks.conversion');

goog.require('Blockly.Blocks');


Blockly.Blocks.variables.HUE = 330;
Blockly.Blocks.conversion.HUE = 38;
Blockly.HSV_SATURATION = 0.8; 
Blockly.HSV_VALUE = 0.8;

Blockly.Blocks.variables_get_ds = {
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
        Blockly.Msg.VARIABLES_SET_ITEM), 'VAR')
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

Blockly.Blocks.variables_set_ds = { 
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {

/*
    this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_SET_TITLE)
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM), "VAR")
        .appendField(Blockly.Msg.VARIABLES_SET_TO)

    this.appendValueInput("VALUE")
        .setCheck(null);
*/

    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField(Blockly.Msg.VARIABLES_SET_TITLE)
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM), "VAR")
        .appendField("à");
;




    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);



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

Blockly.Blocks.variables_declare_ds = {
  /**
   * Block for variable delaration.
   * @this Blockly.Block
   */
  init: function() {
    
    this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_DECLARE_TITLE)
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM), "VAR")
        .appendField(Blockly.Msg.VARIABLES_DECLARE_TYPE)
        .appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()),'TYPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip(Blockly.Msg.VARIABLES_DECLARE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.VARIABLES_DECLARE_HELPURL);

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
    //ajouté par driss
    newName = replaceSpec(newName);
    //fin ajout driss
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};


Blockly.Blocks['conversion_tochar'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.CONV_tochar);
    this.setOutput(true, 'String');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/CharCast');
  }
};

Blockly.Blocks['conversion_tobyte'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME", 'Number')
        .appendField(Blockly.Msg.CONV_tobyte);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/ByteCast');
  }
};

Blockly.Blocks['conversion_toint'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME", 'Number')
        .appendField(Blockly.Msg.CONV_toint);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/IntCast');
  }
};

Blockly.Blocks['conversion_tolong'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME", 'Number')
        .appendField(Blockly.Msg.CONV_tolong);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/IntCast');
  }
};

Blockly.Blocks['conversion_tofloat'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME", 'Number')
        .appendField(Blockly.Msg.CONV_tofloat);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/floatCast');
  }
};
