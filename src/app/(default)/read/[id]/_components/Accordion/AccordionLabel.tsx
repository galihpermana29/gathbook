import { StyledTitle } from '@/components/styled-title';

interface IAccordionLabelProps {
    title: string;
    chapter: string
}
const AccordionLabel = ({ title, chapter } : IAccordionLabelProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='w-fit p-1 border border-mtn-dark-2 rounded-lg'>
        {chapter}
      </div>
      <StyledTitle className='text-xl md:text-2xl lg:text-5xl text-balance'>{title}</StyledTitle>
    </div>
  )
}

export default AccordionLabel