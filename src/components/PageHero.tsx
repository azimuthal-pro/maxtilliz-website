interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-brand-800 via-brand-700 to-brand-400 py-16 text-center text-white">
      <div className="container-page">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/85">{subtitle}</p>
        {breadcrumb && (
          <p className="mt-5 text-sm text-white/70">{breadcrumb}</p>
        )}
      </div>
    </section>
  );
}
