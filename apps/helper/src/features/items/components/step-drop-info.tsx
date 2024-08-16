import { PageSubTitle } from "@/src/components/page";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@repo/ui/components/table";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getLocations } from "../../locations/models";
import { getLocationsQueryKey } from "../../locations/utils";
import type { DroppedByStepping } from "../types";

interface StepDropInfoProps extends DroppedByStepping {}
export function StepDropInfo({ stepping_drop }: StepDropInfoProps) {
	const { data: locations } = useQuery({
		queryKey: getLocationsQueryKey(),
		queryFn: getLocations,
	});

	return (
		<section className="flex flex-col gap-8">
			<PageSubTitle>Found in:</PageSubTitle>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Location</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{stepping_drop.map((location) => (
						<TableRow key={location}>
							<TableCell>
								<Link className="underline" href={`/locations/${location}`}>
									{locations?.[location]?.label}
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
}
