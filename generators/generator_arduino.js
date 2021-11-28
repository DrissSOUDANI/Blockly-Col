/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * Based on work of Fred Lin (gasolin@gmail.com) for Blocklyduino.
 *
 * @fileoverview Helper functions for generating Arduino language (C++).
 */
'use strict';

goog.provide('Blockly.Arduino');

goog.require('Blockly.Generator');
goog.require('Blockly.StaticTyping');


/**
 * Arduino code generator.
 * @type {!Blockly.Generator}
 */
Blockly.Arduino = new Blockly.Generator('Arduino');
Blockly.Arduino.StaticTyping = new Blockly.StaticTyping();

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * Arduino specific keywords defined in: http://arduino.cc/en/Reference/HomePage
 * @private
 */
Blockly.Arduino.addReservedWords(
    'Blockly,' +  // In case JS is evaled in the current window.
    'setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,' +
    'define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,integer,' +
    'constants,floating,point,void,boolean,char,unsigned,byte,int,word,long,' +
    'float,double,string,String,array,static,volatile,const,sizeof,pinMode,' +
    'digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,' +
    'noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,' +
    'min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,' +
    'lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,' +
    'detachInterrupt,interrupts,noInterrupts');

/** Order of operation ENUMs. */
Blockly.Arduino.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Arduino.ORDER_UNARY_POSTFIX = 1;  // expr++ expr-- () [] .
Blockly.Arduino.ORDER_UNARY_PREFIX = 2;   // -expr !expr ~expr ++expr --expr
Blockly.Arduino.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.Arduino.ORDER_ADDITIVE = 4;       // + -
Blockly.Arduino.ORDER_SHIFT = 5;          // << >>
Blockly.Arduino.ORDER_RELATIONAL = 6;     // >= > <= <
Blockly.Arduino.ORDER_EQUALITY = 7;       // == != === !==
Blockly.Arduino.ORDER_BITWISE_AND = 8;    // &
Blockly.Arduino.ORDER_BITWISE_XOR = 9;    // ^
Blockly.Arduino.ORDER_BITWISE_OR = 10;    // |
Blockly.Arduino.ORDER_LOGICAL_AND = 11;   // &&
Blockly.Arduino.ORDER_LOGICAL_OR = 12;    // ||
Blockly.Arduino.ORDER_CONDITIONAL = 13;   // expr ? expr : expr
Blockly.Arduino.ORDER_ASSIGNMENT = 14;    // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.Arduino.ORDER_COMMA = 15;    // ,
Blockly.Arduino.ORDER_UNARY_NEGATION = 16;
Blockly.Arduino.ORDER_MEMBER = 17;
Blockly.Arduino.ORDER_NONE = 99;          // (...)

/**
 * A list of types tasks that the pins can be assigned. Used to track usage and
 * warn if the same pin has been assigned to more than one task.
 */
Blockly.Arduino.PinTypes = {
  INPUT: 'INPUT',
  OUTPUT: 'OUTPUT',
  PWM: 'PWM',
  SERVO: 'SERVO',
  STEPPER: 'STEPPER',
  SERIAL: 'SERIAL',
  I2C: 'I2C/TWI',
  SPI: 'SPI'
};

/**
 * Arduino generator short name for
 * Blockly.Generator.prototype.FUNCTION_NAME_PLACEHOLDER_
 * @type {!string}
 */
Blockly.Arduino.DEF_FUNC_NAME = Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_;

