#include <LTask.h>
#include <LGSM.h>

String Numero;
String Message;

String getNumSMS() {
 char num[20] ;
 LSMS.remoteNumber(num, 20);
 String numero(num);
 return  numero;
}

String getMessageSMS() {
 char msg[100]="" ;
 int len=0 ;
 while(true) {
  int c = LSMS.read();
  if(c < 0) break ;
  msg[len++] = (char)c;
  }
 String message(msg);
 return message;
}

void sendSMS(char num[], char msg[]) {
 LSMS.beginSMS(num);
 LSMS.print(msg);
 LSMS.endSMS();
 delay(3000);
}

/*Efface les SMS */
void deleteSMS() {
 while (LSMS.available()) {
   LSMS.flush();
 }
}

void Declaration_et_initialisation_des_variables() {
  Numero = "";
  Message = "";
}

void Initialisation_des_modules() {
  digitalWrite(4,LOW);
  digitalWrite(3,LOW);
  digitalWrite(2,LOW);
}

void setup()
{//Serial.begin(9600);
  while(!LSMS.ready()) {
    delay(1000);
    //Serial.print('.');
  }
LSMS.flush();
//Serial.print("ok");
  pinMode(4, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(2, OUTPUT);
}


void loop()
{
  Declaration_et_initialisation_des_variables();
  Initialisation_des_modules();
  digitalWrite(4,HIGH);
  while (true) {
    //Serial.println("sa.");
    
    if (LSMS.available()) { 
      digitalWrite(3,HIGH);
      delay(1000);
      digitalWrite(3,LOW);
      Numero = getNumSMS();
      //Serial.print(Numero);
      //Serial.print("ok");
      Message = getMessageSMS();
       LSMS.flush();
      if (Message == "RON") {
        digitalWrite(2,HIGH);

      }
      if (Message == "ROFF") {
        digitalWrite(2,LOW);

      }
      char* num = new char[Numero.length()+1];
      strcpy(num, Numero.c_str());
      String buf = (String("La commande : ") + String(Message) + String("  executee."));
      char* msg = new char[buf.length()+1];
      strcpy(msg, buf.c_str());
      sendSMS(num, msg);
      
    }

    
  }
  
}

