---
title: Could CrowdStrike have prevented a global outage if they didn’t deploy on Friday? I don’t think so.
date: '2024-09-22'
tags: ['processes', 'tech']
draft: false
summary: "If you haven’t been living under a rock in the past months, then chances are you’ve probably heard of the global “Blue Screen Of Death” (BSOD) incident caused by CrowdStrike. Interestingly, they've been receiving criticism for breaking one of the most commonly known rule in software development: don't deploy on Fridays. But could they have prevented one of the largest global software-induced outages if they didn't deploy on a Friday? I don't think so."
---

If you haven’t been living under a rock in the past months, then chances are you’ve probably heard of the global “Blue Screen Of Death” (BSOD) incident caused by CrowdStrike.

However, if you _have_ been living under a rock, then here’s a quick summary:

- On Friday, 19th July 2024, millions of windows 10 and 11 machines globally suddenly crashed with the “Blue Screen Of Death” (BSOD) error. Unfortunately, the classic “turn it off and on again” trick didn’t work as affected windows machines were stuck in a BSOD loop.
- This incident impacted several critical “societally-critical” such as airlines, banks, supermarkets, police departments, hospitals, TV channels, etc, where many of these businesses were unable to operate.
- This global outage was caused by a single update to CrowdStrikes “falcon” product.
- Microsoft revealed that [8.5 million windows devices were impacted](https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/)

<aside>
💡

