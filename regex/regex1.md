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

# [Character Classes](https://app.procodrr.com/web/courses/66a9ea83ce7c80a6299d1804?chapter=66aa0a5af64b27b9d43cf03a)

Character Classes is a way of defining a set of characters to match a string. eg. [abc].

Ranges within the character classes : [a-z] or [0-9]

eg. -> test string:
 
```ssh 
Hello, world! This is a sample paragraph for testing character classes in regex.


It includes: uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and special characters.



Here's a mix of different character types:


- abcdefgHIJKLMNOpqrstuVWXYZ


- 1234567890


- !@#$%^&*()_+-={}[]|:"<>?,./


- Unicode characters: 😀, 😎, 😍, 😲, 🙏



Use this text to practice regex patterns and character classes. 


Have fun with your regex learning journey!

```

Regex `[abc]`, it matches all `a`, `b`, and `c` in all of the test string

If we did `abc`, then it matches `abc` in test string.

Keep the global flag on here.

### To match all vowels, use `[aeiou]` and turn on global, multi line and case insensitive string

### `[a-z]` -> Match all lowercase characters.

### `[A-Z]` -> Match all uppercase characters.

### `[0-9]` -> Match all digits.

Now we are not allowed to write like this:

`[z-a]` ❌

`[9-0]` ❌ 

Always keep larger digits or letters on RHS and smaller digits or letters on LHS.

This follows the ASCII table for numbering.

So `[Z-a]` is valid. as `Z` is 90 and `a` is 97. So we match all chars with ASCII numbers from 90 to 97.

`[0-9_x]` -> Match all digits and `_` and `x`

- `[\u{1F600}-\u{1F64F}]/gu` -> Match all emojis (see we have turned on the global and unicode flag).

We can also combine multiple ranges in a character class, for eg: `[a-zA-Z0-9]` -> Match all lowercase and uppercase letters and digits.

Negated Character Classes (eg. `[^abc]`) -> Match all characters except abc.

`/[bcdfghjklmnpqrstvwxyz]/gim` -> Regex to select all consonants. Flags used, global, case insensitive, multi-line.

---

# [Quantifiers](https://app.procodrr.com/web/courses/66a9ea83ce7c80a6299d1804?chapter=66aa0a7d9c633941eb38941b)

A regex which matches string should match that string in how much quantity, this is determined by quantifiers.

Till now regex was matching single characters without any grouping. With quantifiers, we can tell the regex how many characters to match at a single time. Basically we can introduce grouping in regex.

eg. 

```
Hello, world! This is a sample paragraph for testing character classes in regex.


It includes: uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and special characters.



Here's a mix of different character types:


- abcdefgHIJKLMNOpqrstuVWXYZ


- 1234567890


- !@#$%^&*()_+-={}[]|:"<>?,./


- Unicode characters: 😀, 😎, 😍, 😲, 🙏



Use this text to practice regex patterns and character classes. 


Have fun with your regex learning journey!


```

Regex: `/[a-z]{3}/` -> Match 3 lowercase characters by grouping them together. 

`/[a-z]{3,5}/` -> Match 3 to 5 lowercase characters by grouping them together. 

`/[a-z]{3,}/` -> Match 3 or more lowercase characters by grouping them together. 

`/[a-z]*` -> Match 0 or more lowercase characters by grouping them together. (not that good method as it can return empty matches and return infinite matches, so we use it not alone but with something eg. `/ab[0-9]*/-g`, so we can select 0 digits after ab or more after ab)

`/[a-z]+` -> Match 1 or more lowercase characters by grouping them together. (eg. `/ab[0-9]+/-g`, so we can select 1 digits after ab or more after ab)

`/[a-z]?` -> Match 0 or 1 lowercase characters by grouping them together. (eg. `/ab[0-9]+/-g`, so we can select 1 digits after ab or 1 digit after ab)

