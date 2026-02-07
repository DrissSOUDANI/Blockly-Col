
Blockly.Arduino.driss_huskylens_init = function() { 
    var mode = this.getTitleValue('MODE');
    
    Blockly.Arduino.includes_['define_huskylens'] = '#include "HUSKYLENS.h"';
    //Si mode UART
    if (mode == "SPI"){
        Blockly.Arduino.includes_['define_SoftwareSerial'] = '#include "SoftwareSerial.h"';
        Blockly.Arduino.variables_['var_huskylensSerial'] = "SoftwareSerial huskylensSerial(10, 11); // Vert >> Pin 10; Bleu >> Pin 11";
    }

    Blockly.Arduino.variables_['var_huskylens'] = "HUSKYLENS huskylens; //Rouge >> +VCC; Noir >> GND;  Vert >> SDA; Bleu >> SCL";

    Blockly.Arduino.variables_['var_huskylens_result'] = "HUSKYLENSResult huskylensResult;";
    Blockly.Arduino.variables_['var_huskylens_bloc_xCenter'] = 'int16_t bloc_xCenter = 0;';
    Blockly.Arduino.variables_['var_huskylens_bloc_yCenter'] = 'int16_t bloc_yCenter = 0;';
    Blockly.Arduino.variables_['var_huskylens_bloc_width'] = 'int16_t bloc_width = 0;';
    Blockly.Arduino.variables_['var_huskylens_bloc_height'] = 'int16_t bloc_height = 0;';
    Blockly.Arduino.variables_['var_huskylens_arrow_xOrigin'] = 'int16_t arrow_xOrigin = 0;';
    Blockly.Arduino.variables_['var_huskylens_arrow_yOrigin'] = 'int16_t arrow_yOrigin = 0;';
    Blockly.Arduino.variables_['var_huskylens_arrow_xTarget'] = 'int16_t arrow_xTarget = 0;';
    Blockly.Arduino.variables_['var_huskylens_arrow_yTarget'] = 'int16_t arrow_yTarget = 0;';
    Blockly.Arduino.variables_['var_huskylens_reconized_ID'] = 'int16_t reconized_ID = -1;'

    Blockly.Arduino.codeFunctions_['huskyLens_printResult'] = '  void printResult(HUSKYLENSResult result){\n'+
    '    if (result.command == COMMAND_RETURN_BLOCK){\n'+
    '        Serial.println(String()+F("Block:xCenter=")+result.xCenter+F(",yCenter=")+result.yCenter+F(",width=")+result.width+F(",height=")+result.height+F(",ID=")+result.ID);\n'+
    '    }\n'+
    '    else if (result.command == COMMAND_RETURN_ARROW){\n'+
    '        Serial.println(String()+F("Arrow:xOrigin=")+result.xOrigin+F(",yOrigin=")+result.yOrigin+F(",xTarget=")+result.xTarget+F(",yTarget=")+result.yTarget+F(",ID=")+result.ID);\n'+
    '    }\n'+
    '    else{\n'+
    '        Serial.println("Inconnu !");\n'+
    '    }\n'+
    '  }'; 


    Blockly.Arduino.codeFunctions_['huskyLens_getResult'] = '  void getResult(HUSKYLENSResult result){\n'+
    '    if (result.command == COMMAND_RETURN_BLOCK){\n'+
    '        bloc_xCenter= result.xCenter;\n'+
    '        bloc_yCenter= result.yCenter;\n'+
    '        bloc_width= result.width;\n'+
    '        bloc_height = result.height;\n'+
    '        reconized_ID = result.ID;\n'+
    '    }\n'+
    '    else if (result.command == COMMAND_RETURN_ARROW){\n'+
    '        arrow_xOrigin= result.xOrigin;\n'+
    '        arrow_yOrigin= result.yOrigin;\n'+
    '        arrow_xTarget= result.xTarget;\n'+
    '        arrow_yTarget= result.yTarget;\n'+
    '        reconized_ID = result.ID;\n'+
    '    }\n'+
    '    else{\n'+
    '        bloc_xCenter= 0; '+
    '        bloc_yCenter= 0; '+
    '        bloc_width= 0; '+
    '        bloc_height = 0;\n'+
    '        arrow_xOrigin= 0; '+
    '        arrow_yOrigin= 0; '+
    '        arrow_xTarget= 0; '+
    '        arrow_yTarget= 0;\n'+
    '        reconized_ID = -1;\n'+
    '    }\n'+
    '  }'; 

    var msg ='';
    var code_Setup ='';
    code_Setup +='//Serial.begin(115200);\n';
    switch(mode){
        case "I2C" :    code_Setup +='  Wire.begin();\n';
                        code_Setup +='  while (!huskylens.begin(Wire)){\n';
                        msg = "1.Vérifier le protocole :  Dans HUSKYLENS (General Settings>>Protocol Type>>I2C)";
        break;
        case "SPI" :   code_Setup +='  huskylensSerial.begin(9600);\n';
                        code_Setup +='  while (!huskylens.begin(huskylensSerial)){\n';
                        msg = "1.Vérifier le protocole :  Dans HUSKYLENS  (General Settings>>Protocol Type>>Serial 9600)";
        break;
    }
    
    
    code_Setup +='      Serial.println(F("Echec de démarage du module Huskylens!"));\n';
    code_Setup +='      Serial.println(F("'+msg+'"));\n';
    code_Setup +='      Serial.println(F("2.Vérifier les connections filaires"));\n';
    code_Setup +='      delay(100);\n';
    code_Setup +='    }';
    Blockly.Arduino.setups_['setup_huskylens_init'] = code_Setup;

    var code = '';
    return code;
  };



  Blockly.Arduino.driss_huskylens_init_complet = function() { 
    var link = this.getFieldValue('LINK');
    var mode = this.getFieldValue('MODE');
    
    Blockly.Arduino.includes_['define_huskylens'] = '#include "HUSKYLENS.h"';
    //Si mode UART
    if (link == "SPI"){
        Blockly.Arduino.includes_['define_SoftwareSerial'] = '#include "SoftwareSerial.h"';
        Blockly.Arduino.variables_['var_huskylensSerial'] = "SoftwareSerial huskylensSerial(10, 11); // Vert >> Pin 10; Bleu >> Pin 11";
    }

    Blockly.Arduino.variables_['var_huskylens'] = "HUSKYLENS huskylens; //Rouge >> +VCC; Noir >> GND;  Vert >> SDA; Bleu >> SCL";

    Blockly.Arduino.variables_['var_huskylens_result'] = "HUSKYLENSResult huskylensResult;";
    Blockly.Arduino.variables_['var_huskylens_bloc_xCenter'] = 'int16_t bloc_xCenter = 0;';
    Blockly.Arduino.variables_['var_huskylens_bloc_yCenter'] = 'int16_t bloc_yCenter = 0;';
    Blockly.Arduino.variables_['var_huskylens_bloc_width'] = 'int16_t bloc_width = 0;';
    Blockly.Arduino.variables_['var_huskylens_bloc_height'] = 'int16_t bloc_height = 0;';
    Blockly.Arduino.variables_['var_huskylens_arrow_xOrigin'] = 'int16_t arrow_xOrigin = 0;';
    Blockly.Arduino.variables_['var_huskylens_arrow_yOrigin'] = 'int16_t arrow_yOrigin = 0;';
    Blockly.Arduino.variables_['var_huskylens_arrow_xTarget'] = 'int16_t arrow_xTarget = 0;';
    Blockly.Arduino.variables_['var_huskylens_arrow_yTarget'] = 'int16_t arrow_yTarget = 0;';
    Blockly.Arduino.variables_['var_huskylens_reconized_ID'] = 'int16_t reconized_ID = -1;'

    //Blockly.Arduino.variables_['var_huskylens_request_data_ok'] = 'boolean request_data_ok = false;'
    Blockly.Arduino.variables_['var_huskylens_nbreVisagesAppris'] = 'int nbreVisagesAppris = 0;'
    //Blockly.Arduino.variables_['var_huskylens_isLearned'] = 'boolean isLearned = false;'

    Blockly.Arduino.codeFunctions_['huskyLens_printResult'] = '  void printResult(HUSKYLENSResult result){\n'+
    '    if (result.command == COMMAND_RETURN_BLOCK){\n'+
    '        Serial.println(String()+F("Block:xCenter=")+result.xCenter+F(",yCenter=")+result.yCenter+F(",width=")+result.width+F(",height=")+result.height+F(",ID=")+result.ID);\n'+
    '    }\n'+
    '    else if (result.command == COMMAND_RETURN_ARROW){\n'+
    '        Serial.println(String()+F("Arrow:xOrigin=")+result.xOrigin+F(",yOrigin=")+result.yOrigin+F(",xTarget=")+result.xTarget+F(",yTarget=")+result.yTarget+F(",ID=")+result.ID);\n'+
    '    }\n'+
    '    else{\n'+
    '        Serial.println("Inconnu !");\n'+
    '    }\n'+
    '  }'; 


    Blockly.Arduino.codeFunctions_['huskyLens_getResult'] = '  void getResult(HUSKYLENSResult result){\n'+
    '    if (result.command == COMMAND_RETURN_BLOCK){\n'+
    '        bloc_xCenter= result.xCenter;\n'+
    '        bloc_yCenter= result.yCenter;\n'+
    '        bloc_width= result.width;\n'+
    '        bloc_height = result.height;\n'+
    '        reconized_ID = result.ID;\n'+
    '    }\n'+
    '    else if (result.command == COMMAND_RETURN_ARROW){\n'+
    '        arrow_xOrigin= result.xOrigin;\n'+
    '        arrow_yOrigin= result.yOrigin;\n'+
    '        arrow_xTarget= result.xTarget;\n'+
    '        arrow_yTarget= result.yTarget;\n'+
    '        reconized_ID = result.ID;\n'+
    '    }\n'+
    '    else{\n'+
    '        bloc_xCenter= 0; '+
    '        bloc_yCenter= 0; '+
    '        bloc_width= 0; '+
    '        bloc_height = 0;\n'+
    '        arrow_xOrigin= 0; '+
    '        arrow_yOrigin= 0; '+
    '        arrow_xTarget= 0; '+
    '        arrow_yTarget= 0;\n'+
    '        reconized_ID = -1;\n'+
    '    }\n'+
    '  }'; 

    /*
    Blockly.Arduino.codeFunctions_['huskyLens_requestDatas'] = '  void requestDatas(){\n'+
    '    if(huskylens.request()){\n'+
    '      nbreVisagesAppris = countLearned();\n'+
    '      request_data_ok = true;\n'+
    '    }\n'+
    '    else {\n'+
    '        request_data_ok = false;\n'+
    '    }';
    */

    Blockly.Arduino.codeFunctions_['huskyLens_controlerSiapprentissageFait'] = '  boolean controlerSiapprentissageFait(){\n'+
    '    boolean isLearned = false;\n'+
    '    if(huskylens.request()){\n'+
    '      nbreVisagesAppris = huskylens.countLearned();\n'+
    '      if(huskylens.isLearned()){\n'+
    '        isLearned = true;\n'+
    '      } else {\n'+
    '          isLearned = false;\n'+
    '      }\n'+
    '    } else {\n'+
    '      Serial.println("Échec de la demande de données à HUSKYLENS, revérifiez la connexion !");\n'+
    '    }\n'+
    '    return isLearned ;\n'+
    '  }\n';
    

    var msg ='';
    var code_Setup ='';
    code_Setup +='//Serial.begin(115200);\n';
    switch(link){
        case "I2C" :    code_Setup +='  Wire.begin();\n';
                        code_Setup +='  while (!huskylens.begin(Wire)){\n';
                        msg = "1.Vérifier le protocole :  Dans HUSKYLENS (General Settings>>Protocol Type>>I2C)";
        break;
        case "SPI" :   code_Setup +='  huskylensSerial.begin(9600);\n';
                        code_Setup +='  while (!huskylens.begin(huskylensSerial)){\n';
                        msg = "1.Vérifier le protocole :  Dans HUSKYLENS  (General Settings>>Protocol Type>>Serial 9600)";
        break;
    }
    
    
    code_Setup +='      Serial.println(F("Echec de démarage du module Huskylens!"));\n';
    code_Setup +='      Serial.println(F("'+msg+'"));\n';
    code_Setup +='      Serial.println(F("2.Vérifier les connections filaires"));\n';
    code_Setup +='      delay(100);\n';
    code_Setup +='    }\n';
    code_Setup +='    huskylens.writeAlgorithm('+mode+');\n';

    Blockly.Arduino.setups_['setup_huskylens_init'] = code_Setup;

    var code = '';
    return code;
  };



  Blockly.Arduino.driss_huskylens_learning_done = function() {

    var code = 'controlerSiapprentissageFait()';
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };


  Blockly.Arduino.driss_huskylens_faces_are_filmed = function() {

    var code = 'huskylens.available()';
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };


  Blockly.Arduino.driss_huskylens_request_data_ok = function() {

    var code = 'huskylens.request()';
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };


  


  Blockly.Arduino.driss_huskylens_is_learned = function() {

    var code = 'huskylens.isLearned()';
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  
  Blockly.Arduino.driss_huskylens_available = function() {

    var code = 'huskylens.available()';
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };


  Blockly.Arduino.driss_huskylens_count_learned = function() {

    Blockly.Arduino.codeFunctions_['huskyLens_countLearned'] = '  int countLearned(){\n'+
    '    int countLearnedIDs = huskylens.countLearnedIDs();\n'+
    '    Serial.println("###################################");\n'+
    '    Serial.println(String()+F("Count of learned IDs:")+countLearnedIDs);//The count of (faces, colors, objects or lines) you have learned on HUSKYLENS.\n'+
    '    Serial.println(String()+F("frame number:")+huskylens.frameNumber());//The number of frame HUSKYLENS have processed.\n'+
    '    return (countLearnedIDs);\n'+
    '  }';
    var code = 'countLearned()';
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino.driss_huskylens_get_all_blocks_width_this_learned_id = function() {
    var ID = Blockly.Arduino.valueToCode(this, 'BLOCK_ID', Blockly.Arduino.ORDER_ATOMIC);
    
    var code = '';
    code += 'for (int i = 0; i < huskylens.countBlocks('+ID+'); i++){\n;';
    code += '    HUSKYLENSResult result = huskylens.getBlock('+ID+', i);\n;';
    code += '    printResult(result);\n;';
    code += '}\n';
 
    
    return (code, Blockly.Arduino.ORDER_ATOMIC);
  };





  Blockly.Arduino.driss_huskylens_read = function() {

    var code = '';
    code += 'huskylensResult = huskylens.read();\n';
    code += 'getResult(huskylensResult);\n'
    
    return code;
  };


  Blockly.Arduino.driss_huskylens_get_block_details = function() {

    var details = this.getTitleValue('DETAILS_BLOCK');

    var code = '';

    switch(details){
        case "X_CENTER" :code ="bloc_xCenter";
        break;
        case "Y_CENTER" :code ="bloc_yCenter";
        break;
        case "WIDTH" :code ="bloc_width";
        break;
        case "HEIGHT" :code ="bloc_height";
        break;
    }
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };


  Blockly.Arduino.driss_huskylens_get_recognized_face_id = function() {

    var code = '';
    code ="reconized_ID";
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };


  Blockly.Arduino.driss_huskylens_face_id_is_present = function() {
    var faceID = Blockly.Arduino.valueToCode(this, 'FACE_ID', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.codeFunctions_['huskyLens_isPresentFaceID'] = '  boolean isPresentFaceID(int faceID){\n'+
    '    int countFace ;\n'+
    '    if(countFace = huskylens.countBlocks(faceID) >0){\n'+
    '        Serial.println(String() + F("faceID : ") + faceID + F(" apparait ") + countFace +F(" fois "));\n'+
    '        return(true);\n'+
    '    }\n'+
    '    else{\n'+
    '        return(false);\n'+
    '    }\n'+
    '  }'; 

    
    var code = '';
    code ="isPresentFaceID("+faceID+")";
    
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };



  Blockly.Arduino.driss_huskylens_face_id_to_name = function() {
    var name = Blockly.Arduino.valueToCode(this, 'NAME_OF_FACE_ID', Blockly.Arduino.ORDER_ATOMIC);
    var face_id = this.getFieldValue('FACE_ID');

    Blockly.Arduino.codeFunctions_['huskyLens_setNewName'] = '  void setNewName(String newname, uint8_t face_id){\n'+
    '    while (!huskylens.setCustomName(newname, face_id)){\n'+
    '        Serial.println(String() + F("L\'attribution du nom à l\ID : ") + face_id + F(" a échoué"));\n'+
    '        delay(100);\n'+
    '    }\n'+
    '  }'; 

    Blockly.Arduino.setups_['setup_huskylens_setName_'+face_id] = "setNewName ("+name+", "+face_id+");";


    var code = '';
    
    return code;
  };


  Blockly.Arduino.driss_huskylens_set_custom_text = function() {
    var texte = Blockly.Arduino.valueToCode(this, 'CUSTOM_TEXT', Blockly.Arduino.ORDER_ATOMIC);
    var pos_X = this.getFieldValue('POS_X');
    var pos_Y = this.getFieldValue('POS_Y');

    var code = 'huskylens.customText('+texte+', '+pos_X+', '+pos_Y+');\n';
    
    return code;
  };

  Blockly.Arduino.driss_huskylens_delete_all_custom_text = function() {
    
    var code = 'huskylens.clearCustomText();\n';
    
    return code;
  };



  
  Blockly.Arduino.driss_huskylens_save_picture_in_sd_card = function() {
    
    var code = 'huskylens.savePictureToSDCard();\n';
    code += 'delay(100);\n';
    
    return code;
  };

  Blockly.Arduino.driss_huskylens_save_screenshot_in_sd_card = function() {
    
    var code = 'huskylens.saveScreenshotToSDCard();\n';
    code += 'delay(100);\n';
    
    return code;
  };