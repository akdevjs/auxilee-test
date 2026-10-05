"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site-content";
import { audiences, services, simpleLinks, endLinks } from "@/components/site-links";

function DesktopDropdown({
  label,
  links,
  open,
  setOpen,
}: {
  label: string;
  links: readonly { label: string; to: string }[];
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 py-3"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={`size-3.5 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full min-w-72 border-b border-border bg-background py-2 text-foreground shadow-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className="block px-5 py-3 text-xs font-medium text-foreground/75 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
function MobileGroup({
  label,
  links,
  open,
  setOpen,
  close,
}: {
  label: string;
  links: readonly { label: string; to: string }[];
  open: boolean;
  setOpen: (value: boolean) => void;
  close: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={`size-4 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-4 flex flex-col gap-4 border-l border-border pl-5 text-foreground/70">
          {links.map((link) => (
            <Link key={link.to} href={link.to} onClick={close}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileWho, setMobileWho] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const close = () => setMenuOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background text-foreground ">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-12">
        <Logo />
        <nav className="hidden items-center gap-5 text-[13px] font-medium text-foreground/70 xl:flex">
          {simpleLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={pathname === link.to ? "text-foreground" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <DesktopDropdown
            label="Who We Serve"
            links={audiences}
            open={whoOpen}
            setOpen={setWhoOpen}
          />
          <DesktopDropdown
            label="Services"
            links={services}
            open={servicesOpen}
            setOpen={setServicesOpen}
          />
          {endLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={pathname === link.to ? "text-foreground" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="action" size="callout" className="hidden ">
          <Link href="/contact">
            Talk With Our Team <ArrowRight />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:bg-secondary hover:text-foreground xl:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <nav className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-background px-5 py-6 xl:hidden">
          <div className="flex flex-col gap-5 text-sm font-medium">
            {simpleLinks.map((link) => (
              <Link key={link.to} href={link.to} onClick={close}>
                {link.label}
              </Link>
            ))}
            <MobileGroup
              label="Who We Serve"
              links={audiences}
              open={mobileWho}
              setOpen={setMobileWho}
              close={close}
            />
            <MobileGroup
              label="Services"
              links={services}
              open={mobileServices}
              setOpen={setMobileServices}
              close={close}
            />
            {endLinks.map((link) => (
              <Link key={link.to} href={link.to} onClick={close}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={close}>
              Talk With Our Team <span className="text-action">→</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
