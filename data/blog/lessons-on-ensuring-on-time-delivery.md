---
title: Lessons on ensuring on-time delivery
date: '2023-03-10'
tags: ['processes', 'tech']
draft: false
summary: I admit it, realistic time estimations and on-time delivery was something that I (and probably many of us) could never get quite right. These are some lessons I've learned to provide more accurate time estimates and ensure on-time delivery.
---

I admit it, realistic time estimations and on-time delivery was something that I (and probably many of us) could never get quite right. You can easily brush it off and simply just say “that’s just the nature of software engineering” and blame it on unknown factors that seemingly always get in the way of delivering on time. However, after working with some good folk in CGA and reading a couple of great articles on how other companies learned to set and hit deadlines, here are a few things that I myself learned and experienced on the matter.

## 1. Have a clear definition of “done” that everyone is aligned on

This, in my opinion, is one of the most important points, and that is to make sure that the team is aligned and is clear on what the deliverables are and what the definition of done is. It’s really easy to make assumptions, for example, developers could assume that “done” means that the code has been merged into the master branch, whereas product stakeholders assume that “done” means that the feature is available in production with it’s respective feature flags, if any, is toggled on.

Putting that extra effort upfront and documenting what the exact deliverables are, if the team needs to do A/B testing with a select test group, etc, can make a significant positive difference with setting realistic and more accurate time estimates.

## 2. Don’t let that scope creep creep in

“Scope creep” is probably a term you’ve already heard of many times, and as the negative connotation in the name suggests, it’s something you _know_ you should push back on—but it’s not always as simple as that, and sometimes you just don’t have the luxury to just simply say no. In my experience, there are different levels of scope creep and can range from a small change that won’t have much impact on delivering on time, to large changes that can push out delivery by a couple to several weeks. In the case that it’s a large change or changes, try and push it out to a follow-up phase, or if you don’t have the luxury to push it out to a different phase, then it’s important that you at least communicate to respective stakeholders that incorporating these changes will have a negative impact on the expected time of delivery. You definitely don’t want to be in a position where you now have extra tasks to do, with no extra time to do it.

## 3. Get a deep understanding of the technology used

Not having a deep understanding of the technology you’re dealing with (i.e. the codebase, third-party integrations, etc) will make it almost impossible to provide an accurate time estimation. Having a deep understanding of the tech means that you have an understanding of which parts of the codebase has more complexity, or where the existing technical debt is, etc, which in turn will give you a lot more clarity on the velocity of the team in these particular areas. For example, if the feature you’re working on requires you and/or the team to make changes to parts of the tech with more complexity or large amounts of tech debt, then you can account for these delays in your time estimation.

## 4. Limit the amount of projects in progress

Olya Royall mentioned this point in her [article](https://getdx.com/best-practices/tips-for-setting-deadlines), and this is something that I myself experienced during my time in CGA—this makes a big difference in the velocity of projects. For example, let’s say that you have a team of 5 developers and it’s decided that 5 distinct projects will kick-off concurrently at around the same time. This means that you will have only 1 developer working on 1 project. It might be something nice to tell stakeholders initially: “the team currently has 5 projects in progress at the moment”, but since engineering resources is spread thin, it will take longer to deliver and it turn will make stakeholders more restless due to the lack of delivery frequency. The side-effect of having less developers on a project also means that there’s the risk of, in the worst case, coming to a stop for a period of time in the scenario that said developers aren’t available to work i.e. due to sickness.

## 5. Put an engineer (or engineers) on a dedicated support rotation

As Olya Royall puts in her article: “It’s easy to fall into a reactive mode with fixing bugs and ultimately miss deadlines.”

At CGA, we experimented with the concept of a “fill” or “floater” engineer, where they had more capacity to pay down any existing technical debt, be the go-to-person for any technical questions or contribute to scoping out upcoming features—essentially, any sort of task that isn’t directly involved with any features in progress. This enables the current “feature” engineers to put their focus entirely on the feature that they’re working on. Even though the team was still experimenting to find the right balance during my time in CGA, this really enabled us to effectively and simultaneously deliver features without distractions, and fix/complete non-feature related issues and tasks.

---

That’s it! I hope you learned something new, and make sure to stay tuned for the next one.

Sources:

- [“Quick Tips for Setting and Hitting Deadlines from DroneDeploy” by Olya Royall](https://getdx.com/best-practices/tips-for-setting-deadlines)
- [“Setting Realistic Deadlines at Divvy” by Bruce Weller](https://getdx.com/best-practices/setting-estimaes-at-divvy)
