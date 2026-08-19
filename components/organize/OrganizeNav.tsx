import Image from "next/image";

export function OrganizeNav() {
  return (
    <div className="fixed z-100 px-5 py-5">
      <Image 
      src="/images/organize/organize_white.png"
      alt="Organize" width={160} height={107} 
      className="h-12 w-auto object-contain" 
      priority />
    </div>
  );
}
