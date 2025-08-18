"use client";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <section className="py-20 md:py-32 bg-muted/30">
            <div className="container">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordion FAQ Items */}
                <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How does the AI stylist work?</AccordionTrigger>
                            <AccordionContent>
                                Our AI analyzes your uploaded wardrobe items, considers your
                                style preferences, body type, and the occasion you're dressing
                                for. It then suggests personalized outfit combinations using
                                advanced machine learning algorithms trained on fashion trends
                                and styling principles.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Is the virtual try-on feature accurate?
                            </AccordionTrigger>
                            <AccordionContent>
                                Our virtual try-on is currently in beta and uses cutting-edge
                                deep learning models to simulate how clothes might look on
                                different body types. While it's quite accurate, we're
                                continuously improving the technology for even better results.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                What happens to my uploaded photos?
                            </AccordionTrigger>
                            <AccordionContent>
                                We only store photos of your clothing items, never personal
                                photos of you. All images are encrypted and used solely to
                                provide you with personalized styling recommendations. You can
                                delete your wardrobe data at any time.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                Can I use the app without joining the community?
                            </AccordionTrigger>
                            <AccordionContent>
                                The community features are completely optional. You can use all
                                the core styling features privately without sharing anything
                                with other users.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger>How much does StyleAI cost?</AccordionTrigger>
                            <AccordionContent>
                                StyleAI offers a free tier with basic features, and premium
                                plans starting at $9.99/month for advanced AI recommendations,
                                unlimited virtual try-ons, and exclusive community features.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
