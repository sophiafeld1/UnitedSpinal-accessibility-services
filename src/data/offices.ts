import type { OfficeLocation } from "./types";

export const offices: OfficeLocation[] = [
  {
    name: "Headquarters",
    address: "102 Duane Road",
    city: "Fort Totten",
    state: "NY",
    zip: "11359",
    email: "info@accessibility-services.com",
    isPrimary: true,
  },
];

export function getPrimaryOffice(): OfficeLocation {
  return offices.find((o) => o.isPrimary) ?? offices[0];
}
