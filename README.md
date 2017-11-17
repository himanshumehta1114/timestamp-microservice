# Author
![@himanshumehta1114](https://avatars2.githubusercontent.com/himanshumehta1114?&s=128)

created by himanshu mehta.
[Github](https://github.com/himanshumehta1114) | [FreeCodeCamp](http://www.freecodecamp.com/himanshumehta1114) | [CodePen](http://codepen.io/himanshumehta1114/) | [LinkedIn](https://www.linkedin.com/in/himanshumehta1114)

# FreeCodeCamp API Basejump: Timestamp Microservice
### User stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

## Example usage:

```url
https://himanshu-timestamp.herokuapp.com/December%2015,%202015
https://himanshu-timestamp.herokuapp.com/1450137600
```

## Example output:

```json
{ "unix": 1450137600, "natural": "December 15, 2015" }
```
