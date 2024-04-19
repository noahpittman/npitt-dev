"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { sample } from "./_codeSample";

import { CodePreview } from "../_components/layout/CodePreview";
import { PreviewHeader } from "../_components/layout/PreviewHeader";
import { DrawerNavLayout } from "../_components/drawer-nav-layout";

const Page = () => {
	return (
		<>
			<PreviewHeader title="Drawer Navigation" created="April 2024" />

			<Card className="bg-foreground aspect-square overflow-hidden">
				<DrawerNavLayout
					navBG="bg-foreground"
					links={[
						{
							title: "Navigation",
							sublinks: [
								{ title: "Home", href: "#" },
								{
									title: "About",
									href: "#",
								},
								{
									title: "Get Started",
									href: "#",
								},
							],
						},
						{
							title: "Resources",
							sublinks: [
								{ title: "Blog", href: "#" },
								{
									title: "Case Studies",
									href: "#",
								},
								{
									title: "Whitepapers",
									href: "#",
								},
							],
						},
						{
							title: "Company",
							sublinks: [
								{ title: "About", href: "#" },
								{
									title: "Careers",
									href: "#",
								},
								{
									title: "Contact",
									href: "#",
								},
							],
						},
						{
							title: "Legal",
							sublinks: [
								{ title: "Privacy", href: "#" },
								{
									title: "Terms",
									href: "#",
								},
								{
									title: "Cookies",
									href: "#",
								},
							],
						},
					]}
				>
					<div className="mx-auto max-w-2xl py-24">
						<div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 dark:ring-muted hover:ring-muted-foreground transition-all">
								Announcing our next round of funding.{" "}
								<a href="#" className="font-semibold text-indigo-600">
									<span className="absolute inset-0" aria-hidden="true" />
									Read more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
								Data to enrich your online business
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
								lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
								fugiat aliqua.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="#"
									className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Get started
								</a>
								<a
									href="#"
									className="text-sm font-semibold leading-6 text-foreground"
								>
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</DrawerNavLayout>
			</Card>

			{/* CODE SAMPLE */}
			<CodePreview code={sample} />
		</>
	);
};

export default Page;
