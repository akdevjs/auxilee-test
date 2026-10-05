import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Contact | Auxilee",
  description: "Tell us where the operation feels stretched. Reach Auxilee directly or book a free 30-minute discovery call.",
  path: "/contact",
});


import { Header } from "@/components/site";
import { Footer, Label } from "@/components/site-content";
import { ContactBlock } from "@/components/contact-block";

export default function Contact() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="pt-[72px]">
        <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-20 md:px-10 md:pt-28 lg:px-16">
          <Label>Contact</Label>
          <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">Tell us where the operation feels stretched.</h1>
        </div>
      </section>
      <section className="border-t border-border px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20 lg:px-16">
        <ContactBlock />
      </section>
      <Footer />
    </main>
  );
}
