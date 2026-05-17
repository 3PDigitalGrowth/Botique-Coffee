import Image from "next/image"

type Props = {
  name: string
}

const AUTHORS: Record<string, { title: string; avatar: string; bio: string }> = {
  "Chris Prokopiou": {
    title: "Founder, Boutique Coffee at Work",
    avatar: "/images/Chris_Solo_Van.jpg",
    bio: "20+ years roasting and supplying coffee to Melbourne workplaces.",
  },
  "Boutique Coffee": {
    title: "The Boutique Coffee team",
    avatar: "/images/Chris_Solo_Van.jpg",
    bio: "Melbourne workplace coffee, done properly.",
  },
}

export function AuthorBio({ name }: Props) {
  const author =
    AUTHORS[name] ?? {
      title: name,
      avatar: "/images/Chris_Solo_Van.jpg",
      bio: "",
    }

  return (
    <section className="mt-14 md:mt-16 flex items-center gap-4 rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-copper/30 flex-shrink-0">
        <Image
          src={author.avatar}
          alt={name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-serif text-lg md:text-xl text-foreground leading-tight">
          {name}
        </p>
        <p className="text-sm text-muted-foreground leading-snug">
          {author.title}
        </p>
        {author.bio ? (
          <p className="text-sm text-muted-foreground leading-relaxed mt-1">
            {author.bio}
          </p>
        ) : null}
      </div>
    </section>
  )
}
