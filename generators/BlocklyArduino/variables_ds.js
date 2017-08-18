/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Variable blocks for Arduino.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.variables');
goog.provide('Blockly.Blocks.conversion');

goog.require('Blockly.Arduino');


var tableau_type=[];



Blockly.Arduino.variables_declare_ds = function() {
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  
  var varType = Blockly.Arduino.getArduinoType_(Blockly.Types[this.getFieldValue('TYPE')]);


  Blockly.Arduino.addVariable(varName, varType+" "+varName+";", true)
  //Blockly.Arduino.definitions_['var_'+varName] = varType+" "+varName+";\n"

  return '';
};

Blockly.Arduino.variables_set_ds = function() {
  // Variable setter.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  //charge le type dans tableau_type 
  //tableau_type[Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.Variables.NAME_TYPE)]=argument1;   
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);       
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.Arduino.variables_get_ds = function() {
  // Variable getter.
  var code = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};





Blockly.Arduino['conversion_tochar'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'char('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}

Blockly.Arduino['conversion_tobyte'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'byte('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}

Blockly.Arduino['conversion_toint'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'int('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}

Blockly.Arduino['conversion_tolong'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'long('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}

Blockly.Arduino['conversion_tofloat'] = function(block) {
var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'float('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC]; 
}
