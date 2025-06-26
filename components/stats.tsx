type StatsSectionProps = {
    title: string
    description: string
    stats: { value: string; label: string }[]
  }
  
  export default function StatsSection({ title, description, stats }: StatsSectionProps) {
    return (
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
            <h2 className="text-4xl font-medium lg:text-5xl">{title}</h2>
            <p>{description}</p>
          </div>
  
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="text-5xl font-bold">{stat.value}</div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }