---
title: "A taxonomy of technical interviews"
description: "Anecdata and observed details of engineering-focusses interview formats from two dozen companies' processes."
pubDate: "Jul 29 2024"
---

Software engineering interviews don’t exactly have the best reputation, often with good reason. But, sometimes they can actually be… _fun_? What is it that determines whether they’re going to leave you energised rather than withdrawing from the job market completely? To draw my own conclusions on this, I’ve trawled through my past experiences. As well as having interviewed candidates, I've undergone technical interviews as a candidate at roughly two dozen companies so far, some pretty well known.

In 2024, FAANG-style interviews continue to dominate discourse, which might give the impression that most interview processes are carbon copies of each other. However, it's been heartening to see more diverse technical interview formats emerge in recent years, even among widely renowned companies. Personally, I've found formats are usually the greatest determinant of how enjoyable an interview process is, so here’s an opinionated overview of the ones I’ve been through as a frontend-leaning full stack engineer.

If you're an experienced interviewer who’s seen it all, you might want to [jump to my closing thoughts](#closing-thoughts), otherwise: buckle in!

Technical interview formats largely split into three groups:

1. [Coding](#coding-interviews)
1. [System design](#system-design)
1. [Miscellaneous](#miscellaneous)

## Coding interviews

The bread and butter of the software engineering interview process. As many software engineers progress to senior levels, they spend less time overall writing code, and this is often reflected in interview processes at that level. However, even then, some form of hands-on coding continues to feature at least once or twice.

### Algorithmic interviews

These questions largely focus on data structures, line-level optimisation and the like. They might be plainly presented with no particular context that would tie the problem to a real-life scenario with the interviewer asking you to transcribe on a whiteboard, or you might be asked to write a script that can recursively traverse directories and list or gather stats about them for example.

It's easy to bemoan the irrelevance of these, especially when they aren't disguised at least in part to look like something you might come across at work, but there is a reason why they are so enduring.

[Giuseppe Gurgone](https://giuseppegurgone.com/) shared his take on these types of interviews on [his blog](https://giuseppegurgone.com/leetcode-interviews):

“Their aim isn't to throw unusual and complex algorithms at candidates just for the sake of it; instead, it's to evaluate problem-solving skills using a focused and sufficiently generic problem.”

Similarly, both while undergoing interviewer training and as a candidate myself, I have often heard interviewers stress the focus is not on whether the candidate finds the answer or how long they take to do it, _it’s on their approach_. In my experience, this often gets lost because these interviews are easy to deliver and assess on some level, it’s not actually that easy to do these things well. The "objective" success or failure to solve the problem in time is very distracting, especially when these interviews run at scale and they’re being delivered by people with numerous other competing priorities, so this is a trap to be wary of.

### Practical interviews

There's a huge amount of variety in this category but what all these interviews share is that they involve writing code and _building something_ beyond an isolated class or function. These interviews also tend to be open book, meaning you have access to the internet, API references and Stack Overflow. This access might even extend to ChatGPT or Claude depending on the company.

There's a number of different dimensions these can cut across:

#### Live vs take home

Often both kinds will feature in a single interview process, with the take home happening prior to the live (or "in-person") interview.

In my experience, the amount of time provided as an estimate for a take-home task is almost always underestimated by the hiring team, sometimes wildly. In reality, the upper bound of time available for these is a function of how busy the candidate is outside of work, which puts some demographics at a significant disadvantage. While live interviews can give a lot of people performance anxiety, they can be preferable for people who are pressed for time or more senior candidates who simply aren’t particularly enthused by the idea of building yet another CRUD app.

There are tradeoffs and it's hard to come up with a single interview that is going to work for every candidate's strengths and circumstances. The combination of a take home task followed by an in-person follow-up is something I’m seeing more and more frequently, and it avoids a lot of pitfalls. That said, as an interviewing team, it’s important to ensure that the time set for the take home task is both reasonable (read: not 8-10 unpaid hours) and realistic by validating it in-house before giving it to candidates.

#### Length of time

On one end of the spectrum, shorter 30-60 minute interviews have focussed on adding a feature or two to an existing codebase, often that produced in the take-home task. On the other hand, I've spent a whole day onsite with a company, building out a web application. A number of companies, [like Linear](https://linear.app/blog/why-and-how-we-do-work-trials-at-linear), also conduct work trials, where a candidate works with the company for several days. There are tradeoffs with most durations: on the shorter end, a candidate doesn’t have much time to gain momentum, and with the days-long interview processes, these are pretty much logistically impossible for a lot of people.

#### Starting from scratch vs bootstrapped

Take-home tasks in particular often give you a bit of leeway in terms of your tech stack. On the other hand, in-person, or supervised interviews will often provide a starter project you are expected to work with.

One potential gotcha is that working in a codebase that features technologies you’re familiar with is very different to picking up a new set of technologies for the first time, _especially_ if there is not a sufficient corpus of existing code to work with as there would be in a real production codebase. This is easier to deal with in a take-home project due to there being less pressure to get everything working within a certain amount of time, but doing this live on top of being watched by strangers can be incredibly stressful.

Interviewers might genuinely believe that when it comes down to it they will not penalise candidates who are not familiar with the tools at hand if they struggle to be as productive while gaining familiarity, but again, it's an easy trap to fall into and it’s frustrating to be on the receiving end of that. One way to level the playing field here, then, is to bootstrap starter projects with standard technology choices. While when they get into the role, engineers will have access to more specialised (or opinionated) tooling and libraries carefully selected to enhance productivity, having a good grasp of the underpinnings is still important and it reduces the chance that one candidate is going to be significantly hampered by a lack of experience with your tech choices compared to another.

#### Pair programming vs solo

When it comes to live interviews, there is a spectrum here. The most socially acceptable minimum when it comes to communication is for the interviewer to be responsive to questions and perhaps give you a well-timed hint if you are struggling or heading down the wrong path. (Sadly, that minimum is often not met: interviewers loudly having unrelated conversations or yawning doesn’t exactly make for a stellar candidate experience.)

On the other end, you could be repeatedly swapping pair programming roles (driver and passenger) with the interviewer, so your engineering is mostly done through discussion. While pair programming draws a range of opinions as a mandated practice, in an interview context, being able to get input from another person, especially in an unfamiliar codebase or tech stack will be more reflective of the reality of a lot of engineering teams and less pressurised.

In a more extreme version of a pair programming interview (this particular one being algorithmic), I was presented with a task and the role of driver rotated between me and two interviewers every five minutes. While I question the amount of valuable signal the interviewers could get out of this compared to me simply coding the solution myself, it was actually more fun than it sounds. I ended up pair-programming maybe twice in two years in that job.

## System design

While there is an infamous format that probably comes to mind, as an industry we are now running several very different types of interviews and calling them all "systems design", at least for frontend/fullstack engineers. This can sometimes make it difficult to know what to expect.

### Backend system design

This is the archetypal FAANG-style interview: the one that you probably think of when you hear "system design interview". You, as a lone engineer with no access to the internet or other resources, will be tasked with designing Facebook/Youtube/TikTok or the like.

While I do think having a decent foundation of systems design knowledge is a great bonus for engineers working on product, it's not _the absolute necessity_ it's made out to be in many interview processes. [Designing Data Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) becomes a much more interesting read once you have at least a passing familiarity with the sorts of systems it talks about, and you are not necessarily guaranteed to be exposed to them given some number of years working on software.

### Frontend system design

These interviews are similar in nature to backend interviews, in terms of taking a higher-level look at building a system. Instead of focussing on handling traffic at scale, they focus on holistic knowledge of the frontend, covering topics such as:

- Data fetching
- Optimisation and performance
- Security
- Accessibility

An example would be to design a dashboard page that can display any number (potentially hundreds) of charts, that is configured by the user.

These interviews are gaining traction but are still quite rare relative to backend system design interviews. If you do happen to have one coming up, I would suggest taking a look at [Medhat Dawoud’s](https://medhat.dev/blog/cracking-frontend-system-design-interview/) guide.

### Data modelling

This can take different forms: component modelling on the frontend, API design or database design. It's basically a smaller slice of a frontend or backend system interview thrown into sharper focus. These sorts of interviews tend to be strongly related to skills you'll often exercise as part of technical design processes when leading projects.

[Andy Ingram](https://andrewingram.net/) has written [an in-depth post](https://andrewingram.net/posts/deriving-a-data-model-from-a-design-with-graphql) on conducting an interview like this focussing on designing a GraphQL API over on his blog.

## Miscellaneous

Despite the unduly non-descript label, I think these kinds of interviews are underrated and underutilised. Professional software engineering is usually a team sport and you're often tasked with extending and maintaining existing code in collaboration with other people and interview formats that focus less on individual code authoring explore those skills more effectively.

### Reading code

In one interview of this type, I was given snippets of code in various languages I wasn't necessarily familiar with and asked to explain what I thought they did and why. This format gives a sense of how somebody reacts to unfamiliar code and languages while eliminating the added pressure of having to work through the technical difficulties that often come along with getting started with a new technology on a given machine for the first time.

### Pull request reviews

In this interview variant, you will be given a decently-sized chunk of code, perhaps about 250 lines or so, and will have a limited amount of time to provide feedback. These interviews test your ability not only to read and understand code, but also your communication skills, attention to detail and perhaps, your level of pedantry. In many teams, especially in larger companies, you will be doing a lot of code reviews and even if you work with a world class team, there’s still a lot of strategic advantages to doing it well. Sarah Vessels recently [wrote in detail about this](https://github.blog/developer-skills/github/how-to-review-code-effectively-a-github-staff-engineers-philosophy/#how-to-get-the-most-out-of-code-reviews) on the GitHub engineering blog.

### Presentation

My first graduate interview (which was for developer relations, rather than engineering) involved giving a presentation on a technical topic of my choosing: ThreeJS. Independently of that, I promptly realised developer relations is not for me and that was the last presentation I gave as part of an interview. However, I recently sat in as an interviewer on one of these being conducted with a staff-level candidate for frontend infrastructure engineering.

These interviews are fairly uncommon for software engineers, but they can definitely be useful for those operating above senior-level for certain roles. A big part of engineering at higher levels at many companies can involve influencing, advising and strategising, even as an individual contributor, so testing for this skill makes sense.

### Language and ecosystem discussion

These types of interviews vary based on a candidate’s experience level but tend to dive into familiarity with concepts in the specific language(s) and tech stack used on the job.For more junior candidates, this be a “what is a closure in JavaScript?”, or a more general exploration of your approach to higher-order concepts like testing implementation and state management.

For earlier career engineers I think these questions work better embedded as part of a practical exercise where code is being written or read. Many people implicitly internalise concepts and features without learning their names or committing them to memory. However, if you’re hiring for an engineering enablement team or looking for someone to lay robust foundations in a particular area of your stack, getting a sense of their expertise and how they stay up to date with recent developments in the area can be valuable.

## Closing thoughts

The interview processes in which I have performed the strongest and enjoyed the most tend to be the ones where I felt the skills they showcase match the sort of work I am used to doing, and more specifically, with constraints relatively similar to the norm. I was convinced that those sorts of interviews betrayed a lower technical bar, precisely _because they felt so natural_. The fallacy finally came into sharp focus when talking to an external recruiter about a process I underwent this year that was way more engaging than struggle-inducing: I was only the third person to have made it through to the offer stage (the company had multiple positions open) and it turned out every single interviewer was highly experienced and pedigreed.

On the other hand, the most frustrating interview processes I have been through have consistently been the ones that seemed completely detached from reality. If you are hiring someone to be your startup’s second frontend engineer and you are planning to task them with single-handedly scaling your backend to a billion users when you already have twenty backend engineers, you might want to reconsider.

Interviews are never going to be perfect, but we can do so much better\! An integral part of that is designing processes on the basis of identifying skills that are useful and important in the context of the role, team and company. But for now, interviews are what they are, so I won’t completely discount the idea that I’ll be back to memorising how to implement a highly fault-tolerant globally-distributed rate-limiting service from scratch some time in the future just yet.

_Shoutout to [Giuseppe Gurgone](https://giuseppegurgone.com/) and [Alberto Morabito](https://alberto.weblog.lol/) for reviewing the draft. I started it after a conversation on this topic with Alberto, who wrote his own too\! You can read it [here](https://alberto.weblog.lol/2024/07/types-of-software-engineer-interviews)._

### Interesting reads on this topic

- ["The Hiring Post"](https://sockpuppet.org/blog/2015/03/06/the-hiring-post) \- Thomas Ptacek (2015)
- [“Algorithms interviews: theory vs practice”](https://danluu.com/algorithms-interviews/) \- Dan Luu (2020)
- ["Tech Sector Job Interviews Assess Anxiety, Not Software Skills"](https://news.ncsu.edu/2020/07/tech-job-interviews-anxiety/) \- NC State University (2020)
