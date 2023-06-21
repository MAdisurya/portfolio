---
title: My opinions on good software management practices
date: '2023-06-21'
tags: ['processes', 'agile', 'tech']
draft: false
summary: The first part of many(?) blog posts curating my observations and opinions of podcasts I listened to or blogs I’ve read regarding software management practices. In this blog post, I discuss using product/software requirements and when it’s appropriate to use an agile vs a non-agile approach.
---

The first part of many(?) blog posts curating my observations and opinions of podcasts I listened to or blogs I’ve read regarding software management practices. In this blog post, I discuss using product/software requirements and when it’s appropriate to use an agile vs a non-agile approach.

### Regardless of which software management practices you use, you should always have a set of product/software requirements

I use product and software interchangeably here, but I’m essentially referring to the same thing—regardless of whether your team decides to adopt agile or waterfall methodologies, you should always define a set of requirements for what your team needs to build.

If you’ve ever worked in an agile environment, then you might’ve heard the phrase “build the plane as you fly it”. The sad thing is, some teams actually embody this phrase in how they practice agile methodologies—in fact, I’ve worked with teams that do this, where we would essentially build first and figure out the details as we build, all for the sake of “moving fast” and being “agile”. However, I would say we would most if not all of the time, end up wasting a significant amount of effort building the wrong thing or having to do a lot of rework because we’ve built it wrong from the get-go.

In order to build the right thing, and build it correctly—you need to know exactly **what** you’re building (and what you’re **not** building), and **how** you’re going to build it. This is what requirements gathering and specifications are for, and your team's choice of software management practice shouldn’t dictate whether your team needs to do this or not.

There are already a ton of great resources out there, from software requirement document templates to general guidelines of what should be included in your software requirements document—so I won’t go into too much depth here, but here are some components that I believe would make a great addition to any software requirements document (in no particular order):

- Background and Context: what solution is being proposed and why is this necessary for the business and/or product? Essentially, this should be able to give insight into the business impact this feature or solution will provide.
- Functional Requirements: essentially, these are the bare minimum requirements that need to be implemented for your feature or solution to work. This section should describe what the feature/solution does.
- Non-Functional Requirements: also known as quality attributes, this section should describe how the feature/solution should work—essentially, definitions for usability, reliability, scalability, and/or performance can be included here.
- Key success metrics: if you haven’t included this somewhere else already, success metrics are a great addition to any software requirements document. This ensures that you’re thinking of the definition of success for your feature/solution upfront, and means that you don’t end up measuring the success of your feature only after you’ve released it. Questions you should ask yourself are—what does success look like for this feature/solution? Is this something that I can measure and if so, how do I measure it?

### There’s nothing wrong with using a non-agile approach if it makes sense for the project

Karl Wiegers mentioned a couple of very memorable quotes in [one of Tech Lead Journal's podcast episodes](https://open.spotify.com/episode/4oHsYbr7CbwDJvDhsmLurG?si=acc0f50f091448dc):

- “The point is not to be Agile. People sometimes get confused about that. Who the hell cares if you’re Agile? What they care about is if you’re effective.”
- “You’re not trying to be Scrum. You’re trying to be an effective software development team. So let’s keep that goal in mind and then let’s choose those practices, those kinds of containers, those levels of detail, those role assignments, and all that. Let’s choose the approaches that are going to help us be as effective as we can be to build the right solutions.”

I couldn’t agree more. Sometimes it’s really easy to fall into the trap of using a method that your team is used to, or being dogmatic and using agile methodologies because of a blog post you read from some big tech company, for example. But it’s important to remember that these software management practices are, well, just _practices_—they’re just a tool that your team can use and adopt to become more effective at producing and delivering value.

In December 2019, Khan Academy released a [blog post](https://blog.khanacademy.org/go-services-one-goliath-project/) on a large migration project that took 3.5 years involving a huge amount of engineering effort (roughly ~100 engineers) in migrating their Python monolith into roughly ~40 (mostly Go) services. There are a lot of takeaways from the things that they did and the lessons that they learned after completing the migration, but one key observation I made was that for this particular migration project, they decided to treat this project as mostly a waterfall one instead of using an agile approach which they usually do. Brian Genisio, a senior engineering manager at Khan Academy, mentions in an [interview](https://newsletter.pragmaticengineer.com/p/real-world-eng-8) conducted by Gergely Orosz (The Pragmatic Engineer) that because the migration project had a fixed scope of requirements that were well understood and a fixed deadline—a waterfall approach worked well for them since they didn’t need to “build something quickly, get feedback, then reassess [their] plan”, but simply just needed to understand whether the team's progress was tracking well against their plan and fixed deadline.

As Brian also mentions in the interview, agile works really well when you're trying to innovate or discover a new problem space—but when your team picks up a new project that has a fixed scope and fixed deadline, the usual two-week sprint reviews + planning that you use to synthesize the feedback gathered and reassess your plans might end up being excessive and unnecessary.

So the next time your team picks up a new project that has a fixed, well-understood scope, and a fixed deadline, consider whether using a waterfall approach instead of an agile approach might work better for your team instead.

---

Sources:

- [Real-world Engineering Challenges #8: Breaking up a Monolith](https://newsletter.pragmaticengineer.com/p/real-world-eng-8)
- [Beating the odds: Khan Academy’s successful monolith→services rewrite](https://blog.khanacademy.org/beating-the-odds-khan-academys-successful-monolith%E2%86%92services-rewrite/)
- [Software Requirements Essentials - Karl Wiegers](https://open.spotify.com/episode/4oHsYbr7CbwDJvDhsmLurG?si=acc0f50f091448dc)
