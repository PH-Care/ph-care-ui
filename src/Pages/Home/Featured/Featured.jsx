import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/Images/featuredpng.png';


const Featured = () => {
	return (
		<div>
			<SectionTitle subHeading="Check it Out" heading= "Featured Item - CATS">

			</SectionTitle>
			<div className='md:flex justify-center items-center py-10 px-16'>
				<div>
					<img src={featuredImg} alt="" />
				</div>
				<div className='md:ml-10'>
					<p>Aug20, 2029 </p>
					<p className='uppercase pb-2'>Where can I get some</p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia cupiditate ipsa dolores aspernatur minus facere dolorem minima sint, et velit exercitationem ipsum. Nihil necessitatibus nostrum cum. Laboriosam qui suscipit delectus?
					Consectetur excepturi maiores, architecto praesentium explicabo temporibus illo iure omnis, natus, nesciunt reprehenderit! Quisquam, facere accusantium! Doloremque dolor molestias nam laborum doloribus recusandae, cum alias voluptates! Tempora ab est minima.
					Autem deleniti illum ullam repellat consequuntur totam dicta labore necessitatibus eaque quam aut exercitationem saepe, modi beatae omnis architecto quasi quidem quas nihil! Pariatur ad aperiam debitis praesentium laborum. Dolorum! </p>
					<button className='btn btn-outline border-0 border-b-4'> Order Now</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;