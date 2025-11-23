import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-amber-50/30 flex items-center justify-center p-4">
            <Card className="w-full max-w-md border-amber-200/50 shadow-lg">
                <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary-foreground font-serif font-bold text-xl">B</span>
                    </div>
                    <CardTitle>Welcome Back</CardTitle>
                    <CardDescription>Sign in to your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Link href="/dashboard" className="w-full">
                        <Button className="w-full variant-premium">Sign In</Button>
                    </Link>
                    <div className="text-sm text-center text-muted-foreground">
                        Don't have an account? <Link href="/register" className="text-primary hover:underline">Join Now</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
