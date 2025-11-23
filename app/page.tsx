import { Button } from "@/components/ui/button";
import { Users, TreeDeciduous, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-serif font-bold text-xl">B</span>
                        </div>
                        <span className="font-serif text-xl font-bold tracking-tight">Brahman Connect</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
                        <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
                        <Link href="/family-tree" className="text-sm font-medium hover:text-primary transition-colors">Family Tree</Link>
                        <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login">
                            <Button variant="ghost" size="sm">Log in</Button>
                        </Link>
                        <Link href="/register">
                            <Button variant="premium" size="sm">Join Community</Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-background to-background"></div>
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm text-amber-800 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-amber-600 mr-2"></span>
                        Connecting Heritage Globally
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-foreground mb-6">
                        Uniting the <span className="text-primary">Global Brahman</span> <br /> Community
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        A premium platform for networking, cultural preservation, and family heritage.
                        Connect with your roots, find opportunities, and build your legacy.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/register">
                            <Button size="lg" variant="premium" className="h-12 px-8 text-base">
                                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-amber-50/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold mb-4">Everything You Need</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Designed to serve the community with modern tools while respecting traditional values.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Globe className="h-6 w-6 text-primary" />}
                            title="Global Network"
                            description="Connect with community members worldwide. Filter by location, profession, or interests."
                        />
                        <FeatureCard
                            icon={<TreeDeciduous className="h-6 w-6 text-primary" />}
                            title="Family Tree"
                            description="Build and preserve your family lineage. Securely share with relatives and future generations."
                        />
                        <FeatureCard
                            icon={<Users className="h-6 w-6 text-primary" />}
                            title="Service Marketplace"
                            description="Find or offer services - from priestly duties to professional coaching and tuition."
                        />
                        <FeatureCard
                            icon={<ShieldCheck className="h-6 w-6 text-primary" />}
                            title="Verified & Secure"
                            description="A safe space with verified profiles and strict privacy controls for your peace of mind."
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-background py-12 mt-auto">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                    <span className="text-primary-foreground font-serif font-bold text-xs">B</span>
                                </div>
                                <span className="font-serif font-bold">Brahman Connect</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Preserving heritage, empowering the future.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Platform</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/register">Join Now</Link></li>
                                <li><Link href="/login">Sign In</Link></li>
                                <li><Link href="/services">Services</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Community</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/events">Events</Link></li>
                                <li><Link href="/donate">Donate</Link></li>
                                <li><Link href="/blog">Articles</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t pt-8 text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Brahman Connect. All rights reserved.
                    </div>
                </div>
            </footer>
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}
