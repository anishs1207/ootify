"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    Upload,
    Sparkles,
    Star,
    Camera,
    Calendar,
    Users,
} from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="py-20 md:py-32">
            <div className="container">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Features That Make You{" "}
                        <span className="text-primary">Shine</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to transform your wardrobe and express your
                        unique style
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="group border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                            <div className="gradient-bg-primary p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Upload className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl">Smart Wardrobe Upload</CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Upload photos of your tops, bottoms, shoes, and accessories. Our
                                AI catalogs everything automatically.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="group border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                            <div className="gradient-bg-primary p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl">AI Stylist Recommendations</CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Get personalized outfit suggestions based on occasion, mood,
                                season, and your unique body type.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="group border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                            <div className="gradient-bg-primary p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Star className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl">Mix & Match Magic</CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Discover new combinations from your closet plus trending looks
                                from across the internet.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="group border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                            <div className="gradient-bg-accent p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Camera className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl">Virtual Try-On (Beta)</CardTitle>
                            <CardDescription className="text-muted-foreground">
                                See how outfits look on you with our cutting-edge deep learning
                                models. No more guessing!
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="group border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                            <div className="gradient-bg-primary p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl">Outfit Calendar</CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Track your daily looks and get smart reminders to repeat your
                                favorite outfits.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="group border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-4">
                            <div className="gradient-bg-accent p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl">Community & Challenges</CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Share your style, join fashion challenges, and earn badges in
                                our gamified community.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}
