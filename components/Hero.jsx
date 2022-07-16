import React from "react";

const Hero = ({heading,message}) => {
	return (
		<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
			{/*overlay*/}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
			<div className="p-5 text-white z-[2]">
				<h2 className="uppercase font-bold font-montserrat text-5xl">
					{heading}
				</h2>
				<p className="text-xs text-[#f4e0cb] py-1">
					{message}
				</p>
				<button className="bg-[#4f2d20] px-4 py-2 rounded-md mt-4 border border-[#be3400] hover:bg-transparent">
					Answer The Call
				</button>
			</div>
		</div>
	);
};

export default Hero;
