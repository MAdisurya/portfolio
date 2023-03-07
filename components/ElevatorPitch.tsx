import { FC } from 'react'

import { SectionTitle, TextSection } from './section'

const ElevatorPitch: FC = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <SectionTitle> Some ways I can make a postive impact to your business</SectionTitle>
      <TextSection
        title="📈 I can deliver value."
        description="Whether it’s providing business impact by delivering new features, or by paying down
          technical debt or helping improve processes so that the business and product will have
          more long term sustainability."
      />
      <TextSection
        title="👨‍💻 I can contribute beyond just writing code."
        description="I will not just write great code that is readable and maintainable, but also collaborate
          and contribute to infrastructure design, database schema design, and product decisions and scoping."
      />
      <TextSection
        title="📊 I can help your business make more informed decisions."
        description="I can help your business make more informed decisions by advocating for a more
          research-based, data-driven and outcome-driven culture in the team. It’s important to do
          prior user research to understand the problems that users are facing and come up with
          the relevant solution, but it’s also equally as important to be able to quantitatively
          measure the ROI and if the solution actually succeeded or not and solved the initial
          user problem. Being able to measure what’s successful or not will provide clarity and
          give your business more insight on which areas of the product and tech that should be
          invested in."
      />
    </div>
  )
}

export default ElevatorPitch
