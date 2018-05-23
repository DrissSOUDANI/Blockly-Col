

//driss_vorpal_init_hexapod -------------------------------------------------------------------------------------
//Blockly.Arduino['driss_vorpal_init_hexapod'] = function(block) {
Blockly.Arduino.driss_vorpal_init_hexapod = function() {
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>'; 
  Blockly.Arduino.includes_['define_Adafruit_PWMServoDriver'] = '#include <Adafruit_PWMServoDriver.h>';
  Blockly.Arduino.includes_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.includes_['define_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.includes_['define_Pixy'] = '#include <Pixy.h>';

  //mettre int FreqMult = 2; dans le tableau de defenition et non pas dans le tableau des variables 
  //car FreqMult est utilisé dans les #define et doit donc être connu avant l'affichage des variables 
  // Multiplicateur de fréquence PWM, utilisez 1 pour les servos analogiques et jusqu'à 3 pour les numériques.
  //Le réglage recommandé pour le numérique est 2 (probablement sans danger pour tous les servos numériques)
  // Un shunt entre Nano D5 et D6 mettra à "1" dans la configuration, cela vous permet
  // pour sélectionner le mode servo numérique (2) ou le mode servo analogique (1) en utilisant un fil shunt ou un cavalier court.
  Blockly.Arduino.definitions_['define_FreqMult']     = "int FreqMult = 2;";
  Blockly.Arduino.definitions_['define_FreqMult_commentaires']     = "\n"+
  "// NOTE: Pour les servos numériques tels que Genuine Tower Pro MG90S ou Turnigy MG90S, nous recommandons de mettre\n"+
  "// un petit joint torique sur l'arbre de servo de la hanche avant de mettre le servo. \n"+
  "//Cela réduira ou éliminera le comportement \"de chasse\" qui peut amener le servo à osciller rapidement autour de la position cible.\n"; 


  Blockly.Arduino.definitions_['define_NUM_LEGS']     = "#define NUM_LEGS 6";


  Blockly.Arduino.definitions_['define_COMENT_01']     = "\n//Masque pour différentes combinaisons de jambes LowBit = Jambe 0";
  Blockly.Arduino.definitions_['define_ALL_LEGS']     = "#define ALL_LEGS      0b111111";
  Blockly.Arduino.definitions_['define_LEFT_LEGS']    = "#define LEFT_LEGS     0b111000";
  Blockly.Arduino.definitions_['define_RIGHT_LEGS']   = "#define RIGHT_LEGS    0b000111";
  Blockly.Arduino.definitions_['define_TRIPOD1_LEGS'] = "#define TRIPOD1_LEGS  0b010101";
  Blockly.Arduino.definitions_['define_TRIPOD2_LEGS'] = "#define TRIPOD2_LEGS  0b101010";
  Blockly.Arduino.definitions_['define_FRONT_LEGS']   = "#define FRONT_LEGS    0b100001";
  Blockly.Arduino.definitions_['define_MIDDLE_LEGS']  = "#define MIDDLE_LEGS   0b010010";
  Blockly.Arduino.definitions_['define_BACK_LEGS']    = "#define BACK_LEGS     0b001100";
  Blockly.Arduino.definitions_['define_NO_LEGS']      = "#define NO_LEGS       0b0";

  //Blockly.Arduino.definitions_['define_COMENT_02']     = "\n//Masques de bits individuels pour les jambes";
  //Blockly.Arduino.definitions_['define_LEG0'] = "#define LEG0 0b1";
  //Blockly.Arduino.definitions_['define_LEG1'] = "#define LEG1 0b10";
  //Blockly.Arduino.definitions_['define_LEG2'] = "#define LEG2 0b100";
  //Blockly.Arduino.definitions_['define_LEG3'] = "#define LEG3 0b1000";
  //Blockly.Arduino.definitions_['define_LEG4'] = "#define LEG4 0b10000";
  //Blockly.Arduino.definitions_['define_LEG5'] = "#define LEG5 0b100000";

  //Blockly.Arduino.definitions_['define_COMENT_03']     = "\n";
  //Blockly.Arduino.definitions_['define_LEG0BIT'] = "#define LEG0BIT 0b1";
  //Blockly.Arduino.definitions_['define_LEG1BIT'] = "#define LEG1BIT 0b10";
  //Blockly.Arduino.definitions_['define_LEG2BIT'] = "#define LEG2BIT 0b100";
  //Blockly.Arduino.definitions_['define_LEG3BIT'] = "#define LEG3BIT 0b1000";
  //Blockly.Arduino.definitions_['define_LEG4BIT'] = "#define LEG4BIT 0b10000";
  //Blockly.Arduino.definitions_['define_LEG5BIT'] = "#define LEG5BIT 0b100000";

  
  Blockly.Arduino.definitions_['define_ISFRONTLEG'] = "#define ISFRONTLEG(LEG) (LEG==0||LEG==5)";
  //Blockly.Arduino.definitions_['define_ISMIDLEG']   = "#define ISMIDLEG(LEG)   (LEG==1||LEG==4)";
  Blockly.Arduino.definitions_['define_ISBACKLEG']  = "#define ISBACKLEG(LEG)  (LEG==2||LEG==3)";
  //Blockly.Arduino.definitions_['define_ISLEFTLEG']  = "#define ISLEFTLEG(LEG)  (LEG==0||LEG==1||LEG==2)";
  //Blockly.Arduino.definitions_['define_ISRIGHTLEG'] = "#define ISRIGHTLEG(LEG) (LEG==3||LEG==4||LEG==5)";

  Blockly.Arduino.definitions_['define_COMENT_04']     = "\n//Positions par défaut pour le genou et la hanche (en degres)";
  //Blockly.Arduino.definitions_['define_KNEE_UP_MAX']  = "#define KNEE_UP_MAX 180";
  Blockly.Arduino.definitions_['define_KNEE_UP']  = "#define KNEE_UP 150";
  //Blockly.Arduino.definitions_['define_KNEE_RELAX']  = "#define KNEE_RELAX 120";
  //Blockly.Arduino.definitions_['define_KNEE_NEUTRAL']  = "#define KNEE_NEUTRAL 90";
  //Blockly.Arduino.definitions_['define_KNEE_CROUCH']  = "#define KNEE_CROUCH 110";
  //Blockly.Arduino.definitions_['define_KNEE_HALF_CROUCH']  = "#define KNEE_HALF_CROUCH 80";
  Blockly.Arduino.definitions_['define_KNEE_STAND']  = "#define KNEE_STAND 30";
  //Blockly.Arduino.definitions_['define_KNEE_DOWN']  = "#define KNEE_DOWN 30";
  Blockly.Arduino.definitions_['define_KNEE_TIPTOES']  = "#define KNEE_TIPTOES 5";
  //Blockly.Arduino.definitions_['define_KNEE_FOLD']  = "#define KNEE_FOLD 170";
  //Blockly.Arduino.definitions_['define_KNEE_SCAMPER']  = "#define KNEE_SCAMPER (KNEE_NEUTRAL-20) ";
  //Blockly.Arduino.definitions_['define_KNEE_TRIPOD_UP']  = "#define KNEE_TRIPOD_UP (KNEE_NEUTRAL-40)";
  //Blockly.Arduino.definitions_['define_KNEE_TRIPOD_ADJ']  = "#define KNEE_TRIPOD_ADJ 30";


  Blockly.Arduino.definitions_['define_COMENT_05']     = "\n//jusqu'où balancer les hanches sur des positions comme le trépied ou le quadrupède";
  //Blockly.Arduino.definitions_['define_HIPSWING'] = "#define HIPSWING 25";
  //Blockly.Arduino.definitions_['define_HIPSMALLSWING'] = "#define HIPSMALLSWING 10";
  //Blockly.Arduino.definitions_['define_HIPSWING_RIPPLE'] = "#define HIPSWING_RIPPLE 20";
  //Blockly.Arduino.definitions_['define_HIP_FORWARD_MAX'] = "#define HIP_FORWARD_MAX 175";
  //Blockly.Arduino.definitions_['define_HIP_FORWARD'] = "#define HIP_FORWARD (HIP_NEUTRAL+HIPSWING)";
  //Blockly.Arduino.definitions_['define_HIP_FORWARD_SMALL'] = "#define HIP_FORWARD_SMALL (HIP_NEUTRAL+HIPSMALLSWING)";
  Blockly.Arduino.definitions_['define_HIP_NEUTRAL'] = "#define HIP_NEUTRAL 90";
  //Blockly.Arduino.definitions_['define_HIP_BACKWARD'] = "#define HIP_BACKWARD (HIP_NEUTRAL-HIPSWING)";
  //Blockly.Arduino.definitions_['define_HIP_BACKWARD_SMALL'] = "#define HIP_BACKWARD_SMALL (HIP_NEUTRAL-HIPSMALLSWING)";
  //Blockly.Arduino.definitions_['define_HIP_BACKWARD_MAX'] = "#define HIP_BACKWARD_MAX 0";
  //Blockly.Arduino.definitions_['define_HIP_FORWARD_RIPPLE'] = "#define HIP_FORWARD_RIPPLE (HIP_NEUTRAL+HIPSWING_RIPPLE)";
  //Blockly.Arduino.definitions_['define_HIP_BACKWARD_RIPPLE'] = "#define HIP_BACKWARD_RIPPLE (HIP_NEUTRAL-HIPSWING_RIPPLE)";
  //Blockly.Arduino.definitions_['define_HIP_FOLD 150'] = "#define HIP_FOLD 150";
  

  //Blockly.Arduino.definitions_['define_COMENT_06']     = "\n";
  Blockly.Arduino.definitions_['define_NOMOVE'] = "#define NOMOVE (-1)";
  Blockly.Arduino.definitions_['define_LEFT_START'] = "#define LEFT_START 3";
  //Blockly.Arduino.definitions_['define_RIGHT_START'] = "#define RIGHT_START 0";
  Blockly.Arduino.definitions_['define_KNEE_OFFSET'] = "#define KNEE_OFFSET 6";

  //Blockly.Arduino.definitions_['define_COMENT_07']     = "\n";
  Blockly.Arduino.definitions_['define_SERVO_IIC_ADDR'] = "#define SERVO_IIC_ADDR  (0x40)";

  //Blockly.Arduino.definitions_['define_COMENT_08'] = "\n//utilisés dans void turn(...)";
  //Blockly.Arduino.definitions_['define_NUM_TURN_PHASES'] = "#define NUM_TURN_PHASES 6";
  //Blockly.Arduino.definitions_['define_FBSHIFT_TURN'] = "#define FBSHIFT_TURN    40  //remonter les pattes avant, les pattes arrière vers l'avant";
  
  //Blockly.Arduino.definitions_['define_COMENT_09'] = "\n//utilisés dans void wave(...)";
  //Blockly.Arduino.definitions_['define_NUM_WAVE_PHASES'] = "#define NUM_WAVE_PHASES 12";
  //Blockly.Arduino.definitions_['define_WAVE_CYCLE_TIME'] = "#define WAVE_CYCLE_TIME 900";
  //Blockly.Arduino.definitions_['define_KNEE_WAVE'] = "#define KNEE_WAVE  60";

  //Blockly.Arduino.definitions_['define_COMENT_10'] = "\n//utilisés dans void gait_sidestep(...)";
  //Blockly.Arduino.definitions_['define_NUM_SIDESTEP_PHASES'] = "#define NUM_SIDESTEP_PHASES 6";
  //Blockly.Arduino.definitions_['define_FBSHIFT'] = "#define FBSHIFT    50 //décaler les pattes avant, les pattes arrière vers l'avant";
  
  //Blockly.Arduino.definitions_['define_COMENT_11']     = "\n";
  Blockly.Arduino.definitions_['define_BeeperPin'] = "#define BeeperPin 4";
  Blockly.Arduino.definitions_['define_ServoTypePin'] = "#define ServoTypePin 5 //is used to signal digital vs. analog servo mode";
  Blockly.Arduino.definitions_['define_ServoTypeGroundPin'] = "#define ServoTypeGroundPin 6  // 6 provides a ground to pull 5 low if digital servos are in use";
  //Blockly.Arduino.definitions_['define_BF_ERROR'] = "#define BF_ERROR  100       // deep beep for error situations";
  //Blockly.Arduino.definitions_['define_BD_MED'] = "#define BD_MED    50          // medium long beep duration";

  //Blockly.Arduino.definitions_['define_COMENT_12'] = "\n"+
  //"// En fonction des servos, les largeurs d'impulsion min et max peuvent varier, \n"+
  //"// on veut qu'elles soient aussi petites / grandes que possible sans atteindre l'arrêt dur pour une portée maximale\n"+ 
  //"// Les modifier au besoin pour correspondre aux servos ! Si vous entendez bourdonnement ou agitation, vous êtes allé trop loin\n"+
  //"// Ces valeurs sont bonnes pour les petits servos à engrenages en métal MG90S clone et Genuine Tower Pro MG90S.";
  Blockly.Arduino.definitions_['define_PWMFREQUENCY'] = "#define PWMFREQUENCY (60*FreqMult)";
  Blockly.Arduino.definitions_['define_SERVOMIN'] = "#define SERVOMIN  (190*FreqMult) // this is the 'minimum' pulse length count (out of 4096)";
  Blockly.Arduino.definitions_['define_SERVOMAX'] = "#define SERVOMAX  (540*FreqMult) // this is the 'maximum' pulse length count (out of 4096)";


  Blockly.Arduino.variables_['var_servoDriver'] = 'Adafruit_PWMServoDriver servoDriver = Adafruit_PWMServoDriver(SERVO_IIC_ADDR);';
  Blockly.Arduino.variables_['var_ServoPos'] = 'short ServoPos[2*NUM_LEGS];';
  
  //Blockly.Arduino.variables_['var_startedStanding'] = 'long startedStanding = 0;   // the last time we started standing, or reset to -1 if we didn\'t stand recently';
  //Blockly.Arduino.variables_['var_LastReceiveTime'] = 'long LastReceiveTime = 0;   // last time we got a bluetooth packet';
  //Blockly.Arduino.variables_['var_LastValidReceiveTime'] = 'long LastValidReceiveTime = 0;  // last time we got a completely valid packet including correct checksum';

  Blockly.Arduino.variables_['var_BlueTooth'] = 'SoftwareSerial BlueTooth(3,2);  // Bluetooth pins: TX=3=Yellow wire,  RX=2=Green wire;';
  
  
  Blockly.Arduino.codeFunctions_['define_beep2'] = '\n//Beep \n'+
  'void beep(int f) {\n' +
  ' beep(f, 250);\n' +
  '}';
  
  
  Blockly.Arduino.codeFunctions_['define_beep'] = '\n//Beep à la fréquence f pendant t millisecondes \n'+
  'void beep(int f, int t) {\n' +
  ' if (f > 0 && t > 0) {\n' +
  '   tone(BeeperPin, f, t);\n' +
  ' } else {\n' +
  '   noTone(BeeperPin);\n' +
  ' }\n' +
  '}';


  Blockly.Arduino.codeFunctions_['define_resetServoDriver'] = '\n'+
  'void resetServoDriver() {\n' +
  ' servoDriver.begin();\n' +
  ' servoDriver.setPWMFreq(PWMFREQUENCY);  // Analog servos run at ~60 Hz updates\n' +
   '}';

  Blockly.Arduino.codeFunctions_['define_setServo'] = '\n'+
  'void setServo(int servonum, int position) {\n' +
  ' int origpos = position;\n' +
  ' int p = map(position,0,180,SERVOMIN,SERVOMAX);\n' +
  ' servoDriver.setPWM(servonum, 0, p);\n' +
  ' ServoPos[servonum] = origpos; //Laisse les servo dans la position de la dernière commande\n' +
  ' //Serial.print("SS:");Serial.print(servonum);Serial.print(":");Serial.println(position);\n' +
  '}';

  
  Blockly.Arduino.codeFunctions_['define_setHipRaw'] = '\n//Cette fonction ne distingue pas la droite de la gauche \n'+
  'void setHipRaw(int leg, int pos) { \n' +
  ' setServo(leg, pos);\n' +
  '}';

/*
  Blockly.Arduino.codeFunctions_['define_setHip2'] = '\n//ajuste l\'angle pour les jambes gauche et droite de sorte que 0 degrés se déplace "vers l\'avant" \n'+
  'void setHip(int leg, int pos) { \n' +
  ' //inverser le côté gauche pour un mouvement vers l\'avant\n' +
  ' if (leg >= LEFT_START) {\n' +
  '   pos = 180 - pos;\n' +
  ' }\n' +
  ' setHipRaw(leg, pos);\n' +
  '}';
*/
  Blockly.Arduino.codeFunctions_['define_setHip'] = '\n//cette version de setHip s\'ajuste non seulement pour la gauche et la droite,\n'+
  '//mais aussi pour décaler les pattes avant un peu en arrière et les pattes arrières vers l\'avant\n' +
  '//pour faire un meilleur équilibre pour certaines allures comme le trépied ou le quadrupède \n' +
  'void setHip(int leg, int pos, int adj=0) { \n' +
  ' if (ISFRONTLEG(leg)) {\n' +
  '   pos -= adj;\n' +
  ' } else if (ISBACKLEG(leg)) {\n' +
  '     pos += adj;\n' +
  '   }\n' +
  ' //inverser le côté gauche pour un mouvement vers l\'avant\n' +
  ' if (leg >= LEFT_START) {\n' +
  '   pos = 180 - pos;\n' +
  ' }\n' +
  ' setHipRaw(leg, pos);\n' +
  '}';

  
  Blockly.Arduino.codeFunctions_['define_setKnee'] = '\n'+
  'void setKnee(int leg, int pos) {\n' +
  ' //trouver le genou associé à la jambe si ce n\'est pas déjà un genou\n' +
  ' if (leg < KNEE_OFFSET) {\n' +
  '   leg += KNEE_OFFSET;\n' +
  ' }\n' +
  ' setServo(leg, pos);\n' +
  '}';

  /*
  Blockly.Arduino.codeFunctions_['define_setLeg2'] = '\n'+
  '//Cette fonction définit les positions du genou et de la hanche en une seule commande\n'+
  '//Pour la hanche, le côté gauche est inversé, donc la direction avant est cohérente\n'+
  '//elle prend un masque de bits pour spécifier les jambes à déplacer,\n'+
  '//alors que les fonctions de base setHip et setKnee prennent des numéros de jambe et non pas des masques\n'+
  '//si une position vaut -1 alors rien ne change\n'+
  'void setLeg(int legmask, int hip_pos, int knee_pos, int adj) {\n' +
  ' setLeg(legmask, hip_pos, knee_pos, adj, 0);\n' +
  '}';
*/
  Blockly.Arduino.codeFunctions_['define_setLeg'] = '\n' +
  'void setLeg(int legmask, int hip_pos, int knee_pos, int adj, int raw=0) {\n' +
  ' for (int i = 0; i < NUM_LEGS; i++) {\n' +
  '   if (legmask & 0b1) {  // if the lowest bit is ON\n' +
  '     if (hip_pos != NOMOVE) {\n' +
  '       if (!raw) {\n' +
  '         setHip(i, hip_pos, adj);\n' +
  '       } else {\n' +
  '         setHipRaw(i, hip_pos);\n' +
  '       }\n' +
  '     }\n' +
  '     if (knee_pos != NOMOVE) {\n' +
  '       setKnee(i, knee_pos);\n' +
  '     }\n' +
  '   }\n' +
  '   legmask = (legmask>>1);  // shift down one bit position\n' +
  ' }\n' +
  '}';

  /*

  Blockly.Arduino.codeFunctions_['define_turn'] = '\n'+
  'void turn(int ccw, int hipforward, int hipbackward, int kneeup, int kneedown, long timeperiod) {\n' +
  ' //utiliser des groupes de trépied pour tourner en place\n' +
  ' if (ccw) {\n' +
  '   int tmp = hipforward;\n' +
  '   hipforward = hipbackward;\n' +
  '   hipbackward = tmp;\n' +
  ' }\n' +
  ' \n' +
  ' long t = millis()%timeperiod;\n' +
  ' long phase = (NUM_TURN_PHASES*t)/timeperiod;\n' +
  ' \n' +
  ' //Serial.print("PHASE: ");\n' +
  ' //Serial.println(phase);\n' +
  ' \n' +
  ' switch (phase) {\n' +
  '   case 0://les jambes du centre-gauche et du non-centre-droit se soulèvent au genou\n' +
  '         setLeg(TRIPOD1_LEGS, NOMOVE, kneeup, 0);\n' +
  '         break;\n' +
  ' \n' +
  '   case 1://les jambes du centre-gauche et du non-centre-droit se déplacent dans le sens des aiguilles d\'une montre au niveau des hanches, \n'+
  '          //tandis que le reste des jambes bouge dans le sens inverse des aiguilles d\'une montre au niveau de la hanche.\n' +
  '         setLeg(TRIPOD1_LEGS, hipforward, NOMOVE, FBSHIFT_TURN, 1);\n' +
  '         setLeg(TRIPOD2_LEGS, hipbackward, NOMOVE, FBSHIFT_TURN, 1);\n' +
  '         break;\n' +
  ' \n' +
  '   case 2://remettre les premières jambes sur le sol\n' +
  '         setLeg(TRIPOD1_LEGS, NOMOVE, kneedown, 0);\n' +
  '         break;\n' +
  ' \n' +
  '   case 3://soulevez l\'autre ensemble de jambes au genou\n' +
  '         setLeg(TRIPOD2_LEGS, NOMOVE, kneeup, 0);\n' +
  '         break;\n' +
  ' \n' +
  ' \n' +
  '   case 4://similaire à la phase 1, déplacer les jambes levées AIg.Montre et les jambes abaissées Inv. Aig. Montre \n'+
  '         setLeg(TRIPOD1_LEGS, hipbackward, NOMOVE, FBSHIFT_TURN, 1);\n' +
  '         setLeg(TRIPOD2_LEGS, hipforward, NOMOVE, FBSHIFT_TURN, 1);\n' +
  '         break;\n' +
  ' \n' +
  '   case 5://mettre le deuxième ensemble de jambes vers le bas, et le cycle se répète\n' +
  '         setLeg(TRIPOD2_LEGS, NOMOVE, kneedown, 0);\n' +
  '         break;\n' +

  ' }\n' +
  '}';
*/
  
/*
  Blockly.Arduino.codeFunctions_['define_wave'] = '\n'+
  'void wave(int dpad) {\n' +
  ' long t = millis()%WAVE_CYCLE_TIME;\n' +
  ' long phase = (NUM_WAVE_PHASES*t)/WAVE_CYCLE_TIME;\n' +
  ' if (dpad == \'b\') {\n' +
  '   phase = 11-phase;  // Reculer\n' +
  ' }\n' +
  ' \n' +
  ' switch (dpad) {\n' +
  '   case "f" : \n' +
  '   case "b": //Tourbilloner\n' +
  '             setLeg(ALL_LEGS, HIP_NEUTRAL, NOMOVE, 0); // Positionner les hanches à 90 degrees en restant stable\n' +
  '             if (phase < NUM_LEGS) {\n' +
  '               setKnee(phase, KNEE_WAVE);\n' +
  '             } else {\n' +
  '               setKnee(phase-NUM_LEGS, KNEE_STAND);\n' +
  '             }\n' +
  '             break;\n' +
  '   case "l": //Basculer sur les jambes avant / arrière\n' +
  '             if (phase < NUM_WAVE_PHASES/2) {\n' +
  '               setKnee(0, KNEE_TIPTOES);\n' +
  '               setKnee(5, KNEE_STAND);\n' +
  '               setHipRaw(0, HIP_FORWARD);\n' +
  '               setHipRaw(5, HIP_BACKWARD-40);\n' +
  '               setKnee(2, KNEE_TIPTOES);\n' +
  '               setKnee(3, KNEE_STAND);\n' +
  '               setHipRaw(2, HIP_BACKWARD);\n' +
  '               setHipRaw(3, HIP_FORWARD+40);\n' +
  '               \n' +
  '               setLeg(LEG1, HIP_NEUTRAL, KNEE_TIPTOES, 0);\n' +
  '               setLeg(LEG4, HIP_NEUTRAL, KNEE_NEUTRAL, 0);\n' +
  '             } else {;\n' +
  '               setKnee(0, KNEE_STAND);;\n' +
  '               setKnee(5, KNEE_TIPTOES);\n' +
  '               setHipRaw(0, HIP_FORWARD+40);\n' +
  '               setHipRaw(5, HIP_BACKWARD);\n' +
  '               setKnee(2, KNEE_STAND);\n' +
  '               setKnee(3, KNEE_TIPTOES);\n' +
  '               setHipRaw(2, HIP_BACKWARD-40);\n' +
  '               setHipRaw(3, HIP_FORWARD);\n' +
  '               \n' +
  '               setLeg(LEG1, HIP_NEUTRAL, KNEE_NEUTRAL, 0);\n' +
  '               setLeg(LEG4, HIP_NEUTRAL, KNEE_TIPTOES, 0);\n' +
  '             }\n' +
  '             break;\n' +
  '   case "r": //Basculer autour des jambes du milieu\n' +
  '             setLeg(MIDDLE_LEGS, HIP_NEUTRAL, KNEE_STAND, 0);\n' +
  '             if (phase < NUM_LEGS) {\n' +
  '               setLeg(FRONT_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, 0);\n' +
  '               setLeg(BACK_LEGS, HIP_NEUTRAL, KNEE_TIPTOES, 0);\n' +
  '             } else {\n' +
  '               setLeg(FRONT_LEGS, HIP_NEUTRAL, KNEE_TIPTOES, 0);\n' +
  '               setLeg(BACK_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, 0);\n' +
  '             }\n' +
  '             break;\n' +
  '   case "w": //Se poser sur le sol et mettre les jambes en vagues\n' +
  '             setLeg(ALL_LEGS, HIP_NEUTRAL, NOMOVE, 0);\n' +
  '             int p = phase/2;\n' +
  '             for (int i = 0; i < NUM_LEGS; i++) {\n' +
  '               if (i == p) {\n' +
  '                 setKnee(i, KNEE_UP_MAX);\n' +
  '               } else {\n' +
  '                 setKnee(i, KNEE_NEUTRAL);\n' +
  '             }\n' +
  '             return;\n' +
  '             if (phase < NUM_LEGS) {\n' +
  '               setKnee(phase/2, KNEE_UP);\n' +
  '             } else {\n' +
  '               int p = phase-NUM_LEGS;\n' +
  '               if (p < 0) p+=NUM_LEGS;\n' +
  '               setKnee(p/2, KNEE_NEUTRAL+10);\n' +
  '             }\n' +
  '             break;\n' +
  '  }\n' +
  '}';


  Blockly.Arduino.codeFunctions_['define_gait_sidestep'] = '\n'+
  'void gait_sidestep(int left, long timeperiod) {\n' +
  ' // Ce mode se compose de 6 phases et utilise des définitions de trépied;\n' +
  ' long t = millis()%timeperiod;\n' +
  ' long phase = (NUM_SIDESTEP_PHASES*t)/timeperiod;\n' +
  ' int side1 = LEFT_LEGS;\n' +
  ' int side2 = RIGHT_LEGS;\n' +
  ' \n' +
  ' if (left == 0) {\n' +
  '   side1 = RIGHT_LEGS;\n' +
  '   side2 = LEFT_LEGS\n' +
  ' }\n' +
  ' \n' +
  ' //Serial.print("PHASE: ");\n' +
  ' //Serial.println(phase);\n' +
  ' \n' +
  ' switch (phase) {\n' +
  '   case 0 : //Soulevez le trépied groupe 1 pendant que le groupe 2 passe au réglage neutre\n' +
  '             setLeg(TRIPOD1_LEGS, HIP_NEUTRAL, KNEE_UP, FBSHIFT);\n' +
  '             setLeg(TRIPOD2_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             break;\n' +
  '   case 1 : //Glisser en enroulant un côté sous le corps tout en prolongeant l\'autre côté\n' +
  '             setLeg(TRIPOD2_LEGS&side1, HIP_NEUTRAL, KNEE_DOWN, FBSHIFT);\n' +
  '             setLeg(TRIPOD2_LEGS&side2, HIP_NEUTRAL, KNEE_RELAX, FBSHIFT);\n' +
  '             break;\n' +
  '   case 2 : //Reposez le premier jeu de jambes sur le sol et, en même temps, \n'+
  '            //Mettre les jambes recourbées en position neutre.\n' +
  '             setLeg(TRIPOD2_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             setLeg(TRIPOD1_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             break;\n' +
  '   case 3 : //Soulever le trépied groupe 2 pendant que le groupe 2 passe au réglage neutre \n'+
  '             setLeg(TRIPOD2_LEGS, HIP_NEUTRAL, KNEE_UP, FBSHIFT);\n' +
  '             setLeg(TRIPOD1_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             break;\n' +
  '   case 4 : //Glisser en enroulant un côté sous le corps tout en prolongeant l\'autre côté \n'+
  '             setLeg(TRIPOD1_LEGS&side1, HIP_NEUTRAL, KNEE_DOWN, FBSHIFT);\n' +
  '             setLeg(TRIPOD1_LEGS&side2, HIP_NEUTRAL, KNEE_RELAX, FBSHIFT);\n' +
  '             break;\n' +
  '   case 5 : //Reposer toutes les jambes sur le sol, puis répétez le cycle \n'+
  '             setLeg(TRIPOD1_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             setLeg(TRIPOD2_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             break;\n' +
  '  }\n'+
  '}\n';
*/
  
  Blockly.Arduino.setups_['setup_vorpal_init_hexapod'] = '\n'+
  ' //Serial.begin(9600);\n'+
  ' pinMode(BeeperPin, OUTPUT);\n'+
  ' beep(200);\n'+
  ' pinMode(ServoTypeGroundPin, OUTPUT);\n'+
  ' digitalWrite(ServoTypeGroundPin, LOW);\n'+
  ' pinMode(ServoTypePin, INPUT_PULLUP);\n'+
  ' delay(300);\n'+
  ' \n'+
  ' Serial.begin(9600);\n'+
  ' BlueTooth.begin(38400);\n'+
  ' BlueTooth.println("");\n'+
  ' delay(250);\n'+
  ' BlueTooth.println("Vorpal H12 : Bonjour ");\n'+
  ' delay(250);\n'+
  ' \n'+
  ' if (digitalRead(ServoTypePin) == LOW) { // Mode servo analogique\n'+
  '   FreqMult = 1;  // Les servos analogiques doivent fonctionner à une vitesse plus lente (60 hertz).\n'+
  ' }\n'+
  ' \n'+
  ' for (int i = 0; i < FreqMult; i++) {\n'+
  '   beep(800, 50);\n'+
  '   delay(100);\n'+
  ' }\n'+
  ' \n'+
  ' resetServoDriver();\n'+
  ' delay(250);\n'+
  ' \n'+
  ' stand();\n'+
  ' delay(300);\n'+
  ' \n'+
  ' beep(400); // Signale la fin de la séquence de démarrage\n'+
  ' \n'+
  ' yield();\n'+
  '';




  var code = '\n';
  return code;
};


//driss_vorpal_faire_un_bip -------------------------------------------------------------------------------------
Blockly.Arduino.driss_vorpal_faire_un_bip = function() {
  var code = 'beep(800, 250);\n';
  return code;
};

//driss_vorpal_emettre_son_freq_duree -------------------------------------------------------------------------------------
Blockly.Arduino['driss_vorpal_emettre_son_freq_duree'] = function(block) {
  var value_frequence = Blockly.Arduino.valueToCode(block, 'FREQUENCE', Blockly.Arduino.ORDER_ATOMIC);
  var value_duree = Blockly.Arduino.valueToCode(block, 'DUREE', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'beep('+value_frequence+', '+value_duree+');\n';
  return code;
};


//driss_vorpal_position_repos -------------------------------------------------------------------------------------
Blockly.Arduino['driss_vorpal_position_repos'] = function(block) {
  Blockly.Arduino.codeFunctions_['define_stand_90_degrees'] = '\n'+
  'void stand_90_degrees() {\n' +
  ' setLeg(ALL_LEGS, 90, 90, 0, 0);\n' +
  '}';

  var code = 'stand_90_degrees();\n';
  return code;
};

//driss_vorpal_position_debout -------------------------------------------------------------------------------------
Blockly.Arduino['driss_vorpal_position_debout'] = function(block) {
  Blockly.Arduino.codeFunctions_['define_stand'] = '\n'+
  'void stand() {\n' +
  ' setLeg(ALL_LEGS, HIP_NEUTRAL, KNEE_STAND, 0, 0);\n' +
  '}';

  var code = 'stand();\n';
  return code;
};

//driss_vorpal_poser_corps -------------------------------------------------------------------------------------
Blockly.Arduino['driss_vorpal_poser_corps'] = function(block) {
  Blockly.Arduino.codeFunctions_['define_laydown'] = '\n'+
  'void laydown() {\n' +
  ' setLeg(ALL_LEGS, HIP_NEUTRAL, KNEE_UP, 0, 0);\n' +
  '}';

  var code = 'laydown();\n';
  return code;
};


//driss_vorpal_se_mettre_sur_pointes -------------------------------------------------------------------------------------
Blockly.Arduino['driss_vorpal_se_mettre_sur_pointes'] = function(block) {
  Blockly.Arduino.codeFunctions_['define_tiptoes'] = '\n'+
  'void tiptoes() {\n' +
  ' setLeg(ALL_LEGS, HIP_NEUTRAL, KNEE_TIPTOES, 0, 0);\n' +
  '}';

  var code = 'tiptoes();\n';
  return code;
};


//driss_vorpal_lire_distance_avec_ultrasonic -------------------------------------------------------------------------------------
Blockly.Arduino['driss_vorpal_lire_distance_avec_ultrasonic'] = function(block) {
  
  Blockly.Arduino.definitions_['define_ULTRAOUTPUTPIN'] = "#define ULTRAOUTPUTPIN 7      // TRIG";
  Blockly.Arduino.definitions_['define_ULTRAINPUTPIN'] = "#define ULTRAINPUTPIN  8      // ECHO";

  Blockly.Arduino.codeFunctions_['define_readUltrasonic'] = '//renvoie le nombre de centimètres du télémètre à ultrasons\n'+
  'unsigned int readUltrasonic() {\n'+
  ' pinMode(ULTRAOUTPUTPIN, OUTPUT);\n'+
  ' digitalWrite(ULTRAOUTPUTPIN, LOW);\n'+
  ' delayMicroseconds(5);\n'+
  ' digitalWrite(ULTRAOUTPUTPIN, HIGH);\n'+
  ' delayMicroseconds(10);\n'+
  ' digitalWrite(ULTRAOUTPUTPIN, LOW);\n'+
  ' \n'+
  ' //maximum 18 millisecondes qui correspond à environ 3m de distance de l\'objet\n'+
  ' unsigned int duration = pulseIn(ULTRAINPUTPIN, HIGH, 18000); \n'+
  ' //Serial.print("ultra cm:"); Serial.println(duration/58);\n'+
  ' \n'+
  ' // Soit 0, soit moins de 2 cm ou encore hors de portée\n'+
  ' if (duration <100) { \n'+
  '   return 1000;   // cette grande valeur pour signifier hors de portée, puisque 400 cm est la portée max publiée par le fabricant\n'+
  ' }\n'+
  ' \n'+
  ' //cela convertit des microsecondes de temps de propagation du son en centimètres.\n'+ 
  ' //Rappelez-vous que le son doit aller et venir, donc il voyage deux fois plus loin que la distance de l\'objet\n'+
  ' return (duration) / 58;\n'+
  '}\n';

  var code = 'readUltrasonic()';
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



//driss_vorpal_set_leg_position -------------------------------------------------------------------------------------
Blockly.Arduino.driss_vorpal_set_legs_position = function() {
  var dropdown_legmask = this.getFieldValue('LEGMASK');
  var hip_angle = Blockly.Arduino.valueToCode(this, 'HIP_ANGLE', Blockly.Arduino.ORDER_ATOMIC);
  var knee_angle = Blockly.Arduino.valueToCode(this, 'KNEE_ANGLE', Blockly.Arduino.ORDER_ATOMIC);
  var adj = Blockly.Arduino.valueToCode(this, 'ADJ', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'setLeg('+dropdown_legmask+', '+hip_angle+', '+knee_angle+', '+adj+',0);\n';
  return code;
};

//driss_vorpal_set_hip_angle -------------------------------------------------------------------------------------
Blockly.Arduino.driss_vorpal_set_hip_angle = function() {
  var legnum = this.getFieldValue('LEGNUM');
  var angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'setHip('+legnum+', '+angle+', 0);\n';
  return code;
};

//driss_vorpal_set_knee_angle -------------------------------------------------------------------------------------
Blockly.Arduino.driss_vorpal_set_knee_angle = function() {
  var legnum = this.getFieldValue('LEGNUM');
  var angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'setKnee('+legnum+', '+angle+');\n';
  return code;
};