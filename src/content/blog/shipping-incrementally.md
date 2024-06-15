---
title: 'Shipping incrementally'
description: ''
pubDate: 'Jun 15 2024'
---

In a post-ZIRP industry where many engineers are being pressed to build and ship things faster, _faster_, **_faster_**, it's increasingly easy to fall into the trap of racing to execute on projects as fast as possible by completing as much as possible in one go. If you're used to this method of delivery, it requires conscious practice and effort to break out of. Fortunately, building the ability to ship incrementally is like training your core muscles – it takes work, but once you do, day-to-day tasks mysteriously get easier and a lot of those nagging pains that sometimes appear as you age disappear.

## Breaking down larger projects

Shipping a single small-scale feature incrementally is a no-brainer: they can often fit in a single pull request, depending on the size. But what about when you take on larger challenges that take weeks, months or even years? That all starts with a plan.

Setting a project up for being delivered incrementally often occurs before a single line of code intended for production gets written, by breaking it up into milestones that can be independently delivered. Making thoughtful decisions before your technical design is set in stone can transform a project that might otherwise have ended with three engineers merging a 100,000 line pull request on a Saturday into one that can be enabled with the simple flick of a switch given the right approach.

Note that this doesn't mean you can't write any code for prototyping or discovery; on the contrary, building something quick and scrappy to validate your assumptions and throw light onto your unknown unknowns can be a powerful tool, as long as you don't commit yourself (or get committed) to shipping your first pass.

### Identifying milestones

So what should a milestone look like? There is no One True Way to split up a project, how you can do it depends heavily on what you're trying to do. The milestones for net-new feature work are going to look different to those for replacing or extending a product-wide primitive and even more so than a migration to increase capacity. Over time as you work on more projects and gain more experience, you'll find patterns and reusable strategies start to emerge, such as:

- If you are building a user-facing project, a fairly obvious strategy is to slice your project vertically and delivering an end-to-end feature that can be used standalone. This is especially useful if you're using a tech stack or tools you may be unfamiliar with.

- If you are introducing a change to multiple product surfaces, like different websites or an application and a companion CLI, for example, focussing on building for one at a time might be more appropriate, but be careful not to get tunnel vision. Go into the details while considering the technical design to make sure you're not over-optimising it for one platform versus another.

- If you are migrating to a new data model or making database schema changes, splitting that process up into several steps that allow the old and new shapes of the data to co-exist while the project is underway can remove the need for a hard cut-over while supporting changes further up the stack that rely on them.

### Engineering techniques

While planning your milestones, it's also important to consider the different tools and techniques at your disposal that you can use during the execution phase, as this will unlock new ways of working.

#### Feature flagging

Getting code into production as you can as early as possible is one of the most reliable ways to de-risk deployment. When used appropriately, feature flags allow you to do this without disrupting users. Some feature flagging solutions will allow you to target different environments, so your teammates can try things out on staging. You may even be able to target individual users, meaning you can ship to alpha testers from your user base and get feedback as you build and ship.

#### Design patterns

Feature flagging works well for frontend-heavy projects and new features, but sometimes it won't be enough. What if you need to continue to support an existing feature or service while making major changes to underlying data model or dependencies that affect a large area of your application? 

One potential solution is to use a **facade**. It can provide indirect access to your existing system and you can also use it to point to your new code using a feature flag. This is a pattern often found in the world of OOP (object-oriented programming) and might sound dated, but the concept is generalisable. Perhaps, in your case a facade could be as simple as a file or function that routes the flow of code or data to the old or new solution, depending on a feature flag or other logic.

## The crux of the tradeoff

On paper (or... err, Google doc), you will likely find that the overall estimate for final project delivery gets longer when taking the approach I've outlined here. This is the crux of the tradeoff and something that can be a hard sell in some organisations, especially ones that aren't engineering-driven. The thing is, given the average level of ~in~accuracy when it comes to engineering estimates is [an industry wide meme](https://xkcd.com/1658/), placing so much weight on the absolutes doesn't really make sense.

Meanwhile, splitting work into shorter-term discretely shippable units brings:

- Less uncertainty regarding timelines while the project progresses.
- Tangible progress that can deliver value to your users sooner.
- More manageable review, ship and debug cycles, which produce a flywheel effect on productivity.
- A shortened and externalised long tail of bugs and feedback to address at the "end" of the project.

If by now if I haven't managed to convince you, maybe Lisa Karlin Curtis can. While writing this post, I discovered <a href="https://incident.io/blog/breaking-down-complex-projects">a similar treatise she penned on the incident.io engineering blog</a> with a more user-focussed lens. If it can work for early-stage teams and public companies, it can probably work for you too.