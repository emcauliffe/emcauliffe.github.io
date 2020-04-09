---
layout: post
title: Challenge 1. Rotary Switch Monitor
tags: [ER, ACES, Grade 12, Challenge]
---
Purpose
-------
The purpose of this challenge is to create a circuit to light up a bicolour LED a specific colour depending on the position of a rotary decoder. The project works by reading the value of a  rotary encoder connected to an ATtiny85, then determining if said number has an odd or even number of set bits and displaying the appropriate colour on the LED. If the number of set bits is even, the LED will show red. Otherwise, it will be green. A resistor network provides appropriate pull down resistors for the input from the rotary encoder. The led should change colour immediately depending on the value of the rotary encoder.

Parts List|
----------|
ATtiny85| Red-Green BiColour LED
10 Position BCD Rotary DIP Switch|10k Ω Resistor Network (6-Pin Bussed)
Atmel ICE AVR Debugger|ATtiny85 ISP Breakout

Procedure
---------
<img style="float: right" src="/assets/img/ER%20Reports/Grade%2012/Challenge%201%20Rotary%20Switch%20Monitor/chrome_2017-12-02_14-22-14.png">
This challenge started with reading the datasheet for the rotary encoder and wiring the circuit accordingly. Positive voltage connected to the common pin and the binary outputs connected to the resistor network. The resistor network provides a pull down resistance for the outputs of the rotary encoder. These outputs also connected to the input pins of the ATtiny85. Pin 1 connected to `PORTB0`, 2 to `PORTB1` and 4 to `PORTB2`. This meant that the first 3 bits of `PORTB` represented the same value as shown on the rotary encoder. At right is the pinout of said rotary encoder. A bicolour LED is also connected to the ATtiny85 on pins `PORTB3` and `PORTB4`, where the longer lead is in `PORTB3`.

The next step was programming the ATtiny85 to read the binary value presented on its pins, determine the number of set bits, and display the appropriate LED colour. The program first enables output on `PORTB` pins 2 and 3 in the `start` label. Next, the microcontroller imports the high/low values on `PORTB` to a register using the `in` instruction. An `andi` instruction strips the highest 4 bits from this value and each bit is then tested to be either a one or a zero. If the bit is a one, the value on a separate register increases by one. If bit zero of this external register is a zero, the number of set bits is even, and the program jumps to the `isEven` label. This label calls the `green` function, and then returns to the `load` label to ensure constant monitoring of the rotary encoder value. If said value is odd, the same occurs but with the `isOdd` label and `red` function.

Media
-----
<table>
  <tr>
    <td>
      <img src="/assets/img/ER%20Reports/Grade%2012/Challenge%201%20Rotary%20Switch%20Monitor/challenge1.jpg">
    </td>
    <td>
      <img src="/assets/img/ER%20Reports/Grade%2012/Challenge%201%20Rotary%20Switch%20Monitor/20171201_150546.jpg">
    </td>
  </tr>
  <tr>
    <th>3D Render of circuit</th>
    <th>Photo of circuit</th>
  </tr>
  <tr>
    <td>
      <img src="/assets/img/ER%20Reports/Grade%2012/Challenge%201%20Rotary%20Switch%20Monitor/RotarySwitch10.JPG">
    </td>
    <td>
      <img src="/assets/img/ER%20Reports/Grade%2012/Challenge%201%20Rotary%20Switch%20Monitor/fritzing_bb.png">
    </td>
  </tr>
  <tr>
    <th>Rotary encoder used in circuit</th>
    <th>Fritzing Diagram</th>
  </tr>
  <tr>
    <th colspan="2">Link to YouTube Video: <a href="https://youtu.be/-HsjXjVvNDY">https://youtu.be/-HsjXjVvNDY</a></th>
  </tr>
</table>

Code
----
```
; Challenge 1.asm
; Created: 2017-12-01 1:58:44 PM
; Author : Ethan McAuliffe

#define TEST_BIT 0b00001111
; Replace with your application code
start:
	ldi r16,0x18
	out 0x17,r16
	clr r16

load:
	clr r16
	in r16,0x16

again:
	andi r16,0x0F
	mov r18,r16		;copy
	ldi r17,11		;mask
	and r18,r17		;test
	sbrc r18,0
	inc r19
	asr r16
	brne again
sbrc r19, 0
rjmp isOdd
rjmp isEven

isOdd:
	rcall red
	rjmp load

isEven:
	rcall green
	rjmp load

green:
	ldi r16,0x10
	out 0x18,r16
	ret

red:
	ldi r16,0x08
	out 0x18,r16
	ret
```

Conclusion
-----
To conclude, I am somewhat disappointed with the result of this project. While I was able to complete the code for the project in the allotted time, I did not get as many photos as I should and was not able to record any video of its operation. While my 3D render animation is effective at displaying what a similar circuit would look like, I would rather have video that I could use to explain the fundamental workings of my project. Furthermore, my code has switched up the colour of the LED to be displayed; when the number of set bits are even, my code sets the LED green LED instead of red. I did, however, find the challenge to be quite enjoyable. I liked being pushed to delve deep into the ATtiny85 datasheet and AVR instruction set. I do believe that I learned a lot from the completion of this challenge.

Reference
-----
Atmel Corporation. Atmel ATtiny25, ATtiny45, ATtiny85 Datasheet. Aug. 2013, [www.atmel.com/images/atmel-2586-avr-8-bit-microcontroller-attiny25-attiny45-attiny85_datasheet.pdf](http://www.atmel.com/images/atmel-2586-avr-8-bit-microcontroller-attiny25-attiny45-attiny85_datasheet.pdf).

Wurth Electronics Inc. "428527420910 Drawing." Digi-Key, 25 July 2014, [katalog.we-online.de/em/datasheet/428527420910.pdf](http://katalog.we-online.de/em/datasheet/428527420910.pdf).
