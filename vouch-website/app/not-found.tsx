import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="px-6 py-28 text-center">
      <h1 className="mb-3 text-5xl">Oops! Page not found</h1>
      <p className="mb-7 text-muted">The page you're looking for isn't here.</p>
      <Button href="/">Back to home</Button>
    </section>
  );
}