Regex to select all html classes at once, `/class="[^"]+"/`. It means , initially select `class="` then in the flow, ignore `^` any `"` in between while matching. Then add any thing 1 or more `+` and finally end it in `"`.

- `https?:\/\/[^\s]+` -> Matches all links be it starting from http or https.

```
- https? → Matches http or https
- :\/\/ → Matches ://
- [^\s]+ → Matches everything after :// until the next whitespace (\s)
```

---

# [Anchors](https://app.procodrr.com/web/courses/66a9ea83ce7c80a6299d1804?chapter=66aa0afa9c633941eb38a3c3)

Anchors work at the start and end of the string, basically they check if a particular value is present at the starting or the ending of the string or not.

We have 2 types of anchors:

### 1.  `^` asserts the position at the start of the string.

Inside the square bracket, `^` means not or negation, but when using without brackets, it becomes an anchor.

eg.  
```

test string:

the quick brown fox jumps over the lazy dog, a sentence containing every letter of the alphabet. This phrase is often used for typing practice, testing fonts, and other applications. Meanwhile, the sun set slowly over the horizon, casting a golden glow across the landscape. Birds chirped in the distance, their melodies blending with the rustling of leaves in the gentle breeze. Life is full of unexpected moments, some joyful, others challenging, but each one contributes to the tapestry of our existence. Technology continues to evolve at a rapid pace, transforming the way we live, work, and communicate. From artificial intelligence to renewable energy, innovation drives progress and shapes the future. Yet, amidst the chaos of modern life, it's important to pause, reflect, and appreciate the simple things—a warm cup of coffee, a good book, or a conversation with a loved one. The universe is vast and mysterious, filled with countless stars, galaxies, and possibilities. As we navigate our journey, let us strive to be kind, curious, and resilient. After all, every day is a new opportunity to learn, grow, and make a difference.

If we use [^a-z] then it will select all characters except lowercase letters.

If we use ^[a-z] then it will try to see if the string begins with lowercase letters or not. If yes then it will highlight the first lowercase letter. If not it will not highlight anything.

```


- `$` asserts the position at the end of the string.

eg.  
```

test string:

The quick brown fox jumps over the lazy dog, a sentence containing every letter of the alphabet. This phrase is often used for typing practice, testing fonts, and other applications. Meanwhile, the sun set slowly over the horizon, casting a golden glow across the landscape. Birds chirped in the distance, their melodies blending with the rustling of leaves in the gentle breeze. Life is full of unexpected moments, some joyful, others challenging, but each one contributes to the tapestry of our existence. Technology continues to evolve at a rapid pace, transforming the way we live, work, and communicate. From artificial intelligence to renewable energy, innovation drives progress and shapes the future. Yet, amidst the chaos of modern life, it's important to pause, reflect, and appreciate the simple things—a warm cup of coffee, a good book, or a conversation with a loved one. The universe is vast and mysterious, filled with countless stars, galaxies, and possibilities. As we navigate our journey, let us strive to be kind, curious, and resilient. After all, every day is a new opportunity to learn, grow, and make a difference

If we do `e$` then it will highlight "e", which is the last ending character of the string. 

```


### - `m` (multi-line flag) (not an anchor): Changes the behavior of `^` and `$` anchors to match the beginning and end of each line within the text, rather than just the beginning and end of the entire text.

### Q. Given is a test string of names, write a regex that matches all names that end with `Singh`.

```ssh
Manish Singh
Surjeet Singh
Daler Mahendi
Mikka Singh Lodi
```

ans, `.+Singh$` 

`.` will select everything

`+Singh` means select everything that has `Singh` in it

`+Singh$` means select everything that has `Singh` in it at the end of the string


`.+Singh.+` -> It will select those names that have singh anywhere in them except start and end.

`.*Singh.*` -> It will select those names that have singh anywhere in them (including start and end).

`*` means select at least 0 or more chars
`+` means select at least one or more chars.

### Q. Write a regex that selects only those names which start from Mr.

