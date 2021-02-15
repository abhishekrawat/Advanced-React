import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

export default function Nav() {
	return (
		<nav className="hidden md:block ml-10 flex items-baseline space-x-10 ">
			<Link href="/products">
				<a className="font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
					Products
				</a>
			</Link>

			<Link href="/sell">
				<a className="font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
					Sell
				</a>
			</Link>

			<Link href="/orders">
				<a className="font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
					Orders
				</a>
			</Link>

			<Link href="/account">
				<a className="font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
					Account
				</a>
			</Link>
		</nav>
	);
}
