---
title: A pragmatic approach to technical debt
date: '2023-03-28'
tags: ['processes', 'tech']
draft: false
summary: Imagine a perfect world, where you have an unlimited amount of time to produce quality software without ever needing to cut corners and incur any technical debt. Unfortunately, such a world is unrealistic, and in most cases, you or your team will have to incur tech debt whether you like it or not. What’s important is to be pragmatic and considerate when approaching technical debt and instead of focusing on being “tech debt free forever”, we should focus on answering questions such as “when is it appropriate to avoid tech debt in favour of delivering faster?”, and “how should we prioritise tech debt in conjunction with other items on the product roadmap?”
---

Imagine a perfect world, where you have an unlimited amount of time to produce quality software without ever needing to cut corners and incur any technical debt. Wouldn’t that be great? No business stakeholders breathing down your necks, no pressure from needing to deliver within a given deadline or time estimate… Unfortunately, this isn’t quite a good representation of reality—in fact, sometimes not cutting corners so that you can deliver business value faster for the sake of producing the perfect software can be harmful to the business.

Don’t get me wrong, I’m not saying that incurring tech debt is a good thing or that your default decision should be to always cut corners so that you can deliver faster. Rather, what I’m trying to advocate for is that we need to be pragmatic and take both engineering and business interests into consideration.

For example:

- Tech debt comes in all shapes and sizes. You could incur tech debt in the short-term that only slightly negatively impacts your engineering team, or incur tech debt that has a large reaching impact but might only start effecting your engineering team in the long-term.
- Businesses also come in all shapes and sizes. For example, you might be working on an innovative product for some startup, where going to market and validating bets on certain innovations on your product roadmap is critical for the business. If you spend too much time and effort perfecting your software, then the business might lose to a competitor who was faster in going to market, or you validate some new feature and find out that your customers don’t use it and you’ve just wasted time and effort building the wrong thing.

In other words, it’s highly likely that whatever software you’re working on, tech debt will be incurred whether you like it or not. The focus then shifts from being “tech debt free forever” to being able to answer questions such as “when is it appropriate to avoid tech debt in favour of delivering faster?”, and “how should we prioritise tech debt in conjunction with other items on the product roadmap?”

I really enjoyed reading the articles posted by Abi and Max, and found them to be really interesting and insightful

- [Abi’s article](https://newsletter.abinoda.com/p/tech-debt-strategies) summarises a paper called [“Garbage Collect Your Tech Debt”](https://ieeexplore.ieee.org/document/9520328), and discusses different approaches that engineering teams can take to control and minimise their tech debt.
- [Max’s article](https://www.maxcountryman.com/articles/a-framework-for-prioritizing-tech-debt) presents a framework for prioritising tech debt in your engineering team, and suggests ways you can effectively measure the interest rate of your tech debt.

Here are some of my key takeaways from having read both articles:

- Take into consideration the position of the business, the product, and collective skill-level, experience and knowledge of your engineering team when deciding how to tackle tech debt. For example, perhaps the product team wants to validate an idea for retrieving and and surfacing video recordings in some flagship web/mobile application and see if users will use this feature. In this case, it might make sense to cut corners during development to ship and test the feature faster and then clean up the tech debt after validating that this feature was a good product fit. For other features where you or another experienced engineer in the team is certain that building it wrong will result in increased developer frustration and/or wasted time and effort on toil, it might make sense to take the time upfront to design and build it right and ensure a good starting foundation to build on
- When doing some tech debt analysis and trying to identify the interest rate of tech debt items, ask yourself these questions for each item:
  - If we choose to do nothing, will this issue become worse, remain the same, or improve?
  - If it’ll become worse, how quickly will it degrade?
  - If it remains the same, how much disruption is it causing today?
  - If it’ll improve, at what point will it improve to the degree that it’s no longer an obstruction?
  - Is this tech debt item part of an active area of development?
  - If it’s part of an active area, how much does this negatively impact development velocity?
  - If it’s not part of an active area, how much engineering time is spent on maintenance?
- Based on these questions, a high priority tech debt item is one where doing nothing will cause the issue to become worse, and a rocky foundation where actively building on top of it will negatively impact developer velocity or system performance. A simple example could be an unknown memory leak in some backend service: if nothing is done, then the memory leak will eventually cause the service to run out of memory and therefore crash, and aggressively building on top of this service could potentially make the memory leak worse. Assuming this service is running on some infrastructure that doesn’t have any auto-healing capabilities, then this means more engineering effort on monitoring and having to manually restart the service.

If you haven’t already, make sure to check out both Abi and Max’s articles—I highly recommend them!

---

That’s it! I hope you enjoyed reading this and found this blog post insightful.

Sources:

- [https://newsletter.abinoda.com/p/tech-debt-strategies](https://newsletter.abinoda.com/p/tech-debt-strategies)
- [https://www.maxcountryman.com/articles/a-framework-for-prioritizing-tech-debt](https://www.maxcountryman.com/articles/a-framework-for-prioritizing-tech-debt)