/**
 * Initialises the database of global definitions, the setup function, function
 * names, and variable names.
 * @param {Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.Arduino.init = function(workspace) {
  // Create a dictionary of definitions to be printed at the top of the sketch
  Blockly.Arduino.includes_ = Object.create(null);
  // Create a dictionary of global definitions to be printed after variables
  Blockly.Arduino.definitions_ = Object.create(null);
  // Create a dictionary of variables
  Blockly.Arduino.variables_ = Object.create(null);
  // Create a dictionary of functions from the code generator
  Blockly.Arduino.codeFunctions_ = Object.create(null);
  // Create a dictionary of functions created by the user
  Blockly.Arduino.userFunctions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions)
  Blockly.Arduino.functionNames_ = Object.create(null);
  // Create a dictionary of setups to be printed in the setup() function
  Blockly.Arduino.setups_ = Object.create(null);
  // Create a dictionary of pins to check if their use conflicts
  Blockly.Arduino.pins_ = Object.create(null);

  // ajouté par driss
  Blockly.Arduino.xmltab_ = Object.create(null);
  Blockly.Arduino.javatab_ = Object.create(null);
  Blockly.Arduino.pagetab_ = Object.create(null);
  Blockly.Arduino.styletab_ = Object.create(null);
  Blockly.Arduino.handleRoot_ = Object.create(null);
  Blockly.Arduino.handleXML_ = Object.create(null);

  
  Blockly.Arduino.idstab_ = Object.create(null);
  Blockly.Arduino.idstab_['id']=0;

  Blockly.Arduino.tasktab_ = Object.create(null);
  //Blockly.Arduino.tasktab_[0]=0;

  Blockly.Arduino.tasks_ = Object.create(null);

  Blockly.Arduino.handleRoot_['existe']  = false;
  Blockly.Arduino.handleXML_['existe']  = false;
  Blockly.Arduino.pagetab_['existe']  = false;
  // fin ajout driss

  if (!Blockly.Arduino.variableDB_) {
    Blockly.Arduino.variableDB_ =
        new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
  } else {
    Blockly.Arduino.variableDB_.reset();
  }

  // Iterate through to capture all blocks types and set the function arguments
  var varsWithTypes = Blockly.Arduino.StaticTyping.collectVarsWithTypes(workspace);
  Blockly.Arduino.StaticTyping.setProcedureArgs(workspace, varsWithTypes);

  // Set variable declarations with their Arduino type in the defines dictionary
  for ( var varName in varsWithTypes) {
	if (varsWithTypes[varName]) {
		if (varsWithTypes[varName].arrayType) {
			  var varType = Blockly.Arduino.recurseArrayType(varName, varsWithTypes);
			  Blockly.Arduino.addVariable(varName,
					  varType 
					  + ' '
					  + Blockly.Arduino.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE)
					  + ';');
		} else {
			Blockly.Arduino.addVariable(varName,
					Blockly.Arduino	.getArduinoType_(varsWithTypes[varName])
					+ ' '
					+ Blockly.Arduino.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE)
					+ ';');
			}
		} else {
				Blockly.Arduino.addVariable(varName,
						'undefined '
						+ Blockly.Arduino.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE)
						+ ';');
		}
  	}
};

/**
 * Recurse array construction to determine Arduino type and dimension
 * 
 * @param {string} var name
 * @param {array} All vars collected
 * @return {string} Array type, in a string format (varName[x]).
 */
Blockly.Arduino.recurseArrayType = function(varName, varsWithTypes) {
	if (!varsWithTypes[varName].arrayType
			|| varsWithTypes[varName].arrayType instanceof Blockly.Type) {
		// The var is directly defined by an array block with childblock
		var arrayDimension = '';
		if (varsWithTypes[varName].arrayType) {
			// if array block is constructed with array blocks
			var subArray = varsWithTypes[varName].arrayType;
			// build array dimension(s)
			arrayDimension = '[' + varsWithTypes[varName].arraySize + ']';
			while (subArray.arrayType) {
				arrayDimension += '[' + subArray.arraySize + ']';
				subArray = subArray.arrayType;
			}
			// if the final block is a variable
			if (!(subArray instanceof Blockly.Type)) {
				varName = subArray[1];
				if (varsWithTypes[varName].arrayType) {
					var varType = Blockly.Arduino.recurseArrayType(varName,	varsWithTypes);
					// if the var is an array
					// 1- get the type
					// 2- apply the dimensions already built
					// 3- add the dimension of this array
					return varType.substr(0, varType.indexOf('['))
							+ arrayDimension
							+ varType.substr(varType.indexOf('['));
				}
			}
		}
		
		return Blockly.Arduino.getArduinoType_(varsWithTypes[varName]) + arrayDimension;
	} else {
		// the var is inderectly defined by an array block with variable on
		// input
		var varTab = varsWithTypes[varName].arrayType[1];
		if (varTab == varName || !varsWithTypes[varTab]) {
			// prevent direct recursive calls
			// don't prevent undirect use of the same variable
			return 'undefined';
		} else {
			var varType = Blockly.Arduino.recurseArrayType(varTab, varsWithTypes);
			return Blockly.Arduino.insertParentArraySize(varType, varsWithTypes[varName].arraySize);
		}
	}
};

