interface PlaceholderPageProps {
  title: string;
  description: string;
}

function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <section className="bg-dialac-cream px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-4xl font-bold text-dialac-charcoal">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-dialac-charcoal">
          {description}
        </p>
      </div>
    </section>
  );
}

export default PlaceholderPage;