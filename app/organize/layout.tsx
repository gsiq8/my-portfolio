import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organize | Organização residencial",
  description: "Organização por cômodo ou na mudança.",
};

export default function OrganizeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
