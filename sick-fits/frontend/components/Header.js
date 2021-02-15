import Link from "next/link";
import Nav from "../components/Nav";

export default function Header() {
	return (
		<header>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-24">
					<div className="flex items-center">
						<Link href="/" className="flex-shrink-0">
							<a>
								<img
									className="h-12 w-12"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									alt="Grid Studio Logo"
								/>
							</a>
						</Link>
						<Nav />
					</div>
				</div>
			</div>
		</header>
	);
}
