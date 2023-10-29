---
title: Learnings from resolving a NodeJS memory leak in production
date: '2023-10-29'
tags: ['tech', 'incidents', 'learnings']
draft: false
summary: Recently I’ve had the luxury to encounter and resolve a production NodeJS memory leak in one of my current companies NodeJS applications. In this blog post, I discuss 3 key takeaways and lessons I’ve learned from this experience.
---

At my current company, we recently encountered a memory leak in one of our NodeJS applications running in production.

There wasn’t anything particularly noteworthy during debugging and resolution (just your standard heap profiling by generating heap snapshots and comparing the difference between the allocated and freed memory), so I won’t go into too much detail on the debugging and resolution in this post, but rather focus more on the takeaways and learnings gathered post the memory leak resolution.

However, if you’re also interested in the more granular details involved in fixing a NodeJS memory leak, Kent C. Dodds authored an excellent [blog post](https://kentcdodds.com/blog/fixing-a-memory-leak-in-a-production-node-js-app) on the same topic and goes into much more depth about the problem, diagnoses using a combination of application resource metrics and logs, debugging by creating an endpoint that can generate heap snapshots, and the resolution which involved a lot of tweaks to how some third-party packages were being consumed in his app—I highly recommend the read!

For the sake of context, here’s a short summary of the incident:

- On the 13th of July, a sudden spike in memory utilization in one of our services was observed in [Dynatrace](https://www.dynatrace.com/) (the observability and monitoring tool used at the company where I work)
- Memory utilization would spike up from MB’s to GB’s within a few hours without recovering
- Our short-term mitigation strategy was to manually restart the NodeJS process of the affected service a couple of times a day
- After profiling the heap, we discovered that the root cause of the memory leak was attributed to the Dynatrace one agent process (which performs deep monitoring on the NodeJS process) and was further confirmed after disabling the one agent process injection for the affected service
- After flagging this with Dynatrace, they managed to identify the root cause of the memory leak and later released a patch to fix the issue in the following one-agent version: `1.269.180`

Now, onto the lessons learned…

## Ensure you have solid monitoring and alerting in place

Either you’ll find out that you have a production incident from your monitoring and alerting tool or from user reporting (one being substantially worse than the other…)

Any modern observability and monitory solution should provide the capability to collect application resource metrics such as CPU, memory, etc, and the capability to create alerts based on some pre-defined threshold. These alerts should usually only take a few minutes to set up, and having these in place can give you the peace of mind that if something does go horribly wrong, at least your team will be the first ones to know. Integrate these alerts with your communication channels (i.e. email, MS Teams, slack) so that relevant stakeholders in your wider team can get notified so that alerts don’t get missed.

Another benefit of collecting application resource metrics is that it enables you to visualize and understand patterns and trends in CPU or memory consumption on your production systems—use this information to find correlations (or better yet, causations) with other changes that happened around the same time in your system.

## Skip debugging in local, and go straight to debugging in your prod-like environments

It’s easy to attempt to reproduce and debug a memory leak in your local environment since it’s easy and less disruptive to other developers and, of course, users using your application.

However, other processes such as your logging and monitoring agent or long-running background tasks usually run alongside your application in prod-like environments that you don’t normally need to run when running your application locally—meaning that it’s very likely that if a memory leak is caused by some third-party process (spoiler alert: it did 😅), you’re going to miss it and potentially make yourself even more confused when debugging locally!

## Document the incident in a postmortem

It’s also easy to resolve the incident and move on with your lives—but it’s not a great look if your team makes the same mistakes in a future incident because there wasn’t any follow-up to learnings or action items from your previous incidents!

Sure, documenting the incident in a postmortem will take time and effort to author and complete, and could feel very much like a chore—but in my opinion, the long-term benefits far outweigh the upfront effort, such as:

- If people go on leave or exit the company, the knowledge and key pieces of information of past incidents aren’t also lost with them
- Facilitates knowledge sharing to the wider engineering and product team. This could be insightful for less technical stakeholders who don’t know how to use existing monitoring tools (i.e run specific queries for finding trends in cpu/memory usage), or for other developers by providing more specific and granular instructions i.e for creating and comparing a nodejs heap snapshots, and also brings awareness for pitfalls to avoid if a similar incident happens in the future
- Builds trust and assurance for the wider business by demonstrating accountability from documenting and following up on learnings and action items
- Google authored an excellent article called [“Postmortem Culture: Learning from Failure](https://sre.google/sre-book/postmortem-culture/)” and mentions another benefit called the “Wheel of Misfortune” where they re-enact a past incident as realistically as possible—this can reveal whether the learnings and action items you’ve implemented from the original incident have actually helped or not. Of course, this is only possible if the incident has been documented in the first place!

On an aside, if you haven’t read Google’s postmortem article, then I highly recommend that you read it—it mentions and provides advice beyond just the postmortem document itself, such as when it’s worth it to author and document postmortems, and how you can ensure a blameless culture by avoiding blameful language and keeping discussions constructive.

---

That’s it, stay tuned for the next one!

Sources:

- https://kentcdodds.com/blog/fixing-a-memory-leak-in-a-production-node-js-app
- https://sre.google/sre-book/postmortem-culture/
