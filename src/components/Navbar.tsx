"use client";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/mode-toggle";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";

const tabs: { label: string; id: string; href: string }[] = [
	{ label: "Home", id: "home", href: "/" },
	{ label: "Blog", id: "blog", href: "/blog" },
	{ label: "[ . . . ]", id: "dotdotdot", href: "/dotdotdot" },
];

const Navbar = () => {
	const pathname = usePathname();
	const [activeTab, setActiveTab] = useState(pathname.split("/")[1] || "home");

	useEffect(() => {
		setActiveTab(pathname.split("/")[1] || "home");
	}, [pathname]);

	return (
		<nav className="fixed inset-x-0 bottom-4 w-full px-2">
			<Magnetic stretch="xs">
				<motion.div
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					layout
					style={{ originY: "0px" }}
					transition={{ duration: 0.4 }}
					className="bg-secondary shadow-sm relative mx-auto justify-evenly items-center  max-w-xs p-2 rounded-full px-6 border border-border/50"
				>
					<div className="flex gap-2 justify-evenly items-center">
						{tabs.map((tab) => (
							<Magnetic stretch="sm" key={tab.id}>
								<Link prefetch aria-label={tab.id} key={tab.id} href={tab.href}>
									<button
										name={tab.id}
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={cn(
											"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
											activeTab === tab.id ? "" : "hover:bg-accent/75",
											"hover:text-accent-foreground relative h-9 px-4 py-2"
										)}
										style={{
											WebkitTapHighlightColor: "transparent",
										}}
									>
										{tab.label}
										{/* Active tab span */}
										{activeTab === tab.id && (
											<motion.span
												layoutId="selected-tab"
												className="absolute flex inset-0 z-10 bg-accent/75 mix-blend-overlay"
												// originY: "0px" is a workaround for a bug in Framer Motion
												style={{ borderRadius: 6, originY: "0px" }}
												transition={{ type: "spring", duration: 0.5 }}
											/>
										)}
									</button>
								</Link>
							</Magnetic>
						))}
						<ModeToggle />
					</div>
				</motion.div>
			</Magnetic>
		</nav>
	);
};

export default Navbar;
