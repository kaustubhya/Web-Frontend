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