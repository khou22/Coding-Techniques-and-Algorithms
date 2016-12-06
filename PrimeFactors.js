/* Factor into two prime numbers
http://emea.emc.com/emc-plus/rsa-labs/historical/the-rsa-challenge-numbers.htm

Hints:
* The two numbers will be roughly the same size
* A 50 bit number will yield two roughly 25 (± 1) bit prime factors

Strategy:
* Cycle through set of primes within that region
* Multitly ones digit of two numbers and compare to product's ones digit
* Speed up the process of checking all the primes
* It's very inefficient to calculate large numbers primes
* Factoring is also intractible making it a very useful element of cryptography
*/
