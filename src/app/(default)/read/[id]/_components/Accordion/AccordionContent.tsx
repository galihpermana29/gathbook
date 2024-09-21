
interface IDescriptionContent {
	description: string;
}
interface IAccordionContentProps {
	contents: IDescriptionContent[];
}
const AccordionContent = ({ contents }: IAccordionContentProps) => {
	return (
		<div className='flex flex-col gap-5'>
			{contents.map((content, index) => (
				<p key={index} className='text-md'>{content.description}</p>
			))}
		</div>
	)
}

export default AccordionContent