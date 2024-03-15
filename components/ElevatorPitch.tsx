import { FC } from 'react'

import { SectionTitle, TextSection } from './section'

const ElevatorPitch: FC = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <SectionTitle> Some ways I can make a postive impact to your business</SectionTitle>
      <TextSection title="📈 I can deliver value.">
        <p className="text-md sm:text-lg">
          Whether it’s providing business impact by delivering new features, or by paying down
          technical debt or helping improve processes so that the business and product will have
          more long term sustainability.
        </p>
      </TextSection>
      <TextSection title="👨‍💻 I can contribute beyond just writing code.">
        <p className="text-md sm:text-lg">
          Beyond authoring code that is readable and maintainable, I have experience providing
          technical leadership on a diverse set of projects and can also contribute to product
          scoping and decisions, and a robust, sustainable, and pragmatic technical design.
        </p>
      </TextSection>
      <TextSection title="📊 I can help your business make more informed decisions.">
        <p className="text-md sm:text-lg whitespace-pre-line">
          I can help your business make more informed decisions by advocating for a more
          research-based, data-driven and outcome-driven culture in the team. It’s important to do
          prior user research to understand the problems that users are facing and come up with the
          relevant solution, but it’s also equally as important to be able to quantitatively measure
          the ROI and if the solution actually succeeded or not and solved the initial user problem.
          {'\n'}
          Being able to measure what’s successful or not will provide clarity and give your business
          more insight on which areas of the product and tech that should be invested in.
        </p>
      </TextSection>
    </div>
  )
}

export default ElevatorPitch
