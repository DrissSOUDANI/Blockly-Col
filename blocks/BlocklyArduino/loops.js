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
 * @fileoverview Loop blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');

Blockly.Blocks['controls_repeat_indefinitely'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Répéter Indéfinément");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

 

Blockly.Blocks.controls_base_delay = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField(Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP);
  }
};

//-----------------------------------------------------------------------------------
//driss_controls_do_only_every_x_time

Blockly.Blocks.driss_controls_do_only_every_x_time = {
  name:"REPEAT_EVERY_X_TIMES",
  init: function() {
    this.appendDummyInput()
        .appendField("Faire ces actions toutes les ")
        .appendField(new Blockly.FieldNumber(5, 0, 3600), "TIME")
        .appendField("seconde(s)");
    this.appendStatementInput("ONLY_EVERY")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.loops.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