/**
 * Insert parent array dimension in the current array type
 * 
 * @param {string} var type (like varName[x])
 * @param {array} All vars collected
 * @return {string} Array type, in a string format (varName[y][x]).
 */
Blockly.Arduino.insertParentArraySize = function(varType, parentArraySize) {
	if (varType.indexOf('[') >= 0) {
		return varType.substr(0, varType.indexOf('[')) + '[' + parentArraySize + ']' + varType.substr(varType.indexOf('['));
	} else {
		return varType + '[' + parentArraySize + ']';
  }
};

/**
 * Prepare all generated code to be placed in the sketch specific locations.
 * @param {string} code Generated main program (loop function) code.
 * @return {string} Completed sketch code.
 */
Blockly.Arduino.finish = function(code) {
  // Convert the includes, definitions, and functions dictionaries into lists
  var includes = [], definitions = [], variables = [], functions = [];
  
  //ajouté par driss
  var xmltab = [], javatab = [], pagetab = [], styletab = [], tasktab = [], tasks = [], handleRoot=[], handleXML=[];
  //fin ajourt driss


  for (var name in Blockly.Arduino.includes_) {
    includes.push(Blockly.Arduino.includes_[name]);
  }
  if (includes.length) {
    includes.push('\n');
  }
  
  for (var name in Blockly.Arduino.definitions_) {
    definitions.push(Blockly.Arduino.definitions_[name]);
  }
  if (definitions.length) {
    definitions.push('\n');
  }

  
  for (var name in Blockly.Arduino.variables_) {
    variables.push(Blockly.Arduino.variables_[name]);
  }
  if (variables.length) {
    variables.push('\n');
  }
  

  /* Ajouté par Driss */
 
  if(Blockly.Arduino.xmltab_['existe'] == true){
    //xmltab.push(Blockly.Arduino.xmltab_["debut"]);
    xmltab.push("String buildXML(){");
    xmltab.push("  String XML;");
    xmltab.push("  XML  = \"<?xml version=\'1.0\'?>\";");
    xmltab.push("  XML += \"<inputs>\";");
    for (var name in Blockly.Arduino.xmltab_) 
      { 
        if(name != "existe" )
          xmltab.push(Blockly.Arduino.xmltab_[name]); 
      }
    //xmltab.push(Blockly.Arduino.xmltab_["fin"]);
    xmltab.push("  XML += \"</inputs>\";");
    xmltab.push("  return XML;");
    xmltab.push("}");
    //if (xmltab.length) { xmltab.push('\n'); }
    if (xmltab[0] != undefined) { xmltab.push('\n'); }
    }

  
  if(Blockly.Arduino.javatab_['existe'] == true){
    //javatab.push(Blockly.Arduino.javatab_["debut"]);
    javatab.push("String buildJavascript(){");
    javatab.push("  String javaScript = MonEsp.javaScript_start();");
    
    for (var name in Blockly.Arduino.javatab_) { 
      if(name != "existe")
        javatab.push(Blockly.Arduino.javatab_[name]); 
    }
    //javatab.push(Blockly.Arduino.javatab_["fin"]);
    //if (javatab.length) { javatab.push('\n'); }
    javatab.push("  javaScript += MonEsp.javaScript_end();");
    javatab.push("  return javaScript;");
    javatab.push("}");
    if (javatab[0] != undefined) { javatab.push('\n'); }
  }


  
  // le tableaux des taches à inserer dans le setup apres toutes les autres insertions du setup
  tasks.push(Blockly.Arduino.tasks_["debut"]);
  for (var name in Blockly.Arduino.tasks_) { 
      tasks.push(Blockly.Arduino.tasks_[name]); 
  }
  if (tasks[0] != undefined) { tasks.push('\n'); }

  if(Blockly.Arduino.pagetab_['existe'] == true){
    pagetab.push(Blockly.Arduino.pagetab_["part1"]);
    pagetab.push(Blockly.Arduino.pagetab_["title"]);
    pagetab.push(Blockly.Arduino.styletab_["debut"]);
    for (var name in Blockly.Arduino.styletab_) { 
      if(name != "debut" && name != "fin")
        pagetab.push(Blockly.Arduino.styletab_[name]); 
    }
    pagetab.push(Blockly.Arduino.styletab_["fin"]);
    pagetab.push(Blockly.Arduino.pagetab_["part2"]);
    for (var name in Blockly.Arduino.pagetab_) { 
      if(name != "part1" && name != "part2" && name != "part3" && name != "part4" && name != "title"  && name != "existe")
        pagetab.push(Blockly.Arduino.pagetab_[name]); 
    }
    pagetab.push(Blockly.Arduino.pagetab_["part3"]);
    pagetab.push(Blockly.Arduino.pagetab_["part4"]);
    if (pagetab[0] != undefined) { pagetab.push('\n'); }
  }
  

  var j=1;
  while(Blockly.Arduino.tasktab_[j]){
    //tasktab.push(Blockly.Arduino.tasktab_[j]["debut"]);
    tasktab.push("void Esp32_Multitask_task_"+j+"(void *arg) {");
    tasktab.push("  while(true) {");
    for (var name in Blockly.Arduino.tasktab_[j]){
        //if(name != "debut" && name != "fin")
            tasktab.push(Blockly.Arduino.tasktab_[j][name]); 
    }
    //tasktab.push(Blockly.Arduino.tasktab_[j]["fin"]);
    tasktab.push("  }");
    tasktab.push("}");
    j++;
  }
  if (tasktab[1] != undefined) { tasktab.push('\n'); }


  if(Blockly.Arduino.handleRoot_['existe'] == true){
    handleRoot.push('\nvoid handleRoot(){');
    for (var name in Blockly.Arduino.handleRoot_) {
      if(name != "existe" )
        handleRoot.push(Blockly.Arduino.handleRoot_[name]);
    }
    if (handleRoot.length) {
      handleRoot.push('}');
    }
    //handleRoot.push('}');
  }

  if(Blockly.Arduino.handleXML_['existe'] == true){
    handleXML.push('\n');
    handleXML.push('\nvoid handleXML(){');
    for (var name in Blockly.Arduino.handleXML_) {
      if(name != "existe" )
        handleXML.push(Blockly.Arduino.handleXML_[name]);
    }
    if (handleXML.length) {
      handleXML.push('}');
    }
  // handleXML.push('}');
  }

  

  /*fin ajout de driss */

  for (var name in Blockly.Arduino.codeFunctions_) {
    functions.push(Blockly.Arduino.codeFunctions_[name]);
  }
  for (var name in Blockly.Arduino.userFunctions_) {
    functions.push(Blockly.Arduino.userFunctions_[name]);
  }
  if (functions.length) {
    functions.push('\n');
  }

  

  // userSetupCode added at the end of the setup function without leading spaces
  var setups = [''], userSetupCode= '';
  if (Blockly.Arduino.setups_['userSetupCode'] !== undefined) {
    userSetupCode = '\n' + Blockly.Arduino.setups_['userSetupCode'];
    delete Blockly.Arduino.setups_['userSetupCode'];
  }
  for (var name in Blockly.Arduino.setups_) {
    setups.push(Blockly.Arduino.setups_[name]);
  }
  if (userSetupCode) {
    setups.push(userSetupCode);
  }

  

  // Clean up temporary data 
  delete Blockly.Arduino.includes_;
  delete Blockly.Arduino.definitions_;
  delete Blockly.Arduino.codeFunctions_;
  delete Blockly.Arduino.userFunctions_;
  delete Blockly.Arduino.functionNames_;
  delete Blockly.Arduino.setups_;
  delete Blockly.Arduino.pins_;
  Blockly.Arduino.variableDB_.reset();

  //ajouté par driss
  delete Blockly.Arduino.tasktab_;
  delete Blockly.Arduino.xmltab_;
  delete Blockly.Arduino.javatab_;
  delete Blockly.Arduino.pagetab_;
  delete Blockly.Arduino.styletab_ ;
  delete Blockly.Arduino.idstab_;
  delete Blockly.Arduino.tasks_;
  delete Blockly.handleRoot_;
  delete Blockly.handleXML_;
  //fin ajout driss

  /* modifié par Driss 
  var allDefs = includes.join('\n') + variables.join('\n') +
      definitions.join('\n') + functions.join('\n\n');
  */
  var separateur ='\n//---------------------------------------------------------------------------------------------------\n';
  var allDefs = includes.join('\n') + 
                definitions.join('\n') + 
                variables.join('\n') +
                separateur+ 
                handleRoot.join('\n')+
                handleXML.join('\n')+
                separateur+ 
                functions.join('\n')+
                separateur+ 
                
                tasktab.join('\n')+ 
                separateur + 
                xmltab.join('\n') + 
                separateur +
                javatab.join('\n') + 
                separateur +
                pagetab.join('\n')+
                separateur;

  //modifié par driss
  //var setup = 'void setup() {' + setups.join('\n  ') + '\n}\n\n';
  var setup = 'void setup() {\n' + setups.join('\n  ')+ tasks.join('\n\n  ') + '\n}\n\n'+ separateur;
    
  //fin de modif driss

  var loop = 'void loop() {\n  '  + code.replace(/\n/g, '\n  ') + '\n}';
  return allDefs + setup + loop;
};

