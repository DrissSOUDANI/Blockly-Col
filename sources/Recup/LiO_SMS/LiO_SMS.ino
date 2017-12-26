#include <LTask.h>
#include <LGSM.h>

boolean MessageRecu;
String Numero;
String Message;

String getNumSMS() {
 char num[20] ;
 
 LSMS.remoteNumber(num, 20);
 String numero(num);
 return  numero;
}

String getMessageSMS() {
 char msg[500] ;

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
}

void setup()
{
  pinMode(3, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(5, OUTPUT);
  Serial.begin(9600);
  //Serial.println("Initialize GSM for SMS");
  while(!LSMS.ready()) {
    delay(1000);
    //Serial.print(".");
  }
  Serial.println("GSM ready for sending/recieving SMS");
}


void loop()
{
  MessageRecu = false;
  Numero = "";
  Message = "";
  digitalWrite(3,LOW);
  digitalWrite(6,LOW);
  digitalWrite(5,LOW);
  digitalWrite(6,HIGH);
  while (true) {
    if (LSMS.available()) {
      //Serial.println("MESSAGE recu");
      digitalWrite(5,HIGH);
      delay(1000);
      digitalWrite(5,LOW);
      MessageRecu = true;
      Numero = getNumSMS();
      Message = getMessageSMS();
      //Serial.println(Numero);
      //Serial.println(Message);
      LSMS.flush();
      //Serial.println("MESSAGE DELETED");
      
    }
    if (MessageRecu) {
      MessageRecu = false;
      if (Message == "ON") {
        digitalWrite(3,HIGH);

      }
      if (Message == "OFF") {
        digitalWrite(3,LOW);

      }
      Serial.println(Numero);
      int a = Numero.length()+1;
      Serial.println(a);
      
      
      char* num = new char[Numero.length()+1];
     
      strcpy(num, Numero.c_str()); 
      Serial.println(num);
       Serial.println(num);
      sendSMS(num, "Message reçu");
      
    }
  }
  
}
