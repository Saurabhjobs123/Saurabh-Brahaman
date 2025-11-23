import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link href="/">
                    <Button variant="ghost" className="mb-8 pl-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                </Link>

                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">Our Mission</h1>

                <div className="prose prose-lg dark:prose-invert">
                    <p className="text-xl leading-relaxed mb-6">
                        Brahman Connect is a global initiative to unite the community under a single digital roof.
                        We believe in preserving our rich heritage while embracing the opportunities of the modern world.
                    </p>

                    <h2 className="text-2xl font-serif font-bold mt-12 mb-4">Why We Built This</h2>
                    <p className="mb-6">
                        In an increasingly fragmented world, staying connected with one's roots is challenging.
                        Our platform bridges this gap by providing tools for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li><strong>Genealogy:</strong> Preserving family histories for future generations.</li>
                        <li><strong>Economic Growth:</strong> Supporting community businesses and professionals.</li>
                        <li><strong>Cultural Education:</strong> Sharing knowledge of Vedas, rituals, and traditions.</li>
                        <li><strong>Social Support:</strong> Helping those in need through transparent charity.</li>
                    </ul>

                    <h2 className="text-2xl font-serif font-bold mt-12 mb-4">Transparency & Trust</h2>
                    <p>
                        We operate with full transparency. All community funds are audited, and expenses are visible to members.
                        Our registration fee model ensures sustainability while rewarding those who help the community grow.
                    </p>
                </div>
            </div>
        </div>
    );
}