/**
 * Adds a string of "include" code to be added to the sketch.
 * Once a include is added it will not get overwritten with new code.
 * @param {!string} includeTag Identifier for this include code.
 * @param {!string} code Code to be included at the very top of the sketch.
 */
Blockly.Arduino.addInclude = function(includeTag, code) {
  if (Blockly.Arduino.includes_[includeTag] === undefined) {
    Blockly.Arduino.includes_[includeTag] = code;
  }
};

/**
 * Adds a string of code to be declared globally to the sketch.
 * Once it is added it will not get overwritten with new code.
 * @param {!string} declarationTag Identifier for this declaration code.
 * @param {!string} code Code to be added below the includes.
 */
Blockly.Arduino.addDeclaration = function(declarationTag, code) {
  if (Blockly.Arduino.definitions_[declarationTag] === undefined) {
    Blockly.Arduino.definitions_[declarationTag] = code;
  }
};

/**
 * Adds a string of code to declare a variable globally to the sketch.
 * Only if overwrite option is set to true it will overwrite whatever
 * value the identifier held before.
 * @param {!string} varName The name of the variable to declare.
 * @param {!string} code Code to be added for the declaration.
 * @param {boolean=} overwrite Flag to ignore previously set value.
 * @return {!boolean} Indicates if the declaration overwrote a previous one.
 */