If you’re looking for a more comprehensive summary of the CrowdStrike incident, check out [the pragmatic engineer’s post](https://newsletter.pragmaticengineer.com/p/the-biggest-ever-global-outage-lessons)!

</aside>

Unsurprisingly, CrowdStrike received a lot of scrutiny from the public regarding their seemingly “YOLO” deployment process. But out of all the comments that they received, what I found the most interesting was the comments that were condemning their decision to deploy on a Friday, and how _not_ deploying on Friday would’ve been the magic solution to all their problems (yes, I may have slightly over-exaggerated this).

Personally, however, I’d have to disagree. Let’s stop for a second and think about this rationally, if CrowdStrike happened to deploy this update on Monday instead of Friday, would this have prevented the global BSOD incident…?

Well, not really. The only _real_ benefit I see of not deploying on Friday in this situation is that the CrowdStrike staff wouldn’t have to work frantically over the weekend. In my opinion, the real issue isn’t with the day of the week they deployed at, but with their deployment strategy.

## An example: Deactivating Users

Let’s say you have an issue at work where you’re noticing that someone or something is updating rows into a `user` table of your SQL database with an invalid `status` value. The invalid status values are breaking your application logic, and also causing issues with some of your internal reporting because the accuracy of the filtered result depends on the correctness of the user status column values.

Upon discovering this, you notice that people in the operations team is manually running SQL queries by hand for updating user status values, and that the invalid status values are mostly due to human errors (i.e. typos). You decide that the solution to this is to create an internal admin portal so it removes the need for the operations team to run SQL queries to update a users status by hand. You manage to convince your stakeholders that the admin portal solution is the way forward—not only will it solve this current problem, but can also mitigate the need for the operations team to run any SQL by hand as the admin portal feature set grows.

Fast-forward a couple of weeks and your team just released the first version of the internal admin portal. You run a session to educate the operations team on how to use the admin portal. The operations team is satisfied with this solution and you notice a reduction in the invalid user status values in the database. All is well.

Until one day, the internal admin portal goes down. Your operations team no longer has a way to update a users status, so they revert back to updating user statuses via running SQL queries by hand, and you notice that incorrect user statuses are being re-introduced into the database. You realize that you’ve just sunk a week of your engineering teams capacity into building a solution and still haven’t completely obviated the problem. Your team is now burdened with having to maintain the admin portal, and you’ve lost some trust from your stakeholders. All is _not_ well.

Now, how could we approach this differently? A good start would be to identify and understand the problems so we could come up with an appropriate solution. From what I can see, there are two fundamental problems in this hypothetical scenario:

### 1. The user status column can be set to any string

Instead of allowing any valid string value to be set for the user status column, what if we restricted the column further and only allow it to be set to some set of possible values using an enum type?

With this database guarantee in place, whenever someone (or something) tries to update a user status column with an incorrect value, the database will throw an error instead of accepting the update query.

In fact, if I was the one in the scenario, this is probably the first change I would apply. It’s a simpler and quicker change in comparison to building out an admin portal that you could probably roll out within a day and mitigates the issue of incorrect user status values being set since the database makes it virtually impossible to do so.

<aside>
💡

On an aside: values in enum types are _extremely_ difficult to remove once you’ve added it. Not only would you need to “vacuum” all rows referencing the enum value, but it’s also possible for index pages to include these values too. Because of this, it’s generally not recommended to remove values from enum types ([PostgreSQL just outright says you can’t](https://www.postgresql.org/docs/current/datatype-enum.html#DATATYPE-ENUM-IMPLEMENTATION-DETAILS)). So use enum types with caution :)

</aside>

### 2. The operations team is manually updating user statuses by hand

Personally, I think this is the key issue in particular example scenario. If we ignore the fact that the operations team is running SQL queries by hand, why do they need to update user status values in the first place?

Continuing with the example, let’s say that after we discovered that the operations team is manually updating user status columns, we asked them this question. It turns out that they’re getting a lot of support tickets from users requesting to deactivate their user accounts. Since there isn’t any other mechanism to do this, the operation team resorts to manually running SQL queries to update the user statuses to some inactive/deactivated value.

Had you known this, you might’ve approached this differently. Instead of an admin portal, you might’ve suggested to implement some “delete user” feature directly in the app so that users can delete/deactivate their user account without needing to issue a support ticket. This mitigates the need for the operations team to get involved with user account deactivations entirely and focus on higher leverage support tasks.

<aside>
💡

It worth noting that this is purely just for example’s sake. In practice, it might make sense to add some friction to user deletions/deactivations—or even better, figure out why your users are churning in the first place and address it!

</aside>

## Conclusion

Now if you’ve read this far, then you’re probably wondering how this example relates to CrowdStrike deploying on Fridays… Well, just like how I think of the admin portal as a “blanket” solution to my deactivating users straw man, I also think of “don’t deploy on Friday’s” as a “blanket” guideline over this particular outage caused by CrowdStrike.

In fact, I don’t actually have anything against admin portals or not deploying on Friday’s. I think that both can be good solutions or guidelines given the right problem or situation. My argument is that suggesting you need an admin portal just because that’s what your operations team used at your last company, or that you shouldn’t “deploy on Friday’s” just because it’s ubiquitously known as an “industry best practice” is the best way to avoid addressing the root cause of the problem or situation at hand.

[Software reliability happens in-depth](https://sophiabits.com/blog/software-reliability-happens-in-depth) and I personally think that CrowdStrike did a great job in their [preliminary post mortem](https://www.crowdstrike.com/blog/falcon-content-update-preliminary-post-incident-report/) by prescribing a holistic set of improvements they can apply to their deployment strategy as a whole.

So the next time someone tells you not to deploy on a Friday as a hard rule you need to respect consistently, instead of blindly agreeing with them, you should first ask yourself: _Why?_

References:

- https://newsletter.pragmaticengineer.com/p/the-biggest-ever-global-outage-lessons
- https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/
- https://sophiabits.com/blog/software-reliability-happens-in-depth
- https://www.crowdstrike.com/blog/falcon-content-update-preliminary-post-incident-report/

On an aside, here are some articles on similar-ish topics that I enjoyed reading:

- ["Beware the architecture astronaut" - Sophia Willows](https://sophiabits.com/blog/beware-the-architecture-astronaut)
  Sophia warns us of becoming architecture astronauts by providing readers with an example of it in action during her time in Crimson Education. Though this doesn’t directly relate to not “deploying on Friday’s” rule, there are similarities in the learnings and takeaways that Sophia discusses. Definitely worth a read!
- ["Let’s Work Together to Make Painful Software Outages a Thing of the Past" - LaunchDarkly](https://launchdarkly.com/blog/making-outages-a-thing-of-the-past/)
  LaunchDarkly discusses four methods we can leverage to minimize software outages: progressive rollouts, automated monitoring and instant rollbacks, runtime configuration management, targeted segments. Though the article is _slightly_ angled to sell their product, I think that the suggestions they’ve discussed still has some merit :)
