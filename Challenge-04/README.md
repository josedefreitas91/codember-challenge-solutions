# Challenge 4: Find your friend's password

## Problem

A friend bought 5 BitCoins in 2008. The problem is that he had it in a digital wallet... and he can't remember the password!

He has asked us for help. And he has given us some clues:

- It's a 5-digit password.
- The password had the number 5 repeated at least twice.
- The number on the right is always greater than or equal to the one on the left.

He has given us some examples:
55678 is correct, it does everything
12555 is correct, it does everything
55555 is correct, it fulfills everything
12345 is incorrect, it does not have the 5 repeated.
57775 is incorrect, the numbers are not increasing

He says that the password is between the numbers 11098 and 98123. Can we tell you how many numbers meet those rules within that range?

## How to submit the solution
Submit the solution with the submit command, and the number of passwords that match the criteria along with the password that is at index 55 of the valid passwords list, separated by a hyphen.

For example, for 87 results and the password 35522 in position 55 it would be:

```
$ send 87-35522
```