Blockly.Arduino.addVariable = function(varName, code, overwrite) {
  
  var overwritten = false;//alert(varName);
  if (overwrite || (Blockly.Arduino.variables_[varName] === undefined)) {
    Blockly.Arduino.variables_[varName] = code;
    overwritten = true;
  }
  return overwritten;
};

/**
 * Adds a string of code into the Arduino setup() function. It takes an
 * identifier to not repeat the same kind of initialisation code from several
 * blocks. If overwrite option is set to true it will overwrite whatever
 * value the identifier held before.
 * @param {!string} setupTag Identifier for the type of set up code.
 * @param {!string} code Code to be included in the setup() function.
 * @param {boolean=} overwrite Flag to ignore previously set value.
 * @return {!boolean} Indicates if the new setup code overwrote a previous one.
 */
Blockly.Arduino.addSetup = function(setupTag, code, overwrite) {
  var overwritten = false;
  if (overwrite || (Blockly.Arduino.setups_[setupTag] === undefined)) {
    Blockly.Arduino.setups_[setupTag] = code;
    overwritten = true;
  }
  return overwritten;
};


/**
 * ajouté par Driss
 */
Blockly.Arduino.addXml = function(setupTag, code, overwrite) {
  var overwritten = false;
  if (overwrite || (Blockly.Arduino.xml_[setupTag] === undefined)) {
    Blockly.Arduino.xml_[setupTag] = code;
    overwritten = true;
  }
  return overwritten;
};
Blockly.Arduino.addJavascript = function(setupTag, code, overwrite) {
  var overwritten = false;
  if (overwrite || (Blockly.Arduino.xml_[setupTag] === undefined)) {
    Blockly.Arduino.javascript_[setupTag] = code;
    overwritten = true;
  }
  return overwritten;
};
Blockly.Arduino.addpage = function(setupTag, code, overwrite) {
  var overwritten = false;
  if (overwrite || (Blockly.Arduino.xml_[setupTag] === undefined)) {
    Blockly.Arduino.page_[setupTag] = code;
    overwritten = true;
  }
  return overwritten;
};

// fin ajout Driss

/**
 * Adds a string of code as a function. It takes an identifier (meant to be the
 * function name) to only keep a single copy even if multiple blocks might
 * request this function to be created.
 * A function (and its code) will only be added on first request.
 * @param {!string} preferedName Identifier for the function.
 * @param {!string} code Code to be included in the setup() function.
 * @return {!string} A unique function name based on input name.
 */
