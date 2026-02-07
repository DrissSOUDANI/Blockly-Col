Blockly.Arduino.technozone_declare_var = function() { 
  // Variable setter.
  var argument1 = this.getTitleValue('TYPE');
  //TODO: settype to variable
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  //Blockly.Arduino.setups_['setup_var' + varName] = varName + ' = ' + argument0 + ';\n';
  tableau_type[varName]=argument1;
  return '';
};

Blockly.Arduino.technozone_variables_set = function() {
  // Variable setter.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  //charge le type dans tableau_type 
  //tableau_type[Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.Variables.NAME_TYPE)]=argument1;   
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);       
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.Arduino.technozone_variables_get = function() {
  // Variable getter.
  var code = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_init_eeprom = function() {
  Blockly.Arduino.definitions_['define_EEPROM'] = '#include <EEPROM.h>\n';
  Blockly.Arduino.definitions_['var_EEPROM_add'] = 'int EEPROM_add=0; //object def\n';
  var code="EEPROM_add=0;\n";
  return code;
};

Blockly.Arduino.technozone_store_eeprom = function() {
  var varname = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.definitions_['define_EEPROM'] = '#include <EEPROM.h>\n';
  Blockly.Arduino.definitions_['var_EEPROM_add'] = 'int EEPROM_add=0; //object def\n';
  var code="EEPROM.put(EEPROM_add,"+varname+");\nEEPROM_add+=sizeof("+varname+");\n";
  return code;
};

Blockly.Arduino.technozone_restore_eeprom = function() {
  var varname = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.definitions_['define_EEPROM'] = '#include <EEPROM.h>\n';
  Blockly.Arduino.definitions_['var_EEPROM_add'] = 'int EEPROM_add=0; //object def\n';
  var code="EEPROM.get(EEPROM_add,"+varname+");\nEEPROM_add+=sizeof("+varname+");\n";
  return code;
};

Blockly.Arduino.technozone_lcdinit = function() {
  var dropdown_I2C_adress = this.getTitleValue('I2C_adress');
  var dropdown_nbcol = this.getTitleValue('nbcol');
  var dropdown_nblig = this.getTitleValue('nblig');
  var dropdown_cursor = this.getTitleValue('cursor');
  var dropdown_blink = this.getTitleValue('blink');
  var dropdown_backlight = this.getTitleValue('backlight');
  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_TZ51_LiquidCrystal_I2C'] = '#include <TZ51_LiquidCrystal_I2C.h>\n';
  Blockly.Arduino.definitions_['var_lcd'] = 'LiquidCrystal_I2C lcd('+dropdown_I2C_adress+','+dropdown_nbcol+','+dropdown_nblig+');//object def\n';
  var mysetup='lcd.init();\n';
  if (dropdown_backlight=="TRUE")
  {
    mysetup+='lcd.backlight();\n';
  } else
  {
    mysetup+='lcd.noBacklight();\n';
  }
  if (dropdown_cursor=="TRUE")
  {
    mysetup+='lcd.cursor();\n';
  } else
  {
    mysetup+='lcd.noCursor();\n';
  }
  if (dropdown_blink=="TRUE")
  {
    mysetup+='lcd.blink();\n';
  } else
  {
    mysetup+='lcd.noBlink();\n';
  }
  Blockly.Arduino.setups_['setup_lcd'] = mysetup;
  var code="";
  return code;
};



Blockly.Arduino.technozone_lcdspecial = function() {
  var dropdown_special = this.getTitleValue('special');
  var code="lcd.config("+dropdown_special+");\n";
  return code;
};

Blockly.Arduino.technozone_lcdclear = function() {
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino.technozone_lcdwrite = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var dropdown_col = this.getTitleValue('COL');
  var dropdown_lig = this.getTitleValue('LIG');    
  var code = 'lcd.setCursor('+dropdown_col+','+dropdown_lig+');\n'+
  'lcd.print('+text+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_lcdwrite = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var dropdown_col = this.getTitleValue('COL');
  var dropdown_lig = this.getTitleValue('LIG');  
  var code = 'lcd.setCursor('+dropdown_col+','+dropdown_lig+');\n'+
  'lcd.print('+text+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_lcdspecial = function() {
  var dropdown_special = this.getTitleValue('special'); 

 switch (dropdown_special) {
 case 'cursor' : dropdown_special='3';
               break;
  case 'noCursor' : dropdown_special='4';
               break;
  case 'blink' : dropdown_special='5';
               break;
  case 'noBlink' : dropdown_special='6';
               break;
  case 'display' : dropdown_special='7';
               break;
  case 'noDisplay' : dropdown_special='8';
               break;		   
 }
  var code='lcd.config('+dropdown_special+');';  
  return code;
};

Blockly.Arduino.technozone_robot_lcdclear = function() {
  var code = 'lcd.clear();\n';    
  return code;
};

Blockly.Arduino.technozone_led1red = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_led1green = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_led1yellow = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1yellow_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_led1white = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_relay1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_relay1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_buzzer1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  //var dropdown_stat = this.getTitleValue('STAT');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC); 
  //dans fonctions
   Blockly.Arduino.definitions_['define_TZ51_playtone'] = '#include <TZ51_playtone.h>\n'; 
  //dans setup    
  Blockly.Arduino.setups_['setup_buzzer_pin_'+dropdown_pin] = 'pinMode('+dropdown_pin+',OUTPUT);';
  var code = 'playTone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;      
};

Blockly.Arduino.technozone_mosfet1 = function() {
	var dropdown_pin = this.getTitleValue('PIN');
	var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['setup_mosfet1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
	var code = 'analogWrite('+dropdown_pin+','+value_num+');\n';
	return code; 
};
	
Blockly.Arduino.technozone_robot_buzzer_tone = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'FREQUENCE', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_buzzer_pin'] = 'pinMode(3, OUTPUT);';
  var code = 'Barbot.playTone('+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_irsend = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'FREQUENCE', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC);
  //dans setup       
  Blockly.Arduino.setups_['setup_IRledPin'] = 'pinMode(5, OUTPUT);\n'+
  '  digitalWrite(5, HIGH);\n';
  Blockly.Arduino.setups_['setup_IRsensorPin_left'] = 'pinMode(8, INPUT);\n'+
  '  digitalWrite(8, HIGH);\n';
  Blockly.Arduino.setups_['setup_IRsensorPin_center'] = 'pinMode(A1, INPUT);\n'+
  '  digitalWrite(A1, HIGH);\n';
  Blockly.Arduino.setups_['setup_IRsensorPin_right'] = 'pinMode(9, INPUT);\n'+
  '  digitalWrite(9, HIGH);\n';    
  var code = 'Barbot.IR38Write();\n';
  return code;
};

Blockly.Arduino.technozone_sonar1 = function() {
  var dropdown_triger_pin = this.getTitleValue('TRIGER');
  var dropdown_dist_pin = this.getTitleValue('DIST');
  Blockly.Arduino.setups_["setup_sonar1"] = "pinMode("+dropdown_triger_pin+",OUTPUT);//Sonar triger pin\n"+
  "  pinMode("+dropdown_dist_pin+",INPUT);//Sonar distance pulse pin\n";
  var code = "";
  
  
  Blockly.Arduino.definitions_['define_TZ51_SONAR1'] ='#include <TZ51_SONAR1.h> \n';
    /* "{\n"+
    "  digitalWrite(trig_pin,HIGH);\n"+
    "  delayMicroseconds(1000);\n"+
    "  digitalWrite(trig_pin,LOW);\n"+
    "  int value = (pulseIn(dist_pin,HIGH)/2)/29.1+2;\n"+
    "  if (value>255) { value=255; }\n"+
    "  delay(20);\n"+
    "  return value;\n"+
    "}\n"; */
  code="mesure_distance_cm("+dropdown_triger_pin+","+dropdown_dist_pin+")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_servo1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  //var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['define_servo1'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';//object def\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n';
  return code;
};

