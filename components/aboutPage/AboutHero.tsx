type aboutHeroProps = {
  title: string;
  description?: string;
};
export default function AboutHero({title, description}: aboutHeroProps) {
    return (
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </section>
    )
  }
  