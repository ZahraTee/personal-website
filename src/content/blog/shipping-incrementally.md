---
title: "Shipping incrementally"
description: "On software engineering's equivalent of maintaining a sufficient fibre intake."
pubDate: "Jun 15 2024"
---

In a post-ZIRP (zero interest-rate policy) tech industry where many engineers are being pressed to build and ship things faster, _faster_, **_fasteeeer_**, it's increasingly easy to end up careering towards a project's end with your sights set solely on the grand finale (or "the deadline"), when all your efforts will go out to your users. This is a trap: the allure of setting to work ASAP and making early progress on development covers up the eventualities of the frantic rush, extended deadlines and a risky release.

If you're used to this way of working, it requires conscious practice and effort to break out of. The alternative is to ship incrementally. Fortunately, building the ability to do this is like training your core muscles – it takes work, but once you do, day-to-day tasks mysteriously get easier and a lot of those nagging pains that sometimes come with age disappear.

## Breaking down larger projects

Shipping a single small-scale feature is straightforward: those can often fit in a single commit or pull request, depending on the size. But what about when you take on larger challenges that take weeks, months or even years? That all starts with a plan.

Setting a project up for being delivered incrementally often occurs before a single line of code intended for production gets written, by analysing your project's goals and splitting them up into independently deliverable **milestones**. Making thoughtful decisions before your technical design is set in stone can transform a project that might otherwise have ended with three engineers merging a 100,000 line pull request on a Saturday into one that can be enabled with the simple flick of a switch given the right approach.

Note that this doesn't mean you can't write any code for prototyping or discovery; on the contrary, building something quick and scrappy to validate your assumptions and throw light onto your unknown unknowns can be a powerful tool, as long as you don't commit yourself, or get committed to shipping your first pass. You can read more about one way to go about this in <a href="https://jmduke.com/posts/microblog/zero-draft/" target="_blank">this post on zero drafts</a> by <a href="https://x.com/jmduke" target="_blank">Justin Duke</a>.

### Identifying milestones

So what should a milestone look like? There is no One True Way to split up a project, how you do it will depend heavily on what you're trying to achieve. Milestones for net-new feature work will likely look very different to those for replacing or extending a product-wide primitive and even more so that those that involve a migration to change data models fundamental to your application. Over time as you work on more projects and gain more experience, you'll find patterns and reusable strategies start to emerge, such as:

- If you are building a user-facing project, a fairly obvious strategy is to slice your project vertically and delivering an end-to-end feature that can be used standalone, so you can start getting feedback from some users as soon as possible. This is especially useful if you're using a tech stack or tools you may be unfamiliar with.

- If you are introducing a change to multiple product surfaces, like different websites or an application and a companion CLI, for example, focussing on building for one at a time might be more appropriate, but be careful not to get tunnel vision. Go into the details while considering the technical design to make sure you're not over-optimising it for one platform versus another.

- If you are migrating to a new data model or making database schema changes, splitting that process up into several steps that allow the old and new shapes of the data to co-exist while the project is underway can remove the need for a hard cut-over while supporting changes further up the stack that rely on them.

Here are some suggestions for what a useful milestone might look like in your team:

- It should be well demarcated with a clear definition of when it is complete. Dependencies between one milestone and a previous one are fine, but if the project needs to be unavoidably paused for a month or two between one milestone finishing and the next starting, it shouldn't leave your system in an unmanageable state.
- You should feel comfortable giving a rough estimate of how much effort or time it will take to tackle it. If not, you probably need to do a time-boxed exploration into it first.
- It should not be too fine-grained, these are not supposed to be JIRA ticket-level tasks. There should be some sort of meaningful functionality or situation change involved.

A lot of companies have processes around writing design documentation and tech specs. If yours doesn't, consider writing out your milestones and sharing them with your team for feedback.

### Engineering techniques

While planning milestones, it's also important to consider the different tools and techniques at your disposal that you can use during the execution phase, as this will unlock new ways of working.

Getting code into production as early as possible is one of the most reliable ways to de-risk deployment. **Feature flags** are a popular tool since they allow you to do this without disrupting your users before your changes are ready for prime-time. Some feature flagging solutions will allow you to target different environments, so your teammates can try things out on staging. You may even be able to target individual users, meaning you can ship to alpha testers from your user base and get feedback as you build and ship.

Decoupling deployment from release with feature flags also means you can ship smaller units of code at a time which makes for easier and more effective code reviews (that will probably be completed quicker too), as well as making it easier to rollback and debug changes that aren't behaving as expected one rolled out.

While feature flagging works well for frontend-heavy projects and new features, sometimes it won't be enough. What if you need to continue to support an existing feature or service while making major changes to critical pieces of code or dependencies that affect a large area of your application?

One potential solution is to use a **facade**. It can provide indirect access to your existing system and you can also use it to point to your new code using a feature flag. This is a pattern often found in the world of OOP (object-oriented programming) and might sound dated, but the concept is generalisable. Perhaps in your case a facade could be as simple as a file or function that routes the flow of code or data to the old or new solution, depending on a feature flag or other logic.

When it comes to significantly reshaping your data models, there's a fair chance that you're going to want to make some changes to your database at some stage. Here's a handy tip that <a href="https://x.com/JackEllis" target="_blank">Jack Ellis</a> got from <a href="https://carlsverre.com/" target="_blank">Carl Sverre</a> that can be used to support incremental development in these cases:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Well, TIL.<br><br>Me: &quot;Everyone tells me to use feature flags in production but you can&#39;t exactly use them when you need to restructure a 30+ billion row table to make the feature work&quot;<br><br>Carl: &quot;Use database views for now and deal with the migration once the feature is ready to launch&quot;</p>&mdash; Jack Ellis (@JackEllis) <a href="https://twitter.com/JackEllis/status/1796666966322909292?ref_src=twsrc%5Etfw">May 31, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

If you're not familiar with database views, they are queries that act like virtual tables. You write an initial query to create the view based on your static, existing tables, and then your database stores that query and you can query the resulting view as if it's a real table. You can use this to provide indirection that acts like, yes, a facade! They also have other uses - you can more easily test out a potential change you'd like to make to your existing tables for a new feature without making a big commitment of migrating the tables the rest of your application.

## The tradeoff (or is it?)

On paper (or Google doc), you will likely find that the overall estimate for final project delivery gets longer when taking the approach I've outlined here, as opposed to the one you might have given without taking this approach. While this headline of needing more time will be a hard sell in some organisations, especially ones that aren't engineering-driven, the reality is that you may end up completing the project faster. That may seem counter-intuitive given the overheads: the additional planning and extra engineering effort required to support this working. In practice, though, continually integrating the code into production increases momentum and getting feedback earlier pulls forward a lot of the fixes that otherwise would've been left until the end of the project or after it shipped, as well as avoiding a need for any project-level reverts.

Additionally, given the average level of ~in~accuracy when it comes to engineering estimates is <a href="https://xkcd.com/1658/" target="_blank">an industry wide meme</a>, placing so much weight on the absolutes doesn't really make sense. That doesn't mean we should abandon hope of ever doing a passable job of estimating software projects! In fact, splitting up the work actually makes giving an accurate initial estimate easier, and it is also easier to recalibrate if need be as the project progresses as <a href="https://jacobian.org/">Jacob Kaplan-Moss</a> notes in <a href="https://jacobian.org/2021/may/20/estimation/" target="_blank">this post</a> from his series on software estimation.

## Rounding up

So, splitting work into shorter-term discretely shippable units brings:

- More accuracy and less uncertainty regarding timelines while the project progresses.
- Tangible progress that can deliver value to your users sooner.
- More manageable review, ship and debug cycles, which produce a flywheel effect on productivity.
- Less of a scramble to fix bugs and address important feedback at the "end" of the project, holding up the release.

If by now I haven't managed to convince you, maybe <a href="https://twitter.com/LisaKC_" target="_blank">Lisa Karlin Curtis</a> can. While writing this post, I discovered <a href="https://incident.io/blog/breaking-down-complex-projects" target="_blank">a treatise she penned on the incident.io engineering blog</a> with a more startup and product-focussed lens. If it can work for early-stage teams and public companies, it can probably work for you too.