Blockly.Arduino.technozone_servo2 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  //var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['define_servo1'] = '#include <TZ51_ServoTimer2.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'ServoTimer2 servo_'+dropdown_pin+';//object def\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_servo1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_servo1'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';//object def\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n';
  return code;
};

Blockly.Arduino.technozone_ram_declare = function() {
  var value_number = Blockly.Arduino.valueToCode(this, 'NOMBRE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['var_RamStorage'] = 'int RamStorage['+value_number+'];\n';
  Blockly.Arduino.definitions_['var_RamStorage_size'] = 'int RamStorage_size='+value_number+';\n';
  
  var code = '';
  return code;
};

Blockly.Arduino.technozone_ram_reset = function() {
  Blockly.Arduino.definitions_['define_RamReset'] = "void RamReset()\n"+
    "{\n"+
    "  for(int i=0;i<RamStorage_size;i++){RamStorage[i]=0;}\n"+
    "}\n";
  var code = 'RamReset();\n';
  return code;
};

Blockly.Arduino.technozone_eeprom_write = function() {
  var value_number = Blockly.Arduino.valueToCode(this, 'NOMBRE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_EEPROM'] = '#include <EEPROM.h>\n';
  Blockly.Arduino.definitions_['define_SaveEEPROM'] = "void SaveEEPROM(int slot)\n"+
    "{\n"+
    "  int offset=(slot-1)*RamStorage_size*2;\n"+
    "  for(int i=0;i<RamStorage_size;i++){\n"+
    "  EEPROM.write(offset+(i*2), highByte(RamStorage[i]));\n"+
    "  EEPROM.write(offset+(i*2)+1, lowByte(RamStorage[i]));\n"+
    "  }\n"+
    "}\n";
  var code = 'SaveEEPROM('+value_number+');\n';
  return code;
};

Blockly.Arduino.technozone_eeprom_read = function() {
  var value_number = Blockly.Arduino.valueToCode(this, 'NOMBRE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_EEPROM'] = '#include <EEPROM.h>\n';
  Blockly.Arduino.definitions_['define_RestaureEEPROM'] = "void RestaureEEPROM(int slot)\n"+
    "{\n"+
    "  int offset=(slot-1)*RamStorage_size*2;\n"+
    "  for(int i=0;i<RamStorage_size;i++){\n"+
    "  RamStorage[i] = EEPROM.read(offset+(i*2))*256+ EEPROM.read(offset+(i*2)+1);\n"+
    "  }\n"+
    "}\n";
  var code = 'RestaureEEPROM('+value_number+');\n';
  return code;
};


Blockly.Arduino.technozone_ram_set = function() {
  var value_number = Blockly.Arduino.valueToCode(this, 'NOMBRE', Blockly.Arduino.ORDER_ATOMIC);
  var value_index = Blockly.Arduino.valueToCode(this, 'INDEX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'RamStorage['+value_index+'-1]='+value_number+';\n';
  return code;
};

Blockly.Arduino.technozone_ram_get = function() {
  var value_index = Blockly.Arduino.valueToCode(this, 'INDEX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'RamStorage[' + value_index + '-1]';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ram_flash = function() {
  var value_text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'F(' + value_text + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_read_servo1 = function() {
  var dropdown_pin = this.getFieldValue('PIN');

  //Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  // Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  // Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

  var code = 'servo_' + dropdown_pin + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1white = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_btn = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn'] = 'pinMode(7, INPUT);';
  var code = 'digitalRead(7)==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_bt_available = function() {  
  var code = 'tz51_bt.bt_read()>0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_available = function() {
  var code = 'tz51_wf.wf_enabled';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_setup = function() {
  var stat = this.getTitleValue('STA');
  var ssid = Blockly.Arduino.valueToCode(this, 'SSID',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var serverip = Blockly.Arduino.valueToCode(this, 'SERVERIP',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var passwd = Blockly.Arduino.valueToCode(this, 'PASSWD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var gatewayip = Blockly.Arduino.valueToCode(this, 'GATEWAYIP',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var subnetip = Blockly.Arduino.valueToCode(this, 'SUBNETIP',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);    
  var verbose = this.getTitleValue('VERBOSE');		
  if (stat =='STA' ) {
   stat='1';
  } else {
	  stat='0';
   }	
   
    if (verbose =='activé' ) {
   verbose='1';
  } else {
	  verbose='0';
   }	
  //dans fonctions 
  // ssid=ssid.replace(/"/g,"");
  // passwd=passwd.replace(/"/g,"");
  // serverip=serverip.replace(/"/g,"");
  // gatewayip=gatewayip.replace(/"/g,"");
  // subnetip=subnetip.replace(/"/g,"");
  Blockly.Arduino.setups_['define_lire_octet'] =  'tz51_wf.init_module('+stat+','+ssid+','+passwd+','+serverip+','+gatewayip+','+subnetip+','+verbose+');';
  // '  wf.println("serverip '+serverip+'");\n'+
  // '  delay(1500);\n'+
  // '  wf.println("gatewayip '+gatewayip+'");\n'+
  // '  delay(1500);\n'+
  // '  wf.println("subnetip '+subnetip+'");\n'+
  // '  delay(1500);\n'+
  // '  wf.println("ssid '+ssid+'");\n'+
  // '  delay(1500);\n'+
  // '  wf.println("passwd '+passwd+'");\n'+
  // '  delay(1500);\n'+
  // '  wf.println("store ");\n'+
  // '  delay(1500);\n'+
  // '}\n';
  var code = ''
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_led = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var colorwf = this.getTitleValue('COLOR'); 

 switch (colorwf) {
 case 'none' : colorwf='0';
               break;
  case 'red' : colorwf='1';
               break;
  case 'orange' : colorwf='2';
               break;
  case 'yellow' : colorwf='3';
               break;
  case 'green' : colorwf='4';
               break;
  case 'blue' : colorwf='5';
               break;		   
 }

  var code = 'tz51_wf.cmd_led('+field+','+colorwf+');waitAcq();\n';
             
  return code;
};

Blockly.Arduino.technozone_wf_potar = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var position = Blockly.Arduino.valueToCode(this, 'POSITION',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                            
  var code = 'tz51_wf.cmd_potar('+field+','+position+');waitAcq();\n';
  return code;
};

Blockly.Arduino.technozone_wf_gauge = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var position = Blockly.Arduino.valueToCode(this, 'POSITION',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                            
  var code = 'tz51_wf.cmd_potar('+field+','+position+');waitAcq();\n';
  return code;
};

Blockly.Arduino.technozone_wf_label = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var texte = Blockly.Arduino.valueToCode(this, 'TEXTE',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                            
  var code = 'tz51_wf.cmd_label('+field+','+texte+');waitAcq();\n';

  return code;
};

Blockly.Arduino.technozone_wf_potar_read = function() {                                
  var code = 'tz51_wf.field_value.toInt()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_edit_read_text = function() {                                
  var code = 'tz51_wf.field_value';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_edit_read_number = function() {                                
  var code = 'tz51_wf.field_value.toFloat()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_potar_test = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                  
  var code = 'tz51_wf.test_potar('+field+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_edit_test = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                  
  var code = 'tz51_wf.test_potar('+field+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.technozone_wf_switch = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var logique = this.getTitleValue('LOGIQUE'); 

  if (logique =='false' ) {
   logique='0';
  } else {
	  logique='1';
   }	  
  var code = 'tz51_wf.test_field('+field+','+logique+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_bascule = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var logique = this.getTitleValue('LOGIQUE'); 

  if (logique =='false' ) {
   logique='0';
  } else {
	  logique='1';
   }	  
  var code = 'tz51_wf.cmd_btn('+field+','+logique+');waitAcq();\n';
  return code;
};

Blockly.Arduino.technozone_wf_btn = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
 // var btn = 1;
  var code = 'tz51_wf.test_field('+field+',1)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_btn_reset = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                  
  var code = 'tz51_wf.cmd_btn('+field+',0);waitAcq();\n';
 
  return code;
};

Blockly.Arduino.technozone_wf_reset = function() {
  var code = 'tz51_wf.wf_enabled=false;\n';
  return code;
};

Blockly.Arduino.technozone_wf_treatment = function() {
  var code =  'delay(1);\n';
  return code;
};

Blockly.Arduino.technozone_wf_file = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var texte = Blockly.Arduino.valueToCode(this, 'TEXTE',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                            
  var code = 'tz51_wf.cmd_log('+field+','+texte+');waitAcq();\n';

  return code;
};

Blockly.Arduino.technozone_wf_clean = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                   
  var code = 'tz51_wf.cmd_clear_log('+field+');waitAcq();\n';

  return code;
};

Blockly.Arduino.technozone_wf_clean_picture = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                   
  var code = 'tz51_wf.cmd_clear_pic('+field+');waitAcq();\n';

  return code;
};

Blockly.Arduino.technozone_wf_resol_cam = function() {
  var resolwf = this.getTitleValue('RESOL'); 

 switch (resolwf) {
 case '160x120' : resolwf='0';
               break;
  case '176x144' :resolwf='1';
               break;
  case '320x240' : resolwf='2';
               break;
  case '352x288' : resolwf='3';
               break;
  case '640x480' : resolwf='4';
               break;
  case '800x600' : resolwf='5';
               break;	
 case '1024x768' : resolwf='6';
               break;		  
 case '1280x1024' : resolwf='7';
               break;		  
 case '1600x1200' : resolwf='8';
               break;		  			   
 }
 
  var code = 'tz51_wf.set_resolution('+resolwf+');waitAcq();\n';
             
  return code;
};


Blockly.Arduino.technozone_wf_cam_shoot = function() {
  var field = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                   
  var code = 'tz51_wf.shoot ('+field+');waitAcq();\n';

  return code;
};

Blockly.Arduino.technozone_wf_cam_disp = function() {
  var picture = Blockly.Arduino.valueToCode(this, 'PICTURE',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var field  = Blockly.Arduino.valueToCode(this, 'FIELD',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                            
  var code = 'tz51_wf.cmd_potar('+field+','+picture+');waitAcq();\n';
  return code;
};


Blockly.Arduino.technozone_robot_bt_init = function() {
  //dans include définition    
  Blockly.Arduino.definitions_['define_TZ51_BT'] = '#include "TZ51_BT.h"\n'; 
  Blockly.Arduino.definitions_['define_var_bt'] = "SoftwareSerial tz51_ss(4, 2);//object def RX, TX";      
  Blockly.Arduino.definitions_['define_var_TZ51_BT'] = "TZ51_BT tz51_bt(&tz51_ss);//object def\n";     
  Blockly.Arduino.setups_['setup_bt'] = 'tz51_bt.begin(9600);';   
  var code = '';
  return code;
};


Blockly.Arduino.technozone_bt_init = function() {
  var dropdown_RX_pin = this.getTitleValue('TRIGER');
  var dropdown_TX_pin = this.getTitleValue('DIST'); 
	Blockly.Arduino.definitions_['define_TZ51_TimerOne'] = "#include <TZ51_TimerOne.h> // Inclusion de la librairie TimerOne";  
	Blockly.Arduino.definitions_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>";	
	Blockly.Arduino.definitions_['define_TZ51_BT'] = "#include <TZ51_BT.h> // Inclusion de la librairie BT \n";    
    Blockly.Arduino.definitions_['define_var_tz51_ssbt'] = "SoftwareSerial tz51_ss("+dropdown_RX_pin+","+dropdown_TX_pin+");//object def RX, TX"; 
	Blockly.Arduino.definitions_['define_var_TZ51_BT'] = "TZ51_BT tz51_bt(&tz51_ss); //object def Création de l'objet bluetooth";
	Blockly.Arduino.definitions_['define_BTinterrupt'] = 'void inter_bt() {';
	Blockly.Arduino.definitions_['define_TZ51_bt'] = "\t tz51_bt.BTinterrupt(); \n }\n";
	
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'tz51_bt.begin(9600);';   
  Blockly.Arduino.setups_['setup_Timer1_initialize'] = 'Timer1.initialize(100000);'; 
  Blockly.Arduino.setups_['setup_Timer1_attachInterrupt'] = 'Timer1.attachInterrupt(inter_bt);'; 
  Blockly.Arduino.setups_['setup_Timer1_stop'] = 'Timer1.stop();';    
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_wf_init = function() {
  var dropdown_RX_pin = this.getTitleValue('RXpin');
  var dropdown_TX_pin = this.getTitleValue('TXpin');    
  //dans include définition    
  Blockly.Arduino.definitions_['define_TZ51_TimerOne'] = "#include <TZ51_TimerOne.h>";
  Blockly.Arduino.definitions_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>";
  Blockly.Arduino.definitions_['define_TZ51_WF'] = "#include <TZ51_WF.h>\n"; 
  Blockly.Arduino.definitions_['define_var_tz51_sswf'] = "SoftwareSerial tz51_sswf("+dropdown_RX_pin+","+dropdown_TX_pin+"); //object def RX, TX"; 
  Blockly.Arduino.definitions_['define_var_tz51_wf'] = "TZ51_WF tz51_wf(&tz51_sswf);//object def";
  Blockly.Arduino.definitions_['define_WFinterrupt'] = 'void inter_wf() {\n\ttz51_wf.WFinterrupt(); \n }\n';
  Blockly.Arduino.definitions_['define_WFwaitAcq'] = 'void waitAcq(){\n\ttz51_wf.WFwaitAcq();\n }\n';
  //dans setup    
  Blockly.Arduino.setups_['setup_wf'] = 'tz51_wf.begin(9600);';   
  Blockly.Arduino.setups_['setup_Timer1_initialize'] = 'Timer1.initialize(10000);'; 
  Blockly.Arduino.setups_['setup_Timer1_attachInterrupt'] = 'Timer1.attachInterrupt(inter_wf);'; 
  Blockly.Arduino.setups_['setup_Timer1_start'] = 'Timer1.start();';    
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.technozone_speech_init = function() {
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var pitch = Blockly.Arduino.valueToCode(this, 'PITCH', Blockly.Arduino.ORDER_ATOMIC);    
  var bending = Blockly.Arduino.valueToCode(this, 'BENDING', Blockly.Arduino.ORDER_ATOMIC);    
  //dans include définition    
  Blockly.Arduino.definitions_['define_TZ51_Talkietz'] = '#include "TZ51_talkietz.h" //Inspired by Talkie library Copyright 2011 Peter Knight\n';      
  Blockly.Arduino.definitions_['define_const_PSxx'] = 'const unsigned char PS_16 = (1 << ADPS2);\n'+
      'const unsigned char PS_32 = (1 << ADPS2);\n'+
      'const unsigned char PS_64 = (1 << ADPS2);\n'+
      'const unsigned char PS_128 = (1 << ADPS2);\n';
  Blockly.Arduino.definitions_['define_var_voice'] = 'Talkie voice;//object def\n'; 
  //dans setup    
  Blockly.Arduino.setups_['setup_talkietz'] = 'ADCSRA &= ~PS_128;  // remove bits set by Arduino library\n'+
	'  // you can choose a prescaler from above.\n'+
	'  // PS_16, PS_32, PS_64 or PS_128\n'+
	'  ADCSRA |= PS_32;    //  ## was 16 but give problem with getmode unstable 32 seems ok\n'+
    '  //Réglage des paramêtres de restitution vocale\n'+
    '  voice.SetSpeed(800); //entre 0 et 1023 . augmenter la valeur pour augmenter la vitesse. Valeur normal=800\n'+
    '  voice.SetPitch(700); //entre 0 et 1023 : Pitch normal=700. Augmenter pour rendre la voix plus aigue\n'+
    '  //voice.SetBending(120);//entre 0 et 1023 : 0=pas de distortion ;   512=ion maximale ;  1023=pas de distortion\n'+
    '  //voice.BendingOn();\n'+
    '  voice.BendingOff(); //Pas de distortion du son;\n';    
  var code = '  voice.SetSpeed('+speed+'); //entre 0 et 1023 . augmenter la valeur pour augmenter la vitesse. Valeur normal=800\n'+
    '  voice.SetPitch('+pitch+'); //entre 0 et 1023 : Pitch normal=700. Augmenter pour rendre la voix plus aigue\n';
 if (bending==0) {
   code+='  voice.BendingOff(); //Pas de distortion du son;\n';     
 } else {
   code+='  voice.SetBending('+bending+');//entre 0 et 1023 : 0=pas de distortion ;   512=ion maximale ;  1023=pas de distortion\n'+
    '  voice.BendingOn();\n';
 } 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ihm_init = function() {
  var dropdown_RX_pin = this.getTitleValue('TRIGER');
  var dropdown_TX_pin = this.getTitleValue('DIST');    
  //dans include définition       
  Blockly.Arduino.definitions_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n"; 
  Blockly.Arduino.definitions_['define_TimerOne'] = "#include <TZ51_TimerOne.h>\n";
  Blockly.Arduino.definitions_['define_TZ51_IHM'] = "#include <TZ51_IHM.h>\n";
  Blockly.Arduino.definitions_['define_var_ss'] = "SoftwareSerial tz51_ss("+dropdown_RX_pin+","+dropdown_TX_pin+"); //object def RX, TX"; 
  Blockly.Arduino.definitions_['define_var_tz51_ihm'] = "TZ51_IHM tz51_ihm(&tz51_ss);//object def\n";
  //dans fonctions
  Blockly.Arduino.definitions_['define_inter_bt'] = 'void inter_bt() {\n'+
		'	tz51_ihm.BTinterrupt();\n'+
  '}';
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'tz51_ihm.begin(9600);';   
  Blockly.Arduino.setups_['setup_Timer1_initialize'] = 'Timer1.initialize(100000);'; 
  Blockly.Arduino.setups_['setup_Timer1_attachInterrupt'] = 'Timer1.attachInterrupt(inter_bt);'; 
  Blockly.Arduino.setups_['setup_Timer1_stop'] = 'Timer1.stop();';    
  var code = '';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_init = function() {
  //dans include définition    
  Blockly.Arduino.definitions_['define_TZ51_IHM'] = '#include "TZ51_IHM.h"\n'; 
  Blockly.Arduino.definitions_['define_var_bt'] = "SoftwareSerial tz51_ss(4, 2); //object def RX, TX"; 
  Blockly.Arduino.definitions_['define_var_tz51_ihm'] = "TZ51_IHM tz51_ihm(&tz51_ss);//object def\n";
  //dans fonctions
  Blockly.Arduino.definitions_['define_inter_bt'] = 'void inter_bt() {\n'+
		'	tz51_ihm.BTinterrupt();\n'+
  '}';
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'tz51_ihm.begin(9600);';   
  Blockly.Arduino.setups_['setup_Timer1_initialize'] = 'Timer1.initialize(100000);'; 
  Blockly.Arduino.setups_['setup_Timer1_attachInterrupt'] = 'Timer1.attachInterrupt(inter_bt);'; 
  Blockly.Arduino.setups_['setup_Timer1_stop'] = 'Timer1.stop();';    
  var code = '';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_available = function() {
  //dans setup    
  var code = 'tz51_ihm.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ihm_change = function() {
  //dans setup     
  var code = 'tz51_ihm.change()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ihm_inter_read = function() {  
  //dans setup     
  var led = this.getTitleValue('LED');    
  var code = 'tz51_ihm.testInter('+led+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_rfid_init = function() {
  var dropdown_pin = this.getTitleValue('PIN');
    //dans include dÃ©finition    
  Blockly.Arduino.definitions_['define_TZ51_Rfid'] = '#include "TZ51_Rfid.h" // Inclusion de la librairie RFID\n';
  Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include "SoftwareSerial.h"';
  Blockly.Arduino.definitions_['define_var_TZ51_RFID_'+dropdown_pin] = "TZ51_RFID tz51_rfid_"+dropdown_pin+"; //object def Création de l'objet RFID\n";
  Blockly.Arduino.setups_["setup_tz51_rfid_"+dropdown_pin] = "tz51_rfid_"+dropdown_pin+".begin("+dropdown_pin+");//Démarre le module RFID\n";
  
  var code = '';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

Blockly.Arduino.technozone_rfid_write = function() {  
var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
var dropdown_pin = this.getTitleValue('PIN');
var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var code='tz51_rfid_'+dropdown_pin+'.write('+value_num+','+text+');\n';
  return code;
};


Blockly.Arduino.technozone_rfid_read = function() {  
var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
var dropdown_pin = this.getTitleValue('PIN');
  var code='tz51_rfid_'+dropdown_pin+'.read('+value_num+');\n';
  return code;
};

Blockly.Arduino.technozone_rfid_card = function() { 
  var dropdown_pin = this.getTitleValue('PIN'); 
  var code='tz51_rfid_'+dropdown_pin+'.card_present()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_rfid_text = function() {  
  var dropdown_pin = this.getTitleValue('PIN');
  var code='tz51_rfid_'+dropdown_pin+'.reponse';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.technozone_serial_init = function() {
  //dans include définition    
  //dans fonctions
  //dans setup    
   var led = this.getTitleValue('BAUD');    
  Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin('+led+');\n';   
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_serial_print = function() {
  //dans include définition    
  //dans fonctions
  //dans setup   
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\''; 
  var code = 'Serial.print('+text+');\n';
  return code;
};

Blockly.Arduino.technozone_serial_println = function() {
  //dans include définition    
  //dans fonctions
  //dans setup   
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\''; 
  var code = 'Serial.println('+text+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_btn_read = function() {
  //dans setup      
  var led = this.getTitleValue('LED');    
  var code = 'tz51_ihm.testBtn('+led+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ihm_potar_read = function() {
  //dans setup     
  var led = this.getTitleValue('LED');    
  var code = 'tz51_ihm.readPotar('+led+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_bt_read = function() {
  var code = 'tz51_bt.stringOne';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_bt_write = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';          

  //dans setup      
  var code = 'tz51_bt.send('+text+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_irleft = function() {
  var code = 'Barbot.IR_left==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ircenter = function() {
  var code = 'Barbot.IR_center==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_irright = function() {
  var code = 'Barbot.IR_right==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ligleft = function() {
  var seuilleft = Blockly.Arduino.valueToCode(this, 'SEUILLEFT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  Blockly.Arduino.setups_['setup_ligleft'] = 'pinMode(A2, INPUT);';   
  var code = 'analogRead(A2)>'+seuilleft;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ligright = function() {
  var seuilright = Blockly.Arduino.valueToCode(this, 'SEUILRIGHT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  Blockly.Arduino.setups_['setup_ligright'] = 'pinMode(A0, INPUT);';  
  var code = 'analogRead(A0)>'+seuilright;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1black = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1black_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1green = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1red = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_switch1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_switch1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ils1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_ils1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_proxi1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_proxi1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_bari1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_bari1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = '!digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_lig1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_lig1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_cmouv1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_cmouv1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_potar1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_potar1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = '(analogRead('+dropdown_pin+'))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ctn1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_potar1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  /*
	  temperature=round(-134*Analog_read/1023+116);
  */
  var code = '(round(- 0.525641025*(analogRead('+dropdown_pin+')/4)+ 116.0897436))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ds18b20 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
    //dans include définition    
  Blockly.Arduino.definitions_['define_OneWire'] = "#include <OneWire.h> // Inclusion de la librairie OneWire\n";  
  Blockly.Arduino.definitions_['define_DallasTemperature'] = "#include <DallasTemperature.h> // Inclusion de la librairie DallasTemperature\n";    
  Blockly.Arduino.definitions_['define_var_OneWire_'+dropdown_pin+''] = "OneWire oneWire_"+dropdown_pin+"("+dropdown_pin+"); //object def Création de l'objet OneWire";
  Blockly.Arduino.definitions_['define_var_DallasTemperature_'+dropdown_pin+''] = "DallasTemperature sensors_"+dropdown_pin+"(&oneWire_"+dropdown_pin+"); //object def Création de l'objet DallasTemperature\n";
  Blockly.Arduino.setups_["setup_sensors_"+dropdown_pin] = "sensors_"+dropdown_pin+".begin();//Démarre le capteur de température\n";
  
  var code = 'sensors_'+dropdown_pin+'.requestTemperatures(); // Send the command to get temperatures\n';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

Blockly.Arduino.technozone_robot_ds18b20_gettemp = function() {
  var dropdown_pin = this.getTitleValue('PIN');
    //dans include définition    
  //Blockly.Arduino.definitions_['define_OneWire'] = "#include <OneWire.h> // Inclusion de la librairie OneWire\n";  
  //Blockly.Arduino.definitions_['define_DallasTemperature'] = "#include <DallasTemperature.h> // Inclusion de la librairie DallasTemperature\n";    
  //Blockly.Arduino.definitions_['define_var_OneWire_'+dropdown_pin+''] = "OneWire oneWire_"+dropdown_pin+"("+dropdown_pin+"); // Création de l'objet OneWire\n";
  //Blockly.Arduino.definitions_['define_var_DallasTemperature_'+dropdown_pin+''] = "DallasTemperature sensors_"+dropdown_pin+"(&oneWire_"+dropdown_pin+"); // Création de l'objet DallasTemperature\n";
  //Blockly.Arduino.setups_["setup_sensors_"+dropdown_pin] = "sensors_"+dropdown_pin+".begin();//Démarre le capteur de température\n";
  
  var code = 'sensors_'+dropdown_pin+'.getTempCByIndex(0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.technozone_ds18b20 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
    //dans include définition    
  Blockly.Arduino.definitions_['define_TZ51_OneWire'] = "#include <TZ51_OneWire.h> // Inclusion de la librairie OneWire\n";  
  Blockly.Arduino.definitions_['define_TZ51_DallasTemperature'] = "#include <TZ51_DallasTemperature.h> // Inclusion de la librairie DallasTemperature\n";    
  Blockly.Arduino.definitions_['define_var_OneWire_'+dropdown_pin+''] = "OneWire oneWire_"+dropdown_pin+"("+dropdown_pin+"); //object def Création de l'objet OneWire";
  Blockly.Arduino.definitions_['define_var_DallasTemperature_'+dropdown_pin+''] = "DallasTemperature sensors_"+dropdown_pin+"(&oneWire_"+dropdown_pin+"); //object def Création de l'objet DallasTemperature\n";
  Blockly.Arduino.setups_["setup_sensors_"+dropdown_pin] = "sensors_"+dropdown_pin+".begin();//Démarre le capteur de température\n";
  
  var code = 'sensors_'+dropdown_pin+'.requestTemperatures(); // Send the command to get temperatures\n';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

Blockly.Arduino.technozone_dhtxx = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_type = this.getTitleValue('STAT');
    //dans include définition    
  Blockly.Arduino.definitions_['define_TZ51_DHT'] = '#include "TZ51_DHT.h" // Inclusion de la librairie DHT\n';  
  Blockly.Arduino.definitions_['define_var_dht_'+dropdown_pin+''] = "DHT dht_"+dropdown_pin+"("+dropdown_pin+","+dropdown_type+"); //object def Création de l'objet dht\n";
  Blockly.Arduino.setups_["setup_dht_"+dropdown_pin] = "dht_"+dropdown_pin+".begin();//Démarre le capteur de température/humidité\n";
  
  var code = '';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

Blockly.Arduino.technozone_ds18b20_gettemp = function() {
  var dropdown_pin = this.getTitleValue('PIN');
    //dans include définition    
  //Blockly.Arduino.definitions_['define_OneWire'] = "#include <OneWire.h> // Inclusion de la librairie OneWire\n";  
  //Blockly.Arduino.definitions_['define_DallasTemperature'] = "#include <DallasTemperature.h> // Inclusion de la librairie DallasTemperature\n";    
  //Blockly.Arduino.definitions_['define_var_OneWire_'+dropdown_pin+''] = "OneWire oneWire_"+dropdown_pin+"("+dropdown_pin+"); // Création de l'objet OneWire\n";
  //Blockly.Arduino.definitions_['define_var_DallasTemperature_'+dropdown_pin+''] = "DallasTemperature sensors_"+dropdown_pin+"(&oneWire_"+dropdown_pin+"); // Création de l'objet DallasTemperature\n";
  //Blockly.Arduino.setups_["setup_sensors_"+dropdown_pin] = "sensors_"+dropdown_pin+".begin();//Démarre le capteur de température\n";
  
  var code = '(sensors_'+dropdown_pin+'.getTempCByIndex(0))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_dhtxx_gettemp = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = '(dht_'+dropdown_pin+'.readTemperature())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_dhtxx_gethumid = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = '(dht_'+dropdown_pin+'.readHumidity())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.technozone_bme_init = function() {
  
  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_TZ51_BME280I2C'] = '#include <TZ51_BME280I2C.h>';
  Blockly.Arduino.definitions_['var_bme'] = 'BME280I2C bme;//object def';
  Blockly.Arduino.definitions_['var_bmevars'] = 'float temp(NAN), hum(NAN), pres(NAN);//object def';
  Blockly.Arduino.definitions_['var_unittemp'] = 'BME280::TempUnit tempUnit(BME280::TempUnit_Celsius);//object def';
  Blockly.Arduino.definitions_['var_unitpress'] = 'BME280::PresUnit presUnit(BME280::PresUnit_Pa);//object def';
  var mysetup='Wire.begin();\nbme.begin();\n';
  Blockly.Arduino.setups_['setup_bme'] = mysetup;
  var code="";
  return code;
};
Blockly.Arduino.technozone_bme_read = function() {
  var code="bme.read(pres, temp, hum, tempUnit, presUnit);";
  return code;
};

Blockly.Arduino.technozone_bme_gettemp = function() {
  var code = '(temp)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_bme_gethum = function() {
  var code = '(hum)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_bme_getpres = function() {
  var code = '(pres)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.technozone_ldr1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_potar1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = '(round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000)))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ldr1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_lux1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_DS1307_rtcinit = function() {
  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_TZ51_DS1307new'] = "#include <TZ51_DS1307new.h>\n";
	
	var code = ""  
  return code;
};

Blockly.Arduino.technozone_DS1307_initDate = function() {
  var value_jour = Blockly.Arduino.valueToCode(this, 'JOUR', Blockly.Arduino.ORDER_ATOMIC);
  var value_mois = Blockly.Arduino.valueToCode(this, 'MOIS', Blockly.Arduino.ORDER_ATOMIC);
  var value_annee = Blockly.Arduino.valueToCode(this, 'ANNEE', Blockly.Arduino.ORDER_ATOMIC);
  
  var code =   "RTC.maj_date ("+value_annee+","+value_mois+","+value_jour+");\n";
 return code;
};

Blockly.Arduino.technozone_DS1307_initTime = function() {
  var value_heure = Blockly.Arduino.valueToCode(this, 'HEURE', Blockly.Arduino.ORDER_ATOMIC);
  var value_minute = Blockly.Arduino.valueToCode(this, 'MINUTE', Blockly.Arduino.ORDER_ATOMIC);
  var value_seconde = Blockly.Arduino.valueToCode(this, 'SECONDE', Blockly.Arduino.ORDER_ATOMIC);
  
  var code =  "RTC.maj_time("+value_heure+","+value_minute+","+value_seconde+");\n";
             
             
  return code;
};

Blockly.Arduino.technozone_DS1307_readTime = function() { 
  
  var code =  "RTC.getFormatedTime()"; 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_DS1307_readDate = function() { 
  
  var code =  "RTC.getFormatedDate()"; 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_DS1307_read = function() { 
  var dropdown_item = this.getTitleValue('ITEM');

 switch (dropdown_item) {
 case '1' : dropdown_item='1';
               break;
  case '2' : dropdown_item='2';
               break;
  case '3' : dropdown_item='3';
               break;
  case '4' : dropdown_item='4';
               break;
  case '5' : dropdown_item='5';
               break;
  case '6' : dropdown_item='6';
               break;		   
 }
  
  var code =  "RTC.getDTitem("+dropdown_item+")"; 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_millis_micro = function() { 
  var dropdown_item = this.getTitleValue('ITEM');
  if (dropdown_item =='1' ) {
  var code =  "millis()";	  
   dropdown_item='1';
  } else {
	 var code =  "micros()"; 
	 dropdown_item='2';
   }	
  
     //var code =  "RTC.getmsus("+dropdown_item+")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_mot2 = function() {
  var dropdown_pindir = this.getTitleValue('PINDIR');
  var dropdown_pinpwm = this.getTitleValue('PINPWM');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_mot2_"+dropdown_pindir] = "pinMode("+dropdown_pindir+",OUTPUT);//MOT2 DIR pin\n"+
  "  pinMode("+dropdown_pinpwm+",OUTPUT);//MOT2 PWM pin\n";
  var code = ""; 
 Blockly.Arduino.definitions_['define_TZ51_CC'] = "#include <TZ51_CC.h> ";  
  code="cmd_mot("+dropdown_pindir+","+dropdown_pinpwm+","+value_sens+","+value_vitesse+");\n";
  return code;
};

Blockly.Arduino.technozone_pap1cc = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var dropdown_moteur = this.getTitleValue('MOT');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  if (dropdown_moteur=='HIGH') 
  {
	  if (value_sens =='true' ) {
	  value_sens='1';
	} else {
	value_sens='0';}
    //moteur A
    if (value_sens=="true") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirA('+value_sens+');      //set Motor A Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirA('+value_sens+');      //set Motor A Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedA('+value_vitesse+');     //Set Motor A speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(CC);   //Enter in Continuous mode, Motor run as previously set\n';
  } else
  {
	  if (value_sens =='true' ) {
	  value_sens='1';
	} else {
	value_sens='0';
	}
    //moteur B
    if (value_sens=="true") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirB('+value_sens+');      //set Motor B Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirB('+value_sens+');      //set Motor B Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedB('+value_vitesse+');     //Set Motor B speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(CC);   //Enter in Continuous mode, Motor run as previously set\n';
  }
  return code;
};

Blockly.Arduino.technozone_robot_ihm_led_def = function() {
  //dans setup      
  var led = this.getTitleValue('LED'); 
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                               
  var code = 'tz51_ihm.sendcmd("|l'+led+'","'+text.substring(1,text.length-1)+'");\n'
  
  return code;
};

Blockly.Arduino.technozone_robot_ihm_btn_def = function() {
  //dans setup    
  var led = this.getTitleValue('LED');  
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                
  var code = 'tz51_ihm.sendcmd("|b'+led+'","'+text.substring(1,text.length-1)+'");\n';
  return code;
};

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (erreur) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (erreur) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (erreur) {}
  throw new Error("La création de l’objet pour les requêtes HTTP n’a pas pu avoir lieu.");
}

Blockly.Arduino.technozone_speech_say = function() {
  //dans include définition         
  Blockly.Arduino.definitions_['define_const_PSxx'] = 'const unsigned char PS_16 = (1 << ADPS2);\n'+
      'const unsigned char PS_32 = (1 << ADPS2);\n'+
      'const unsigned char PS_64 = (1 << ADPS2);\n'+
      'const unsigned char PS_128 = (1 << ADPS2);\n';
  Blockly.Arduino.definitions_['define_var_voice'] = 'Talkie voice;//object def\n'; 
  //récupère les codes des chaines LPC    
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);          
  //définition des chaines LPC
  var nbmot=Math.floor((text.length+1)/8);
  for (i=0;i<nbmot;i++) {
   var lemot=text.substr(i*8+1,7);    
   var requete = makeHttpObject();
   try { 
       //alert('requete'+flag_affiche_code);
       if (flag_affiche_code==1) {
       //alert('Requete au serveur');
       requete.open("GET", "http://www.technozone51.fr/BlocklyDuinotest/translate.php?code="+lemot, false);
	   //requete.setRequestHeader("Origin", "http://www.technozone51.fr");
       requete.send(null);
       var ligne=requete.responseText.split(/\n/g)[0];
       if (ligne.indexOf("Invalid")!=-1) {
        alert("Invalid result");
        } else {
            var data="";  
            data+="const uint8_t sp";
            data +=lemot;
            data+=" [] PROGMEM={";
            data +=ligne.substr(4);
            data +="};\n";
            Blockly.Arduino.definitions_['define_sp_'+lemot] = data;   
            // alert(ligne.substr(4));
        }
       }
   } catch (erreur){
       alert("impossible de récupérer la chaine LPC n° "+lemot);
       var data="";  
            data+="const uint8_t sp";
            data +=lemot;
            data+=" [] PROGMEM={";
            //data +=ligne.substr(4);
            data +="};\n";
            Blockly.Arduino.definitions_['define_sp_'+lemot] = data;  
       }     
  }  
  //dans setup    
  Blockly.Arduino.setups_['setup_talkietz'] = 'ADCSRA &= ~PS_128;  // remove bits set by Arduino library\n'+
	'  // you can choose a prescaler from above.\n'+
	'  // PS_16, PS_32, PS_64 or PS_128\n'+
	'  ADCSRA |= PS_32;    //  ## was 16 but give problem with getmode unstable 32 seems ok\n'+
    '  //Réglage des paramêtres de restitution vocale\n'+
    '  voice.SetSpeed(800); //entre 0 et 1023 . augmenter la valeur pour augmenter la vitesse. Valeur normal=800\n'+
    '  voice.SetPitch(700); //entre 0 et 1023 : Pitch normal=700. Augmenter pour rendre la voix plus aigue\n'+
    '  //voice.SetBending(120);//entre 0 et 1023 : 0=pas de distortion ;   512=ion maximale ;  1023=pas de distortion\n'+
    '  //voice.BendingOn();\n'+
    '  voice.BendingOff(); //Pas de distortion du son;\n';    
                         
  //génération du code
  var code="";    
     
  for (i=0;i<nbmot;i++) {
   var lemot=text.substr(i*8+1,7);    
   code+='voice.say(sp'+lemot+');\n';
  }
  //var code = 'bt.println("|b'+led+text.substring(1,text.length-1)+'");\n';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_inter_def = function() {
  //dans setup      
  var led = this.getTitleValue('LED');
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                                
  var code = 'tz51_ihm.sendcmd("|i'+led+'","'+text.substring(1,text.length-1)+'");\n';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_led_on = function() {   
  //dans setup      
  var led = this.getTitleValue('LED');
  var couleur = this.getTitleValue('COLOR');          
  var code = 'tz51_ihm.sendcmd1("|L'+led+'",'+couleur+');\n';
      //       'delay(30);\n';
  
  return code;
};

Blockly.Arduino.technozone_robot_ihm_inter_on = function() {
  //dans setup     
  var led = this.getTitleValue('LED');
  var couleur = this.getTitleValue('COLOR');    
  //var text = this.getTitleValue('TEXT');       
  var code = 'tz51_ihm.sendcmd1("|I'+led+'W",'+couleur+');\n';
      //       'delay(300);\n';
  
  return code;
};

Blockly.Arduino.technozone_robot_ihm_potar_def = function() {
  //dans setup      
  var led = this.getTitleValue('LED');
  var divise = this.getTitleValue('DIVISOR');
  var minimum = Blockly.Arduino.valueToCode(this, 'POTARI',
            Blockly.Arduino.ORDER_UNARY_POSTFIX); 
  var maximum = Blockly.Arduino.valueToCode(this, 'POTARA',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);   
  var position = Blockly.Arduino.valueToCode(this, 'POTARP',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);       
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);         
  var code = 'tz51_ihm.sendcmd("|r'+led+'","'+text.substring(1,text.length-1)+'");\n'+
             'tz51_ihm.send("|R'+led+'WD'+divise+'");\n'+
             'tz51_ihm.send("|R'+led+'WI'+minimum+'");\n'+
             'tz51_ihm.send("|R'+led+'WA'+maximum+'");\n'+
             'tz51_ihm.send("|R'+led+'WV'+position+'");\n';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_gauge_def = function() { 
  //dans setup    
  var led = this.getTitleValue('LED');
  var graduation = Blockly.Arduino.valueToCode(this, 'GRADUATION',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var titre = Blockly.Arduino.valueToCode(this, 'TITRE',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);    
  var text = Blockly.Arduino.valueToCode(this, 'CONTENT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);         
  var code = 'tz51_ihm.sendcmd("|g'+led+'","'+text.substring(1,text.length-1)+'");\n'+
             'tz51_ihm.send("|G'+led+'T'+graduation.substring(1,graduation.length-1)+'");\n'+
             'tz51_ihm.send("|G'+led+'L'+titre.substring(1,titre.length-1)+'");\n';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_gauge_write = function() { 
  //dans setup      
  var led = this.getTitleValue('LED');
  var nbdecimal = this.getTitleValue('DECIMAL');   
  var valeur = Blockly.Arduino.valueToCode(this, 'VALEUR',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);       
  var code = 'tz51_ihm.send("|G'+led+'W"+tz51_ihm.floatToString('+valeur+','+nbdecimal+'));\n';
  return code;
};

Blockly.Arduino.technozone_robot_ram_declare = function() {
  var value_number = Blockly.Arduino.valueToCode(this, 'NOMBRE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_RAM_'+value_number] = 'Barbot.change_RamStorage_size('+value_number+');\n';
  
  var code = '';
  return code;
};

Blockly.Arduino.technozone_robot_ram_reset = function() {
  Blockly.Arduino.definitions_['define_RamReset'] = "void RamReset()\n"+
    "{\n"+
    "  for(int i=0;i<Barbot.RamStorage_size;i++){Barbot.RamStorage[i]=0;}\n"+
    "}\n";
  var code = 'RamReset();\n';
  return code;
};

Blockly.Arduino.technozone_robot_ram_get = function() {
  var value_index = Blockly.Arduino.valueToCode(this, 'INDEX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Barbot.RamStorage[' + value_index + '-1]';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ram_set = function() {
  var value_number = Blockly.Arduino.valueToCode(this, 'NOMBRE', Blockly.Arduino.ORDER_ATOMIC);
  var value_index = Blockly.Arduino.valueToCode(this, 'INDEX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Barbot.RamStorage['+value_index+'-1]='+value_number+';\n';
  return code;
};

Blockly.Arduino.technozone_robot_eeprom_write = function() {
  var value_number = Blockly.Arduino.valueToCode(this, 'NOMBRE', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Barbot.SaveEEPROM('+value_number+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_eeprom_read = function() {
  var value_number = Blockly.Arduino.valueToCode(this, 'NOMBRE', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Barbot.RestaureEEPROM('+value_number+');\n';
  return code;
};


Blockly.Arduino.technozone_pap1relatif = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var dropdown_moteur = this.getTitleValue('MOT');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var value_pas = Blockly.Arduino.valueToCode(this, 'PAS', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  if (dropdown_moteur=='HIGH') 
  {
	  if (value_sens =='true' ) {
	  value_sens='1';
	} else {
	value_sens='0';
	}
    //moteur A
    if (value_sens=="true") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirA('+value_sens+');      //set Motor A Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirA('+value_sens+');      //set Motor A Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedA('+value_vitesse+');     //Set Motor A speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.StepA('+value_pas+');         //Set step number for motor A \n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(RELATIVE);   //Enter in Relative mode, Motor run as previously set\n';
  } else
  {
	  if (value_sens =='true' ) {
	  value_sens='1';
	} else {
	value_sens='0';
	}
    //moteur B
    if (value_sens=="true") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirB('+value_sens+');      //set Motor B Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirB('+value_sens+');      //set Motor B Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedB('+value_vitesse+');     //Set Motor B speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.StepB('+value_pas+');         //Set step number for motor B \n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(RELATIVE);   //Enter in Relative mode, Motor run as previously set\n';
  }
  return code;
};

Blockly.Arduino.technozone_robot_init = function() {
  
  Blockly.Arduino.definitions_['define_EEPROM'] = '#include "EEPROM.h"';
  Blockly.Arduino.definitions_['define_Wire'] = '#include "Wire.h"';
  Blockly.Arduino.definitions_['define_TZ51_TimerOne.h'] = '#include "TZ51_TimerOne.h"';
  Blockly.Arduino.definitions_['define_TZ51_BARBOT.h'] = '#include "TZ51_BARBOT.h"';
  Blockly.Arduino.definitions_['define_TZ51_ShiftRegLCD123.h'] = '#include "ShiftRegLCD123.h"';
  Blockly.Arduino.definitions_['var_Barbot Barbot'] = 'Barbot Barbot;//object def';
  Blockly.Arduino.definitions_['var_ShiftRegLCD123 lcd'] = 'ShiftRegLCD123 lcd(12,13,SRLCD123);//object def\n';
  Blockly.Arduino.setups_['setup_barbot']='Barbot.init();\nlcd.begin(16,2);\n';
  var code="";
  return code;
};

Blockly.Arduino.technozone_robot_move = function() {
  var value_direction = this.getTitleValue('DIR');
  var value_distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC);
  var value_unit = this.getTitleValue('UNIT');
  var value_preemptif = this.getTitleValue('PREEMPTIF');  
  var code = 'Barbot.move('+value_direction+','+value_distance+','+value_unit+','+value_preemptif+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_turn = function() {
  var value_direction = this.getTitleValue('ROT');
  var value_angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
  var value_preemptif = this.getTitleValue('PREEMPTIF');    
  var code = 'Barbot.turn('+value_direction+','+value_angle+','+value_preemptif+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_stop = function() {
  var code = "Barbot.stop();\n";
  return code;
};

Blockly.Arduino.technozone_robot_speed = function() {
  //dans définitions    
  var value_vitessemax = Blockly.Arduino.valueToCode(this, 'VITESSEMAX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Barbot.vmax='+value_vitessemax+';\n';
  return code;
};

Blockly.Arduino.technozone_pap1init = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var dropdown_mode = this.getTitleValue('MODE');
  var dropdown_relax = this.getTitleValue('RELAX');
  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_TZ51_Pap1'] = '#include <TZ51_PAP1.h>\n';
  Blockly.Arduino.definitions_['define_MyStepper_'+dropdown_i2cadd] = 'Pap1 MyStepper_'+dropdown_i2cadd+'(16);//object def\n';
  Blockly.Arduino.setups_["setup_wire_begin"+dropdown_i2cadd] = "Wire.begin(); // join i2c bus before calling the stepper constructor";
  var dropdown_mode = this.getTitleValue('MODE'); 

 switch (dropdown_mode) {
 case 'SINGLE_STEPPING' : dropdown_mode='0';
               break;
  case 'FULL_STEPPING' : dropdown_mode='1';
               break;
  case 'HALF_STEPPING' : dropdown_mode='2';
               break;
  	   
 }
 var dropdown_relax = this.getTitleValue('RELAX'); 

 if (dropdown_relax =='AUTO_RELAX' ) {
   dropdown_relax='0';
  } else {
	  dropdown_relax='1';
   }	
  // var code = '\n tz51_wf.cmd_led('+field+','+stepping+');\n';
  Blockly.Arduino.setups_["setup_pap1_"+dropdown_i2cadd] = "MyStepper_"+dropdown_i2cadd+".Begin("+dropdown_mode+","+dropdown_relax+");\n"+
  'MyStepper_'+dropdown_i2cadd+'.SetMode(IDLE); //Motor stopped by default\n'+
  'MyStepper_'+dropdown_i2cadd+'.SpeedA(0);     //Motor A speed to 0\n'+
  'MyStepper_'+dropdown_i2cadd+'.SpeedB(0);     //Motor B speed to 0\n'+
  'MyStepper_'+dropdown_i2cadd+'.SetMode(CC);   //Enter in Continious Current Mode\n';
  var code = ""; 
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_pap1busy = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var code = ""; 
  code='MyStepper_'+dropdown_i2cadd+'.Busy()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_mot1easybot1 = function() {
  var dropdown_mot = this.getTitleValue('MOT');
  var dropdown_pindir; 
  var dropdown_pinpwm;
  if (dropdown_mot==="HIGH") {
   //moteur A
   dropdown_pindir=12;
   dropdown_pinpwm=5;
  } else {
   //moteur B
   dropdown_pindir=13;
   dropdown_pinpwm=6;
  }
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_mot1_"+dropdown_pindir] = "pinMode("+dropdown_pindir+",OUTPUT);//MOT2 DIR pin\n"+
  "  pinMode("+dropdown_pinpwm+",OUTPUT);//MOT2 PWM pin\n";
  var code = "";
 Blockly.Arduino.definitions_['define_TZ51_CC'] = "#include <TZ51_CC.h> ";  
  code="cmd_mot("+dropdown_pindir+","+dropdown_pinpwm+","+value_sens+","+value_vitesse+");\n";
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};


Blockly.Arduino.technozone_mot1easycon1 = function() {
  var dropdown_mot = this.getTitleValue('MOT');
  var dropdown_pindir; 
  var dropdown_pinpwm;
  if (dropdown_mot==="HIGH") {
   //moteur A
   dropdown_pindir=52;
   dropdown_pinpwm=13;
  } else {
   //moteur B
   dropdown_pindir=53;
   dropdown_pinpwm=12;
  }
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_mot1_"+dropdown_pindir] = "pinMode("+dropdown_pindir+",OUTPUT);//MOT2 DIR pin\n"+
  "  pinMode("+dropdown_pinpwm+",OUTPUT);//MOT2 PWM pin\n";
  var code = "";
   Blockly.Arduino.definitions_['define_TZ51_CC'] = "#include <TZ51_CC.h> ";  
  code="cmd_mot("+dropdown_pindir+","+dropdown_pinpwm+","+value_sens+","+value_vitesse+");\n";
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

Blockly.Arduino.technozone_presstelec = function() {
  //var dropdown_pin = this.getTitleValue('PIN');
  var code = ""; 
  code='irrecv.getkeycode()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telecsetup = function() {
  var dropdown_pin = this.getTitleValue('PIN');
 Blockly.Arduino.definitions_['define_var_IRrecv irrecv_'+dropdown_pin+''] = "IRrecv irrecv("+dropdown_pin+");//object def";
  var code = ""; 
    Blockly.Arduino.setups_["setup_telec2_"+dropdown_pin] = "IRrecv irrecv("+dropdown_pin+");\n"+
  '  irrecv.enableIRIn();\n'+
  '  irrecv.resume();\n'+
  '  pinMode('+dropdown_pin+',INPUT);//IR télécommande pin\n';
  Blockly.Arduino.definitions_['define_TZ51_IRremote'] ='#include "TZ51_IRremote.h"  ';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.technozone_telecinit = function() {
  var code = ""; 
  code='irrecv.IRkeypressed()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telecflush = function() {
  var code='irrecv.resume(); //vide le tampon de la télécommande\n';
  return code;
};