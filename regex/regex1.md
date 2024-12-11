# Regex - A defined set of characters that follow some rules. We use this to find patterns in a large string.

## Refer these websites:
## - [Regex 101](https://regex101.com/)
## - [Regexr](https://regexr.com/)
## - [Procodrr Notes on regex](https://regex-pro.netlify.app/)

---

# [Delimiters, Literals, and Meta Characters](https://app.procodrr.com/web/courses/66a9ea83ce7c80a6299d1804?chapter=66aa09ee570cfc8c1f660e36)

## Delimit -> Set / Define Limits or boundaries.

eg. `<!-- -->` in html comments is a de-limiter.

Similarly `/* */` is a de-limiter in css and js and other languages

`/ /` is a de-limiter in RegEx

## Delimiters: Characters used to mark the beginning and end of a pattern.

## Literal Characters: Characters without special meaning. Ex: a to z, 0 to 9

## Meta-Characters: Characters with special meaning. Ex:   . ^ $ * + ? {} [] \ | ()

eg.

1.  `.` means match with any character

(with global . matches all characters except the new line char)

(without global . matches only the first character)

## `.` is a special meta character and it matches any single character except newline characters (\n, \r).

2. `\n` => new line character (matches all new line character)

## `\` is a special meta character and it is used to escape special characters or introduce special sequences (\n, \t, etc.)

eg. `.` is a special character and it matches as per the rules mentioned above.

`\.` is used to match only `.` as its specialty is now removed.

eg..

```ssh
Hello World. I am KSD

Regex -> . (matches H (without global))

Regex => \. (matches .)
```

Exercise

```ssh
Hello World, \n \r I am KSD.
123


Match \n and \r

ans -> \\n for \n
\\r for \r
```

```ssh
. ^ $ * + ? [] {} () | \

Out of all these characters -> {, }, ], can be tested without using backslash (\) 
```
---

# [Flags in RegEx](https://app.procodrr.com/web/courses/66a9ea83ce7c80a6299d1804?chapter=66aa0a33068d27db12698e6f)

Flags and Modifiers are same.

Types of flags:

- `g` (global): Searches for all occurrences of the pattern within the text, rather than just the first one.

- `i` (case-insensitive): Ignores case differences when matching letters.

In vs code this flag is on by default

- `s` (dotAll (or newLine)): Allows the dot (.) to match newline characters (\n), which it doesn't do by default.

- `u` (unicode): Enables full Unicode support for the regex pattern.

[Unicode list](https://regex-pro.netlify.app/unicode)

To match a unicode:

    - Select the unicode flag
    - In regex 101, select ecmascript from left side boundaries
    - Write it like this: `\u{0391}` to match greek A and `\u{0041}` to match latin (normal) a

In this way, we can test unicode characters

### we can also write it as `\u0042` (i.e. remove the curly braces) but in this case we have to MANDATORILY put the preceding zeroes.

i.e. `\u{50}` ✅ but `\u50` ❌ 

hence `\u0050` ✅

also `\u{0050}` ✅ 

This unicode is useful when we are using emojis and other language letters and symbols.

- `y` (sticky): Matches only from the last index where a previous match ended.

Say we have a test string 

`Hello Hello Hello` and our regex is Hello (5 characters)

Here it will start from 0 and go 5 characters matching, if Hello is found then good, else it will not show any match.

Then again from the 6th character it starts doing the same thing and this keeps going on and on..

So for `Hello Hello Hello` ans is first `Hello` only as after this, it has a space which disrupts the matching pattern process.

So for it to match all Hellos, we have to give test string as follows:

`HelloHelloHello` now, no space is there and it can keep on going matching. All Hellos are sticked together here (hence the name sticky flag, remember to turn on the flag and select ecmascript(javascript) as our language in the left side bar)

- `m` (multi-line): Changes the behavior of ^ and $ anchors to match the beginning and end of each line within the text, rather than just the beginning and end of the entire text. 

Example: 

1. `^ (caret)` : matches the start of a string or a line (in multiline mode)
2. `$ (dollar)`: matches the end of a string or a line (in multiline mode)

Example:

```ssh
regex: ^abc

string: abcdef ---> match
string: defabc ---> don't match

with multiline mode enabled

string: abc\ndef ----> match
string: def\abc ----> match (as the string on the new line starts with abc)

```

Example 2:

```ssh
Regex: abc$

string: defabc    ---> match
string: abcdef    ---> don't match

with multiline mode enabled

string: abc\ndef    ----> match as line 1 ends with abc
string: def\nabc    ----> match as line 2 ends with abc
```