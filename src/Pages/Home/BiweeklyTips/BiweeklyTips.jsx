import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const BiweeklyTips = () => {
    return (
        <div>
            <SectionTitle subHeading="Tip of the Week!" heading="Tips that may come in handy"></SectionTitle>
            <div className='md:flex justify-center items-center py-10 px-16'>
				<div className='md:ml-10'>
					<p className='uppercase pb-2'>
                        <b>Don't forget your eye health.</b>
                    </p>
				</div>
			</div>
        </div>
    )
}

export default BiweeklyTips;