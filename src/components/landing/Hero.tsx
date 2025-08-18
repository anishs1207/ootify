"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Camera } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden py-20 md:py-32"
            style={{
                background: `
          radial-gradient(circle at 20% 50%, oklch(0.55 0.25 270 / 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, oklch(0.70 0.25 200 / 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, oklch(0.65 0.20 240 / 0.2) 0%, transparent 50%)
        `,
            }}
        >
            <div className="container relative">
                {/* Hero Content */}
                <div className="mx-auto max-w-4xl text-center">
                    <Badge
                        variant="secondary"
                        className="mb-6 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20"
                    >
                        <Zap className="mr-2 h-4 w-4 text-accent" />
                        AI-Powered Fashion Revolution
                    </Badge>

                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-tight">
                        Elevate Your Style with{" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            AI Magic
                        </span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                        Upload your wardrobe, get personalized outfit recommendations, and discover your perfect style with our AI
                        fashion stylist. Privacy-first, community-driven, and totally addictive.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button
                            size="lg"
                            className="gradient-bg-primary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Camera className="mr-2 h-5 w-5" />
                            Start Styling Now
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/30 hover:bg-primary/10 transition-all duration-300 bg-transparent"
                        >
                            Watch Demo
                        </Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="mt-20 relative">
                    <div className="mx-auto max-w-4xl">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-card/20 backdrop-blur-sm">
                            <img
                                src="/ai-fashion-app.png"
                                alt="StyleAI App Interface"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
