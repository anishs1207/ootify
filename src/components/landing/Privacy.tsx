"use client";

import { Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Privacy() {
    return (
        <section id="privacy" className="py-20 md:py-32">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="gradient-bg-primary p-4 rounded-2xl w-fit mx-auto mb-6">
                            <Shield className="h-12 w-12 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                            Privacy-First <span className="text-primary">Promise</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Your style is personal. Your data should be too.
                        </p>
                    </div>

                    {/* Privacy Cards */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* What We Store */}
                        <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <div className="gradient-bg-primary p-2 rounded-lg">
                                        <Shield className="h-5 w-5 text-white" />
                                    </div>
                                    What We Store
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        <span className="text-sm">Only your clothing item photos</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        <span className="text-sm">Style preferences and settings</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        <span className="text-sm">Outfit history for recommendations</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* What We Don't Store */}
                        <Card className="border-2 border-accent/30 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl">
                                    <div className="gradient-bg-accent p-2 rounded-lg">
                                        <Shield className="h-5 w-5 text-white" />
                                    </div>
                                    What We Don&apos;t Store
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 bg-accent rounded-full" />
                                        <span className="text-sm">No personal photos of you</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 bg-accent rounded-full" />
                                        <span className="text-sm">No location or tracking data</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 bg-accent rounded-full" />
                                        <span className="text-sm">No sharing with third parties</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
