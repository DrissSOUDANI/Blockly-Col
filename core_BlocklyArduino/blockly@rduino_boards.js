/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/blockly/
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
 * @fileoverview Helper functions for generating Arduino for blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino');

goog.require('Blockly.Generator');

/*
 * Arduino Board profiles
 *
 */

var profile = {
	none: {
	    description: "",
	    digital: [],
		PWM : [],
		dropdownPWM: [],
		analog : [],
		dropdownAnalog: [],
		irqonchange: [],
		I2C: [],
		SPI: [],
		interrupt: [],
		picture : "media/Arduino_none.jpg",
		miniPicture : "media/Arduino_none_mini.jpg",
		serial: [],
		serialPin: [],
		upload_arg: "none",
	},
	arduino_leonardo: {
	    description: "Arduino Leonardo",
	    digital: ["0", "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		dropdownDigital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		PWM : ["3", "5", "6", "9", "10", "11", "13"],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A6", "A7", "A8", "A9", "A10", "A11"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6(D4)", "4"], ["A7(D6)", "6"], ["A8(D8)", "8"], ["A9(D9)", "9"], ["A10(D10)", "10"], ["A11(D12)", "12"]],
		irqonchange: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"]],
		I2C: ["2", "3"],
		SPI: ["connect"],
		interrupt: ["3", "2", "0", "1", "7"],
		picture : "media/Arduino-Leonardo-Pinout.jpg",
		miniPicture : "media/Arduino-Leonardo-Pinout-mini.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"]],
		upload_arg: "arduino:avr:leonardo",
	},
	arduino_micro: {
	    description: "Arduino Micro",
	    digital: ["0", "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		dropdownDigital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		PWM : ["3", "5", "6", "9", "10", "11", "13"],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A6", "A7", "A8", "A9", "A10", "A11"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6(D4)", "4"], ["A7(D6)", "6"], ["A8(D8)", "8"], ["A9(D9)", "9"], ["A10(D10)", "10"], ["A11(D12)", "12"]],
		irqonchange: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"]],
		I2C: ["2", "3"],
		SPI: ["connect"],
		interrupt: [["0(Rx)", "0"], ["1(Tx)", "1"], ["2", "2"], ["3", "3"], ["7", "7"]],
		picture : "media/Arduino-Micro-Pinout.jpg",
		miniPicture : "media/Arduino-Micro-Pinout-mini.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"]],
		upload_arg: "arduino:avr:micro",
	},
	arduino_nano: {
	    description: "Arduino Nano",
	    digital: ["0", "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		dropdownDigital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		PWM : ["3", "5", "6", "9", "10", "11"],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		irqonchange: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"]],
		I2C: ["A4", "A5"],
		SPI: [["10 (SS)", "10"], ["11 (MOSI)", "11"], ["12 (MISO)", "12"], ["13 (SCK)", "13"]],
		interrupt: ["2", "3"],
		picture : "media/Arduino-Nano-Pinout.jpg",
		miniPicture : "media/Arduino-Nano-Pinout-mini.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"]],
		upload_arg: "arduino:avr:nano:cpu=atmega328",
	},
	arduino_pro_mini: {
	    description: "Arduino Pro Mini",
	    digital: ["0", "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		dropdownDigital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		PWM : ["3", "5", "6", "9", "10", "11"],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		I2C: ["A4", "A5"],
		SPI: [["10 (SS)", "10"], ["11 (MOSI)", "11"], ["12 (MISO)", "12"], ["13 (SCK)", "13"]],
		interrupt: [["2", "2"], ["3", "3"]],
		picture : "media/Arduino-Pro-Mini-Pinout.jpg",
		miniPicture : "media/Arduino-Pro-Mini-Pinout-mini.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"]],
		upload_arg: "arduino:avr:micro",
	},
	arduino_uno: {
	    description: "Arduino Uno",
	    digital: ["0", "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		//dropdownDigital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownDigital: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"]],
		dropdownDigitalRFID: [["2", "2"],["4", "4"], ["6", "6"], ["8", "8"]],
		PWM : ["3", "5", "6", "9", "10", "11"],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		irqonchange: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"]],
		I2C: ["A4", "A5"],
		SPI: [["10 (SS)", "10"], ["11 (MOSI)", "11"], ["12 (MISO)", "12"], ["13 (SCK)", "13"]],
		interrupt: ["2", "3"],
		picture : "media/Arduino-Uno-Pinout.jpg",
		miniPicture : "media/Arduino-Uno-Pinout-mini.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"]],
		upload_arg: "arduino:avr:uno",
	},

	arduino_mega:{
		description: "Arduino Mega",
		digital : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"],
		dropdownDigital: [["0", "0"],["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"],["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"],["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"],["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"],["53", "53"],["A0", "54"], ["A1", "55"], ["A2", "56"], ["A3", "57"], ["A4", "58"], ["A5", "59"], ["A6", "60"], ["A7", "61"], ["A8", "62"], ["A9", "63"], ["A10", "64"], ["A11", "65"], ["A12", "66"], ["A13", "67"], ["A14", "68"], ["A15", "69"]],
		dropdownDigitalRFID: [["10", "10"]],
		PWM : ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "44", "45", "46"],
		dropdownPWM: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["44", "44"], ["45", "45"], ["46", "46"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"], ["A8", "A8"], ["A9", "A9"], ["A10", "A10"], ["A11", "A11"], ["A12", "A12"], ["A13", "A13"], ["A14", "A14"], ["A15", "A15"]],
		irqonchange : [["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["A8", "62"], ["A9", "63"], ["A10", "64"], ["A11", "65"], ["A12", "66"], ["A13", "67"], ["A14", "68"], ["A15", "69"]],
		I2C: ["20", "21"],
		SPI: [["50 (SS)", "50"], ["51 (MOSI)", "51"], ["52 (MISO)", "52"], ["53 (SCK)", "53"]],
		interrupt: ["2", "3", "21", "20", "19", "18"],
		picture : "media/Arduino-Mega-2560-Pinout.jpg",
		miniPicture : "media/Arduino-Mega-2560-Pinout-mini.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"], ["19 (Rx1) ; 18 (Tx1)", "19"], ["17 (Rx2) ; 16 (Tx2)", "17"], ["15 (Rx3) ; 14 (Tx3)", "15"]],
		upload_arg: "arduino:avr:mega:cpu=atmega2560",
	},
	arduino_yun: {
	    description: "Arduino Yùn",
	    digital: ["0", "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		dropdownDigital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		PWM : ["3", "5", "6", "9", "10", "11", "13"],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A6", "A7", "A8", "A9", "A10", "A11"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6(D4)", "4"], ["A7(D6)", "6"], ["A8(D8)", "8"], ["A9(D9)", "9"], ["A10(D10)", "10"], ["A11(D12)", "12"]],
		irqonchange: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"]],
		I2C: ["A4", "A5"],
		SPI: ["connect"],
		interrupt: ["3", "2", "0", "1", "7"],
		picture : "media/Arduino-Yun-Pinout.jpg",
		miniPicture : "media/Arduino-Yun-Pinout-mini.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"]],
		upload_arg: "arduino:avr:yun",
	},
	lilypad: {
	    description: "LilyPad Arduino 328",
	    digital: ["0", "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		dropdownDigital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		PWM : ["3", "5", "6", "9", "10", "11"],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		irqonchange: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"]],
		I2C: ["A4", "A5"],
		SPI: [["10 (SS)", "10"], ["11 (MOSI)", "11"], ["12 (MISO)", "12"], ["13 (SCK)", "13"]],
		interrupt: ["2", "3"],
		picture : "media/LilyPad-Pinout.jpg",
		miniPicture : "media/LilyPad-Pinout-mini.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"]],
		upload_arg: "arduino:avr:uno",
	},
	dfrobot_romeo:{
		description: "RoMeo v2",
		digital: ["0", "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		dropdownDigital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		PWM : ["3", "5", "6", "9", "10", "11", "13"],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A6", "A7", "A8", "A9", "A10", "A11"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6(D4)", "4"], ["A7(D6)", "6"], ["A8(D8)", "8"], ["A9(D9)", "9"], ["A10(D10)", "10"], ["A11(D12)", "12"]],
		I2C: ["connect"],
		SPI: [["16 (MOSI)", "16"], ["14 (MISO)", "14"], ["15 (SCK)", "15"]],
		interrupt: ["3", "2", "0", "1", "7"],
		picture : "media/DFRobot-RoMeo-Pinout.jpg",
		miniPicture : "media/DFRobot-RoMeo-Pinout-mini.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"]],
		upload_arg: "arduino:avr:leonardo",
	},
	kit_microfeux: {
	    description: "Micro-feux Jeulin",
	    digital: ["1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
		dropdownDigital: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		PWM : ["3", "5", "6", "9", "10", "11"],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		analog : ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7"],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		/*irqonchange: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["A0", "14"], ["A1", "15"], ["A2", "16"], ["A3", "17"], ["A4", "18"], ["A5", "19"]],*/
		I2C: ["A4", "A5"],
		SPI: [["10 (SS)", "10"], ["11 (MOSI)", "11"], ["12 (MISO)", "12"], ["13 (SCK)", "13"]],
		interrupt: ["2", "3"],
		picture : "media/microfeuxJeulin.jpg",
		miniPicture : "media/microfeuxJeulin.jpg",
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["0 (Rx) ; 1 (Tx)", "0"]],
		upload_arg: "arduino:avr:uno",
		help_link: "https://www.qwant.com/?q=microfeux%20jeulin&t=all",
	},

	tinkerKit: {
		description: "Tinker Kit",
		dropdownInput :[["I0", "I0"], ["I1", "I1"], ["I2", "I2"], ["I3", "I3"], ["I4", "I4"], ["I5", "I5"], ["I6", "I6"], ["I7", "I7"], ["I8", "I8"], ["I9", "I9"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]],
    	dropdownOutput :[["O0", "O0"], ["O1", "O1"], ["O2", "O2"], ["O3", "O3"], ["O4", "O4"], ["O5", "O5"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]],
    	dropdownI2C :[["I4", "I4"], ["O5", "O5"]],
	},

	arduino_barbot: {
	    description: "Robot Barbot",
	    
	    digital: [["6", "6"], ["10", "10"], ["11", "11"], ["A3", "17"]],
	    dropdownDigital: [["6", "6"], ["10", "10"], ["11", "11"], ["A3", "17"]],
		
		PWM : [["6", "6"], ["10", "10"], ["11", "11"]],
		dropdownPWM : [["6", "6"], ["10", "10"], ["11", "11"]],
        
        irqonchange: [["6", "6"], ["10", "10"], ["11", "11"], ["A3", "17"]],

		analog : [["A3", "A3"]],
		dropdownAnalog : [["A3", "A3"]],
	    serial : 9600,
	},
	
	R1D32_Grove: {
	    description: "R1D32 + Shield Grove",
	    digital: ["D0", "D1",  "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13"],
		dropdownDigital: [["D0", "D0"], ["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"], ["D7", "D7"], ["D8", "D8"], ["D9", "D9"], ["D10", "D10"], ["D11", "D11"], ["D12", "D12"], ["D13", "D13"]],
		
		
		analog : ["A0", "A1", "A2", "A3"],
		dropdownAnalog: [["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"], ["D7", "D7"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"]],
		
		I2C: ["D3", "D4"],
		SPI: [["D10 (SS)", "D10"], ["D11 (MOSI)", "D11"], ["D12 (MISO)", "D12"], ["D13 (SCK)", "D13"]],
		interrupt: ["2", "3"],
		picture : "media/Arduino-Uno-Pinout.jpg",
		miniPicture : "media/Arduino-Uno-Pinout-mini.jpg",
		
        serial: [['9600', '9600'],['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], 
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["D0 (Rx) ; D1 (Tx)", "D0"]],
	},
	arduino_uno_shield_Grove: {
	    description: "Arduino Uno + Shield Grove",
	    digital: ["D0", "D1",  "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13"],
		dropdownDigital: [["D0", "D0"], ["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"], ["D7", "D7"], ["D8", "D8"], ["D9", "D9"], ["D10", "D10"], ["D11", "D11"], ["D12", "D12"], ["D13", "D13"]],
		
		
		analog : ["A0", "A1", "A2", "A3"],
		dropdownAnalog: [["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"], ["D7", "D7"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"]],
		
		I2C: ["D3", "D4"],
		SPI: [["D10 (SS)", "D10"], ["D11 (MOSI)", "D11"], ["D12 (MISO)", "D12"], ["D13 (SCK)", "D13"]],
		interrupt: ["2", "3"],
		picture : "media/Arduino-Uno-Pinout.jpg",
		miniPicture : "media/Arduino-Uno-Pinout-mini.jpg",
		
        serial: [['9600', '9600'],['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], 
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["D0 (Rx) ; D1 (Tx)", "D0"]],
	}
};

//set default profile to arduino standard-compatible board
profile.defaultBoard = profile["none"];

/**
 * Ensure that PIN number exists in Digital array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinDigitalValidator = function(text) {
	var pos = profile.defaultBoard.digital.indexOf(text);
	//alert(text  + "        " + pos);
		
	return (pos < 0) ? null : text;
};

Blockly.Arduino.pinInterruptValidator = function(text) {
	var pos = profile.defaultBoard.interrupt.indexOf(text);
		
	return (pos < 0) ? null : text;
};

Blockly.Arduino.pinSoftSerialValidator = function(text) {
	var pos = profile.defaultBoard.serialPin.indexOf(text);
		
	return (pos < 0) ? null : text;
};

/**
 * Ensure that PIN and next PIN numbers exists in Digital array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinGroveDigitalValidator = function(text) {
	var pos = profile.defaultBoard.digital.indexOf(text);
	if (pos >= 0) {
		var NextPIN = parseInt(text) + 1;
		// check if NextPIN in bound
		pos = profile.defaultBoard.digital.indexOf(String(NextPIN));
	}
	return (pos < 0) ? null : text;
};

/**
 * Ensure that PIN number exists in PWM array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinPWMValidator = function(text) {
	var pos = profile.defaultBoard.PWM.indexOf(text);

	return (pos < 0) ? null : text;
};

/**
 * Ensure that PIN number exists in Analog array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinAnalogValidator = function(text) {
	var pos = profile.defaultBoard.analog.indexOf(text);

	return (pos < 0) ? null : text;
};

/**
 * Ensure that PIN and next PIN numbers exists in Digital array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinGroveAnalogValidator = function(text) {
	var pos = profile.defaultBoard.analog.indexOf(text);
	if (pos >= 0) {
	    var NextPIN = 'A'+(parseInt(text.slice(1,text.length))+1);
		// check if NextPIN in bound
		pos = profile.defaultBoard.analog.indexOf(String(NextPIN));
	}
	return (pos < 0) ? null : text;
};

/**
 * Ensure that PIN and next PIN numbers exists in Digital or Analog array.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid PIN number, or null if invalid.
 */
Blockly.Arduino.pinDualValidator = function(text) {
	var posa = profile.defaultBoard.analog.indexOf(text);
	var posd = profile.defaultBoard.digital.indexOf(text);
	var pos = posa + posd
	return (pos < 0) ? null : text;
};


// Ajoutés par Driss
Blockly.Arduino.getDropDownDigitalPins = function(){
	//alert(profile.defaultBoard.description);
	return profile.defaultBoard.dropdownDigital;
}

Blockly.Arduino.dropdownDigitalRFID = function(){
	//alert(profile.defaultBoard.description);
	return profile.defaultBoard.dropdownDigitalRFID;
}

Blockly.Arduino.getDropDownAnalogPins = function(){
	return profile.defaultBoard.dropdownAnalog;
}

Blockly.Arduino.getDropDownPWMPins = function(){
	return profile.defaultBoard.dropdownPWM;
}


Blockly.Arduino.setDefaultBoard = function(board){
	//alert(profile.defaultBoard.digital[12]);
	profile.defaultBoard = profile[board];
}

Blockly.Arduino.getDefaultBoard = function(){
	return (profile.defaultBoard);
}


Blockly.Arduino.getDropDownInputPins = function(){
	return profile.defaultBoard.dropdownInput;
}

Blockly.Arduino.getDropDownOutputPins = function(){
	return profile.defaultBoard.dropdownOutput;
}

Blockly.Arduino.getDropDownIRQPins = function(){
	return profile.defaultBoard.irqonchange;
}

Blockly.Arduino.getDropDownSerial = function(){
	return profile.defaultBoard.serial;
}


//Fin des ajouts de Driss