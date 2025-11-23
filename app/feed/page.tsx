import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, PlayCircle } from "lucide-react";

const posts = [
    {
        id: 1,
        author: "Acharya V. Shastri",
        role: "Vedic Scholar",
        content: "Understanding the significance of the Gayatri Mantra in daily life. It is not just a chant, but a vibration that aligns the mind.",
        likes: 245,
        comments: 42,
        type: "text"
    },
    {
        id: 2,
        author: "Riya Pathak",
        role: "Classical Dancer",
        content: "Snippet from my recent performance at the temple.",
        likes: 890,
        comments: 120,
        type: "video",
        thumbnail: "bg-pink-100"
    }
];

export default function FeedPage() {
    return (
        <DashboardShell>
            <div className="max-w-2xl mx-auto">
                <div className="mb-8 flex justify-between items-center">
                    <h2 className="text-2xl font-bold font-serif">Community Feed</h2>
                    <Button variant="premium">Create Post</Button>
                </div>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <Card key={post.id}>
                            <CardHeader className="flex flex-row items-center gap-4 pb-4">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                                    {post.author[0]}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">{post.author}</h3>
                                    <p className="text-xs text-muted-foreground">{post.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-sm leading-relaxed">{post.content}</p>
                                {post.type === 'video' && (
                                    <div className={`w-full h-64 ${post.thumbnail} rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity`}>
                                        <PlayCircle className="h-16 w-16 text-white/80" />
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="border-t pt-4 flex justify-between text-muted-foreground">
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Heart className="h-4 w-4" /> {post.likes}
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <MessageCircle className="h-4 w-4" /> {post.comments}
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Share2 className="h-4 w-4" /> Share
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardShell>
    );
}
