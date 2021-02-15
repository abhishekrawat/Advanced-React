import React from "react";

export default function Hero() {
	return (
		<div className=" bg-purple-50 rounded-md max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
			<div className="relative z-10 pb-8 sm:pb-16 pt-4 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-32">
				<main className="mx-auto max-w-7xl px-4 sm:pt-16 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 ">
					<div className="sm:text-center lg:text-left">
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
							<span className="block xl:inline">Building Experiences </span>
							<span className="block text-indigo-600 xl:inline">
								that Matter
							</span>
						</h1>
						<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
							lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
							fugiat aliqua.
						</p>
						<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
							<div className="rounded-md shadow">
								<a
									href="#"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
								>
									Get started
								</a>
							</div>
							<div className="mt-3 sm:mt-0 sm:ml-3">
								<a
									href="#"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
								>
									Live demo
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