Switch on multi line and global flag

```
test string

Mr. Manish Singh
Surjeet Singh
Daler Mahendi
Mr. Mikka Singh Lodi
Singh Saab
Mr keshav
Kanishk Mr
```

ans -> `^Mr\..*`

---

# [Predefined Character Classes](https://app.procodrr.com/web/courses/66a9ea83ce7c80a6299d1804?chapter=66aa0b18570cfc8c1f663e6b)

Also called `Shorthand Character Classes`

Let us see some types:

- `\d` matches any digit (equivalent to [0-9]).
- `\D` matches any non-digit.
- `\w` matches any word character (equivalent to [A-Za-z0-9_]).
- `\W` matches any non-word character.
- `\s` matches any whitespace character (spaces, tabs, line breaks (new-lines)).
- `\S` matches any non-whitespace character.

test string
```
Astonishingly, technology advances at a pace that astounds the imagination—each innovation unlocking new potential. Today, devices operating at 2.0 GHz and networks reaching speeds of 1Gbps show that the digital age is here to stay! Special symbols like @, #, and $ often accompany this technological evolution.

Bold ideas lead to breakthrough projects where versions are labeled 3.1-beta and releases occur on schedules like 24/7. Companies invest millions in research & development, emphasizing that a blend of numbers (e.g., 404 errors) and symbols (*, %, &) creates a language of modern innovation.

Curiosity fuels continuous progress, inspiring experts to explore beyond boundaries. In this world, milestones are celebrated with 100% commitment and unique identifiers like 2025-04-01, proving that a mix of special characters and numerical values makes every update extraordinary!
```

run it in regex 101

### Q. Write a regex that matches all the indian mobile numbers in the given string. An indian mobile number starts with `+91` followed by 10 digits.

```ssh
+91 6267082223
+19 1234567894
+91 8660481182
+214 235465566
+91 86604811825565656
+91 454
+91 9407989360
```

an -> `\+91.\d{10}$`

---

# [Groups, Capturing, and Alternations](https://app.procodrr.com/web/courses/66a9ea83ce7c80a6299d1804?chapter=66aa0b4201a71f6a08d30293)

## Alternations in Regex

Alternations in regex act like OR operator in regex.

Using the vertical bar `|` to specify alternatives

eg Test String

```
I am a cat
I am a dog
I am a parrot

```

`dog | cat` -> It will select those words that have `dog` or `cat` in them.

`.*dog|.*cat` -> It will select those lines that have `dog` or `cat` in them.

Now if we write `I am a cat|dog` , then it will select line 1 fully and only dog in line 2.

This is because `|` considers LHS of `|` as case 1 and RHS of `|` as case 2. So to make both lines select we need to group them.

## Grouping

`I am a (cat|dog)` -> It will select those lines that have `cat` or `dog` in them fully now.

### Q. Given is a test string, we need to write a regex that selects valid dates, eg. (dd/mm/yyyy) or (dd-mm-yyyy).

test string
```ssh
20-12-2024
12/12/2022
14-05/2022
171-2-12
```

Regex: `/\d{2}\/\d{2}\/\d{4}|\d{2}-\d{2}-\d{4}/gm`

Now this method is too long, to shorten this, we can use `group capturing`

eg. `/\d{2}(\/|-)\d{2}\1\d{4}/gm`

here notice we did `(\/|-)` and `\1`

Let us look at the test string now

test string
```ssh
20-12-2024
12/12/2022
14-05/2022
171-2-12
```

So by using this method, we have matched first say (`-`) now this is captured as a group 1, regex will now only match (`-`) again using `\1`.

If say we match (`/`) first, then regex will make this group 1 as well and match (`/`) only again using `\1`.

This will eliminate the possibility of matching 

12-12/2024 or

12/12-2024

- Grouping with parentheses `()`.
- Capturing groups and backreferences `(\1\2)`

eg. test string `hihello`

