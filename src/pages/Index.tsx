import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => (
  <PageLayout>
    <section className="container flex flex-col items-center py-24 text-center md:py-32">
      <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
        Learn Skills.<br />
        Build Projects.<br />
        <span className="text-primary">Get Hired.</span>
      </h1>
      <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
        Real-world courses designed to take you from zero to job-ready.
      </p>
      <div className="animate-fade-up-delay-2 mt-8 flex gap-3">
        <Button asChild size="lg">
          <Link to="/course">Explore Courses <ArrowRight size={16} /></Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default Index;
