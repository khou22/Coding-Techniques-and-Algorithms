/* Factor into two prime numbers
http://emea.emc.com/emc-plus/rsa-labs/historical/the-rsa-challenge-numbers.htm

Hints:
* The two numbers will be roughly the same size
* A 300 bit number will yield two roughly 150 (+/- 1) bit prime factors

Strategy:
* Cycle through set of primes within that region
* Mulitply ones digit of two numbers and compare to product's ones digit
* Speed up the process of checking all the primes

*/
