<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# How to set random button in harlowe

To set up a **random button in Harlowe** (Twine), you can use the `(either:)` macro to randomly select a passage or outcome each time the player clicks the button.

## **Basic Random Passage Button**

Here’s a simple way to make a button that sends the player to a random passage (e.g., "A", "B", or "C"):

```twine
(link: "Random!")[ (goto: (either: "A", "B", "C")) ]
```

- This creates a clickable "Random!" link.
- When clicked, it randomly chooses one of the listed passage names and jumps to it[^5][^6][^7][^9].


## **Step-by-Step Example**

1. **Create the target passages**
Make sure you have passages named "A", "B", and "C" (or whatever you want).
2. **Add the random link to your passage**
Paste this code in the passage where you want the random button:

```twine
(link: "Random!")[ (goto: (either: "A", "B", "C")) ]
```

3. **Customize the link text or destinations as needed**
You can change "Random!" to any text, and the passage names to any passages you want to randomize between.

## **How it Works**

- Every time the player clicks "Random!", Harlowe evaluates the `(either:)` macro and picks one of the destinations at random[^5][^6][^7][^9].
- This works for any number of passages.


## **Random Event (Instead of a Passage Jump)**

If you want to show random text or outcomes instead of jumping to a passage, you can use:

```twine
(link: "Random Event!")[ (either: "You find a coin.", "A bird sings.", "Nothing happens.") ]
```

- Clicking the link will show a random event from the list[^5][^8][^9].


## **Summary Table**

| Goal | Harlowe Code Example |
| :-- | :-- |
| Random passage jump | `(link: "Random!")[ (goto: (either: "A", "B", "C")) ]` |
| Random event text | `(link: "Random Event!")[ (either: "Text1", "Text2") ]` |

**In short:**
Use `(link: "Button Text")[ (goto: (either: "Passage1", "Passage2")) ]` for a random passage button in Harlowe. This is the most direct and reliable way to create random navigation or events in your Twine story[^5][^6][^7][^9].

<div style="text-align: center">⁂</div>

[^1]: http://twinery.org/questions/3314/harlowe-how-to-set-random-passages-to-one-link

[^2]: https://twinery.org/forum/discussion/5104/harlowe-random-events

[^3]: https://twine2.neocities.org

[^4]: http://twinery.org/questions/1275/needing-random-numbers-from-specific-range-set-to-variable

[^5]: https://gamingthepast.net/simulation-design/twine-interactive-fiction-tool/twine-harlowe-part-2/

[^6]: https://www.youtube.com/watch?v=V3Gf16Wdrq8

[^7]: https://www.youtube.com/watch?v=ETHnWurm4g4

[^8]: https://intfiction.org/t/are-random-events-within-random-events-possible-harlowe-3-1-0/44867

[^9]: https://www.youtube.com/watch?v=rOvZVu7-wt0

