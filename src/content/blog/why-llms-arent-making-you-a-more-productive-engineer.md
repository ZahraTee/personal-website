---
title: "Why LLMs aren't making you a more productive software engineer"
description: "It's time for a little introspection, my friend"
pubDate: "Sept 1 2025"
draft: true
---

I ignored LLMs for a relatively long time. As an engineer with about a decade of JavaScript experience, aggressively (but selectively) ignoring bleeding-edge developments has been key to the longevity of my attention span. In 2024, though, I suddenly found myself in a job market stuffed to the brim with LLM-focussed seed stage startups. I joined one, and so began my journey into the frenzied frontier of discourse around the use of AI for software engineering.

It's a confusing time, to say the least. The technology has now been in place for years and scrutiny of the wild claims of unbridled productivity is starting to set in.

- Studies tell us that [developers are routinely over-estimating the productivity gain](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) that they associate with their own LLM usage.

- The stock market has recently reacted to the news that [95% of Generative AI pilots are not achieving any measurable impact in the enterprise](https://virtualizationreview.com/articles/2025/08/19/mit-report-finds-most-ai-business-investments-fail-reveals-genai-divide.aspx).

- Most relevant to me, and perhaps you, given you're reading this, is [the chatter amongst tech workers](https://x.com/staysaasy/status/1941317406158377225) as to why many companies and individuals who have whole-heartedly and full-throatedly adopted LLMs don't seem to be shipping markedly faster than ever before.

And yet, the industry is filled with seasoned engineers who are adamant they have tapped into new levels of productivity. I'm one of them. So, what gives?

Let's look at a few anti-patterns that I've observed that might be holding you back.

## You're not as fast without it as you could be

Okay, let's get the most controversial one out of the way first. Some engineers are faster than others. Some argue this is a trait you can't change, others claim that this is a muscle you can train. This is a whole topic and of itself, but to be clear: I personally think this can be learned.

That said, if you are not fast at shipping without AI, chances are that this is not bounded by the speed at which you can write code. If that's true, this will still be the case even if you have an army of LLMs at your command. There are some changes that you should be confident you can tackle faster yourself than by instructing an LLM to do it.

For example, if you see a report in Linear or Jira or whatever you use about trivially addressable bug or typo, it should not feel like you have avoided a huge burden and sped things up dramatically by setting a background agent on it. If it does and you are still writing code day-to-day, you probably want to work on strengthening your foundation first by adopting practices and tools without involving AI, and start developing a better intuition for what it is reasonable for you to do more quickly with AI than without.

## Your output is capped by your throughput

Anecdotally, a blindingly obvious but common source of inefficiency when shipping at tech companies is how it takes to go from first draft to merged pull request. Lots of people need to be repeatedly asked before they will review pull requests. If you are one of them, I'm going to be deeply confused if I hear statements along the following lines leave your mouth:

- "Have you tried Conductor? It lets you operate multiple Claude Code instances at once. Isn't that neat? I've got five on the go right now."

- "Have you tried Devin? It can just crunch on tasks in the background and give you a pull request! Let's set it on the backlog."

If you are already doing a poor job getting work-in-progress finished and merged, filling up your review queue with output from non-sentient beings that will sit idly by while those reams of code languish and rot is unlikely to do you any favours. In fact, you'll probably just fill up your own context window and degrade your own performance.

## You're trying to delegate understanding

It can be _very, very tempting_ when an LLM or agent manages to spit out a working heap of code to just feel relieved and move on with your life. This is doubly so if this was the culmination of a protracted back and forth. This can actually work if you're generating a fairly self-contained piece of code (especially with tests) or some scripts or the like. But if this code is something you expect to work with in the future? You need to build your mental model of it, or you are going to find yourself hitting a wall in your productivity very quickly.

To tackle this, review the code like you would a human's. If it's too verbose or overcomplicated, don't brush that off just because it was relatively quick to generate. A human will probably have to read it, as things stand. If you don't know what the code does, ask the LLM questions. Either you'll find it's done something stupid, or you'll learn something.

## You don't reflect on what's working and what isn't

New tools and developments are flying out of the gates on a daily basis. A new model, a new agent, a new add-on to make your preferred agent even better; you don't actually have to try them all. It's OK not to use the latest and greatest all the time – switching costs are real.

That said, if you haven't found a form factor that works for you, give something else a try. Just because Tech Twitter is suddenly enamoured with TUIs doesn't mean you have to ignore your own feelings and decided you are too. When you do find a form factor that works for you, stick with it and double down on what works. If you notice there are some unwanted behaviours you see repeatedly, try adjusting your rules files or prompting technique for a bit and pay attention to the perceived outcome.


## You can make it work for you

Used thoughtfully, LLMs can make a serious and noticeable impact in terms of what you're able to deliver as a software engineer. That said, it's easy to fall prey to your own laziness and start treating them like a slot machine, or to be led astray by the narrative of the 1 billion dollar startup and expect too much too soon.

It's key to be real with yourself: critically evaluate the reality of the tools as they behave today and wield them with purpose. Take note of what tasks they've served you well on and consider how they can bolster practices that make you more effective. Expect more writing on that to come!