Blockly.Arduino.addFunction = function(preferedName, code) {
  if (Blockly.Arduino.codeFunctions_[preferedName] === undefined) {
    var uniqueName = Blockly.Arduino.variableDB_.getDistinctName(
        preferedName, Blockly.Generator.NAME_TYPE);
    Blockly.Arduino.codeFunctions_[preferedName] =
        code.replace(Blockly.Arduino.DEF_FUNC_NAME, uniqueName);
    Blockly.Arduino.functionNames_[preferedName] = uniqueName;
  }
  return Blockly.Arduino.functionNames_[preferedName];
};

/**
 * Description.
 * @param {!Blockly.Block} block Description.
 * @param {!string} pin Description.
 * @param {!string} pinType Description.
 * @param {!string} warningTag Description.
 */
Blockly.Arduino.reservePin = function(block, pin, pinType, warningTag) {
  if (Blockly.Arduino.pins_[pin] !== undefined) {
    if (Blockly.Arduino.pins_[pin] != pinType) {
      block.setWarningText(Blockly.Msg.ARD_PIN_WARN1.replace('%1', pin)
		.replace('%2', warningTag).replace('%3', pinType)
		.replace('%4', Blockly.Arduino.pins_[pin]), warningTag);
    } else {
      block.setWarningText(null, warningTag);
    }
  } else {
    Blockly.Arduino.pins_[pin] = pinType;
    block.setWarningText(null, warningTag);
  }
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything. A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.Arduino.scrubNakedValue = function(line) {

  return line + ';\n';
};

/**
 * Encode a string as a properly escaped Arduino string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} Arduino string.
 * @private
 */
Blockly.Arduino.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\"' + string + '\"';
};

/**
 * Common tasks for generating Arduino from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Arduino code created for this block.
 * @return {string} Arduino code with comments and subsequent blocks added.
 * @this {Blockly.CodeGenerator}
 * @private
 */
Blockly.Arduino.scrub_ = function(block, code) {
  if (code === null) { return ''; } // Block has handled code generation itself

  var commentCode = '';
  // Only collect comments for blocks that aren't inline
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += this.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments
    // Don't collect comments for nested statements
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = this.allNestedComments(childBlock);
          if (comment) {
            commentCode += this.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = this.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};

/**
 * Generates Arduino Types from a Blockly Type.
 * @param {!Blockly.Type} typeBlockly The Blockly type to be converted.
 * @return {string} Arduino type for the respective Blockly input type, in a
 *     string format.
 * @private
 */
Blockly.Arduino.getArduinoType_ = function(typeBlockly) {
  switch (typeBlockly.typeId) {
	case Blockly.Types.VOLATIL_NUMBER.typeId:
      return 'volatile int';
    case Blockly.Types.SHORT_NUMBER.typeId:
      return 'char';
    case Blockly.Types.NUMBER.typeId:
      return 'int';
    case Blockly.Types.LARGE_NUMBER.typeId:
      return 'long';
    case Blockly.Types.LARGE_UNS_NUMBER.typeId:
      return 'unsigned long';
    case Blockly.Types.DECIMAL.typeId:
      return 'float';
    case Blockly.Types.TEXT.typeId:
      return 'String';
    case Blockly.Types.CHARACTER.typeId:
      return 'char';
    case Blockly.Types.BOOLEAN.typeId:
      return 'boolean';
    case Blockly.Types.NULL.typeId:
      return 'void';
    case Blockly.Types.ARRAY.typeId:
    	return Blockly.Arduino.getArduinoType_(typeBlockly.arrayType);
    case Blockly.Types.UNDEF.typeId:
      return 'undefined';
    case Blockly.Types.CHILD_BLOCK_MISSING.typeId:
      // If no block connected default to int, change for easier debugging
      //return 'ChildBlockMissing';
      return 'int';
    default:
      return 'Invalid Blockly Type';
    }
};

/** Used for not-yet-implemented block code generators */
Blockly.Arduino.noGeneratorCodeInline = function() {
  return ['', Blockly.Arduino.ORDER_ATOMIC];
};

/** Used for not-yet-implemented block code generators */
Blockly.Arduino.noGeneratorCodeLine = function() { return ''; };