if we write the regex `(hi)(hello)`, then we will match all of `hihello` and we will create 2 capturing groups i.e. `group 1 : hi` and `group 2: hello`

- Non-capturing groups `(?:...)`.

Using the same `hihello` eg. if we want only 1 capturing group i.e. `hi` and `hello` should be a non capturing group, then we write it as: `(hi)(?:hello)`

- Named capture groups `(?<name>... )`
- Backreferences using names of named capture groups. `\k<name>`

We cannot name the non capturing groups.

`hihellohihello` -> Test string

We can reference it via:

## Way 1

`/(hi)(hello)\1\2/gm`

Here 2 groups are created, 

group 1: hi

group 2: hello

we are referencing hi again via `\1` and hello again via `\2`

 match here will be: hihellohihello

## Way 2
`/(?<ksd>hi)(hello)\k<ksd>/gm` -> Here we gave the group 1 a name i.e. ksd. So,

group ksd: hi

group 2: hello

 and we are referencing group ksd again using `\k<ksd>`

 match here will be: hihellohi

Do not create unnecessary groups as creating groups uses memory. 

---

# [Word Boundary](https://app.procodrr.com/web/courses/66a9ea83ce7c80a6299d1804?chapter=66addf248becdad5c6e45647)

- Word boundaries `\b`
- Non-word boundaries `\B`

Word characters: `[A-Za-z0-9_]`

### Q. Given is a test string, try to match only the words `cat or cats` and not anything else i.e. words that begin or end with cat or cats.

```ssh
The cataclysmic event caused a significant catastrophy for all the cat and cats.
```

Ans -> `/cat\b|cats\b/gm`

We used word boundary `\b` with cat and cats and used a `|` for alteration.

If we use `\b` before cat like `\bcat` then `\b` will check if these is a word character present before cat or not. If yes then it will not match, if no then it will match.

Similarly, ff we use `\b` after cat like `cat\b` then `\b` will check if these is a word character present after cat or not. If yes then it will not match, if no then it will match.

Word characters: `[A-Za-z0-9_]`

`\B` works just opposite of `\b` i.e. it checks if these is a word character present before or after cat or not. If there is not, then it will `not` match, if there is, then it will match.

### Question 
```
Write a regex to capture whole words starting with "un" in the string.

"The unicorn is unique and unusual."

// Expected Output //

Matches: "unicorn", "unique", "unusual"
```
ans -> `\bun\w*`

```
Explanation:
\b → Ensures the match starts at a word boundary, so it doesn't match parts of other words.
un → Matches the "un" prefix.
\w* → Matches the rest of the word (letters, digits, or underscores).
```

### Question 

```
Write a regex to match a word only when it ends with "tion".

"This is a celebration of the nations foundation."

// Expected Output //

Matches: "celebration", "foundation" (but not "nation")

ans -> \w*tion\b
```

### Question

```
Write a regex to match the sequence "@" only when it is part of an email address in the string.

"Contact us @ info@example.com or support@domain.org."

// Expected Output //

Matches "@" in both "info@example.com" and "support@domain.org" but on individual @
```

ans ->

```
\b\w+@\w+\.\w+\b

Explanation:
\b → Ensures the match starts at a word boundary.
\w+ → Matches the username part of the email (letters, numbers, underscores).
@ → Matches the "@" symbol.
\w+ → Matches the domain name part.
\. → Matches the dot before the TLD.
\w+ → Matches the TLD (like .com, .org).
\b → Ensures the match ends at a word boundary.
```

---

# [Lookarounds: Lookahead and Lookbehind](https://app.procodrr.com/web/courses/66a9ea83ce7c80a6299d1804?chapter=66addf9a821a8fba5be32793)

- Positive lookahead `pattern1(?=pattern2)`
- Negative lookahead `pattern1(?!pattern2)`
- Positive lookbehind `(?<=pattern1)pattern2`
- Negative lookbehind `(?<!pattern1)pattern2`