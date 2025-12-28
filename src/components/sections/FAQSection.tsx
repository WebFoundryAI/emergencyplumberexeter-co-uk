import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AI_GENERATED_FAQS } from "@/config/staticContent";

interface FAQSectionProps {
  showAll?: boolean;
}

export function FAQSection({ showAll = false }: FAQSectionProps) {
  const displayFaqs = showAll ? AI_GENERATED_FAQS : AI_GENERATED_FAQS.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-narrow px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, give us a call.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {displayFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
